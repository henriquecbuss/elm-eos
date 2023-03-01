module WalletProvider exposing
    ( WalletProvider
    , decodeFromId, fromId
    , id, name
    )

{-| This module defines the WalletProvider type and functions for working with
it. This allows us to represent supported 3rd party applications that provide
wallets to interface with the blockchain.

@docs WalletProvider


## Creating a WalletProvider

@docs decodeFromId, fromId


## Extracting data

@docs id, name

-}

import TsJson.Decode as TsDecode


{-| A wallet provider. These are 3rd party applications that provide wallets to
interface with the blockchain.
-}
type WalletProvider
    = Simpleos
    | Scatter


{-| Decode a wallet provider from a String id
-}
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


{-| Create a wallet provider from a String id
-}
fromId : String -> Maybe WalletProvider
fromId providerId =
    case providerId of
        "scatter" ->
            Just Scatter

        "simpleos" ->
            Just Simpleos

        _ ->
            Nothing


{-| Get the id of a wallet provider
-}
id : WalletProvider -> String
id provider =
    case provider of
        Simpleos ->
            "simpleos"

        Scatter ->
            "scatter"


{-| Get the name of a wallet provider
-}
name : WalletProvider -> String
name provider =
    case provider of
        Simpleos ->
            "Simpleos"

        Scatter ->
            "Scatter"
