module Generate exposing (files)

{-| -}

import Abi
import Context
import Elm
import Generate.Action
import Generate.Table
import Generate.Table.Decoder
import Generate.Table.Query


files : List String -> List { contract : String, baseUrl : String, abi : Abi.Abi } -> List Elm.File
files base abis =
    List.concatMap
        (\{ contract, baseUrl, abi } ->
            filesFromAbi base
                { contract = contract, baseUrl = baseUrl }
                abi
        )
        abis


filesFromAbi : List String -> Context.Context -> Abi.Abi -> List Elm.File
filesFromAbi base context abi =
    let
        prefixedFile : List String -> List Elm.Declaration -> Elm.File
        prefixedFile suffix =
            Elm.file (base ++ Context.prefixed context suffix)
    in
    [ prefixedFile [ "Action" ]
        [ Generate.Action.type_ abi.actions
            |> Elm.expose
        , Generate.Action.encode context
            |> Elm.expose
        , Generate.Action.encodeSingleAction abi.actions
            |> Elm.expose
        , Generate.Action.getName abi.actions
        ]
    , prefixedFile [ "Table" ]
        (List.map Generate.Table.type_ abi.tables)
    , prefixedFile [ "Table", "Decoder" ]
        (List.map (Generate.Table.Decoder.generate context) abi.tables)
    , prefixedFile [ "Table", "Query" ]
        (List.map (Generate.Table.Query.generateQuery context) abi.tables)
    ]
