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

import Cambiatus.Cm.Action
import Cambiatus.Tk.Action
import Dict exposing (Dict)
import Effect exposing (Effect)
import Eos.Asset
import Eos.Name
import Eos.Permission
import Eos.Symbol
import Gen.Params.Home_ exposing (Params)
import Heroicons.Solid
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events
import Html.Extra as HtmlX
import Html.Keyed
import InteropDefinitions
import InteropPorts
import Page
import Request
import Result.Extra as ResultX
import Shared
import Simple.Fuzzy
import Svg.Attributes
import Ui.AutoAnimate
import View exposing (View)


{-| The model for this page
-}
type alias Model =
    { contracts : List { name : Eos.Name.Name, actions : List (), tables : List () }
    , searchString : String
    }


{-| Everything this page can do
-}
type Msg
    = ClickedLogout
    | EnteredSearchString String


{-| This is how elm-spa knows what to do with our app
-}
page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared _ =
    Page.protected.advanced
        (\_ ->
            { init = init
            , update = update
            , view = view shared
            , subscriptions = \_ -> Sub.none
            }
        )



-- INIT


init : ( Model, Effect Msg )
init =
    let
        cambiatusCm : Result Eos.Name.Error { name : Eos.Name.Name, actions : List (), tables : List () }
        cambiatusCm =
            Eos.Name.fromString "cambiatus.cm"
                |> Result.map
                    (\name ->
                        { name = name
                        , actions = List.repeat 16 ()
                        , tables = List.repeat 4 ()
                        }
                    )

        cambiatusTk : Result Eos.Name.Error { name : Eos.Name.Name, actions : List (), tables : List () }
        cambiatusTk =
            Eos.Name.fromString "cambiatus.tk"
                |> Result.map
                    (\name ->
                        { name = name
                        , actions = List.repeat 12 ()
                        , tables = List.repeat 8 ()
                        }
                    )

        eosIo : Result Eos.Name.Error { name : Eos.Name.Name, actions : List (), tables : List () }
        eosIo =
            Eos.Name.fromString "eos.io"
                |> Result.map
                    (\name ->
                        { name = name
                        , actions = List.repeat 4 ()
                        , tables = List.repeat 2 ()
                        }
                    )

        contracts : Result Eos.Name.Error (List { name : Eos.Name.Name, actions : List (), tables : List () })
        contracts =
            ResultX.combine
                [ cambiatusCm
                , cambiatusTk
                , eosIo
                ]
    in
    ( { contracts = Result.withDefault [] contracts
      , searchString = ""
      }
    , Effect.none
    )



-- UPDATE


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        ClickedLogout ->
            ( model
            , InteropPorts.fromElm InteropDefinitions.Logout
                |> Effect.fromCmd
            )

        EnteredSearchString searchString ->
            ( { model | searchString = searchString }, Effect.none )



-- VIEW


view : Shared.Model -> Model -> View Msg
view _ model =
    { title = "elm-watch starter"
    , body =
        [ viewHeader { logout = ClickedLogout }
        , viewContracts model
        ]
    }


viewHeader : { logout : msg } -> Html.Html msg
viewHeader { logout } =
    Html.header [ class "w-full py-2 bg-slate-700 text-white" ]
        [ Html.div [ class "container mx-auto px-4 flex" ]
            [ Html.h1 [ class "text-4xl font-bold" ] [ Html.text "elm-eos" ]
            , Html.button
                [ class "ml-auto hover:bg-slate-100 hover:text-black transition-colors rounded px-4 py-1"
                , Html.Events.onClick logout
                ]
                [ Html.text "Logout" ]
            ]
        ]


viewContracts : Model -> Html.Html Msg
viewContracts model =
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
                , Heroicons.Solid.magnifyingGlass [ Svg.Attributes.class "text-gray-400 w-4 h-4 absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none" ]
                ]
            ]
        , Ui.AutoAnimate.viewKeyed
            [ class "container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4"
            ]
            (model.contracts
                |> Simple.Fuzzy.filter (.name >> Eos.Name.toString) model.searchString
                |> List.map
                    (\contract ->
                        ( Eos.Name.toString contract.name
                        , viewContractCard contract
                        )
                    )
            )
        ]


viewContractCard : { name : Eos.Name.Name, actions : List (), tables : List () } -> Html.Html msg
viewContractCard { name, actions, tables } =
    Html.a [ class "flex items-center justify-between bg-white rounded shadow py-4 px-6 group" ]
        [ Html.div []
            [ Html.div [ class "font-semibold leading-tight" ]
                [ Html.text (Eos.Name.toString name) ]
            , Html.div [ class "text-gray-500 leading-tight" ]
                [ Html.text (String.fromInt (List.length actions))
                , Html.text " actions, "
                , Html.text (String.fromInt (List.length tables))
                , Html.text " tables"
                ]
            ]
        , Heroicons.Solid.chevronRight [ Svg.Attributes.class "w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" ]
        ]



-- PORT SUBSCRIPTION


{-| Subscribe to messages from Typescript
-}
toElmSubscription : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscription _ =
    Nothing


type InputType
    = Text
    | Number
