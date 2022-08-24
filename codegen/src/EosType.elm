module EosType exposing (EosType(..), decoder, generateEncoder, toAnnotation)

import Elm
import Elm.Annotation
import Elm.Op
import Gen.Eos.Asset
import Gen.Eos.Checksum
import Gen.Eos.ExtendedAsset
import Gen.Eos.Name
import Gen.Eos.PublicKey
import Gen.Eos.Signature
import Gen.Eos.Symbol
import Gen.Eos.SymbolCode
import Gen.Eos.TimePoint
import Gen.Eos.TimePointSec
import Gen.Json.Encode
import Gen.Time
import Json.Decode


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


decoder : Json.Decode.Decoder EosType
decoder =
    Json.Decode.string
        |> Json.Decode.andThen
            (\decodedString ->
                case fromString decodedString of
                    Nothing ->
                        Json.Decode.fail "Invalid eos type."

                    Just validType ->
                        Json.Decode.succeed validType
            )


fromString : String -> Maybe EosType
fromString stringType =
    if String.endsWith "[]" stringType then
        String.dropRight 2 stringType
            |> fromString
            |> Maybe.map EosList

    else
        case stringType of
            "bool" ->
                Just EosBool

            "int8" ->
                Just EosInt

            "uint8" ->
                Just EosInt

            "int16" ->
                Just EosInt

            "uint16" ->
                Just EosInt

            "int32" ->
                Just EosInt

            "uint32" ->
                Just EosInt

            "int64" ->
                Just EosInt

            "uint64" ->
                Just EosInt

            "int128" ->
                Just EosInt

            "uint128" ->
                Just EosInt

            "varint32" ->
                Just EosInt

            "varuint32" ->
                Just EosInt

            "float32" ->
                Just EosFloat

            "float64" ->
                Just EosFloat

            "float128" ->
                Just EosFloat

            "time_point" ->
                Just TimePoint

            "time_point_sec" ->
                Just TimePointSec

            "block_timestamp_type" ->
                Just BlockTimestampType

            "name" ->
                Just Name

            "string" ->
                Just EosString

            "checksum160" ->
                Just Checksum

            "checksum256" ->
                Just Checksum

            "checksum512" ->
                Just Checksum

            "public_key" ->
                Just PublicKey

            "signature" ->
                Just Signature

            "symbol" ->
                Just Symbol

            "symbol_code" ->
                Just SymbolCode

            "asset" ->
                Just Asset

            "extended_asset" ->
                Just ExtendedAsset

            _ ->
                Nothing


generateEncoder : EosType -> Elm.Expression
generateEncoder eosType =
    case eosType of
        EosBool ->
            Gen.Json.Encode.values_.bool

        EosInt ->
            Gen.Json.Encode.values_.int

        EosFloat ->
            Gen.Json.Encode.values_.float

        TimePoint ->
            Gen.Eos.TimePoint.values_.encode

        TimePointSec ->
            Gen.Eos.TimePointSec.values_.encode

        BlockTimestampType ->
            Gen.Time.values_.posixToMillis
                |> Elm.Op.pipe Gen.Json.Encode.values_.int

        Name ->
            Gen.Eos.Name.values_.encode

        EosString ->
            Gen.Json.Encode.values_.string

        Checksum ->
            Gen.Eos.Checksum.values_.encode

        PublicKey ->
            Gen.Eos.PublicKey.values_.encode

        Signature ->
            Gen.Eos.Signature.values_.encode

        Symbol ->
            Gen.Eos.Symbol.values_.encode

        SymbolCode ->
            Gen.Eos.SymbolCode.values_.encode

        Asset ->
            Gen.Eos.Asset.values_.encode

        ExtendedAsset ->
            Gen.Eos.ExtendedAsset.values_.encode

        EosList innerType ->
            Elm.apply Gen.Json.Encode.values_.list [ generateEncoder innerType ]


toAnnotation : EosType -> Elm.Annotation.Annotation
toAnnotation eosType =
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
