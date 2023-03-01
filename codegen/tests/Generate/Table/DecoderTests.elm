module Generate.Table.DecoderTests exposing (suite)

import Abi
import Context exposing (Context)
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
            \() ->
                Generate.Table.Decoder.generate context peopleTable
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .docs
                            >> Expect.equal "Decoder for the people table."
                        , .signature
                            >> Expect.equal
                                "people : Json.Decode.Decoder Eos.Io.Table.People"
                        , .body
                            >> Expect.equal """people : Json.Decode.Decoder Eos.Io.Table.People
people =
    Json.Decode.succeed Eos.Io.Table.People
        |> Json.Decode.Pipeline.required "name" Eos.Name.decoder
        |> Json.Decode.Pipeline.required
            "assets"
            (Json.Decode.list Eos.Asset.decoder)


"""
                        ]
        , test "snakeCaseTable" <|
            \() ->
                Generate.Table.Decoder.generate context snakeCaseTable
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .docs
                            >> Expect.equal "Decoder for the snake_case table."
                        , .signature
                            >> Expect.equal
                                "snakeCase : Json.Decode.Decoder Eos.Io.Table.SnakeCase"
                        , .body
                            >> Expect.equal """snakeCase : Json.Decode.Decoder Eos.Io.Table.SnakeCase
snakeCase =
    Json.Decode.succeed Eos.Io.Table.SnakeCase
        |> Json.Decode.Pipeline.required "snake_case" Json.Decode.bool


"""
                        ]
        ]


context : Context
context =
    { baseUrl = "https://eos.io"
    , contract = "eos.io"
    }


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
