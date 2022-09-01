module Generate exposing (files)

{-| -}

import Abi
import Context
import Elm
import Generate.Action
import Generate.Table
import Generate.Table.Decoder
import Generate.Table.Query


files : List { contract : String, baseUrl : String, abi : Abi.Abi } -> List Elm.File
files abis =
    List.concatMap
        (\{ contract, baseUrl, abi } ->
            filesFromAbi
                { contract = contract, baseUrl = baseUrl }
                abi
        )
        abis


filesFromAbi : Context.Context -> Abi.Abi -> List Elm.File
filesFromAbi context abi =
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
