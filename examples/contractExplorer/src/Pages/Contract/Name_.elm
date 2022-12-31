module Pages.Contract.Name_ exposing (Model, Msg, page)

import AssocList as Dict
import Effect exposing (Effect)
import Eos.Name
import Gen.Params.Contract.Name_ exposing (Params)
import Gen.Route
import Heroicons.Outline
import Heroicons.Solid
import Html
import Html.Attributes as Attr exposing (class)
import InteropDefinitions
import InteropPorts
import Page
import Request
import Shared
import Svg.Attributes
import Ui.AutoAnimate
import Ui.Header
import View exposing (View)


page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared req =
    Page.advanced
        { init = init shared req
        , update = update
        , view = view req
        , subscriptions = subscriptions
        }



-- INIT


type Model
    = InvalidContractName Eos.Name.Error
    | ContractNameDoesntExist Eos.Name.Name
    | ValidContract Eos.Name.Name { actions : List (), tables : List () }


init : Shared.Model -> Request.With Params -> ( Model, Effect Msg )
init shared req =
    case Eos.Name.fromString req.params.name of
        Err err ->
            ( InvalidContractName err, Effect.none )

        Ok validName ->
            case Dict.get validName shared.contracts of
                Nothing ->
                    ( ContractNameDoesntExist validName, Effect.none )

                Just validContract ->
                    ( ValidContract validName validContract, Effect.none )



-- UPDATE


type Msg
    = ClickedLogout


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        ClickedLogout ->
            ( model
            , InteropPorts.fromElm InteropDefinitions.Logout
                |> Effect.fromCmd
            )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


view : Request.With Params -> Model -> View Msg
view req model =
    { title = "Contract " ++ req.params.name
    , body =
        [ Ui.Header.view { logout = ClickedLogout }
        , Html.main_ [ class "h-full bg-slate-100 pt-4" ]
            [ case model of
                InvalidContractName err ->
                    viewError
                        (Html.div []
                            [ Html.p []
                                [ Html.text "You were looking for the "
                                , Html.strong [ class "text-indigo-600" ] [ Html.text req.params.name ]
                                , Html.text " contract, but it's not a valid contract name. Here's why:"
                                ]
                            , Html.p [ class "mt-4 ml-4 pl-4 border-l-4 rounded border-indigo-600 text-gray-500" ]
                                [ Html.text (Eos.Name.errorToString err) ]
                            ]
                        )

                ContractNameDoesntExist name ->
                    viewError
                        (Html.div []
                            [ Html.p []
                                [ Html.text "You were looking for the "
                                , Html.strong [ class "text-indigo-600" ] [ Html.text (Eos.Name.toString name) ]
                                , Html.text " contract, but it doesn't exist."
                                ]
                            , Html.p [ class "mt-2" ] [ Html.text "If you think it should exist, you should include it in the command you used to generate the contracts." ]
                            ]
                        )

                ValidContract name { actions, tables } ->
                    Html.div [ class "container mx-auto px-4" ]
                        [ Html.div [ class "flex items-center justify-between" ]
                            [ Html.h2 [ class "py-2 text-xl" ] [ Html.text <| Eos.Name.toString name ]
                            ]
                        , viewTables tables
                        , viewActions actions
                        ]
            ]
        ]
    }


viewError : Html.Html msg -> Html.Html msg
viewError err =
    Html.div [ class "-mt-14 h-full container mx-auto px-4 flex items-center" ]
        [ Html.div [ class "bg-white w-full max-w-xl mx-auto rounded shadow-lg px-8 py-4 flex flex-col" ]
            [ Heroicons.Outline.exclamationTriangle [ Svg.Attributes.class "w-24 h-24 text-indigo-600 mx-auto" ]
            , Html.p [ class "font-bold text-indigo-600 mx-auto mb-6" ]
                [ Html.text "Uh oh, something went wrong" ]
            , err
            , Html.a
                [ class "mt-12 px-4 py-2 bg-indigo-600 w-full text-center text-white rounded hover:bg-indigo-500 active:bg-indigo-700"
                , Attr.href (Gen.Route.toHref Gen.Route.Home_)
                ]
                [ Html.text "Go back home"
                ]
            ]
        ]


viewTables : List () -> Html.Html msg
viewTables tables =
    Html.details [ class "border border-zinc-200 bg-white w-full p-4 rounded mt-4" ]
        [ Html.summary [ class "marker-hidden" ] [ Html.h3 [ class "text-lg" ] [ Html.text "Tables" ] ]
        ]


viewActions : List () -> Html.Html msg
viewActions actions =
    Html.details [ class "border border-zinc-200 bg-white w-full p-4 rounded mt-4" ]
        [ Html.summary [ class "marker-hidden" ] [ Html.h3 [ class "text-lg" ] [ Html.text "Actions" ] ]
        ]
