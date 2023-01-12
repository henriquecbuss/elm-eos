module Eos.AssetTests exposing (suite)

import Eos.Asset
import Eos.Symbol
import Expect
import Json.Decode
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Eos.Asset"
        [ jsonRoundtrip
        , encode
        ]


jsonRoundtrip : Test
jsonRoundtrip =
    describe "encode and decode roundtrip"
        [ test "10 EOS encoding and decoding results in 10 EOS" <|
            \() ->
                case Eos.Symbol.fromPrecisionAndCodeString 0 "EOS" of
                    Ok symbol ->
                        Eos.Asset.encode { amount = 10, symbol = symbol }
                            |> Json.Decode.decodeValue Eos.Asset.decoder
                            |> Expect.equal (Ok { amount = 10, symbol = symbol })

                    Err _ ->
                        Expect.fail "Invalid symbol"
        ]


encode : Test
encode =
    describe "encode"
        [ test "works for precision 0" <|
            \() ->
                case Eos.Symbol.fromPrecisionAndCodeString 0 "EOS" of
                    Ok symbol ->
                        Eos.Asset.encode { amount = 10, symbol = symbol }
                            |> Json.Decode.decodeValue Json.Decode.string
                            |> Expect.equal (Ok "10 EOS")

                    Err _ ->
                        Expect.fail "Invalid symbol"
        , test "works for precision 1 without decimals" <|
            \() ->
                case Eos.Symbol.fromPrecisionAndCodeString 1 "EOS" of
                    Ok symbol ->
                        Eos.Asset.encode { amount = 10, symbol = symbol }
                            |> Json.Decode.decodeValue Json.Decode.string
                            |> Expect.equal (Ok "10.0 EOS")

                    Err _ ->
                        Expect.fail "Invalid symbol"
        , test "works for precision 2 without decimals" <|
            \() ->
                case Eos.Symbol.fromPrecisionAndCodeString 2 "EOS" of
                    Ok symbol ->
                        Eos.Asset.encode { amount = 10, symbol = symbol }
                            |> Json.Decode.decodeValue Json.Decode.string
                            |> Expect.equal (Ok "10.00 EOS")

                    Err _ ->
                        Expect.fail "Invalid symbol"
        , test "works for precision 2 with 1 decimal" <|
            \() ->
                case Eos.Symbol.fromPrecisionAndCodeString 2 "EOS" of
                    Ok symbol ->
                        Eos.Asset.encode { amount = 10.1, symbol = symbol }
                            |> Json.Decode.decodeValue Json.Decode.string
                            |> Expect.equal (Ok "10.10 EOS")

                    Err _ ->
                        Expect.fail "Invalid symbol"
        , test "works for precision 2 with 2 decimals" <|
            \() ->
                case Eos.Symbol.fromPrecisionAndCodeString 2 "EOS" of
                    Ok symbol ->
                        Eos.Asset.encode { amount = 10.12, symbol = symbol }
                            |> Json.Decode.decodeValue Json.Decode.string
                            |> Expect.equal (Ok "10.12 EOS")

                    Err _ ->
                        Expect.fail "Invalid symbol"
        ]
