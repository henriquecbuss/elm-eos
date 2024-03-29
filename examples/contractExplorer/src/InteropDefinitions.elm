module InteropDefinitions exposing
    ( Flags, FromElm(..), ToElm(..)
    , interop
    )

{-| This is where we define the messages that can be exchanged between Elm and
Typescript

@docs Flags, FromElm, ToElm

@docs interop

-}

import Api.Action
import Eos.Name
import TsJson.Decode as TsDecode exposing (Decoder)
import TsJson.Encode as TsEncode exposing (Encoder, required)
import WalletProvider exposing (WalletProvider)


{-| The initial flags that we receive from Typescript
-}
type alias Flags =
    { walletProviders : List WalletProvider }


{-| Messages that we can send from Elm to Typescript
-}
type FromElm
    = Alert String
    | ScrollTo { querySelector : String }
    | ConnectWallet WalletProvider
    | DisconnectWallet
    | PerformEosTransaction Api.Action.Action


{-| Messages that we can send from Typescript to Elm
-}
type ToElm
    = Alerted
    | StartedConnectingToWallet WalletProvider
    | ErrorConnectingToWallet WalletProvider
    | ConnectedToWallet WalletProvider Eos.Name.Name
    | DisconnectedFromWallet WalletProvider
    | SubmittedTransaction Eos.Name.Name
    | ErrorSubmittingTransaction Eos.Name.Name


{-| This is what elm-ts-interop uses to figure out what to do with our app
-}
interop :
    { flags : Decoder Flags
    , fromElm : Encoder FromElm
    , toElm : Decoder ToElm
    }
interop =
    { flags = flags
    , fromElm = fromElm
    , toElm = toElm
    }


fromElm : Encoder FromElm
fromElm =
    TsEncode.union
        (\vAlert vScrollTo vConnectWallet vDisconnectWallet vPerformEosTransaction value ->
            case value of
                Alert string ->
                    vAlert string

                ScrollTo querySelector ->
                    vScrollTo querySelector

                ConnectWallet walletProvider ->
                    vConnectWallet walletProvider

                DisconnectWallet ->
                    vDisconnectWallet {}

                PerformEosTransaction action ->
                    vPerformEosTransaction { action = Api.Action.encode action }
        )
        |> TsEncode.variantTagged "alert"
            (TsEncode.object [ required "message" identity TsEncode.string ])
        |> TsEncode.variantTagged "scrollTo"
            (TsEncode.object [ required "querySelector" .querySelector TsEncode.string ])
        |> TsEncode.variantTagged "connectWallet"
            (TsEncode.object [ required "walletProviderId" WalletProvider.id TsEncode.string ])
        |> TsEncode.variantTagged "disconnectWallet" (TsEncode.object [])
        |> TsEncode.variantTagged "performEosTransaction"
            (TsEncode.object [ required "actions" .action TsEncode.value ])
        |> TsEncode.buildUnion


toElm : Decoder ToElm
toElm =
    TsDecode.discriminatedUnion "tag"
        [ ( "alerted"
          , TsDecode.succeed Alerted
          )
        , ( "startedConnectingToWallet"
          , TsDecode.at [ "data", "providerId" ] WalletProvider.decodeFromId
                |> TsDecode.map StartedConnectingToWallet
          )
        , ( "errorConnectingToWallet"
          , TsDecode.at [ "data", "providerId" ] WalletProvider.decodeFromId
                |> TsDecode.map ErrorConnectingToWallet
          )
        , ( "connectedToWallet"
          , TsDecode.succeed (\walletProvider accountName -> ConnectedToWallet walletProvider accountName)
                |> TsDecode.andMap (TsDecode.at [ "data", "providerId" ] WalletProvider.decodeFromId)
                |> TsDecode.andMap (TsDecode.at [ "data", "accountName" ] nameTsDecoder)
          )
        , ( "disconnectedFromWallet"
          , TsDecode.at [ "data", "providerId" ] WalletProvider.decodeFromId
                |> TsDecode.map DisconnectedFromWallet
          )
        , ( "submittedTransaction"
          , TsDecode.map SubmittedTransaction (TsDecode.at [ "data", "actionName" ] nameTsDecoder)
          )
        , ( "errorSubmittingTransaction"
          , TsDecode.map ErrorSubmittingTransaction (TsDecode.at [ "data", "actionName" ] nameTsDecoder)
          )
        ]


nameTsDecoder : Decoder Eos.Name.Name
nameTsDecoder =
    TsDecode.string
        |> TsDecode.andThen
            (TsDecode.andThenInit
                (\_ nameString ->
                    case Eos.Name.fromString nameString of
                        Ok validName ->
                            TsDecode.succeed validName

                        Err error ->
                            TsDecode.fail (Eos.Name.errorToString error)
                )
                |> TsDecode.andThenDecoder (TsDecode.succeed Nothing)
            )


flags : Decoder Flags
flags =
    TsDecode.succeed
        (\providers ->
            { walletProviders = providers
            }
        )
        |> TsDecode.andMap
            (TsDecode.field "walletProviderIds"
                (TsDecode.list TsDecode.string
                    |> TsDecode.map (List.filterMap WalletProvider.fromId)
                )
            )
