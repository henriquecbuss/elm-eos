module Generate.Table.DecoderTests exposing (suite)

import Abi
import Elm.ToString
import EosType
import Expect
import Generate.Table.Decoder
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Generate.Table.DecoderTests"
        [ decoder ]


decoder : Test
decoder =
    describe "decoder"
        [ test "peopleTable" <|
            \_ ->
                peopleTable
                    |> Generate.Table.Decoder.generate
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal
                                "people : Json.Decode.Decoder Table.People"
                        , .body
                            >> Expect.equal """people : Json.Decode.Decoder Table.People
people =
    Json.Decode.Pipeline.required
        "assets"
        (Json.Decode.list Eos.Asset.decoder)
        (Json.Decode.Pipeline.required
            "name"
            Eos.Name.decoder
            (Json.Decode.succeed Table.People)
        )"""
                        ]
        , test "snakeCaseTable" <|
            \_ ->
                snakeCaseTable
                    |> Generate.Table.Decoder.generate
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal
                                "snakeCase : Json.Decode.Decoder Table.SnakeCase"
                        , .body
                            >> Expect.equal """snakeCase : Json.Decode.Decoder Table.SnakeCase
snakeCase =
    Json.Decode.Pipeline.required
        "snake_case"
        Json.Decode.bool
        (Json.Decode.succeed Table.SnakeCase)"""
                        ]
        ]


peopleTable : Abi.Table
peopleTable =
    { name = "people"
    , columns =
        [ { name = "name"
          , type_ = EosType.Name
          }
        , { name = "assets"
          , type_ = EosType.EosList EosType.Asset
          }
        ]
    }


snakeCaseTable : Abi.Table
snakeCaseTable =
    { name = "snake_case"
    , columns =
        [ { name = "snake_case"
          , type_ = EosType.EosBool
          }
        ]
    }
