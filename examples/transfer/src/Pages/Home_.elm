module Pages.Home_ exposing
    ( Model, Msg, page
    , toElmSubscription
    )

{-| Home\_

@docs Model, Msg, page

@docs toElmSubscription

-}

import Effect exposing (Effect)
import Gen.Params.Home_ exposing (Params)
import InteropDefinitions
import Page
import Request
import Shared
import View exposing (View)


{-| The model for this page
-}
type alias Model =
    {}


{-| Everything this page can do
-}
type Msg
    = NoOp


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
    ( {}, Effect.none )



-- UPDATE


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Effect.none )



-- VIEW


view : Shared.Model -> Model -> View Msg
view _ _ =
    { title = "elm-watch starter"
    , body =
        []
    }



-- PORT SUBSCRIPTION


{-| Subscribe to messages from Typescript
-}
toElmSubscription : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscription _ =
    Nothing
