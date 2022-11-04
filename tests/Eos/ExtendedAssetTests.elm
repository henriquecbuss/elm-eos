module Eos.ExtendedAssetTests exposing (suite)

import Eos.ExtendedAsset
import Eos.Name
import Eos.Symbol
import Expect
import Json.Decode as Decode
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Eos.ExtendedAsset"
        [ jsonRoundtrip
        ]


jsonRoundtrip : Test
jsonRoundtrip =
    describe "encode and decode roundtrip"
        [ test "10 EOS from contract eos.io encoding and decoding results in 10 EOS from contract eos.io" <|
            \() ->
                case
                    ( Eos.Symbol.fromPrecisionAndCodeString 0 "EOS"
                    , Eos.Name.fromString "eos.io"
                    )
                of
                    ( Ok symbol, Ok name ) ->
                        { amount = 10
                        , symbol = symbol
                        , contract = name
                        }
                            |> Eos.ExtendedAsset.encode
                            |> Decode.decodeValue Eos.ExtendedAsset.decoder
                            |> Expect.equal
                                (Ok
                                    { amount = 10
                                    , symbol = symbol
                                    , contract = name
                                    }
                                )

                    _ ->
                        Expect.fail "Invalid symbol or name"
        ]
