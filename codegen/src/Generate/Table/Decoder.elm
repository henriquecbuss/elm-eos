module Generate.Table.Decoder exposing (generate)

import Abi
import Elm
import Elm.Annotation
import EosType
import Gen.Json.Decode
import Gen.Json.Decode.Pipeline
import String.Extra


generate : Abi.Table -> Elm.Declaration
generate table =
    Elm.declaration (String.Extra.camelize table.name)
        (List.foldl
            (\column expression ->
                Gen.Json.Decode.Pipeline.required column.name
                    (EosType.generateDecoder column.type_)
                    expression
            )
            (Gen.Json.Decode.succeed
                (Elm.value
                    { importFrom = [ "Table" ]
                    , name = String.Extra.classify table.name
                    , annotation = Nothing
                    }
                )
            )
            table.columns
            |> Elm.withType
                (Gen.Json.Decode.annotation_.decoder
                    (Elm.Annotation.named [ "Table" ] (String.Extra.classify table.name))
                )
        )
