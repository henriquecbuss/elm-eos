module EosType exposing (EosType(..), decoder)

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


decoder : Json.Decode.Decoder EosType
decoder =
    Json.Decode.string
        |> Json.Decode.andThen
            (\decodedString ->
                case decodedString of
                    "bool" ->
                        Json.Decode.succeed EosBool

                    "int8" ->
                        Json.Decode.succeed EosInt

                    "uint8" ->
                        Json.Decode.succeed EosInt

                    "int16" ->
                        Json.Decode.succeed EosInt

                    "uint16" ->
                        Json.Decode.succeed EosInt

                    "int32" ->
                        Json.Decode.succeed EosInt

                    "uint32" ->
                        Json.Decode.succeed EosInt

                    "int64" ->
                        Json.Decode.succeed EosInt

                    "uint64" ->
                        Json.Decode.succeed EosInt

                    "int128" ->
                        Json.Decode.succeed EosInt

                    "uint128" ->
                        Json.Decode.succeed EosInt

                    "varint32" ->
                        Json.Decode.succeed EosInt

                    "varuint32" ->
                        Json.Decode.succeed EosInt

                    "float32" ->
                        Json.Decode.succeed EosFloat

                    "float64" ->
                        Json.Decode.succeed EosFloat

                    "float128" ->
                        Json.Decode.succeed EosFloat

                    "time_point" ->
                        Json.Decode.succeed TimePoint

                    "time_point_sec" ->
                        Json.Decode.succeed TimePointSec

                    "block_timestamp_type" ->
                        Json.Decode.succeed BlockTimestampType

                    "name" ->
                        Json.Decode.succeed Name

                    "string" ->
                        Json.Decode.succeed EosString

                    "checksum160" ->
                        Json.Decode.succeed Checksum

                    "checksum256" ->
                        Json.Decode.succeed Checksum

                    "checksum512" ->
                        Json.Decode.succeed Checksum

                    "public_key" ->
                        Json.Decode.succeed PublicKey

                    "signature" ->
                        Json.Decode.succeed Signature

                    "symbol" ->
                        Json.Decode.succeed Symbol

                    "symbol_code" ->
                        Json.Decode.succeed SymbolCode

                    "asset" ->
                        Json.Decode.succeed Asset

                    "extended_asset" ->
                        Json.Decode.succeed ExtendedAsset

                    _ ->
                        Json.Decode.fail "Invalid eos type"
            )
