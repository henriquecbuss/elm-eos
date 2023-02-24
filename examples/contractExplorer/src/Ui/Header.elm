module Ui.Header exposing (view)

{-| View the header that is present in most pages
-}

import Dropdown
import Gen.Route
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events
import User exposing (User)
import WalletProvider exposing (WalletProvider)


{-| View the header. You need to handle logging out yourself, by calling

    InteropPorts.fromElm InteropDefinitions.Logout
        |> Effect.fromCmd

-}
view :
    { user : Maybe User
    , disconnectWallet : msg
    , connectWallet : WalletProvider -> msg
    , updateDropdown : Dropdown.State -> msg
    , dropdownState : Dropdown.State
    , walletProviders : List WalletProvider
    }
    -> Html.Html msg
view { user, connectWallet, disconnectWallet, updateDropdown, dropdownState, walletProviders } =
    Html.header [ class "w-full py-2 bg-slate-700 text-white" ]
        [ Html.div [ class "container mx-auto px-4 flex items-center" ]
            [ Html.a [ Attr.href (Gen.Route.toHref Gen.Route.Home_) ]
                [ Html.h1 [ class "text-4xl font-bold" ] [ Html.text "elm-eos" ]
                ]
            , case user of
                Nothing ->
                    walletProvidersDropdown
                        { onToggle = updateDropdown
                        , state = dropdownState
                        , walletProviders = walletProviders
                        , onConnect = connectWallet
                        }

                Just _ ->
                    Html.button
                        [ walletButtonClass
                        , class "ml-auto"
                        , Html.Events.onClick disconnectWallet
                        ]
                        [ Html.text "Disconnect wallet" ]
            ]
        ]


walletButtonClass : Html.Attribute msg_
walletButtonClass =
    class "hover:bg-slate-100 hover:text-black transition-colors rounded px-4 py-1"


walletProvidersDropdown :
    { onToggle : Dropdown.State -> msg
    , state : Dropdown.State
    , walletProviders : List WalletProvider
    , onConnect : WalletProvider -> msg
    }
    -> Html.Html msg
walletProvidersDropdown { onToggle, state, walletProviders, onConnect } =
    Dropdown.dropdown
        { identifier = "wallet-providers-dropdown"
        , toggleEvent = Dropdown.OnClick
        , drawerVisibleAttribute = class "visible opacity-100 !translate-y-0 transition-all"
        , onToggle = onToggle
        , layout =
            \{ toDropdown, toToggle, toDrawer } ->
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
                            (\provider ->
                                walletProviderDropdownItem
                                    { onClick = onConnect provider
                                    , provider = provider
                                    }
                            )
                            walletProviders
                        )
                    ]
        , isToggled = state
        }


walletProviderDropdownItem : { onClick : msg, provider : WalletProvider } -> Html.Html msg
walletProviderDropdownItem { onClick, provider } =
    Html.button
        [ class "px-4 py-2 hover:bg-slate-100 hover:text-black transition-colors w-full text-left rounded-sm"
        , Html.Events.onClick onClick
        ]
        [ Html.text (WalletProvider.name provider) ]
