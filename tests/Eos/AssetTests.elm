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
        ]


jsonRoundtrip : Test
jsonRoundtrip =
    describe "encode and decode roundtrip"
        [ test "10 EOS encoding and decoding results in 10 EOS" <|
            \_ ->
                case Eos.Symbol.fromPrecisionAndCodeString 0 "EOS" of
                    Ok symbol ->
                        { amount = 10, symbol = symbol }
                            |> Eos.Asset.encode
                            |> Json.Decode.decodeValue Eos.Asset.decoder
                            |> Expect.equal (Ok { amount = 10, symbol = symbol })

                    Err _ ->
                        Expect.fail "Invalid symbol"
        ]
