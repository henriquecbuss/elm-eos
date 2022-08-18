module Eos.NameTests exposing (suite)

import Eos.Name
import Expect
import Fuzz
import Json.Decode
import Test exposing (Test, describe, fuzz, test)


suite : Test
suite =
    describe "Eos.Name"
        [ stringRoundtrip
        , jsonRoundTrip
        ]


stringRoundtrip : Test
stringRoundtrip =
    describe "toString and fromString roundtrip"
        [ test "eosio.token fromString and toString results in eosio.token" <|
            \_ ->
                "eosio.token"
                    |> Eos.Name.fromString
                    |> Result.map Eos.Name.toString
                    |> Expect.equal (Ok "eosio.token")
        , fuzz Fuzz.string "fuzz fromString and toString" <|
            \fuzzedName ->
                case Eos.Name.fromString fuzzedName of
                    Ok name ->
                        Eos.Name.toString name
                            |> Expect.equal (sanitize fuzzedName)

                    Err _ ->
                        Expect.pass
        ]


jsonRoundTrip : Test
jsonRoundTrip =
    describe "encode and decode roundtrip"
        [ test "eosio.token encoding and decoding results in eosio.token" <|
            \_ ->
                case Eos.Name.fromString "eosio.token" of
                    Err _ ->
                        Expect.fail "Invalid name"

                    Ok name ->
                        name
                            |> Eos.Name.encode
                            |> Json.Decode.decodeValue Eos.Name.decoder
                            |> Expect.all
                                [ Expect.equal (Ok name)
                                , Result.map Eos.Name.toString
                                    >> Expect.equal (Ok "eosio.token")
                                ]
        , fuzz Fuzz.string "fuzz encoding and decoding" <|
            \fuzzedName ->
                case Eos.Name.fromString fuzzedName of
                    Err _ ->
                        Expect.pass

                    Ok name ->
                        name
                            |> Eos.Name.encode
                            |> Json.Decode.decodeValue Eos.Name.decoder
                            |> Expect.all
                                [ Expect.equal (Ok name)
                                , Result.map Eos.Name.toString
                                    >> Expect.equal (Ok (sanitize fuzzedName))
                                ]
        ]


sanitize : String -> String
sanitize =
    String.trim >> String.toLower
