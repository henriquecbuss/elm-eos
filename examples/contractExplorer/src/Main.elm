module Main exposing (Model, ModelWithFlags, Msg, main)

{-| The main module of our app

@docs Model, ModelWithFlags, Msg, main

-}

import Browser
import Browser.Dom
import Browser.Navigation as Nav exposing (Key)
import Effect
import Gen.Model
import Gen.Msg
import Gen.Pages as Pages
import Gen.Route as Route
import Html
import InteropDefinitions
import InteropPorts
import Json.Decode as Decode
import Pages.Home_
import Request
import Shared
import Task
import Url exposing (Url)
import View


{-| The main model of our app
-}
type alias Model =
    { url : Url
    , key : Key
    , shared : Shared.Model
    , page : Pages.Model
    }


{-| This is the Model that represents the case where we couldn't decode the flags
-}
type ModelWithFlags
    = WithValidFlags Model
    | WithInvalidFlags Decode.Error


{-| Everything our app can do
-}
type Msg
    = NoOp
    | ChangedUrl Url
    | ClickedLink Browser.UrlRequest
    | Shared Shared.Msg
    | Page Pages.Msg
    | GotToElmPort (Result Decode.Error InteropDefinitions.ToElm)


{-| This is what tells Elm what to do with our app
-}
main : Program Decode.Value ModelWithFlags Msg
main =
    Browser.application
        { init =
            \jsonFlags url key ->
                case InteropPorts.decodeFlags jsonFlags of
                    Ok flags ->
                        init flags url key
                            |> Tuple.mapFirst WithValidFlags

                    Err err ->
                        ( WithInvalidFlags err
                        , Decode.errorToString err
                            |> InteropDefinitions.Alert
                            |> InteropPorts.fromElm
                        )
        , onUrlChange = ChangedUrl
        , onUrlRequest = ClickedLink
        , subscriptions =
            \model ->
                case model of
                    WithValidFlags validModel ->
                        subscriptions validModel

                    WithInvalidFlags _ ->
                        Sub.none
        , update =
            \msg model ->
                case model of
                    WithValidFlags validModel ->
                        update msg validModel
                            |> Tuple.mapFirst WithValidFlags

                    WithInvalidFlags err ->
                        ( WithInvalidFlags err, Cmd.none )
        , view =
            \model ->
                case model of
                    WithValidFlags validModel ->
                        view validModel

                    WithInvalidFlags err ->
                        { title = ""
                        , body =
                            [ Html.p [] [ Html.text "Invalid flags:" ]
                            , Html.p [] [ Html.text (Decode.errorToString err) ]
                            ]
                        }
        }


init : InteropDefinitions.Flags -> Url -> Key -> ( Model, Cmd Msg )
init flags url key =
    let
        ( shared, sharedCmd ) =
            Shared.init (Request.create () url key) flags

        ( page, effect ) =
            Pages.init (Route.fromUrl url) shared url key
    in
    ( { url = url, key = key, shared = shared, page = page }
    , Cmd.batch
        [ Cmd.map Shared sharedCmd
        , Effect.toCmd ( Shared, Page ) effect
        ]
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        ChangedUrl url ->
            if url.path /= model.url.path then
                let
                    ( page, effect ) =
                        Pages.init (Route.fromUrl url) model.shared url model.key
                in
                ( { model | url = url, page = page }
                , Cmd.batch
                    [ Effect.toCmd ( Shared, Page ) effect
                    , Browser.Dom.setViewport 0 0
                        |> Task.perform (\_ -> NoOp)
                    ]
                )

            else
                ( { model | url = url }
                , case url.fragment of
                    Just fragment ->
                        InteropDefinitions.ScrollTo { querySelector = "#" ++ fragment }
                            |> InteropPorts.fromElm

                    Nothing ->
                        Cmd.none
                )

        ClickedLink (Browser.Internal url) ->
            ( model
            , Nav.pushUrl model.key (Url.toString url)
            )

        ClickedLink (Browser.External url) ->
            ( model
            , Nav.load url
            )

        Shared sharedMsg ->
            let
                ( shared, sharedCmd ) =
                    Shared.update (Request.create () model.url model.key) sharedMsg model.shared

                ( page, effect ) =
                    Pages.init (Route.fromUrl model.url) shared model.url model.key
            in
            if page == Gen.Model.Redirecting_ then
                ( { model | shared = shared, page = page }
                , Cmd.batch
                    [ Cmd.map Shared sharedCmd
                    , Effect.toCmd ( Shared, Page ) effect
                    ]
                )

            else
                ( { model | shared = shared }
                , Cmd.map Shared sharedCmd
                )

        Page pageMsg ->
            let
                ( page, effect ) =
                    Pages.update pageMsg model.page model.shared model.url model.key
            in
            ( { model | page = page }
            , Effect.toCmd ( Shared, Page ) effect
            )

        GotToElmPort (Ok toElm) ->
            ( model
            , Cmd.batch
                [ Shared.toElmSubscriptions toElm
                    |> Maybe.map Shared
                    |> Maybe.withDefault NoOp
                    |> Task.succeed
                    |> Task.perform identity
                , toElmSubscription model.page toElm
                    |> Maybe.map Page
                    |> Maybe.withDefault NoOp
                    |> Task.succeed
                    |> Task.perform identity
                ]
            )

        GotToElmPort (Err error) ->
            ( model
            , Decode.errorToString error
                |> InteropDefinitions.Alert
                |> InteropPorts.fromElm
            )



-- VIEW


toElmSubscription : Pages.Model -> InteropDefinitions.ToElm -> Maybe Gen.Msg.Msg
toElmSubscription page toElm =
    case page of
        Gen.Model.Redirecting_ ->
            Nothing

        Gen.Model.Home_ _ _ ->
            Pages.Home_.toElmSubscription toElm
                |> Maybe.map Gen.Msg.Home_

        Gen.Model.Contract__Name_ _ _ ->
            Nothing

        Gen.Model.NotFound _ ->
            Nothing



-- SUBSCRIPTIONS


view : Model -> Browser.Document Msg
view model =
    Pages.view model.page model.shared model.url model.key
        |> View.map Page
        |> View.toBrowserDocument



-- UTILS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Pages.subscriptions model.page model.shared model.url model.key
            |> Sub.map Page

        -- This example doesn't use shared subscriptions, but this is how you would add them
        -- , Shared.subscriptions (Request.create () model.url model.key) model.shared
        --     |> Sub.map Shared
        , Sub.map GotToElmPort InteropPorts.toElm
        ]
