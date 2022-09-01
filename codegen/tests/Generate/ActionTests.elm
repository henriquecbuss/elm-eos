module Generate.ActionTests exposing (suite)

import Abi
import Context
import Elm.ToString
import EosType
import Expect
import Generate.Action
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Generate.Action"
        [ type_
        , encode
        , encodeSingleAction
        ]


type_ : Test
type_ =
    describe "type_"
        [ test "works correctly for transfer action" <|
            \_ ->
                [ transferAction ]
                    |> Generate.Action.type_
                    |> Elm.ToString.declaration
                    |> .body
                    |> Expect.equal """{-| Represents an action that can be sent to the blockchain.

You can [encode](#encode) it and send it through a port to eosjs or similar.
-}
type Action
    = Transfer
        { from : Eos.Name.Name
        , to : Eos.Name.Name
        , quantity : Eos.Asset.Asset
        , memo : String
        }"""
        , test "works correctly for multiple actions" <|
            \_ ->
                [ transferAction
                , rewardAction
                ]
                    |> Generate.Action.type_
                    |> Elm.ToString.declaration
                    |> .body
                    |> Expect.equal """{-| Represents an action that can be sent to the blockchain.

You can [encode](#encode) it and send it through a port to eosjs or similar.
-}
type Action
    = Transfer
        { from : Eos.Name.Name
        , to : Eos.Name.Name
        , quantity : Eos.Asset.Asset
        , memo : String
        }
    | Reward
        { receivers : List Eos.Name.Name
        , awarder : Eos.Name.Name
        , quantity : Eos.Asset.Asset
        , reason : String
        }"""
        , test "works correctly for all types" <|
            \_ ->
                [ allTypesAction ]
                    |> Generate.Action.type_
                    |> Elm.ToString.declaration
                    |> .body
                    |> Expect.equal
                        """{-| Represents an action that can be sent to the blockchain.

You can [encode](#encode) it and send it through a port to eosjs or similar.
-}
type Action
    = Test
        { bool : Bool
        , int8 : Int
        , uint8 : Int
        , int16 : Int
        , uint16 : Int
        , int32 : Int
        , uint32 : Int
        , int64 : Int
        , uint64 : Int
        , int128 : Int
        , uint128 : Int
        , varint32 : Int
        , varuint32 : Int
        , float32 : Float
        , float64 : Float
        , float128 : Float
        , timePoint : Eos.TimePoint.TimePoint
        , timePointSec : Eos.TimePointSec.TimePointSec
        , blockTimestampType : Time.Posix
        , name : Eos.Name.Name
        , string : String
        , checksum160 : Eos.Checksum.Checksum
        , checksum256 : Eos.Checksum.Checksum
        , checksum512 : Eos.Checksum.Checksum
        , publicKey : Eos.PublicKey.PublicKey
        , signature : Eos.Signature.Signature
        , symbol : Eos.Symbol.Symbol
        , symbolCode : Eos.SymbolCode.SymbolCode
        , asset : Eos.Asset.Asset
        , extendedAsset : Eos.ExtendedAsset.ExtendedAsset
        }"""
        , test "transforms snake_case into camelCase and PascalCase" <|
            \_ ->
                [ snakeCaseAction ]
                    |> Generate.Action.type_
                    |> Elm.ToString.declaration
                    |> .body
                    |> Expect.equal
                        """{-| Represents an action that can be sent to the blockchain.

You can [encode](#encode) it and send it through a port to eosjs or similar.
-}
type Action
    = SnakeCase { snakeCase : String }"""
        ]


encode : Test
encode =
    let
        context : Context.Context
        context =
            { baseUrl = "https://fruits.com"
            , contract = "fruits"
            }
    in
    describe "encode"
        [ test "works correctly for fruits contract" <|
            \_ ->
                Generate.Action.encode context
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "encode : Eos.Authorization.Authorization -> Action -> Json.Encode.Value"
                        , .body
                            >> Expect.equal """{-| Turn an [Action](#Action) into a JSON value to perform a transaction. You can then send it through a port to eosjs, or similar. -}
encode : Eos.Authorization.Authorization -> Action -> Json.Encode.Value
encode authorization action =
    Json.Encode.object
        [ ( "account", Json.Encode.string "fruits" )
        , ( "name", Json.Encode.string (getName action) )
        , ( "authorization", Eos.Authorization.encode authorization )
        , ( "data", encodeSingleAction action )
        ]"""
                        ]
        ]


encodeSingleAction : Test
encodeSingleAction =
    describe "encodeSingleAction"
        [ test "works correctly for transfer action" <|
            \_ ->
                [ transferAction ]
                    |> Generate.Action.encodeSingleAction
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "encodeSingleAction : Action -> Json.Encode.Value"
                        , .body
                            >> Expect.equal """{-| Turn an [Action](#Action) into a JSON value. If you want to send the action to the blockchain, use [encode](#encode) instead. -}
encodeSingleAction : Action -> Json.Encode.Value
encodeSingleAction action =
    case action of
        Transfer args ->
            Json.Encode.object
                [ ( "from", args.from |> Eos.Name.encode )
                , ( "to", args.to |> Eos.Name.encode )
                , ( "quantity", args.quantity |> Eos.Asset.encode )
                , ( "memo", args.memo |> Json.Encode.string )
                ]"""
                        ]
        , test "works correctly for multiple actions" <|
            \_ ->
                [ transferAction
                , rewardAction
                ]
                    |> Generate.Action.encodeSingleAction
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "encodeSingleAction : Action -> Json.Encode.Value"
                        , .body
                            >> Expect.equal """{-| Turn an [Action](#Action) into a JSON value. If you want to send the action to the blockchain, use [encode](#encode) instead. -}
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

        Reward args ->
            Json.Encode.object
                [ ( "receivers"
                  , args.receivers |> Json.Encode.list Eos.Name.encode
                  )
                , ( "awarder", args.awarder |> Eos.Name.encode )
                , ( "quantity", args.quantity |> Eos.Asset.encode )
                , ( "reason", args.reason |> Json.Encode.string )
                ]"""
                        ]
        , test "works correctly for all types" <|
            \_ ->
                [ allTypesAction ]
                    |> Generate.Action.encodeSingleAction
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "encodeSingleAction : Action -> Json.Encode.Value"
                        , .body
                            >> Expect.equal """{-| Turn an [Action](#Action) into a JSON value. If you want to send the action to the blockchain, use [encode](#encode) instead. -}
encodeSingleAction : Action -> Json.Encode.Value
encodeSingleAction action =
    case action of
        Test args ->
            Json.Encode.object
                [ ( "bool", args.bool |> Json.Encode.bool )
                , ( "int8", args.int8 |> Json.Encode.int )
                , ( "uint8", args.uint8 |> Json.Encode.int )
                , ( "int16", args.int16 |> Json.Encode.int )
                , ( "uint16", args.uint16 |> Json.Encode.int )
                , ( "int32", args.int32 |> Json.Encode.int )
                , ( "uint32", args.uint32 |> Json.Encode.int )
                , ( "int64", args.int64 |> Json.Encode.int )
                , ( "uint64", args.uint64 |> Json.Encode.int )
                , ( "int128", args.int128 |> Json.Encode.int )
                , ( "uint128", args.uint128 |> Json.Encode.int )
                , ( "varint32", args.varint32 |> Json.Encode.int )
                , ( "varuint32", args.varuint32 |> Json.Encode.int )
                , ( "float32", args.float32 |> Json.Encode.float )
                , ( "float64", args.float64 |> Json.Encode.float )
                , ( "float128", args.float128 |> Json.Encode.float )
                , ( "time_point", args.timePoint |> Eos.TimePoint.encode )
                , ( "time_point_sec"
                  , args.timePointSec |> Eos.TimePointSec.encode
                  )
                , ( "block_timestamp_type"
                  , args.blockTimestampType
                        |> (Time.posixToMillis |> Json.Encode.int)
                  )
                , ( "name", args.name |> Eos.Name.encode )
                , ( "string", args.string |> Json.Encode.string )
                , ( "checksum160", args.checksum160 |> Eos.Checksum.encode )
                , ( "checksum256", args.checksum256 |> Eos.Checksum.encode )
                , ( "checksum512", args.checksum512 |> Eos.Checksum.encode )
                , ( "public_key", args.publicKey |> Eos.PublicKey.encode )
                , ( "signature", args.signature |> Eos.Signature.encode )
                , ( "symbol", args.symbol |> Eos.Symbol.encode )
                , ( "symbol_code", args.symbolCode |> Eos.SymbolCode.encode )
                , ( "asset", args.asset |> Eos.Asset.encode )
                , ( "extended_asset"
                  , args.extendedAsset |> Eos.ExtendedAsset.encode
                  )
                ]"""
                        ]
        , test "works correctly for snake_cased actions" <|
            \_ ->
                [ snakeCaseAction ]
                    |> Generate.Action.encodeSingleAction
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "encodeSingleAction : Action -> Json.Encode.Value"
                        , .body
                            >> Expect.equal """{-| Turn an [Action](#Action) into a JSON value. If you want to send the action to the blockchain, use [encode](#encode) instead. -}
encodeSingleAction : Action -> Json.Encode.Value
encodeSingleAction action =
    case action of
        SnakeCase args ->
            Json.Encode.object
                [ ( "snake_case", args.snakeCase |> Json.Encode.string ) ]"""
                        ]
        ]


allTypesAction : Abi.Action
allTypesAction =
    { name = "test"
    , arguments =
        [ { name = "bool"
          , type_ = EosType.EosBool
          }
        , { name = "int8"
          , type_ = EosType.EosInt
          }
        , { name = "uint8"
          , type_ = EosType.EosInt
          }
        , { name = "int16"
          , type_ = EosType.EosInt
          }
        , { name = "uint16"
          , type_ = EosType.EosInt
          }
        , { name = "int32"
          , type_ = EosType.EosInt
          }
        , { name = "uint32"
          , type_ = EosType.EosInt
          }
        , { name = "int64"
          , type_ = EosType.EosInt
          }
        , { name = "uint64"
          , type_ = EosType.EosInt
          }
        , { name = "int128"
          , type_ = EosType.EosInt
          }
        , { name = "uint128"
          , type_ = EosType.EosInt
          }
        , { name = "varint32"
          , type_ = EosType.EosInt
          }
        , { name = "varuint32"
          , type_ = EosType.EosInt
          }
        , { name = "float32"
          , type_ = EosType.EosFloat
          }
        , { name = "float64"
          , type_ = EosType.EosFloat
          }
        , { name = "float128"
          , type_ = EosType.EosFloat
          }
        , { name = "time_point"
          , type_ = EosType.TimePoint
          }
        , { name = "time_point_sec"
          , type_ = EosType.TimePointSec
          }
        , { name = "block_timestamp_type"
          , type_ = EosType.BlockTimestampType
          }
        , { name = "name"
          , type_ = EosType.Name
          }
        , { name = "string"
          , type_ = EosType.EosString
          }
        , { name = "checksum160"
          , type_ = EosType.Checksum
          }
        , { name = "checksum256"
          , type_ = EosType.Checksum
          }
        , { name = "checksum512"
          , type_ = EosType.Checksum
          }
        , { name = "public_key"
          , type_ = EosType.PublicKey
          }
        , { name = "signature"
          , type_ = EosType.Signature
          }
        , { name = "symbol"
          , type_ = EosType.Symbol
          }
        , { name = "symbol_code"
          , type_ = EosType.SymbolCode
          }
        , { name = "asset"
          , type_ = EosType.Asset
          }
        , { name = "extended_asset"
          , type_ = EosType.ExtendedAsset
          }
        ]
    }


transferAction : Abi.Action
transferAction =
    { name = "transfer"
    , arguments =
        [ { name = "from"
          , type_ = EosType.Name
          }
        , { name = "to"
          , type_ = EosType.Name
          }
        , { name = "quantity"
          , type_ = EosType.Asset
          }
        , { name = "memo"
          , type_ = EosType.EosString
          }
        ]
    }


rewardAction : Abi.Action
rewardAction =
    { name = "reward"
    , arguments =
        [ { name = "receivers"
          , type_ = EosType.EosList EosType.Name
          }
        , { name = "awarder"
          , type_ = EosType.Name
          }
        , { name = "quantity"
          , type_ = EosType.Asset
          }
        , { name = "reason"
          , type_ = EosType.EosString
          }
        ]
    }


snakeCaseAction : Abi.Action
snakeCaseAction =
    { name = "snake_case"
    , arguments =
        [ { name = "snake_case"
          , type_ = EosType.EosString
          }
        ]
    }
