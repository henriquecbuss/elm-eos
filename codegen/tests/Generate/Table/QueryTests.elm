module Generate.Table.QueryTests exposing (suite)

import Abi
import Context exposing (Context)
import Elm.ToString
import EosType
import Expect
import Generate.Table.Query
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Generate.Table.Query"
        [ generateQuery
        ]


generateQuery : Test
generateQuery =
    describe "generateQuery"
        [ test "peopleTable" <|
            \() ->
                Generate.Table.Query.generateQuery context peopleTable
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "people : { scope : String } -> Eos.Query.Query Eos.Io.Table.People"
                        , .body
                            >> Expect.equal """people : { scope : String } -> Eos.Query.Query Eos.Io.Table.People
people arg =
    Eos.Query.Query
        { scope = arg.scope
        , indexPosition = Nothing
        , lowerBound = Nothing
        , upperBound = Nothing
        , limit = Nothing
        , reverse = False
        , baseUrl = "https://eos.io"
        , contract = "eos.io"
        , table = "people"
        , decoder = Eos.Io.Table.Decoder.people
        }"""
                        ]
        , test "snakeCaseTable" <|
            \() ->
                Generate.Table.Query.generateQuery context snakeCaseTable
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "snakeCase : { scope : String } -> Eos.Query.Query Eos.Io.Table.SnakeCase"
                        , .body
                            >> Expect.equal """snakeCase : { scope : String } -> Eos.Query.Query Eos.Io.Table.SnakeCase
snakeCase arg =
    Eos.Query.Query
        { scope = arg.scope
        , indexPosition = Nothing
        , lowerBound = Nothing
        , upperBound = Nothing
        , limit = Nothing
        , reverse = False
        , baseUrl = "https://eos.io"
        , contract = "eos.io"
        , table = "snake_case"
        , decoder = Eos.Io.Table.Decoder.snakeCase
        }"""
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
