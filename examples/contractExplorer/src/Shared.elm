module Shared exposing
    ( Model
    , Table(..)
    , Msg
    , init, update
    , toElmSubscriptions
    )

{-| The shared module. This is where all the logic that's shared between pages
should live.

@docs Model

@docs Table

@docs Msg

@docs init, update

@docs toElmSubscriptions

-}

import AssocList as Dict
import Cambiatus.Cm.Table.Metadata
import Cambiatus.Tk.Table.Metadata
import Eos.Name
import Eos.Query
import Gen.Route
import InteropDefinitions
import Request exposing (Request)
import Result.Extra as ResultX


{-| The shared model. Pages have access to this.
-}
type alias Model =
    { user : Maybe { privateKey : String }
    , contracts :
        Dict.Dict
            Eos.Name.Name
            { actions : List ()
            , tables : List { name : Eos.Name.Name, queryFunction : { scope : String } -> Eos.Query.Query Table }
            }
    }


{-| All possible tables
-}
type Table
    = CambiatusCmTable Cambiatus.Cm.Table.Metadata.Table
    | CambiatusTkTable Cambiatus.Tk.Table.Metadata.Table
    | EosIoTable


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
        contracts : Dict.Dict Eos.Name.Name { actions : List (), tables : List { name : Eos.Name.Name, queryFunction : { scope : String } -> Eos.Query.Query Table } }
        contracts =
            ResultX.combine
                [ eosIo
                , cambiatusTk
                , cambiatusCm
                ]
                |> Result.withDefault []
                |> Dict.fromList

        makeContract : { actions : List (), tables : List { name : Eos.Name.Name, queryFunction : { scope : String } -> Eos.Query.Query response } } -> (response -> Table) -> Eos.Name.Name -> ( Eos.Name.Name, { actions : List (), tables : List { name : Eos.Name.Name, queryFunction : { scope : String } -> Eos.Query.Query Table } } )
        makeContract { actions, tables } toTable name =
            ( name
            , { actions = actions
              , tables =
                    List.map
                        (\table ->
                            { name = table.name
                            , queryFunction =
                                table.queryFunction
                                    >> Eos.Query.map toTable
                            }
                        )
                        tables
              }
            )

        cambiatusCm : Result Eos.Name.Error ( Eos.Name.Name, { actions : List (), tables : List { name : Eos.Name.Name, queryFunction : { scope : String } -> Eos.Query.Query Table } } )
        cambiatusCm =
            Eos.Name.fromString "cambiatus.cm"
                |> Result.map
                    (makeContract
                        { actions = List.repeat 16 ()
                        , tables = Cambiatus.Cm.Table.Metadata.metadata
                        }
                        CambiatusCmTable
                    )

        cambiatusTk : Result Eos.Name.Error ( Eos.Name.Name, { actions : List (), tables : List { name : Eos.Name.Name, queryFunction : { scope : String } -> Eos.Query.Query Table } } )
        cambiatusTk =
            Eos.Name.fromString "cambiatus.tk"
                |> Result.map
                    (makeContract
                        { actions = List.repeat 12 ()
                        , tables = Cambiatus.Tk.Table.Metadata.metadata
                        }
                        CambiatusTkTable
                    )

        eosIo : Result Eos.Name.Error ( Eos.Name.Name, { actions : List (), tables : List { name : Eos.Name.Name, queryFunction : { scope : String } -> Eos.Query.Query Table } } )
        eosIo =
            Eos.Name.fromString "eos.io"
                |> Result.map
                    (makeContract
                        { actions = List.repeat 4 ()
                        , tables = []
                        }
                        (\_ -> EosIoTable)
                    )
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
