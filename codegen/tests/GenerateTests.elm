module GenerateTests exposing (suite)

import Abi
import EosType
import Expect
import Generate
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Generate"
        [ files
        ]


files : Test
files =
    describe "files"
        [ test "generates from example abi" <|
            \() ->
                Generate.files []
                    [ { abi = exampleAbi
                      , baseUrl = exampleBaseUrl
                      , contract = exampleContract
                      }
                    ]
                    |> Expect.equal
                        [ { path = "GenericTable.elm"
                          , contents = """module GenericTable exposing (Metadata, Table(..), columns, toId)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This file is a way to use tables in a generic way. It's useful if you want to create pages that can display any table. For example, if you want to create a contract explorer. Check out https://henriquecbuss/elm-eos/blob/master/examples/contract-explorer for an example on how to use this module.

## Building tables

@docs toId, columns

## Generic table

@docs Table, Metadata
-}


import Contract.Ct.Table
import Contract.Ct.Table.Metadata
import Eos.Asset
import Eos.Name
import Eos.Query
import Eos.Symbol
import Eos.SymbolCode
import Html
import Html.Attributes
import Mask
import Table


type Table
    = ContractCtTable Contract.Ct.Table.Metadata.Table


type alias Metadata =
    { name : Eos.Name.Name
    , queryFunction : { scope : String } -> Eos.Query.Query Table
    }


toId : Table -> String
toId genericTable =
    case genericTable of
        ContractCtTable table ->
            case table of
                Contract.Ct.Table.Metadata.Accounts accounts ->
                    String.join
                        ":"
                        [ String.fromFloat accounts.balance.amount
                            ++ (String.fromInt
                                    (Eos.Symbol.precision
                                        accounts.balance.symbol
                                    )
                                    ++ Eos.SymbolCode.toString
                                        (Eos.Symbol.code accounts.balance.symbol
                                        )
                               )
                        ]


boolToString : Bool -> String
boolToString bool =
    if bool then
        "True"

    else
        "False"


columns : Table -> List (Table.Column Table msg)
columns genericTable =
    case genericTable of
        ContractCtTable contractCtTable ->
            case contractCtTable of
                Contract.Ct.Table.Metadata.Accounts accounts ->
                    contractCtAccountsColumns accounts


wrapCol :
    (String -> (Table -> colType) -> Table.Column Table msg)
    -> String
    -> (table -> colType)
    -> (Table -> table)
    -> Table.Column Table msg
wrapCol colFn name toData toTable =
    colFn name (\\table -> toData (toTable table))


customColumnHtmlDetails : String -> Table.HtmlDetails msg
customColumnHtmlDetails stringData =
    let
        maxLength =
            40
    in
    { attributes =
        [ Html.Attributes.title stringData
        , Html.Attributes.class "whitespace-nowrap py-2 px-6"
        ]
    , children =
        [ Html.text (String.left maxLength stringData)
        , if String.length stringData > maxLength then
            Html.text "..."

          else
            Html.text ""
        ]
    }


customColumn :
    { data_0
        | name : String
        , sorter : Table.Sorter data
        , viewData : data -> String
    }
    -> Table.Column data msg
customColumn data =
    Table.veryCustomColumn
        { name = data.name
        , sorter = data.sorter
        , viewData = \\data0 -> customColumnHtmlDetails (data.viewData data0)
        }


assetColumn : String -> (data -> Eos.Asset.Asset) -> Table.Column data msg
assetColumn name toAsset =
    customColumn
        { name = name
        , sorter =
            Table.increasingOrDecreasingBy
                (\\data ->
                    let
                        actualData =
                            toAsset data
                    in
                    ( Eos.Symbol.precision actualData.symbol
                    , Eos.SymbolCode.toString
                        (Eos.Symbol.code actualData.symbol)
                    , actualData.amount
                    )
                )
        , viewData =
            \\data ->
                let
                    actualData =
                        toAsset data
                in
                String.join
                    " "
                    [ Mask.float
                        (Mask.Precisely (Eos.Symbol.precision actualData.symbol)
                        )
                        { decimalSeparator = ".", thousandsSeparator = "" }
                        actualData.amount
                    , Eos.SymbolCode.toString
                        (Eos.Symbol.code actualData.symbol)
                    ]
        }


contractCtAccountsColumns :
    Contract.Ct.Table.Accounts -> List (Table.Column Table msg)
contractCtAccountsColumns exampleData =
    let
        unwrap data =
            case data of
                ContractCtTable table ->
                    case table of
                        Contract.Ct.Table.Metadata.Accounts accounts ->
                            accounts

                        otherwise_1_0_1_0_0 ->
                            exampleData

                otherwise_1_0_0 ->
                    exampleData
    in
    [ wrapCol assetColumn "balance" .balance unwrap ]


"""
                          , warnings = []
                          }
                        , { path = "Action.elm"
                          , contents = """module Action exposing (Action(..), encode, fromDict)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This file is a way to use actions in a generic way. It's useful if you want to create pages that can fire any action. For example, if you want to create a contract explorer. Check out https://henriquecbuss/elm-eos/blob/master/examples/contract-explorer for an example on how to use this module.

## Building

@docs fromDict

## Generic action

@docs Action

## JSON

@docs encode
-}


import Contract.Ct.Action
import Dict
import Eos.Authorization
import Eos.Name
import Json.Encode
import Maybe.Extra


type Action
    = ContractCtAction Contract.Ct.Action.Action


encode : Action -> Json.Encode.Value
encode action =
    case action of
        ContractCtAction action0 ->
            Contract.Ct.Action.encode [] action0


fromDict : Eos.Name.Name -> Dict.Dict String String -> Maybe Action
fromDict contractName inputDict =
    Maybe.Extra.oneOf
        [ \\args ->
            Maybe.map
                ContractCtAction
                (Contract.Ct.Action.fromDict contractName args)
        ]
        inputDict


"""
                          , warnings = []
                          }
                        , { path = "Contract/Ct/Action.elm"
                          , contents =
                                """module Contract.Ct.Action exposing (Action(..), assetFromString, blockTimestampFromString, boolFromString, checksumFromString, encode, encodeSingleAction, extendedAssetFromString, floatFromString, fromDict, intFromString, listFromString, nameFromString, publicKeyFromString, signatureFromString, stringFromString, symbolCodeFromString, symbolFromString, timePointFromString, timePointSecFromString)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This file contains all of the actions for the contract.ct contract. In order to send an action to the blockchain, create an [Action](#Action), [encode](#encode) it, and send through a port to eosjs, or similar.

## Action

@docs Action

## Encoding

@docs encode, encodeSingleAction

## Forms

@docs fromDict, boolFromString, intFromString, floatFromString, timePointFromString, timePointSecFromString, blockTimestampFromString, nameFromString, stringFromString, checksumFromString, publicKeyFromString, signatureFromString, symbolFromString, symbolCodeFromString, assetFromString, extendedAssetFromString, listFromString
-}


import Dict
import Eos.Asset
import Eos.Authorization
import Eos.Checksum
import Eos.ExtendedAsset
import Eos.Name
import Eos.PublicKey
import Eos.Signature
import Eos.Symbol
import Eos.SymbolCode
import Eos.TimePoint
import Eos.TimePointSec
import Json.Encode
import Maybe.Extra
import Time


{-| Represents an action that can be sent to the blockchain.

You can [encode](#encode) it and send it through a port to eosjs or similar.
-}
type Action
    = Transfer
        { from : Eos.Name.Name
        , to : Eos.Name.Name
        , quantity : Eos.Asset.Asset
        , memo : String
        }


{-| Turn an [Action](#Action) into a JSON value to perform a transaction. You can then send it through a port to eosjs, or similar. -}
encode : List Eos.Authorization.Authorization -> Action -> Json.Encode.Value
encode authorizations action =
    Json.Encode.object
        [ ( "account", Json.Encode.string "contract.ct" )
        , ( "name", Json.Encode.string (getName action) )
        , ( "authorization"
          , Json.Encode.list Eos.Authorization.encode authorizations
          )
        , ( "data", encodeSingleAction action )
        ]


{-| Turn an [Action](#Action) into a JSON value. If you want to send the action to the blockchain, use [encode](#encode) instead. -}
encodeSingleAction : Action -> Json.Encode.Value
encodeSingleAction action =
    case action of
        Transfer args ->
            Json.Encode.object
                [ ( "from", args.from |> Eos.Name.encode )
                , ( "to", args.to |> Eos.Name.encode )
                , ( "quantity", args.quantity |> Eos.Asset.encode )
                , ( "memo", args.memo |> Json.Encode.string )
                ]


getName : Action -> String
getName action =
    case action of
        Transfer _ ->
            "transfer"


{-| Given an action name and a dictionary of strings, try to build an [Action](#Action). This is useful for having generic forms -}
fromDict : Eos.Name.Name -> Dict.Dict String String -> Maybe Action
fromDict actionName args =
    case Eos.Name.toString actionName of
        "transfer" ->
            Just
             (\\from to quantity memo ->
                 Transfer
                     { from = from, to = to, quantity = quantity, memo = memo }
             )
                |> Maybe.Extra.andMap
                    (Dict.get "from" args |> Maybe.andThen nameFromString)
                |> Maybe.Extra.andMap
                    (Dict.get "to" args |> Maybe.andThen nameFromString)
                |> Maybe.Extra.andMap
                    (Dict.get "quantity" args |> Maybe.andThen assetFromString)
                |> Maybe.Extra.andMap
                    (Dict.get "memo" args |> Maybe.andThen stringFromString)

        otherwise_1_0_0 ->
            Nothing


boolFromString : String -> Maybe Bool
boolFromString boolString =
    Just
        (Basics.not
            (String.isEmpty boolString || (String.toLower boolString == "false")
            )
        )


intFromString : String -> Maybe Int
intFromString intString =
    String.toInt intString


floatFromString : String -> Maybe Float
floatFromString floatString =
    String.toFloat floatString


timePointFromString : String -> Maybe Eos.TimePoint.TimePoint
timePointFromString timePointString =
    String.toInt timePointString |> Maybe.map Eos.TimePoint.fromMicroseconds


timePointSecFromString : String -> Maybe Eos.TimePointSec.TimePointSec
timePointSecFromString timePointSecString =
    String.toInt timePointSecString |> Maybe.map Eos.TimePointSec.fromSeconds


blockTimestampFromString : String -> Maybe Time.Posix
blockTimestampFromString blockTimestampString =
    Maybe.map Time.millisToPosix (String.toInt blockTimestampString)


nameFromString : String -> Maybe Eos.Name.Name
nameFromString nameString =
    Eos.Name.fromString nameString |> Result.toMaybe


stringFromString : String -> Maybe String
stringFromString stringString =
    Just stringString


checksumFromString : String -> Maybe Eos.Checksum.Checksum
checksumFromString checksumString =
    Just (Eos.Checksum.fromString checksumString)


publicKeyFromString : String -> Maybe Eos.PublicKey.PublicKey
publicKeyFromString publicKeyString =
    Just (Eos.PublicKey.fromString publicKeyString)


signatureFromString : String -> Maybe Eos.Signature.Signature
signatureFromString signatureString =
    Just (Eos.Signature.fromString signatureString)


symbolFromString : String -> Maybe Eos.Symbol.Symbol
symbolFromString symbolString =
    case String.split "," symbolString of
        [ arg1_1_0_0, arg2_1_0_0 ] ->
            case String.toInt arg1_1_0_0 of
                Maybe.Just a ->
                    Eos.Symbol.fromPrecisionAndCodeString a arg2_1_0_0
                        |> Result.toMaybe

                Maybe.Nothing ->
                    Nothing

        otherwise_1_0_0 ->
            Nothing


symbolCodeFromString : String -> Maybe Eos.SymbolCode.SymbolCode
symbolCodeFromString symbolCodeString =
    Eos.SymbolCode.fromString symbolCodeString |> Result.toMaybe


assetFromString : String -> Maybe Eos.Asset.Asset
assetFromString assetString =
    case String.split " " assetString of
        [ arg1_1_0_0, arg2_1_0_0 ] ->
            Maybe.map2
                (\\map2Unpack ->
                    \\unpack -> { amount = map2Unpack, symbol = unpack }
                )
                (String.toFloat arg1_1_0_0)
                (symbolFromString arg2_1_0_0)

        otherwise_1_0_0 ->
            Nothing


extendedAssetFromString : String -> Maybe Eos.ExtendedAsset.ExtendedAsset
extendedAssetFromString extendedAssetString =
    case String.split " " extendedAssetString of
        [ arg1_1_0_0, arg2_1_0_0, arg3_1_0_0 ] ->
            Maybe.map3
                (\\map3Unpack ->
                    \\unpack ->
                        \\unpack0 ->
                            { amount = map3Unpack
                            , symbol = unpack
                            , contract = unpack0
                            }
                )
                (String.toFloat arg1_1_0_0)
                (symbolFromString arg2_1_0_0)
                (Eos.Name.fromString arg3_1_0_0 |> Result.toMaybe)

        otherwise_1_0_0 ->
            Nothing


listFromString : (String -> Maybe item) -> String -> Maybe (List item)
listFromString parseItem listString =
    listString
        |> String.dropLeft 1
        |> String.dropRight 1
        |> String.split ","
        |> List.map parseItem
        |> Maybe.Extra.combine


"""
                          , warnings = []
                          }
                        , { path = "Contract/Ct/Action/Metadata.elm"
                          , contents = """module Contract.Ct.Action.Metadata exposing (metadata)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This file contains metadata about actions from the contract.ct contract. You should only need this if you're building something like a contract explorer or an auto generated app.

## Metadata

@docs metadata
-}


import Dict
import Eos.EosType
import Eos.Name
import Result.Extra


{-| All metadata for actions in this contract. You can use this to create auto generated apps, for example -}
metadata :
    List { name : Eos.Name.Name, fields : Dict.Dict String Eos.EosType.EosType }
metadata =
    Result.withDefault
        []
        (Result.Extra.combine
            [ Result.map
                (\\mapUnpack ->
                    { name = mapUnpack
                    , fields =
                        Dict.fromList
                            [ ( "from", Eos.EosType.Name )
                            , ( "to", Eos.EosType.Name )
                            , ( "quantity", Eos.EosType.Asset )
                            , ( "memo", Eos.EosType.EosString )
                            ]
                    }
                )
                (Eos.Name.fromString "transfer")
            ]
        )


"""
                          , warnings = []
                          }
                        , { path = "Contract/Ct/Table.elm"
                          , contents = """module Contract.Ct.Table exposing (Accounts)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This file contains Elm types that represent all of the tables for the contract.ct contract. You can query them with functions from the Contract.Ct.Table.Query module, and perform the queries with [Eos.Query.send](Eos-Query#send)

## Tables

@docs Accounts
-}


import Eos.Asset


{-| Type representing the accounts table. -}
type alias Accounts =
    { balance : Eos.Asset.Asset }


"""
                          , warnings = []
                          }
                        , { path = "Contract/Ct/Table/Metadata.elm"
                          , contents = """module Contract.Ct.Table.Metadata exposing (Table(..), metadata)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This file contains metadata about tables from the contract.ct contract. You should only need this if you're building something like a contract explorer or an auto generated app

## Metadata

@docs Table, metadata
-}


import Contract.Ct.Table
import Contract.Ct.Table.Query
import Eos.Name
import Eos.Query
import Result.Extra


{-| Type representing all possible tables -}
type Table
    = Accounts Contract.Ct.Table.Accounts


{-| All metadata from this contract. You can use this to create auto generated apps for example -}
metadata :
    List { name : Eos.Name.Name
    , queryFunction : { scope : String } -> Eos.Query.Query Table
    }
metadata =
    Result.withDefault
        []
        (Result.Extra.combine
            [ Result.map
                (\\mapUnpack ->
                    { name = mapUnpack
                    , queryFunction =
                        \\scope ->
                            Eos.Query.map
                                Accounts
                                (Contract.Ct.Table.Query.accounts scope)
                    }
                )
                (Eos.Name.fromString "accounts")
            ]
        )


"""
                          , warnings = []
                          }
                        , { path = "Contract/Ct/Table/Decoder.elm"
                          , contents = """module Contract.Ct.Table.Decoder exposing (accounts)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This file contains functions that decode the results of queries to the blockchain into types from Contract.Ct.Table. You probably won't need these! Just use [Eos.Query](Eos-Query), which will automatically decode things for you.

## Decoders

@docs accounts
-}


import Contract.Ct.Table
import Eos.Asset
import Json.Decode
import Json.Decode.Pipeline


{-| Decoder for an integer, which deals with the case that an int may come as a string -}
intDecoder : Json.Decode.Decoder Int
intDecoder =
    Json.Decode.oneOf
        [ Json.Decode.int
        , Json.Decode.andThen
            (\\andThenUnpack ->
                case String.toInt andThenUnpack of
                    Nothing ->
                        Json.Decode.fail
                            ("I got a String that should represent an Int, but it didn't parse to an Int. It was: "
                                ++ andThenUnpack
                            )

                    Just validInt_1_1_1_1_0 ->
                        Json.Decode.succeed validInt_1_1_1_1_0
            )
            Json.Decode.string
        ]


{-| Decoder for the accounts table. -}
accounts : Json.Decode.Decoder Contract.Ct.Table.Accounts
accounts =
    Json.Decode.succeed Contract.Ct.Table.Accounts
        |> Json.Decode.Pipeline.required "balance" Eos.Asset.decoder


"""
                          , warnings = []
                          }
                        , { path = "Contract/Ct/Table/Query.elm"
                          , contents = """module Contract.Ct.Table.Query exposing (accounts)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This is the file you want to use to query the blockchain for data, along with [Eos.Query.send](Eos-Query#send).

## Queries

@docs accounts
-}


import Contract.Ct.Table
import Contract.Ct.Table.Decoder
import Eos.Query


accounts : { scope : String } -> Eos.Query.Query Contract.Ct.Table.Accounts
accounts arg =
    Eos.Query.Query
        { scope = arg.scope
        , indexPosition = Nothing
        , lowerBound = Nothing
        , upperBound = Nothing
        , limit = Nothing
        , reverse = False
        , baseUrl = "https://example.com"
        , contract = "contract.ct"
        , table = "accounts"
        , decoder = Contract.Ct.Table.Decoder.accounts
        }


"""
                          , warnings = []
                          }
                        ]
        ]


exampleContract : String
exampleContract =
    "contract.ct"


exampleBaseUrl : String
exampleBaseUrl =
    "https://example.com"


exampleAbi : Abi.Abi
exampleAbi =
    { actions =
        [ { name = "transfer"
          , arguments =
                [ { name = "from", type_ = EosType.Name }
                , { name = "to", type_ = EosType.Name }
                , { name = "quantity", type_ = EosType.Asset }
                , { name = "memo", type_ = EosType.EosString }
                ]
          }
        ]
    , tables =
        [ { name = "accounts"
          , columns = [ { name = "balance", type_ = EosType.Asset } ]
          }
        ]
    }
