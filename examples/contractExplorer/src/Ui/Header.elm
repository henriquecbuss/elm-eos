module Ui.Header exposing (view)

{-| View the header that is present in most pages
-}

import Dropdown
import Gen.Route
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events
import Html.Extra as HtmlX
import Json.Decode as Decode
import Ui.Rive
import User
import WalletProvider exposing (WalletProvider)


walletButtonClass : Html.Attribute msg_
walletButtonClass =
    class "hover:bg-slate-100 hover:text-black transition-colors rounded px-4 py-1"


{-| View the header. You need to handle logging out yourself, by calling

    InteropPorts.fromElm InteropDefinitions.Logout
        |> Effect.fromCmd

-}
view :
    { connectWallet : WalletProvider -> msg
    , disconnectWallet : msg
    , dropdownState : Dropdown.State
    , updateDropdown : Dropdown.State -> msg
    , userState : User.State
    , walletProviders : List WalletProvider
    }
    -> Html.Html msg
view { connectWallet, disconnectWallet, dropdownState, updateDropdown, userState, walletProviders } =
    Html.header [ class "w-full py-2 bg-slate-700 text-white" ]
        [ Html.div [ class "container mx-auto px-4 flex items-center" ]
            [ Html.a [ Attr.href (Gen.Route.toHref Gen.Route.Home_) ]
                [ Html.h1 [ class "text-4xl font-bold" ] [ Html.text "elm-eos" ]
                ]
            , case userState of
                User.NotConnected ->
                    walletProvidersDropdown
                        { onConnect = connectWallet
                        , onToggle = updateDropdown
                        , state = dropdownState
                        , walletProviders =
                            List.map (\provider -> ( provider, NotConnected )) walletProviders
                        }

                User.Connecting connectingProvider ->
                    walletProvidersDropdown
                        { onConnect = connectWallet
                        , onToggle = updateDropdown
                        , state = dropdownState
                        , walletProviders =
                            List.map
                                (\provider ->
                                    if provider == connectingProvider then
                                        ( provider, Connecting )

                                    else
                                        ( provider, NotConnected )
                                )
                                walletProviders
                        }

                User.WithError errorProvider ->
                    walletProvidersDropdown
                        { onConnect = connectWallet
                        , onToggle = updateDropdown
                        , state = dropdownState
                        , walletProviders =
                            List.map
                                (\provider ->
                                    if provider == errorProvider then
                                        ( provider, WithError )

                                    else
                                        ( provider, NotConnected )
                                )
                                walletProviders
                        }

                User.Connected _ ->
                    Html.button
                        [ walletButtonClass
                        , class "ml-auto"
                        , Html.Events.onClick disconnectWallet
                        ]
                        [ Html.text "Disconnect wallet" ]
            ]
        ]


walletProvidersDropdown :
    { onConnect : WalletProvider -> msg
    , onToggle : Dropdown.State -> msg
    , state : Dropdown.State
    , walletProviders : List ( WalletProvider, ProviderStatus )
    }
    -> Html.Html msg
walletProvidersDropdown { onConnect, onToggle, state, walletProviders } =
    Dropdown.dropdown
        { identifier = "wallet-providers-dropdown"
        , toggleEvent = Dropdown.OnClick
        , drawerVisibleAttribute = class "visible opacity-100 !translate-y-0 transition-all"
        , onToggle = onToggle
        , layout =
            \{ toDrawer, toDropdown, toToggle } ->
                toDropdown Html.div
                    [ class "ml-auto isolate z-10" ]
                    [ toToggle Html.button
                        [ walletButtonClass
                        , Attr.classList [ ( "bg-slate-100 text-black", state ) ]
                        ]
                        [ Html.text "Connect wallet" ]
                    , toDrawer Html.div
                        [ class "bg-slate-700 text-white rounded-sm p-1 mt-1 border border-slate-600 shadow-lg opacity-0 -translate-y-4 transition-transform -z-10" ]
                        (List.map
                            (\( provider, status ) ->
                                walletProviderDropdownItem
                                    { onClick = onConnect provider
                                    , provider = provider
                                    , status = status
                                    }
                            )
                            walletProviders
                        )
                    ]
        , isToggled = state
        }


walletProviderDropdownItem : { onClick : msg, provider : WalletProvider, status : ProviderStatus } -> Html.Html msg
walletProviderDropdownItem { onClick, provider, status } =
    Html.button
        [ class "pl-4 pr-2 transition-colors w-full text-left rounded-sm flex items-center"
        , Attr.classList [ ( "hover:bg-slate-100 hover:text-black", status /= Connecting ) ]
        , Html.Events.custom "click"
            (Decode.succeed
                { message = onClick
                , preventDefault = True
                , stopPropagation = True
                }
            )
        , Attr.disabled (status == Connecting)
        ]
        [ Html.span
            [ class "py-2"
            , Attr.classList
                [ ( "pr-4", status /= NotConnected )
                , ( "pr-12", status == NotConnected )
                ]
            ]
            [ Html.text (WalletProvider.name provider) ]
        , case status of
            NotConnected ->
                HtmlX.nothing

            Connecting ->
                Ui.Rive.viewLoadingAnimation [ class "w-8 h-8 ml-auto" ]
                    Ui.Rive.Loading

            WithError ->
                Ui.Rive.viewLoadingAnimation [ class "w-8 h-8 ml-auto" ]
                    Ui.Rive.Failure
        ]


type ProviderStatus
    = NotConnected
    | Connecting
    | WithError
