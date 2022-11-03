module Pages.{{module}} exposing
    ( Model, Msg, page
    , toElmSubscription
    )

{-| {{module}}

@docs Model, Msg, page

@docs toElmSubscription

-}

import Gen.Params.{{module}} exposing (Params)
import Page
import Request
import Shared
import View exposing (View)
import InteropDefinitions



{-| The model for this page
-}
type alias Model =
    {}


{-| Everything this page can do
-}
type Msg
    = ReplaceMe


{-| This is how elm-spa knows what to do with our app
-}
page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared req =
    Page.element
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( {}, Cmd.none )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ReplaceMe ->
            ( model, Cmd.none )



-- VIEW


view : Model -> View Msg
view model =
    View.placeholder "{{module}}"



-- PORT SUBSCRIPTION


{-| Subscribe to messages from Typescript
-}
toElmSubscription : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscription toElm =
    case toElm of
        _ ->
            Nothing
