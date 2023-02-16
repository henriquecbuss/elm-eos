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
import Cambiatus.Cm.Action.Metadata
import Cambiatus.Cm.Table.Metadata
import Cambiatus.Tk.Action.Metadata
import Cambiatus.Tk.Table.Metadata
import Eos.EosType
import Eos.Name
import Eos.Query
import EosTable
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
            { actions : List { name : Eos.Name.Name, fields : Dict.Dict Eos.Name.Name Eos.EosType.EosType }
            , tables :
                List
                    { name : Eos.Name.Name
                    , queryFunction : { scope : String } -> Eos.Query.Query EosTable.Table
                    }
            }
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
        contracts :
            Dict.Dict
                Eos.Name.Name
                { actions :
                    List
                        { name : Eos.Name.Name
                        , fields : Dict.Dict Eos.Name.Name Eos.EosType.EosType
                        }
                , tables : List EosTable.Metadata
                }
        contracts =
            ResultX.combine
                [ cambiatusTk
                , cambiatusCm
                ]
                |> Result.withDefault []
                |> Dict.fromList

        makeContract :
            { actions :
                List
                    { name : Eos.Name.Name
                    , fields : Dict.Dict Eos.Name.Name Eos.EosType.EosType
                    }
            , tables :
                List
                    { name : Eos.Name.Name
                    , queryFunction : { scope : String } -> Eos.Query.Query response
                    }
            }
            -> (response -> EosTable.Table)
            -> Eos.Name.Name
            ->
                ( Eos.Name.Name
                , { actions :
                        List
                            { name : Eos.Name.Name
                            , fields : Dict.Dict Eos.Name.Name Eos.EosType.EosType
                            }
                  , tables : List EosTable.Metadata
                  }
                )
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

        cambiatusCm :
            Result
                Eos.Name.Error
                ( Eos.Name.Name
                , { actions :
                        List
                            { name : Eos.Name.Name
                            , fields : Dict.Dict Eos.Name.Name Eos.EosType.EosType
                            }
                  , tables : List EosTable.Metadata
                  }
                )
        cambiatusCm =
            Eos.Name.fromString "cambiatus.cm"
                |> Result.map
                    (makeContract
                        { actions = Cambiatus.Cm.Action.Metadata.metadata
                        , tables = Cambiatus.Cm.Table.Metadata.metadata
                        }
                        EosTable.CambiatusCmTable
                    )

        cambiatusTk :
            Result
                Eos.Name.Error
                ( Eos.Name.Name
                , { actions :
                        List
                            { name : Eos.Name.Name
                            , fields : Dict.Dict Eos.Name.Name Eos.EosType.EosType
                            }
                  , tables : List EosTable.Metadata
                  }
                )
        cambiatusTk =
            Eos.Name.fromString "cambiatus.tk"
                |> Result.map
                    (makeContract
                        { actions = Cambiatus.Tk.Action.Metadata.metadata
                        , tables = Cambiatus.Tk.Table.Metadata.metadata
                        }
                        EosTable.CambiatusTkTable
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
