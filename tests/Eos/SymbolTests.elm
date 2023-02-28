module Eos.SymbolTests exposing (suite)

import Eos.Symbol
import Eos.SymbolCode
import Expect
import Fuzz
import Json.Decode as Decode
import Test exposing (Test, describe, fuzz2, test)


suite : Test
suite =
    describe "Eos.Symbol"
        [ jsonRoundTrip
        ]


jsonRoundTrip : Test
jsonRoundTrip =
    describe "encode and decode roundtrip"
        [ test "1 EOS encoding and decoding results in 1 EOS" <|
            \() ->
                case Eos.Symbol.fromPrecisionAndCodeString 1 "EOS" of
                    Ok symbol ->
                        Eos.Symbol.encode symbol
                            |> Decode.decodeValue Eos.Symbol.decoder
                            |> Expect.all
                                [ Expect.equal (Ok symbol)
                                , Result.map Eos.Symbol.precision
                                    >> Expect.equal (Ok 1)
                                , Result.map
                                    (Eos.Symbol.code
                                        >> Eos.SymbolCode.toString
                                    )
                                    >> Expect.equal (Ok "EOS")
                                ]

                    Err _ ->
                        Expect.fail "Invalid symbol"
        , fuzz2 Fuzz.int Fuzz.string "fuzz encoding and decoding" <|
            \fuzzedPrecision fuzzedCode ->
                case Eos.Symbol.fromPrecisionAndCodeString fuzzedPrecision fuzzedCode of
                    Ok symbol ->
                        Eos.Symbol.encode symbol
                            |> Decode.decodeValue Eos.Symbol.decoder
                            |> Expect.all
                                [ Expect.equal (Ok symbol)
                                , Result.map Eos.Symbol.precision
                                    >> Expect.equal (Ok fuzzedPrecision)
                                , Result.map
                                    (Eos.Symbol.code
                                        >> Eos.SymbolCode.toString
                                    )
                                    >> Expect.equal (Ok fuzzedCode)
                                ]

                    Err _ ->
                        Expect.pass
        ]
