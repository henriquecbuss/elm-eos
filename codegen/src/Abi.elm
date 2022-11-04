module Abi exposing (Abi, Action, Field, Table, decoder)

import Dict exposing (Dict)
import EosType exposing (EosType)
import Json.Decode as Decode
import Maybe.Extra as MaybeX


type alias Abi =
    { actions : List Action
    , tables : List Table
    }


type alias Action =
    { name : String
    , arguments : List Field
    }


type alias Field =
    { name : String
    , type_ : EosType
    }


type alias Table =
    { name : String
    , columns : List Field
    }


decoder : Decode.Decoder Abi
decoder =
    rawAbiDecoder
        |> Decode.andThen
            (\rawAbi ->
                case abiFromRaw rawAbi of
                    Just validAbi ->
                        Decode.succeed validAbi

                    Nothing ->
                        Decode.fail "Invalid ABI"
            )


abiFromRaw : RawAbi -> Maybe Abi
abiFromRaw rawAbi =
    let
        maybeActions : Maybe (List Action)
        maybeActions =
            List.map
                (\rawAction ->
                    Dict.get rawAction.argumentsField rawAbi.structs
                        |> Maybe.map (\fields -> { name = rawAction.name, arguments = fields })
                )
                rawAbi.actions
                |> MaybeX.combine

        maybeTables : Maybe (List Table)
        maybeTables =
            List.map
                (\rawTable ->
                    Dict.get rawTable.columnsField rawAbi.structs
                        |> Maybe.map (\fields -> { name = rawTable.name, columns = fields })
                )
                rawAbi.tables
                |> MaybeX.combine
    in
    Maybe.map2 (\actions tables -> { actions = actions, tables = tables })
        maybeActions
        maybeTables


rawAbiDecoder : Decode.Decoder RawAbi
rawAbiDecoder =
    Decode.list rawTableDecoder
        |> Decode.field "tables"
        |> Decode.map3
            (\structs actions tables ->
                { structs =
                    List.map (\{ fields, name } -> ( name, fields )) structs
                        |> Dict.fromList
                , actions = actions
                , tables = tables
                }
            )
            (Decode.field "structs" (Decode.list structDecoder))
            (Decode.field "actions" (Decode.list rawActionDecoder))


structDecoder : Decode.Decoder { fields : List Field, name : String }
structDecoder =
    Decode.list fieldDecoder
        |> Decode.field "fields"
        |> Decode.map2 (\name fields -> { fields = fields, name = name })
            (Decode.field "name" Decode.string)


fieldDecoder : Decode.Decoder Field
fieldDecoder =
    Decode.map2 (\name type_ -> { name = name, type_ = type_ })
        (Decode.field "name" Decode.string)
        (Decode.field "type" EosType.decoder)


rawActionDecoder : Decode.Decoder RawAction
rawActionDecoder =
    Decode.map2 (\name argumentsField -> { name = name, argumentsField = argumentsField })
        (Decode.field "name" Decode.string)
        (Decode.field "type" Decode.string)


rawTableDecoder : Decode.Decoder RawTable
rawTableDecoder =
    Decode.map2 (\name columnsField -> { name = name, columnsField = columnsField })
        (Decode.field "name" Decode.string)
        (Decode.field "type" Decode.string)


type alias RawAbi =
    { structs : Dict String (List Field)
    , actions : List RawAction
    , tables : List RawTable
    }


type alias RawAction =
    { name : String
    , argumentsField : String
    }


type alias RawTable =
    { name : String
    , columnsField : String
    }
