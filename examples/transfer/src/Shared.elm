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

import Gen.Route
import InteropDefinitions
import Request exposing (Request)


{-| The shared model. Pages have access to this.
-}
type alias Model =
    { user : Maybe { privateKey : String }
    }


{-| Everything the Shared module can do. Other pages have read access to this.
You should expose functions to construct Msgs if you want to use them in other
modules.
-}
type Msg
    = LoggedIn { privateKey : String }
    | LoggedOut


{-| Initialize the shared module
-}
init : Request -> InteropDefinitions.Flags -> ( Model, Cmd Msg )
init _ flags =
    case flags.privateKey of
        Just privateKey ->
            ( { user = Just { privateKey = privateKey } }
            , Cmd.none
            )

        Nothing ->
            ( { user = Nothing }
            , Cmd.none
            )


{-| Update the shared module
-}
update : Request -> Msg -> Model -> ( Model, Cmd Msg )
update req msg model =
    case msg of
        LoggedIn { privateKey } ->
            ( { model | user = Just { privateKey = privateKey } }
            , Request.pushRoute Gen.Route.Home_ req
            )

        LoggedOut ->
            ( { model | user = Nothing }
            , Request.pushRoute Gen.Route.Login req
            )


{-| Receive values from Typescript
-}
toElmSubscriptions : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscriptions toElm =
    case toElm of
        InteropDefinitions.LoggedIn privateKey ->
            Just (LoggedIn privateKey)

        InteropDefinitions.LoggedOut ->
            Just LoggedOut

        _ ->
            Nothing
