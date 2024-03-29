module Pages.Home_ exposing
    ( Model
    , Msg, page
    , toElmSubscription
    )

{-| Home\_

@docs Model

@docs Msg, page

@docs toElmSubscription

-}

import Api.GenericTable
import AssocList
import Dict
import Dropdown
import Effect exposing (Effect)
import Eos.EosType
import Eos.Name
import Gen.Params.Home_ exposing (Params)
import Gen.Route
import Heroicons.Solid
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events
import InteropDefinitions
import InteropPorts
import Page
import Request
import Shared
import Simple.Fuzzy
import Svg.Attributes as SvgAttr
import Ui.AutoAnimate
import Ui.Header
import View exposing (View)
import WalletProvider exposing (WalletProvider)


{-| The model for this page
-}
type alias Model =
    { searchString : String
    , connectWalletDropdownState : Dropdown.State
    }


{-| Everything this page can do
-}
type Msg
    = ClickedDisconnectWallet
    | UpdatedConnectWalletDropdown Dropdown.State
    | ClickedConnectWallet WalletProvider
    | EnteredSearchString String


{-| This is how elm-spa knows what to do with our app
-}
page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared _ =
    Page.advanced
        { init = init
        , update = update
        , view = view shared
        , subscriptions = \_ -> Sub.none
        }



-- INIT


init : ( Model, Effect Msg )
init =
    ( { searchString = ""
      , connectWalletDropdownState = False
      }
    , Effect.none
    )



-- UPDATE


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        ClickedDisconnectWallet ->
            ( model
            , InteropPorts.fromElm InteropDefinitions.DisconnectWallet
                |> Effect.fromCmd
            )

        UpdatedConnectWalletDropdown dropdownState ->
            ( { model | connectWalletDropdownState = dropdownState }, Effect.none )

        ClickedConnectWallet provider ->
            ( model
            , InteropPorts.fromElm (InteropDefinitions.ConnectWallet provider)
                |> Effect.fromCmd
            )

        EnteredSearchString searchString ->
            ( { model | searchString = searchString }, Effect.none )



-- VIEW


view : Shared.Model -> Model -> View Msg
view shared model =
    { title = "elm-eos"
    , body =
        [ Ui.Header.view
            { connectWallet = ClickedConnectWallet
            , disconnectWallet = ClickedDisconnectWallet
            , dropdownState = model.connectWalletDropdownState
            , updateDropdown = UpdatedConnectWalletDropdown
            , userState = shared.userState
            , walletProviders = shared.walletProviders
            }
        , viewContracts shared.contracts model
        ]
    }


viewContracts :
    AssocList.Dict
        Eos.Name.Name
        { actions : List { fields : Dict.Dict String Eos.EosType.EosType, name : Eos.Name.Name }
        , tables : List Api.GenericTable.Metadata
        }
    -> Model
    -> Html.Html Msg
viewContracts contractsDict model =
    Html.main_ [ class "h-full bg-slate-100 pt-4" ]
        [ Html.div [ class "container mx-auto px-4 flex items-center justify-between" ]
            [ Html.h2 [ class "text-xl" ] [ Html.text "Contracts" ]
            , Html.div [ class "relative" ]
                [ Html.input
                    [ class "placeholder:text-gray-400 bg-white border rounded py-2 pl-4 pr-10 w-80"
                    , Attr.placeholder "Search"
                    , Attr.value model.searchString
                    , Html.Events.onInput EnteredSearchString
                    ]
                    []
                , Heroicons.Solid.magnifyingGlass [ SvgAttr.class "text-gray-400 w-4 h-4 absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none" ]
                ]
            ]
        , Ui.AutoAnimate.viewKeyed
            [ class "container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4"
            ]
            (AssocList.toList contractsDict
                |> Simple.Fuzzy.filter
                    (Tuple.first
                        >> Eos.Name.toString
                    )
                    model.searchString
                |> List.map
                    (\( contractName, { actions, tables } ) ->
                        ( Eos.Name.toString contractName
                        , viewContractCard
                            { actions = actions
                            , name = contractName
                            , tables = tables
                            }
                        )
                    )
            )
        ]


viewContractCard :
    { actions : List { fields : Dict.Dict String Eos.EosType.EosType, name : Eos.Name.Name }
    , name : Eos.Name.Name
    , tables : List Api.GenericTable.Metadata
    }
    -> Html.Html msg_
viewContractCard { actions, name, tables } =
    Html.a
        [ class "flex items-center justify-between bg-white rounded shadow py-4 px-6 hover:shadow-md transition-shadow"
        , Gen.Route.Contract__Name_ { name = Eos.Name.toString name }
            |> Gen.Route.toHref
            |> Attr.href
        ]
        [ Html.div []
            [ Html.div [ class "font-semibold leading-tight" ]
                [ Html.text (Eos.Name.toString name) ]
            , Html.div [ class "text-gray-500 leading-tight" ]
                [ List.length actions
                    |> String.fromInt
                    |> Html.text
                , Html.text " actions, "
                , List.length tables
                    |> String.fromInt
                    |> Html.text
                , Html.text " tables"
                ]
            ]
        , Heroicons.Solid.chevronRight [ SvgAttr.class "w-4 h-4 text-gray-400" ]
        ]



-- PORT SUBSCRIPTION


{-| Subscribe to messages from Typescript
-}
toElmSubscription : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscription _ =
    Nothing
