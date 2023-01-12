module Eos.SymbolCodeTests exposing (suite)

import Eos.SymbolCode
import Expect
import Fuzz
import Json.Decode
import Test exposing (Test, describe, fuzz, test)


suite : Test
suite =
    describe "Eos.SymbolCode"
        [ stringRoundtrip
        , jsonRoundTrip
        ]


stringRoundtrip : Test
stringRoundtrip =
    describe "toString and fromString roundtrip"
        [ test "EOS fromString and toString results in EOS" <|
            \() ->
                Eos.SymbolCode.fromString "EOS"
                    |> Result.map Eos.SymbolCode.toString
                    |> Expect.equal (Ok "EOS")
        , fuzz Fuzz.string "fuzz fromString and toString" <|
            \fuzzedCode ->
                case Eos.SymbolCode.fromString fuzzedCode of
                    Ok code ->
                        Eos.SymbolCode.toString code
                            |> Expect.equal fuzzedCode

                    Err _ ->
                        Expect.pass
        ]


jsonRoundTrip : Test
jsonRoundTrip =
    describe "encode and decode roundtrip"
        [ test "EOS encoding and decoding results in EOS" <|
            \() ->
                case Eos.SymbolCode.fromString "EOS" of
                    Ok code ->
                        Eos.SymbolCode.encode code
                            |> Json.Decode.decodeValue Eos.SymbolCode.decoder
                            |> Expect.all
                                [ Expect.equal (Ok code)
                                , Result.map Eos.SymbolCode.toString
                                    >> Expect.equal (Ok "EOS")
                                ]

                    Err _ ->
                        Expect.fail "Invalid symbol code"
        , fuzz Fuzz.string "fuzz encoding and decoding" <|
            \fuzzedCode ->
                case Eos.SymbolCode.fromString fuzzedCode of
                    Ok code ->
                        Eos.SymbolCode.encode code
                            |> Json.Decode.decodeValue Eos.SymbolCode.decoder
                            |> Expect.all
                                [ Expect.equal (Ok code)
                                , Result.map Eos.SymbolCode.toString
                                    >> Expect.equal (Ok fuzzedCode)
                                ]

                    Err _ ->
                        Expect.pass
        ]
