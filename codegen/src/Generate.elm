module Generate exposing (main)

{-| -}

import Abi
import Elm
import Gen.CodeGen.Generate as Generate
import Generate.Action
import Generate.Table.Query
import Json.Decode


main : Program Json.Decode.Value () ()
main =
    Generate.fromJson Abi.decoder
        (\abi ->
            [ Elm.file [ "Action" ]
                [ Generate.Action.type_ abi.actions
                    |> Elm.expose
                , Generate.Action.encode abi.actions
                    |> Elm.expose
                ]
            , Elm.file [ "Table", "Query" ]
                [ Generate.Table.Query.type_ abi.tables
                    |> Elm.expose
                ]
            ]
        )
