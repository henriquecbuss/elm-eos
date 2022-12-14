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
                        [ { path = "Contract/Ct/Action.elm"
                          , contents =
                                """module Contract.Ct.Action exposing (Action(..), encode, encodeSingleAction)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This file contains all of the actions for the contract.ct contract. In order to send an action to the blockchain, create an [Action](#Action), [encode](#encode) it, and send through a port to eosjs, or similar.

## Action

@docs Action

## Encoding

@docs encode, encodeSingleAction
-}


import Eos.Asset
import Eos.Authorization
import Eos.Name
import Json.Encode


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
                        , { path = "Contract/Ct/Table/Decoder.elm"
                          , contents = """module Contract.Ct.Table.Decoder exposing (accounts)

{-| 
This file was automatically generated by henriquecbuss/elm-eos. Do not edit it by hand!

This file contains functions that decode the results of queries to the blockchain into types from Contract.Ct.Table. You probably won't need these! Just use [Eos.Query](Eos-Query), which will automatically decode things for you.

## Decoders

@docs accounts
-}


import Contract.Ct.Table
import Decode
import Eos.Asset
import Json.Decode
import Json.Decode.Pipeline


{-| Decoder for the accounts table. -}
accounts : Json.Decode.Decoder Contract.Ct.Table.Accounts
accounts =
    Json.Decode.Pipeline.required
        "balance"
        Eos.Asset.decoder
        (Json.Decode.succeed Contract.Ct.Table.Accounts)


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
