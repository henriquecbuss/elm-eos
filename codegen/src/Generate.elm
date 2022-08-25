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


main : Program Json.Decode.Value () ()
main =
    Generate.fromJson
        (Json.Decode.map2 (\context abi -> { context = context, abi = abi })
            (Json.Decode.field "context" Context.decoder)
            (Json.Decode.field "abi" Abi.decoder)
        )
        (\{ context, abi } ->
            [ Elm.file [ "Action" ]
                [ Generate.Action.type_ abi.actions
                    |> Elm.expose
                , Generate.Action.encode abi.actions
                    |> Elm.expose
                ]
            , Elm.file [ "Table" ]
                (List.map Generate.Table.type_ abi.tables)
            , Elm.file [ "Table", "Decoder" ]
                (List.map Generate.Table.Decoder.generate abi.tables)
            , Elm.file [ "Table", "Query" ]
                (List.map (Generate.Table.Query.generateQuery context) abi.tables)
            ]
        )
