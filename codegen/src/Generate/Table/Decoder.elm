module Generate.Table.Decoder exposing (generate, generateIntDecoder)

import Abi
import Context exposing (Context)
import Elm
import Elm.Annotation
import Elm.Op
import EosType
import Gen.Json.Decode
import Gen.Json.Decode.Pipeline
import String.Extra


generate : Context -> Abi.Table -> Elm.Declaration
generate context table =
    Elm.declaration (String.Extra.camelize table.name)
        (List.foldl
            (\column ->
                Elm.Op.pipe
                    (Elm.apply Gen.Json.Decode.Pipeline.values_.required
                        [ Elm.string column.name, EosType.generateDecoder column.type_ ]
                    )
            )
            (Gen.Json.Decode.succeed
                (Elm.value
                    { annotation = Nothing
                    , importFrom = Context.prefixed context [ "Table" ]
                    , name = String.Extra.classify table.name
                    }
                )
            )
            table.columns
            |> Elm.withType
                (Gen.Json.Decode.annotation_.decoder
                    (Elm.Annotation.named
                        (Context.prefixed context [ "Table" ])
                        (String.Extra.classify table.name)
                    )
                )
        )
        |> Elm.withDocumentation ("Decoder for the " ++ table.name ++ " table.")


generateIntDecoder : Elm.Declaration
generateIntDecoder =
    Elm.declaration "intDecoder" EosType.intDecoder
        |> Elm.withDocumentation "Decoder for an integer, which deals with the case that an int may come as a string"
