module Eos.Query exposing
    ( Query(..)
    , send
    , Response
    , withBaseUrl, withLimit, withLowerBound, withUpperBound, withReverse
    , Cursor
    , Index(..)
    )

{-| Perform queries to get data from tables. The CLI gives you functions to perform
type-safe queries, and this module helps you actually turn them into Cmds.

@docs Query

@docs send

@docs Response

@docs withBaseUrl, withLimit, withLowerBound, withUpperBound, withReverse

@docs Cursor

@docs Index

-}

import Http
import Json.Decode
import Json.Encode



-- QUERY


{-| The `Query` type. It's only exposed so that the CLI can have access to it.
You shouldn't construct it by hand.
-}
type Query response
    = Query
        { scope : String
        , indexPosition : Maybe Index
        , lowerBound : Maybe Cursor
        , upperBound : Maybe Cursor
        , limit : Maybe Int
        , reverse : Bool
        , baseUrl : String
        , contract : String
        , table : String
        , decoder : Json.Decode.Decoder response
        }



-- SEND


{-| Send a [Query](#Query) to EOSIO. Some parameters of the query are defined
when running the CLI (like `baseUrl`). Others can be modified with functions like
[withLimit](#withLimit) and [withBaseUrl](#withBaseUrl) (in case you need to
override it).

This returns a [Response](#Response), since there may be pagination in the result.
If you want to paginate, keep the [Cursor](#Cursor) returned in the
[Response](#Response) and use [withLowerBound](#withLowerBound) or
[withUpperBound](#withUpperBound) in the next query.

-}
send : (Result Http.Error (Response response) -> msg) -> Query response -> Cmd msg
send toMsg (Query query) =
    let
        encodeOptional : (a -> Json.Encode.Value) -> Maybe a -> Json.Encode.Value
        encodeOptional encoder maybeValue =
            case maybeValue of
                Nothing ->
                    Json.Encode.null

                Just value ->
                    encoder value
    in
    Http.post
        { url = query.baseUrl ++ "/get_table_rows"
        , body =
            Json.Encode.object
                [ ( "code", Json.Encode.string query.contract )
                , ( "table", Json.Encode.string query.table )
                , ( "scope", Json.Encode.string query.scope )
                , ( "index_position", encodeOptional encodeIndex query.indexPosition )
                , ( "lower_bound", encodeOptional encodeCursor query.lowerBound )
                , ( "upper_bound", encodeOptional encodeCursor query.upperBound )
                , ( "limit", encodeOptional Json.Encode.int query.limit )
                , ( "reverse", Json.Encode.bool query.reverse )
                ]
                |> Http.jsonBody
        , expect =
            Json.Decode.map3
                (\hasMore nextCursor result ->
                    { hasMore = hasMore
                    , nextCursor = nextCursor
                    , result = result
                    }
                )
                (Json.Decode.field "more" Json.Decode.bool)
                (Json.Decode.field "next_key" (Json.Decode.string |> Json.Decode.map Cursor))
                (Json.Decode.field "rows" (Json.Decode.list query.decoder))
                |> Http.expectJson toMsg
        }



-- RESPONSE


{-| A response from a [Query](#Query). It contains the results, and also
pagination data. You can check if there is more data to be fetched with the
`hasMore` field. If there is, you can use the `nextCursor` field to fetch the
next page of data with [withLowerBound](#withLowerBound) or
[withUpperBound](#withUpperBound).
-}
type alias Response response =
    { hasMore : Bool
    , nextCursor : Cursor
    , result : List response
    }



-- MODIFIERS


{-| Redefine the base url to [send](#send) a [Query](#Query). This is already
defined when running the CLI, so you shouldn't need this function often.
-}
withBaseUrl : String -> Query response -> Query response
withBaseUrl baseUrl (Query query) =
    Query { query | baseUrl = baseUrl }



-- TODO - Can we have lowerBound and upperBound at the same time?


{-| Define the lower bound of a [Query](#Query). This is used to paginate the
results. You can get a [Cursor](#Cursor) from a [Response](#Response), which you
can get with [send](#send).
-}
withLowerBound : Cursor -> Query response -> Query response
withLowerBound cursor (Query query) =
    Query { query | lowerBound = Just cursor }


{-| Define the upper bound of a [Query](#Query). This is used to paginate the
results. You can get a [Cursor](#Cursor) from a [Response](#Response), which you
can get with [send](#send).
-}
withUpperBound : Cursor -> Query response -> Query response
withUpperBound cursor (Query query) =
    Query { query | upperBound = Just cursor }


{-| Set how many entries to fetch on [send](#send).
-}
withLimit : Int -> Query response -> Query response
withLimit limit (Query query) =
    Query { query | limit = Just limit }


{-| Define if the [Query](#Query) results should be reversed.
-}
withReverse : Bool -> Query response -> Query response
withReverse reverse (Query query) =
    Query { query | reverse = reverse }



-- CURSOR


{-| Used to set the lower bound or upper bound with [withLowerBound](#withLowerBound)
or [withUpperBound](#withUpperBound). You can get one of these from [send](#send).
-}
type Cursor
    = Cursor String


encodeCursor : Cursor -> Json.Encode.Value
encodeCursor (Cursor cursor) =
    Json.Encode.string cursor



-- INDEX


{-| The Index to use when sending a [Query](#Query).
-}
type Index
    = Primary
    | Secondary
    | Tertiary
    | Fourth
    | Fifth
    | Sixth
    | Seventh
    | Eighth
    | Ninth
    | Tenth


encodeIndex : Index -> Json.Encode.Value
encodeIndex index =
    case index of
        Primary ->
            Json.Encode.string "primary"

        Secondary ->
            Json.Encode.string "secondary"

        Tertiary ->
            Json.Encode.string "tertiary"

        Fourth ->
            Json.Encode.string "fourth"

        Fifth ->
            Json.Encode.string "fifth"

        Sixth ->
            Json.Encode.string "sixth"

        Seventh ->
            Json.Encode.string "seventh"

        Eighth ->
            Json.Encode.string "eighth"

        Ninth ->
            Json.Encode.string "ninth"

        Tenth ->
            Json.Encode.string "tenth"
