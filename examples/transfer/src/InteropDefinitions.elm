module InteropDefinitions exposing
    ( Flags, FromElm(..), ToElm(..)
    , interop
    )

{-| This is where we define the messages that can be exchanged between Elm and
Typescript

@docs Flags, FromElm, ToElm

@docs interop

-}

import Json.Encode as Encode
import TsJson.Decode as TsDecode exposing (Decoder)
import TsJson.Encode as TsEncode exposing (Encoder, required)


{-| The initial flags that we receive from Typescript
-}
type alias Flags =
    { privateKey : Maybe String
    }


{-| Messages that we can send from Elm to Typescript
-}
type FromElm
    = Alert String
    | ScrollTo { querySelector : String }
    | Login { privateKey : String }
    | Transfer { encodedAction : Encode.Value }


{-| Messages that we can send from Typescript to Elm
-}
type ToElm
    = Alerted
    | LoggedIn { privateKey : String }


{-| This is what elm-ts-interop uses to figure out what to do with our app
-}
interop :
    { flags : Decoder Flags
    , fromElm : Encoder FromElm
    , toElm : Decoder ToElm
    }
interop =
    { flags = flags
    , fromElm = fromElm
    , toElm = toElm
    }


fromElm : Encoder FromElm
fromElm =
    TsEncode.union
        (\vAlert vScrollTo vLogin vTransfer value ->
            case value of
                Alert string ->
                    vAlert string

                ScrollTo querySelector ->
                    vScrollTo querySelector

                Login privateKey ->
                    vLogin privateKey

                Transfer encodedAction ->
                    vTransfer encodedAction
        )
        |> TsEncode.variantTagged "alert"
            (TsEncode.object [ required "message" identity TsEncode.string ])
        |> TsEncode.variantTagged "scrollTo"
            (TsEncode.object [ required "querySelector" .querySelector TsEncode.string ])
        |> TsEncode.variantTagged "login"
            (TsEncode.object [ required "privateKey" .privateKey TsEncode.string ])
        |> TsEncode.variantTagged "transfer"
            (TsEncode.object [ required "actions" .encodedAction TsEncode.value ])
        |> TsEncode.buildUnion


toElm : Decoder ToElm
toElm =
    TsDecode.discriminatedUnion "tag"
        [ ( "alerted"
          , TsDecode.succeed Alerted
          )
        , ( "loggedIn"
          , TsDecode.map (\privateKey -> LoggedIn { privateKey = privateKey })
                (TsDecode.field "privateKey" TsDecode.string)
          )
        ]


flags : Decoder Flags
flags =
    TsDecode.map (\privateKey -> { privateKey = privateKey })
        (TsDecode.optionalNullableField "privateKey" TsDecode.string)
