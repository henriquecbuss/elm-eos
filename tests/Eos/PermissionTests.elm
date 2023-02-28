module Eos.PermissionTests exposing (suite)

import Eos.Name
import Eos.Permission
import Expect
import Json.Decode as Decode
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Eos.Permission"
        [ jsonRoundTrip ]


jsonRoundTrip : Test
jsonRoundTrip =
    describe "encode and decode roundtrip"
        [ test "encoding and decoding of Owner results in Owner" <|
            \() ->
                Eos.Permission.encode Eos.Permission.Owner
                    |> Decode.decodeValue Eos.Permission.decoder
                    |> Expect.equal (Ok Eos.Permission.Owner)
        , test "encoding and decoding of Active results in Active" <|
            \() ->
                Eos.Permission.encode Eos.Permission.Active
                    |> Decode.decodeValue Eos.Permission.decoder
                    |> Expect.equal (Ok Eos.Permission.Active)
        , test "encoding and decoding of custom results in custom" <|
            \() ->
                case Eos.Name.fromString "custom" of
                    Ok name ->
                        Eos.Permission.Custom name
                            |> Eos.Permission.encode
                            |> Decode.decodeValue Eos.Permission.decoder
                            |> Expect.equal (Ok (Eos.Permission.Custom name))

                    Err _ ->
                        Expect.fail "Invalid name"
        ]
