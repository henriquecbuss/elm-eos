module Generate.Action.Metadata exposing (allMetadata)

import Abi
import Elm
import Elm.Annotation
import EosType
import Gen.Dict
import Gen.Eos.EosType
import Gen.Eos.Name
import Gen.Result
import Gen.Result.Extra


allMetadata : List Abi.Action -> Elm.Declaration
allMetadata actions =
    List.map actionMetadata actions
        |> Gen.Result.Extra.combine
        |> Gen.Result.withDefault (Elm.list [])
        |> Elm.withType
            (Elm.Annotation.list
                (Elm.Annotation.record
                    [ ( "name", Gen.Eos.Name.annotation_.name )
                    , ( "fields"
                      , Gen.Dict.annotation_.dict
                            Elm.Annotation.string
                            Gen.Eos.EosType.annotation_.eosType
                      )
                    ]
                )
            )
        |> Elm.declaration "metadata"
        |> Elm.withDocumentation "All metadata for actions in this contract. You can use this to create auto generated apps, for example"


actionMetadata : Abi.Action -> Elm.Expression
actionMetadata action =
    Gen.Eos.Name.fromString action.name
        |> Gen.Result.map
            (\name ->
                Elm.record
                    [ ( "name", name )
                    , ( "fields"
                      , List.map (\arg -> Elm.tuple (Elm.string arg.name) (EosType.toExpression arg.type_))
                            action.arguments
                            |> Gen.Dict.fromList
                      )
                    ]
            )
