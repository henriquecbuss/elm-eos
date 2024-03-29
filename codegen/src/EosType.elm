module EosType exposing
    ( EosType(..)
    , decoder
    , generateDecoder
    , generateEncoder
    , intDecoder
    , toAnnotation
    , toExpression
    , toId
    , toTypeName
    , valueToComparable
    , valueToString
    )

import Elm
import Elm.Annotation
import Elm.Case
import Elm.Op
import Gen.Eos.Asset
import Gen.Eos.Checksum
import Gen.Eos.EosType
import Gen.Eos.ExtendedAsset
import Gen.Eos.Name
import Gen.Eos.PublicKey
import Gen.Eos.Signature
import Gen.Eos.Symbol
import Gen.Eos.SymbolCode
import Gen.Eos.TimePoint
import Gen.Eos.TimePointSec
import Gen.Json.Decode
import Gen.Json.Encode
import Gen.List
import Gen.Mask
import Gen.String
import Gen.Time
import Json.Decode as Decode
import String.Extra


{-| This includes all of the native types, declared in [abi\_serializer::configure\_built\_in\_types()](https://github.com/EOSIO/eos/blob/de78b49b5765c88f4e005046d1489c3905985b94/libraries/chain/abi_serializer.cpp#L89-L127).

It only doesn't support `bytes`. If you need support for `bytes`, please open an
issue on GitHub

-}
type EosType
    = EosBool
    | EosInt
    | EosFloat
    | TimePoint
    | TimePointSec
    | BlockTimestampType
    | Name
    | EosString
    | Checksum
    | PublicKey
    | Signature
    | Symbol
    | SymbolCode
    | Asset
    | ExtendedAsset
    | EosList EosType


decoder : Decode.Decoder EosType
decoder =
    Decode.string
        |> Decode.andThen
            (\decodedString ->
                case fromString decodedString of
                    Just validType ->
                        Decode.succeed validType

                    Nothing ->
                        Decode.fail "Invalid eos type."
            )


fromString : String -> Maybe EosType
fromString stringType =
    -- elm-review: IGNORE TCO
    if String.endsWith "[]" stringType then
        String.dropRight 2 stringType
            |> fromString
            |> Maybe.map EosList

    else
        case stringType of
            "asset" ->
                Just Asset

            "block_timestamp_type" ->
                Just BlockTimestampType

            "bool" ->
                Just EosBool

            "checksum160" ->
                Just Checksum

            "checksum256" ->
                Just Checksum

            "checksum512" ->
                Just Checksum

            "extended_asset" ->
                Just ExtendedAsset

            "float128" ->
                Just EosFloat

            "float32" ->
                Just EosFloat

            "float64" ->
                Just EosFloat

            "int128" ->
                Just EosInt

            "int16" ->
                Just EosInt

            "int32" ->
                Just EosInt

            "int64" ->
                Just EosInt

            "int8" ->
                Just EosInt

            "name" ->
                Just Name

            "public_key" ->
                Just PublicKey

            "signature" ->
                Just Signature

            "string" ->
                Just EosString

            "symbol" ->
                Just Symbol

            "symbol_code" ->
                Just SymbolCode

            "time_point" ->
                Just TimePoint

            "time_point_sec" ->
                Just TimePointSec

            "uint128" ->
                Just EosInt

            "uint16" ->
                Just EosInt

            "uint32" ->
                Just EosInt

            "uint64" ->
                Just EosInt

            "uint8" ->
                Just EosInt

            "varint32" ->
                Just EosInt

            "varuint32" ->
                Just EosInt

            _ ->
                Nothing


generateDecoder : EosType -> Elm.Expression
generateDecoder eosType =
    -- elm-review: IGNORE TCO
    case eosType of
        EosBool ->
            Gen.Json.Decode.values_.bool

        EosInt ->
            Elm.val "intDecoder"

        EosFloat ->
            Gen.Json.Decode.values_.float

        TimePoint ->
            Gen.Eos.TimePoint.values_.decoder

        TimePointSec ->
            Gen.Eos.TimePointSec.values_.decoder

        BlockTimestampType ->
            Gen.Json.Decode.map Gen.Time.call_.millisToPosix Gen.Json.Decode.int

        Name ->
            Gen.Eos.Name.values_.decoder

        EosString ->
            Gen.Json.Decode.values_.string

        Checksum ->
            Gen.Eos.Checksum.values_.decoder

        PublicKey ->
            Gen.Eos.PublicKey.values_.decoder

        Signature ->
            Gen.Eos.Signature.values_.decoder

        Symbol ->
            Gen.Eos.Symbol.values_.decoder

        SymbolCode ->
            Gen.Eos.SymbolCode.values_.decoder

        Asset ->
            Gen.Eos.Asset.values_.decoder

        ExtendedAsset ->
            Gen.Eos.ExtendedAsset.values_.decoder

        EosList innerType ->
            Gen.Json.Decode.call_.list (generateDecoder innerType)


generateEncoder : EosType -> Elm.Expression
generateEncoder eosType =
    -- elm-review: IGNORE TCO
    case eosType of
        EosBool ->
            Gen.Json.Encode.values_.bool

        EosInt ->
            Gen.Json.Encode.values_.int

        EosFloat ->
            Gen.Json.Encode.values_.float

        TimePoint ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.TimePoint.annotation_.timePoint ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "TimePoint" ]
                , name = "encode"
                }

        TimePointSec ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.TimePointSec.annotation_.timePointSec ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "TimePointSec" ]
                , name = "encode"
                }

        BlockTimestampType ->
            Elm.Op.pipe Gen.Json.Encode.values_.int Gen.Time.values_.posixToMillis

        Name ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.Name.annotation_.name ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "Name" ]
                , name = "encode"
                }

        EosString ->
            Gen.Json.Encode.values_.string

        Checksum ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.Checksum.annotation_.checksum ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "Checksum" ]
                , name = "encode"
                }

        PublicKey ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.PublicKey.annotation_.publicKey ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "PublicKey" ]
                , name = "encode"
                }

        Signature ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.Signature.annotation_.signature ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "Signature" ]
                , name = "encode"
                }

        Symbol ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.Symbol.annotation_.symbol ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "Symbol" ]
                , name = "encode"
                }

        SymbolCode ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.SymbolCode.annotation_.symbolCode ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "SymbolCode" ]
                , name = "encode"
                }

        Asset ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.Asset.annotation_.asset ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "Asset" ]
                , name = "encode"
                }

        ExtendedAsset ->
            Elm.value
                { annotation =
                    Just
                        (Elm.Annotation.function [ Gen.Eos.ExtendedAsset.annotation_.extendedAsset ]
                            Gen.Json.Encode.annotation_.value
                        )
                , importFrom = [ "Eos", "ExtendedAsset" ]
                , name = "encode"
                }

        EosList innerType ->
            Elm.apply Gen.Json.Encode.values_.list [ generateEncoder innerType ]


intDecoder : Elm.Expression
intDecoder =
    Gen.Json.Decode.oneOf
        [ Gen.Json.Decode.int
        , Gen.Json.Decode.string
            |> Gen.Json.Decode.andThen
                (\stringValue ->
                    Elm.Case.maybe (Gen.String.call_.toInt stringValue)
                        { just = ( "validInt", Gen.Json.Decode.succeed )
                        , nothing =
                            Gen.Json.Decode.call_.fail
                                (Elm.Op.append
                                    (Elm.string "I got a String that should represent an Int, but it didn't parse to an Int. It was: ")
                                    stringValue
                                )
                        }
                )
        ]


toAnnotation : EosType -> Elm.Annotation.Annotation
toAnnotation eosType =
    -- elm-review: IGNORE TCO
    case eosType of
        EosBool ->
            Elm.Annotation.bool

        EosInt ->
            Elm.Annotation.int

        EosFloat ->
            Elm.Annotation.float

        TimePoint ->
            Gen.Eos.TimePoint.annotation_.timePoint

        TimePointSec ->
            Gen.Eos.TimePointSec.annotation_.timePointSec

        BlockTimestampType ->
            Gen.Time.annotation_.posix

        Name ->
            Gen.Eos.Name.annotation_.name

        EosString ->
            Elm.Annotation.string

        Checksum ->
            Gen.Eos.Checksum.annotation_.checksum

        PublicKey ->
            Gen.Eos.PublicKey.annotation_.publicKey

        Signature ->
            Gen.Eos.Signature.annotation_.signature

        Symbol ->
            Gen.Eos.Symbol.annotation_.symbol

        SymbolCode ->
            Gen.Eos.SymbolCode.annotation_.symbolCode

        Asset ->
            Gen.Eos.Asset.annotation_.asset

        ExtendedAsset ->
            Gen.Eos.ExtendedAsset.annotation_.extendedAsset

        EosList innerType ->
            Elm.Annotation.list (toAnnotation innerType)


{-| Turn a regular `EosType` into an `Elm.Expression`
-}
toExpression : EosType -> Elm.Expression
toExpression eosType =
    -- elm-review: IGNORE TCO
    case eosType of
        EosBool ->
            Gen.Eos.EosType.make_.eosBool

        EosInt ->
            Gen.Eos.EosType.make_.eosInt

        EosFloat ->
            Gen.Eos.EosType.make_.eosFloat

        TimePoint ->
            Gen.Eos.EosType.make_.timePoint

        TimePointSec ->
            Gen.Eos.EosType.make_.timePointSec

        BlockTimestampType ->
            Gen.Eos.EosType.make_.blockTimestampType

        Name ->
            Gen.Eos.EosType.make_.name

        EosString ->
            Gen.Eos.EosType.make_.eosString

        Checksum ->
            Gen.Eos.EosType.make_.checksum

        PublicKey ->
            Gen.Eos.EosType.make_.publicKey

        Signature ->
            Gen.Eos.EosType.make_.signature

        Symbol ->
            Gen.Eos.EosType.make_.symbol

        SymbolCode ->
            Gen.Eos.EosType.make_.symbolCode

        Asset ->
            Gen.Eos.EosType.make_.asset

        ExtendedAsset ->
            Gen.Eos.EosType.make_.extendedAsset

        EosList innerType ->
            Gen.Eos.EosType.make_.eosList (toExpression innerType)


toId : EosType -> Elm.Expression -> Elm.Expression
toId eosType value =
    -- elm-review: IGNORE TCO
    case eosType of
        EosBool ->
            Elm.apply (Elm.val "boolToString") [ value ]

        EosInt ->
            Gen.String.call_.fromInt value

        EosFloat ->
            Gen.String.call_.fromFloat value

        TimePoint ->
            Gen.String.call_.fromInt (Gen.Eos.TimePoint.toMicroseconds value)

        TimePointSec ->
            Gen.String.call_.fromInt (Gen.Eos.TimePointSec.toSeconds value)

        BlockTimestampType ->
            Gen.String.call_.fromInt (Gen.Time.posixToMillis value)

        Name ->
            Gen.Eos.Name.toString value
                |> Elm.withType Elm.Annotation.string

        EosString ->
            value

        Checksum ->
            Gen.Eos.Checksum.toString value

        PublicKey ->
            Gen.Eos.PublicKey.toString value

        Signature ->
            Gen.Eos.Signature.toString value

        Symbol ->
            Elm.Op.append
                (Gen.Eos.Symbol.precision value
                    |> Gen.String.call_.fromInt
                )
                (Gen.Eos.Symbol.code value
                    |> toId SymbolCode
                )
                |> Elm.withType Elm.Annotation.string

        SymbolCode ->
            Gen.Eos.SymbolCode.toString value

        Asset ->
            Elm.Op.append
                (Elm.get "amount" value
                    |> Gen.String.call_.fromFloat
                )
                (Elm.get "symbol" value
                    |> toId Symbol
                )

        ExtendedAsset ->
            Elm.Op.append
                (Elm.get "contract" value
                    |> toId Name
                )
                (Elm.get "symbol" value
                    |> toId Symbol
                )
                |> Elm.Op.append
                    (Elm.get "amount" value
                        |> Gen.String.call_.fromFloat
                    )

        EosList innerType ->
            [ Elm.string "["
            , value
                |> Elm.Op.pipe
                    (Elm.apply Gen.List.values_.map
                        [ Elm.functionReduced "x"
                            (\x -> toId innerType x)
                        ]
                    )
                |> Elm.Op.pipe
                    (Elm.apply Gen.String.values_.join [ Elm.string ";" ])
            , Elm.string "]"
            ]
                |> Elm.list
                |> Gen.String.call_.concat


toTypeName : EosType -> String
toTypeName eosType =
    -- elm-review: IGNORE TCO
    case eosType of
        EosBool ->
            "bool"

        EosInt ->
            "int"

        EosFloat ->
            "float"

        TimePoint ->
            "timePoint"

        TimePointSec ->
            "timePointSec"

        BlockTimestampType ->
            "blockTimestampType"

        Name ->
            "name"

        EosString ->
            "string"

        Checksum ->
            "checksum"

        PublicKey ->
            "publicKey"

        Signature ->
            "signature"

        Symbol ->
            "symbol"

        SymbolCode ->
            "symbolCode"

        Asset ->
            "asset"

        ExtendedAsset ->
            "extendedAsset"

        EosList innerType ->
            "list" ++ String.Extra.classify (toTypeName innerType)


valueToComparable : EosType -> (Elm.Expression -> Elm.Expression)
valueToComparable eosType expr =
    -- elm-review: IGNORE TCO
    case eosType of
        EosBool ->
            expr

        EosInt ->
            expr

        EosFloat ->
            expr

        TimePoint ->
            Gen.Eos.TimePoint.toMicroseconds expr

        TimePointSec ->
            Gen.Eos.TimePointSec.toSeconds expr

        BlockTimestampType ->
            Gen.Time.posixToMillis expr

        Name ->
            Gen.Eos.Name.toString expr

        EosString ->
            expr

        Checksum ->
            Gen.Eos.Checksum.toString expr

        PublicKey ->
            Gen.Eos.PublicKey.toString expr

        Signature ->
            Gen.Eos.Signature.toString expr

        Symbol ->
            Elm.tuple (Gen.Eos.Symbol.precision expr)
                (expr
                    |> Gen.Eos.Symbol.code
                    |> Gen.Eos.SymbolCode.toString
                )

        SymbolCode ->
            Gen.Eos.SymbolCode.toString expr

        Asset ->
            Elm.triple
                (Elm.get "symbol" expr
                    |> Gen.Eos.Symbol.precision
                )
                (Elm.get "symbol" expr
                    |> Gen.Eos.Symbol.code
                    |> Gen.Eos.SymbolCode.toString
                )
                (Elm.get "amount" expr)

        ExtendedAsset ->
            Elm.triple
                (Elm.get "contract" expr
                    |> Gen.Eos.Name.toString
                )
                (Elm.get "symbol" expr
                    |> Gen.Eos.Symbol.precision
                )
                (Elm.get "amount" expr
                    |> Elm.tuple
                        (Elm.get "symbol" expr
                            |> Gen.Eos.Symbol.code
                        )
                )

        EosList innerType ->
            Elm.apply Gen.List.values_.map
                [ Elm.functionReduced "expr" (valueToComparable innerType)
                , expr
                ]


valueToString : EosType -> Elm.Expression -> Elm.Expression
valueToString eosType expr =
    -- elm-review: IGNORE TCO
    case eosType of
        EosBool ->
            Elm.ifThen (Elm.Op.equal expr (Elm.int 1))
                (Elm.string "Yes")
                (Elm.string "No")

        EosInt ->
            Gen.String.call_.fromInt expr

        EosFloat ->
            Gen.String.call_.fromFloat expr

        TimePoint ->
            expr
                |> Gen.Eos.TimePoint.toMicroseconds
                |> Gen.String.call_.fromInt

        TimePointSec ->
            expr
                |> Gen.Eos.TimePointSec.toSeconds
                |> Gen.String.call_.fromInt

        BlockTimestampType ->
            expr
                |> Gen.Time.posixToMillis
                |> Gen.String.call_.fromInt

        Name ->
            Gen.Eos.Name.toString expr

        EosString ->
            expr

        Checksum ->
            Gen.Eos.Checksum.toString expr

        PublicKey ->
            Gen.Eos.PublicKey.toString expr

        Signature ->
            Gen.Eos.Signature.toString expr

        Symbol ->
            Gen.String.call_.concat
                (Elm.list
                    [ Gen.String.call_.fromInt (Gen.Eos.Symbol.precision expr)
                    , Elm.string ","
                    , expr
                        |> Gen.Eos.Symbol.code
                        |> Gen.Eos.SymbolCode.toString
                    ]
                )

        SymbolCode ->
            Gen.Eos.SymbolCode.toString expr

        Asset ->
            Gen.String.call_.join (Elm.string " ")
                ([ Gen.Mask.call_.float
                    (Gen.Mask.make_.precisely (Gen.Eos.Symbol.precision (Elm.get "symbol" expr)))
                    (Elm.record
                        [ ( "decimalSeparator", Elm.string "." )
                        , ( "thousandsSeparator", Elm.string "" )
                        ]
                    )
                    (Elm.get "amount" expr)
                 , Gen.Eos.Symbol.code (Elm.get "symbol" expr)
                    |> Gen.Eos.SymbolCode.toString
                 ]
                    |> Elm.list
                )

        ExtendedAsset ->
            Gen.String.call_.join (Elm.string " ")
                ([ Gen.Mask.call_.float
                    (Gen.Mask.make_.precisely (Gen.Eos.Symbol.precision (Elm.get "symbol" expr)))
                    (Elm.record
                        [ ( "decimalSeparator", Elm.string "." )
                        , ( "thousandsSeparator", Elm.string "" )
                        ]
                    )
                    (Elm.get "amount" expr)
                 , Gen.String.call_.join (Elm.string ".")
                    (Elm.list
                        [ Elm.get "contract" expr
                        , Gen.Eos.Symbol.code (Elm.get "symbol" expr)
                            |> Gen.Eos.SymbolCode.toString
                        ]
                    )
                 ]
                    |> Elm.list
                )

        EosList innerType ->
            Gen.String.call_.concat
                (Elm.list
                    [ Elm.string "["
                    , Elm.apply Gen.List.values_.map
                        [ Elm.functionReduced "expr" (valueToString innerType)
                        , expr
                        ]
                        |> Gen.String.call_.join (Elm.string ", ")
                    , Elm.string "]"
                    ]
                )
