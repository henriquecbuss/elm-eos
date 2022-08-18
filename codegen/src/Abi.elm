module Abi exposing (Abi, Action, Field, Table, decoder)

import Dict exposing (Dict)
import EosType exposing (EosType)
import Json.Decode
import Maybe.Extra


type alias Abi =
    { actions : List Action
    , tables : List Table
    }


decoder : Json.Decode.Decoder Abi
decoder =
    rawAbiDecoder
        |> Json.Decode.andThen
            (\rawAbi ->
                case abiFromRaw rawAbi of
                    Nothing ->
                        Json.Decode.fail "Invalid ABI"

                    Just validAbi ->
                        Json.Decode.succeed validAbi
            )


abiFromRaw : RawAbi -> Maybe Abi
abiFromRaw rawAbi =
    let
        maybeActions : Maybe (List Action)
        maybeActions =
            rawAbi.actions
                |> List.map
                    (\rawAction ->
                        Dict.get rawAction.argumentsField rawAbi.structs
                            |> Maybe.map (\fields -> { name = rawAction.name, arguments = fields })
                    )
                |> Maybe.Extra.combine

        maybeTables : Maybe (List Table)
        maybeTables =
            rawAbi.tables
                |> List.map
                    (\rawTable ->
                        Dict.get rawTable.columnsField rawAbi.structs
                            |> Maybe.map (\fields -> { name = rawTable.name, columns = fields })
                    )
                |> Maybe.Extra.combine
    in
    Maybe.map2 (\actions tables -> { actions = actions, tables = tables })
        maybeActions
        maybeTables



-- FIELD


type alias Field =
    { name : String
    , type_ : EosType
    }


fieldDecoder : Json.Decode.Decoder Field
fieldDecoder =
    Json.Decode.map2 (\name type_ -> { name = name, type_ = type_ })
        (Json.Decode.field "name" Json.Decode.string)
        (Json.Decode.field "type" EosType.decoder)



-- ACTION


type alias Action =
    { name : String
    , arguments : List Field
    }



-- TABLE


type alias Table =
    { name : String
    , columns : List Field
    }



-- RAW ABI


type alias RawAbi =
    { structs : Dict String (List Field)
    , actions : List RawAction
    , tables : List RawTable
    }


rawAbiDecoder : Json.Decode.Decoder RawAbi
rawAbiDecoder =
    Json.Decode.map3
        (\structs actions tables ->
            { structs =
                structs
                    |> List.map (\{ name, fields } -> ( name, fields ))
                    |> Dict.fromList
            , actions = actions
            , tables = tables
            }
        )
        (Json.Decode.field "structs" (Json.Decode.list structDecoder))
        (Json.Decode.field "actions" (Json.Decode.list rawActionDecoder))
        (Json.Decode.field "tables" (Json.Decode.list rawTableDecoder))


structDecoder : Json.Decode.Decoder { name : String, fields : List Field }
structDecoder =
    Json.Decode.map2 (\name fields -> { name = name, fields = fields })
        (Json.Decode.field "name" Json.Decode.string)
        (Json.Decode.field "fields" (Json.Decode.list fieldDecoder))



-- RAW ACTION


type alias RawAction =
    { name : String
    , argumentsField : String
    }


rawActionDecoder : Json.Decode.Decoder RawAction
rawActionDecoder =
    Json.Decode.map2 (\name argumentsField -> { name = name, argumentsField = argumentsField })
        (Json.Decode.field "name" Json.Decode.string)
        (Json.Decode.field "type" Json.Decode.string)



-- RAW TABLE


type alias RawTable =
    { name : String
    , columnsField : String
    }


rawTableDecoder : Json.Decode.Decoder RawTable
rawTableDecoder =
    Json.Decode.map2 (\name columnsField -> { name = name, columnsField = columnsField })
        (Json.Decode.field "name" Json.Decode.string)
        (Json.Decode.field "type" Json.Decode.string)
