module Generate.Table exposing (record, type_)

import Abi
import Elm
import Elm.Annotation
import EosType
import String.Extra


record : Abi.Table -> Elm.Annotation.Annotation
record table =
    Elm.Annotation.record
        (List.map
            (\column ->
                ( String.Extra.camelize column.name
                , EosType.toAnnotation column.type_
                )
            )
            table.columns
        )


type_ : Abi.Table -> Elm.Declaration
type_ table =
    Elm.alias (String.Extra.classify table.name) (record table)
        |> Elm.withDocumentation ("Type representing the " ++ table.name ++ " table.")
