module Eos.PermissionTests exposing (suite)

import Eos.Name
import Eos.Permission
import Expect
import Json.Decode
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Eos.Permission"
        [ jsonRoundTrip ]


jsonRoundTrip : Test
jsonRoundTrip =
    describe "encode and decode roundtrip"
        [ test "encoding and decoding of Owner results in Owner" <|
            \_ ->
                Eos.Permission.Owner
                    |> Eos.Permission.encode
                    |> Json.Decode.decodeValue Eos.Permission.decoder
                    |> Expect.equal (Ok Eos.Permission.Owner)
        , test "encoding and decoding of Active results in Active" <|
            \_ ->
                Eos.Permission.Active
                    |> Eos.Permission.encode
                    |> Json.Decode.decodeValue Eos.Permission.decoder
                    |> Expect.equal (Ok Eos.Permission.Active)
        , test "encoding and decoding of custom results in custom" <|
            \_ ->
                case Eos.Name.fromString "custom" of
                    Err _ ->
                        Expect.fail "Invalid name"

                    Ok name ->
                        Eos.Permission.Custom name
                            |> Eos.Permission.encode
                            |> Json.Decode.decodeValue Eos.Permission.decoder
                            |> Expect.equal (Ok (Eos.Permission.Custom name))
        ]
