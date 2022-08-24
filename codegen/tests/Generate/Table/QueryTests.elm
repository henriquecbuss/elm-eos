module Generate.Table.QueryTests exposing (suite)

import Abi
import Elm.ToString
import EosType
import Expect
import Generate.Table.Query
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Generate.Table.Query"
        [ type_
        ]


type_ : Test
type_ =
    describe "type_"
        [ test "peopleTable" <|
            \_ ->
                [ peopleTable ]
                    |> Generate.Table.Query.type_
                    |> Elm.ToString.declaration
                    |> .body
                    |> Expect.equal """type Table
    = People"""
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
