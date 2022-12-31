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

import AssocList as Dict
import Eos.Name
import Gen.Route
import InteropDefinitions
import Request exposing (Request)
import Result.Extra as ResultX


{-| The shared model. Pages have access to this.
-}
type alias Model =
    { user : Maybe { privateKey : String }
    , contracts : Dict.Dict Eos.Name.Name { actions : List (), tables : List () }
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
    let
        makeContract :
            { actions : List ()
            , tables : List ()
            }
            -> Eos.Name.Name
            ->
                ( Eos.Name.Name
                , { actions : List ()
                  , tables : List ()
                  }
                )
        makeContract actionsAndTables name =
            ( name
            , actionsAndTables
            )

        cambiatusCm : Result Eos.Name.Error ( Eos.Name.Name, { actions : List (), tables : List () } )
        cambiatusCm =
            Eos.Name.fromString "cambiatus.cm"
                |> Result.map
                    (makeContract { actions = List.repeat 16 (), tables = List.repeat 4 () })

        cambiatusTk : Result Eos.Name.Error ( Eos.Name.Name, { actions : List (), tables : List () } )
        cambiatusTk =
            Eos.Name.fromString "cambiatus.tk"
                |> Result.map
                    (makeContract
                        { actions = List.repeat 12 ()
                        , tables = List.repeat 8 ()
                        }
                    )

        eosIo : Result Eos.Name.Error ( Eos.Name.Name, { actions : List (), tables : List () } )
        eosIo =
            Eos.Name.fromString "eos.io"
                |> Result.map
                    (makeContract
                        { actions = List.repeat 4 ()
                        , tables = List.repeat 2 ()
                        }
                    )

        contracts : Dict.Dict Eos.Name.Name { actions : List (), tables : List () }
        contracts =
            ResultX.combine
                [ eosIo
                , cambiatusTk
                , cambiatusCm
                ]
                |> Result.withDefault []
                |> Dict.fromList
    in
    case flags.privateKey of
        Just privateKey ->
            ( { user = Just { privateKey = privateKey }
              , contracts = contracts
              }
            , Cmd.none
            )

        Nothing ->
            ( { user = Nothing
              , contracts = contracts
              }
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
