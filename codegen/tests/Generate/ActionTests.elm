module Generate.ActionTests exposing (suite)

import Abi
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
                    |> Expect.equal """type Action
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
                    |> Expect.equal """type Action
    = Transfer
        { from : Eos.Name.Name
        , to : Eos.Name.Name
        , quantity : Eos.Asset.Asset
        , memo : String
        }
    | Reward
        { receiver : Eos.Name.Name
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
                        """type Action
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
        , time_point : Eos.TimePoint.TimePoint
        , time_point_sec : Eos.TimePointSec.TimePointSec
        , block_timestamp_type : Time.Posix
        , name : Eos.Name.Name
        , string : String
        , checksum160 : Eos.Checksum.Checksum
        , checksum256 : Eos.Checksum.Checksum
        , checksum512 : Eos.Checksum.Checksum
        , public_key : Eos.PublicKey.PublicKey
        , signature : Eos.Signature.Signature
        , symbol : Eos.Symbol.Symbol
        , symbol_code : Eos.SymbolCode.SymbolCode
        , asset : Eos.Asset.Asset
        , extended_asset : Eos.ExtendedAsset.ExtendedAsset
        }"""
        ]


encode : Test
encode =
    describe "encode"
        [ test "works correctly for transfer action" <|
            \_ ->
                [ transferAction ]
                    |> Generate.Action.encode
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "encode : Action -> Json.Encode.Value"
                        , .body
                            >> Expect.equal """encode : Action -> Json.Encode.Value
encode action =
    case action of
        Transfer args ->
            Json.Encode.object
                [ ( "from", Eos.Name.encode args.from )
                , ( "to", Eos.Name.encode args.to )
                , ( "quantity", Eos.Asset.encode args.quantity )
                , ( "memo", Json.Encode.string args.memo )
                ]"""
                        ]
        , test "works correctly for multiple actions" <|
            \_ ->
                [ transferAction
                , rewardAction
                ]
                    |> Generate.Action.encode
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "encode : Action -> Json.Encode.Value"
                        , .body
                            >> Expect.equal """encode : Action -> Json.Encode.Value
encode action =
    case action of
        Transfer args ->
            Json.Encode.object
                [ ( "from", Eos.Name.encode args.from )
                , ( "to", Eos.Name.encode args.to )
                , ( "quantity", Eos.Asset.encode args.quantity )
                , ( "memo", Json.Encode.string args.memo )
                ]

        Reward args ->
            Json.Encode.object
                [ ( "receiver", Eos.Name.encode args.receiver )
                , ( "awarder", Eos.Name.encode args.awarder )
                , ( "quantity", Eos.Asset.encode args.quantity )
                , ( "reason", Json.Encode.string args.reason )
                ]"""
                        ]
        , test "works correctly for all types" <|
            \_ ->
                [ allTypesAction ]
                    |> Generate.Action.encode
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "encode : Action -> Json.Encode.Value"
                        , .body
                            >> Expect.equal """encode : Action -> Json.Encode.Value
encode action =
    case action of
        Test args ->
            Json.Encode.object
                [ ( "bool", Json.Encode.bool args.bool )
                , ( "int8", Json.Encode.int args.int8 )
                , ( "uint8", Json.Encode.int args.uint8 )
                , ( "int16", Json.Encode.int args.int16 )
                , ( "uint16", Json.Encode.int args.uint16 )
                , ( "int32", Json.Encode.int args.int32 )
                , ( "uint32", Json.Encode.int args.uint32 )
                , ( "int64", Json.Encode.int args.int64 )
                , ( "uint64", Json.Encode.int args.uint64 )
                , ( "int128", Json.Encode.int args.int128 )
                , ( "uint128", Json.Encode.int args.uint128 )
                , ( "varint32", Json.Encode.int args.varint32 )
                , ( "varuint32", Json.Encode.int args.varuint32 )
                , ( "float32", Json.Encode.float args.float32 )
                , ( "float64", Json.Encode.float args.float64 )
                , ( "float128", Json.Encode.float args.float128 )
                , ( "time_point", Eos.TimePoint.encode args.time_point )
                , ( "time_point_sec"
                  , Eos.TimePointSec.encode args.time_point_sec
                  )
                , ( "block_timestamp_type"
                  , Json.Encode.int
                        (Time.posixToMillis args.block_timestamp_type)
                  )
                , ( "name", Eos.Name.encode args.name )
                , ( "string", Json.Encode.string args.string )
                , ( "checksum160", Eos.Checksum.encode args.checksum160 )
                , ( "checksum256", Eos.Checksum.encode args.checksum256 )
                , ( "checksum512", Eos.Checksum.encode args.checksum512 )
                , ( "public_key", Eos.PublicKey.encode args.public_key )
                , ( "signature", Eos.Signature.encode args.signature )
                , ( "symbol", Eos.Symbol.encode args.symbol )
                , ( "symbol_code", Eos.SymbolCode.encode args.symbol_code )
                , ( "asset", Eos.Asset.encode args.asset )
                , ( "extended_asset"
                  , Eos.ExtendedAsset.encode args.extended_asset
                  )
                ]"""
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
        [ { name = "receiver"
          , type_ = EosType.Name
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
