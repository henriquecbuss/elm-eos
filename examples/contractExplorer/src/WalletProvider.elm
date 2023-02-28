module WalletProvider exposing (WalletProvider, decodeFromId, fromId, id, name)

import TsJson.Decode as TsDecode


type WalletProvider
    = Simpleos
    | Scatter


decodeFromId : TsDecode.Decoder WalletProvider
decodeFromId =
    TsDecode.string
        |> TsDecode.andThen
            (TsDecode.andThenInit
                (\failDecoder idString ->
                    case fromId idString of
                        Just provider ->
                            TsDecode.succeed provider

                        Nothing ->
                            failDecoder
                )
                |> TsDecode.andThenDecoder (TsDecode.fail "Invalid provider id.")
            )


fromId : String -> Maybe WalletProvider
fromId providerId =
    case providerId of
        "scatter" ->
            Just Scatter

        "simpleos" ->
            Just Simpleos

        _ ->
            Nothing


id : WalletProvider -> String
id provider =
    case provider of
        Simpleos ->
            "simpleos"

        Scatter ->
            "scatter"


name : WalletProvider -> String
name provider =
    case provider of
        Simpleos ->
            "Simpleos"

        Scatter ->
            "Scatter"
