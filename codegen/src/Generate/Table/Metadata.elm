module Generate.Table.Metadata exposing (allMetadata, typeUnion)

import Abi
import Elm
import Elm.Annotation
import Gen.Eos.Name
import Gen.Eos.Query
import Gen.Result
import Gen.Result.Extra
import String.Extra


allMetadata : List String -> List Abi.Table -> Elm.Declaration
allMetadata prefix tables =
    List.map (tableMetadata prefix) tables
        |> Gen.Result.Extra.combine
        |> Gen.Result.withDefault (Elm.list [])
        |> Elm.withType
            (Elm.Annotation.list
                (Elm.Annotation.record
                    [ ( "name", Gen.Eos.Name.annotation_.name )
                    , ( "queryFunction"
                      , Elm.Annotation.function
                            [ Elm.Annotation.record [ ( "scope", Elm.Annotation.string ) ]
                            ]
                            (Gen.Eos.Query.annotation_.query <| Elm.Annotation.named [] "Table")
                      )
                    ]
                )
            )
        |> Elm.declaration "metadata"
        |> Elm.withDocumentation "All metadata from this contract. You can use this to create auto generated apps for example"


tableMetadata : List String -> Abi.Table -> Elm.Expression
tableMetadata prefix table =
    Gen.Eos.Name.fromString table.name
        |> Gen.Result.map
            (\name ->
                Elm.record
                    [ ( "name", name )
                    , ( "queryFunction"
                      , Elm.fn ( "scope", Just (Elm.Annotation.record [ ( "scope", Elm.Annotation.string ) ]) )
                            (\scopeArg ->
                                Gen.Eos.Query.map
                                    (\query ->
                                        Elm.apply
                                            (Elm.value
                                                { annotation = Nothing
                                                , importFrom = []
                                                , name = String.Extra.classify table.name
                                                }
                                            )
                                            [ query ]
                                    )
                                    (Elm.apply
                                        (Elm.value
                                            { annotation = Nothing
                                            , importFrom = prefix ++ [ "Table", "Query" ]
                                            , name = table.name
                                            }
                                        )
                                        [ scopeArg ]
                                    )
                            )
                            |> Elm.withType
                                (Elm.Annotation.function
                                    [ Elm.Annotation.record
                                        [ ( "scope", Elm.Annotation.string )
                                        ]
                                    ]
                                    (Gen.Eos.Query.annotation_.query (Elm.Annotation.named [] "Table"))
                                )
                      )
                    ]
            )


typeUnion : List String -> List Abi.Table -> Elm.Declaration
typeUnion prefix tables =
    Elm.customType "Table"
        (List.map
            (\table ->
                Elm.variantWith table.name
                    [ Elm.Annotation.named (prefix ++ [ "Table" ]) table.name
                    ]
            )
            tables
        )
        |> Elm.withDocumentation "Type representing all possible tables"
