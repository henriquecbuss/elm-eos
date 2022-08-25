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
            \_ ->
                peopleTable
                    |> Generate.Table.Query.generateQuery context
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "people : { scope : String } -> Eos.Query.Query Table.People"
                        , .body
                            >> Expect.equal """people : { scope : String } -> Eos.Query.Query Table.People
people arg =
    Eos.Query.Query
        { scope = arg.scope
        , indexPosition = Nothing
        , lowerBound = Nothing
        , upperBound = Nothing
        , limit = Nothing
        , reverse = False
        , baseUrl = "testurl"
        , contract = "test.contract"
        , table = "people"
        , decoder = Table.Decoder.people
        }"""
                        ]
        , test "snakeCaseTable" <|
            \_ ->
                snakeCaseTable
                    |> Generate.Table.Query.generateQuery context
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal "snakeCase : { scope : String } -> Eos.Query.Query Table.SnakeCase"
                        , .body
                            >> Expect.equal """snakeCase : { scope : String } -> Eos.Query.Query Table.SnakeCase
snakeCase arg =
    Eos.Query.Query
        { scope = arg.scope
        , indexPosition = Nothing
        , lowerBound = Nothing
        , upperBound = Nothing
        , limit = Nothing
        , reverse = False
        , baseUrl = "testurl"
        , contract = "test.contract"
        , table = "snake_case"
        , decoder = Table.Decoder.snakeCase
        }"""
                        ]
        ]


context : Context
context =
    { baseUrl = "testurl"
    , contract = "test.contract"
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
