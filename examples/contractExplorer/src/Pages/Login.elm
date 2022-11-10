module Pages.Login exposing
    ( Model, Msg, page
    , toElmSubscription
    )

{-| Login

@docs Model, Msg, page

@docs toElmSubscription

-}

import Effect exposing (Effect)
import Gen.Params.Login exposing (Params)
import Gen.Route
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events
import Html.Extra as HtmlX
import InteropDefinitions
import InteropPorts
import Page
import Request
import Shared
import View exposing (View)


{-| The model for this page
-}
type alias Model =
    { privateKey : String
    , privateKeyError : Maybe String
    }


{-| Everything this page can do
-}
type Msg
    = EnteredPrivateKey String
    | ClickedLogin


{-| This is how elm-spa knows what to do with our app
-}
page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared req =
    Page.advanced
        { init = init shared req
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }



-- INIT


init : Shared.Model -> Request.With Params -> ( Model, Effect Msg )
init shared req =
    ( { privateKey = ""
      , privateKeyError = Nothing
      }
    , case shared.user of
        Just _ ->
            Request.pushRoute Gen.Route.Home_ req
                |> Effect.fromCmd

        Nothing ->
            Effect.none
    )



-- UPDATE


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        EnteredPrivateKey privateKey ->
            ( { model
                | privateKey = privateKey
                , privateKeyError = Nothing
              }
            , Effect.none
            )

        ClickedLogin ->
            if String.isEmpty model.privateKey then
                ( { model | privateKeyError = Just "Private key cannot be empty" }
                , Effect.none
                )

            else
                ( model
                  -- Shared listens for the `LoggedIn` event and will redirect to
                  --  / when it happens
                , InteropDefinitions.Login { privateKey = model.privateKey }
                    |> InteropPorts.fromElm
                    |> Effect.fromCmd
                )



-- VIEW


view : Model -> View Msg
view model =
    { title = "Login"
    , body =
        [ Html.div [ class "bg-slate-100 h-full flex items-center px-4" ]
            [ Html.form
                [ class "w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow"
                , Html.Events.onSubmit ClickedLogin
                ]
                [ Html.h1 [ class "text-3xl font-bold" ]
                    [ Html.text "Login" ]
                , Html.label
                    [ class "flex flex-col mt-4" ]
                    [ Html.text "Private Key (base 58)"
                    , Html.input
                        [ class "border rounded px-2 py-1 mt-1"
                        , Attr.value model.privateKey
                        , Html.Events.onInput EnteredPrivateKey
                        ]
                        []
                    , HtmlX.viewMaybe
                        (\error ->
                            Html.p [ class "text-red-400" ] [ Html.text error ]
                        )
                        model.privateKeyError
                    ]
                , Html.button [ class "w-full rounded mt-6 bg-orange-400 text-white py-2 px-4 hover:bg-orange-300 active:bg-orange-500" ]
                    [ Html.text "Login" ]
                ]
            ]
        ]
    }



-- PORT SUBSCRIPTION


{-| Subscribe to messages from Typescript
-}
toElmSubscription : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscription _ =
    Nothing
