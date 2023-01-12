module Generate.Table.MetadataTests exposing (suite)

import Abi
import Elm.ToString
import Expect
import Generate.Table.Metadata
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Generate.Table.Metadata"
        [ generateAllMetadata
        , generateTypeUnion
        ]


exampleTable1 : Abi.Table
exampleTable1 =
    { name = "table1"
    , columns = []
    }


exampleTable2 : Abi.Table
exampleTable2 =
    { name = "table2"
    , columns = []
    }


exampleTable3 : Abi.Table
exampleTable3 =
    { name = "table3"
    , columns = []
    }


prefix : List String
prefix =
    [ "Contract", "Ct" ]


generateAllMetadata : Test
generateAllMetadata =
    describe "allMetadata"
        [ test "generates for single table" <|
            \() ->
                Generate.Table.Metadata.allMetadata prefix [ exampleTable1 ]
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal """metadata :
    List { name : Eos.Name.Name
    , queryFunction : { scope : String } -> Eos.Query.Query Table
    }"""
                        , .body
                            >> Expect.equal """metadata :
    List { name : Eos.Name.Name
    , queryFunction : { scope : String } -> Eos.Query.Query Table
    }
metadata =
    Result.withDefault
        []
        (Result.Extra.combine
            [ Result.map
                (\\mapUnpack ->
                    { name = mapUnpack
                    , queryFunction =
                        \\scope ->
                            Eos.Query.map
                                Table1
                                (Contract.Ct.Table.Query.table1 scope)
                    }
                )
                (Eos.Name.fromString "table1")
            ]
        )


"""
                        ]
        , test "generates for three tables" <|
            \() ->
                Generate.Table.Metadata.allMetadata prefix [ exampleTable1, exampleTable2, exampleTable3 ]
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal """metadata :
    List { name : Eos.Name.Name
    , queryFunction : { scope : String } -> Eos.Query.Query Table
    }"""
                        , .body
                            >> Expect.equal """metadata :
    List { name : Eos.Name.Name
    , queryFunction : { scope : String } -> Eos.Query.Query Table
    }
metadata =
    Result.withDefault
        []
        (Result.Extra.combine
            [ Result.map
                (\\mapUnpack ->
                    { name = mapUnpack
                    , queryFunction =
                        \\scope ->
                            Eos.Query.map
                                Table1
                                (Contract.Ct.Table.Query.table1 scope)
                    }
                )
                (Eos.Name.fromString "table1")
            , Result.map
                (\\mapUnpack ->
                    { name = mapUnpack
                    , queryFunction =
                        \\scope ->
                            Eos.Query.map
                                Table2
                                (Contract.Ct.Table.Query.table2 scope)
                    }
                )
                (Eos.Name.fromString "table2")
            , Result.map
                (\\mapUnpack ->
                    { name = mapUnpack
                    , queryFunction =
                        \\scope ->
                            Eos.Query.map
                                Table3
                                (Contract.Ct.Table.Query.table3 scope)
                    }
                )
                (Eos.Name.fromString "table3")
            ]
        )


"""
                        ]
        ]


generateTypeUnion : Test
generateTypeUnion =
    describe "typeUnion"
        [ test "generates for single table" <|
            \() ->
                Generate.Table.Metadata.typeUnion prefix [ exampleTable1 ]
                    |> Elm.ToString.declaration
                    |> .body
                    |> Expect.equal """type Table
    = Table1 Contract.Ct.Table.Table1


"""
        , test "generates for three tables" <|
            \() ->
                Generate.Table.Metadata.typeUnion prefix [ exampleTable1, exampleTable2, exampleTable3 ]
                    |> Elm.ToString.declaration
                    |> .body
                    |> Expect.equal """type Table
    = Table1 Contract.Ct.Table.Table1
    | Table2 Contract.Ct.Table.Table2
    | Table3 Contract.Ct.Table.Table3


"""
        ]
