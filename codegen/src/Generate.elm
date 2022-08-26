module Generate exposing (main)

{-| -}

import Abi
import Context
import Elm
import Gen.CodeGen.Generate as Generate
import Generate.Action
import Generate.Table
import Generate.Table.Decoder
import Generate.Table.Query
import Json.Decode
import String.Extra


main : Program Json.Decode.Value () ()
main =
    Generate.fromJson
        (Json.Decode.map2 (\context abi -> { context = context, abi = abi })
            (Json.Decode.field "context" Context.decoder)
            (Json.Decode.field "abi" Abi.decoder)
        )
        (\{ context, abi } ->
            let
                prefixedFile : List String -> List Elm.Declaration -> Elm.File
                prefixedFile suffix =
                    Elm.file (Context.prefixed context suffix)
            in
            [ prefixedFile [ "Action" ]
                [ Generate.Action.type_ abi.actions
                    |> Elm.expose
                , Generate.Action.encode abi.actions
                    |> Elm.expose
                ]
            , prefixedFile [ "Table" ]
                (List.map Generate.Table.type_ abi.tables)
            , prefixedFile [ "Table", "Decoder" ]
                (List.map (Generate.Table.Decoder.generate context) abi.tables)
            , prefixedFile [ "Table", "Query" ]
                (List.map (Generate.Table.Query.generateQuery context) abi.tables)
            ]
        )
