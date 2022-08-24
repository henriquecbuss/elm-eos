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
