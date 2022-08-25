module Generate.Table.Query exposing (generateQuery)

import Abi
import Context exposing (Context)
import Elm
import Elm.Annotation
import Gen.Eos.Query
import String.Extra


generateQuery : Context -> Abi.Table -> Elm.Declaration
generateQuery context table =
    Elm.declaration (String.Extra.camelize table.name)
        (Elm.fn
            ( "arg"
            , Just (Elm.Annotation.record [ ( "scope", Elm.Annotation.string ) ])
            )
            (\arg ->
                Gen.Eos.Query.make_.query
                    (Elm.record
                        [ ( "scope", Elm.get "scope" arg )
                        , ( "indexPosition", Elm.nothing )
                        , ( "lowerBound", Elm.nothing )
                        , ( "upperBound", Elm.nothing )
                        , ( "limit", Elm.nothing )
                        , ( "reverse", Elm.bool False )
                        , ( "baseUrl", Elm.string context.baseUrl )
                        , ( "contract", Elm.string context.contract )
                        , ( "table", Elm.string table.name )
                        , ( "decoder"
                          , Elm.value
                                { importFrom = [ "Table", "Decoder" ]
                                , name = String.Extra.camelize table.name
                                , annotation = Nothing
                                }
                          )
                        ]
                    )
            )
            |> Elm.withType
                (Elm.Annotation.function
                    [ Elm.Annotation.record [ ( "scope", Elm.Annotation.string ) ]
                    ]
                    (Elm.Annotation.namedWith [ "Eos", "Query" ]
                        "Query"
                        [ Elm.Annotation.named [ "Table" ] (String.Extra.camelize table.name) ]
                    )
                )
        )
