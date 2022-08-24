module Generate.Table.Query exposing (type_)

import Abi
import Elm
import String.Extra


type_ : List Abi.Table -> Elm.Declaration
type_ tables =
    Elm.customType "Table" (List.map tableVariant tables)


tableVariant : Abi.Table -> Elm.Variant
tableVariant table =
    Elm.variant (String.Extra.camelize table.name)
