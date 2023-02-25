module WalletProvider exposing (WalletProvider, decodeFromId, fromId, id, name)

import Json.Decode
import TsJson.Decode as TsDecode


type WalletProvider
    = Simpleos
    | Scatter


fromId : String -> Maybe WalletProvider
fromId providerId =
    case providerId of
        "simpleos" ->
            Just Simpleos

        "scatter" ->
            Just Scatter

        _ ->
            Nothing


id : WalletProvider -> String
id provider =
    case provider of
        Simpleos ->
            "simpleos"

        Scatter ->
            "scatter"


decodeFromId : TsDecode.Decoder WalletProvider
decodeFromId =
    TsDecode.string
        |> TsDecode.andThen
            (TsDecode.andThenInit
                (\failDecoder idString ->
                    case fromId idString of
                        Nothing ->
                            failDecoder

                        Just provider ->
                            TsDecode.succeed provider
                )
                |> TsDecode.andThenDecoder (TsDecode.fail "Invalid provider id.")
            )


name : WalletProvider -> String
name provider =
    case provider of
        Simpleos ->
            "Simpleos"

        Scatter ->
            "Scatter"
