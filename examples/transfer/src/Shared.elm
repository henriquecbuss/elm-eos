module Shared exposing
    ( Model
    , Msg
    , init, update
    , toElmSubscriptions
    )

{-| The shared module. This is where all the logic that's shared between pages
should live.

@docs Model

@docs Msg

@docs init, update

@docs toElmSubscriptions

-}

import InteropDefinitions
import Request exposing (Request)


{-| The shared model. Pages have access to this.
-}
type alias Model =
    {}


{-| Everything the Shared module can do. Other pages have read access to this.
You should expose functions to construct Msgs if you want to use them in other
modules.
-}
type Msg
    = NoOp


{-| Initialize the shared module
-}
init : Request -> InteropDefinitions.Flags -> ( Model, Cmd Msg )
init _ _ =
    ( {}, Cmd.none )


{-| Update the shared module
-}
update : Request -> Msg -> Model -> ( Model, Cmd Msg )
update _ msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


{-| Receive values from Typescript
-}
toElmSubscriptions : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscriptions _ =
    Nothing
