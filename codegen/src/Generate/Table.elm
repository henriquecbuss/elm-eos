module Generate.Table exposing (type_)

import Abi
import Elm
import Elm.Annotation
import EosType
import String.Extra


type_ : Abi.Table -> Elm.Declaration
type_ table =
    Elm.alias (String.Extra.camelize table.name)
        (Elm.Annotation.record
            (table.columns
                |> List.map
                    (\column ->
                        ( String.Extra.camelize column.name
                        , EosType.toAnnotation column.type_
                        )
                    )
            )
        )
