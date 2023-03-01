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

import AssocList
import Cambiatus.Cm.Action.Metadata
import Cambiatus.Cm.Table.Metadata
import Cambiatus.Tk.Action.Metadata
import Cambiatus.Tk.Table.Metadata
import Dict
import Eos.EosType
import Eos.Name
import Eos.Query
import EosTable
import InteropDefinitions
import Process
import Request exposing (Request)
import Result.Extra as ResultX
import Task
import User
import WalletProvider exposing (WalletProvider)


{-| The shared model. Pages have access to this.
-}
type alias Model =
    { userState : User.State
    , contracts :
        AssocList.Dict
            Eos.Name.Name
            { actions : List { name : Eos.Name.Name, fields : Dict.Dict String Eos.EosType.EosType }
            , tables :
                List
                    { name : Eos.Name.Name
                    , queryFunction : { scope : String } -> Eos.Query.Query EosTable.Table
                    }
            }
    , walletProviders : List WalletProvider
    }


{-| Everything the Shared module can do. Other pages have read access to this.
You should expose functions to construct Msgs if you want to use them in other
modules.
-}
type Msg
    = StartedConnectingToWallet WalletProvider
    | ErrorConnectingToWallet WalletProvider
    | RemovedErrorFromWallet WalletProvider
    | ConnectedToWallet WalletProvider Eos.Name.Name
    | DisconnectedFromWallet WalletProvider


{-| Initialize the shared module
-}
init : Request -> InteropDefinitions.Flags -> ( Model, Cmd Msg )
init _ flags =
    let
        contracts :
            AssocList.Dict
                Eos.Name.Name
                { actions :
                    List
                        { fields : Dict.Dict String Eos.EosType.EosType
                        , name : Eos.Name.Name
                        }
                , tables : List EosTable.Metadata
                }
        contracts =
            ResultX.combine
                [ cambiatusTk
                , cambiatusCm
                ]
                |> Result.withDefault []
                |> AssocList.fromList

        makeContract :
            { actions :
                List
                    { fields : Dict.Dict String Eos.EosType.EosType
                    , name : Eos.Name.Name
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
                            { fields : Dict.Dict String Eos.EosType.EosType
                            , name : Eos.Name.Name
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
                            { fields : Dict.Dict String Eos.EosType.EosType
                            , name : Eos.Name.Name
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
                            { fields : Dict.Dict String Eos.EosType.EosType
                            , name : Eos.Name.Name
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
    ( { userState = User.NotConnected
      , contracts = contracts
      , walletProviders = flags.walletProviders
      }
    , Cmd.none
    )


{-| Update the shared module
-}
update : Request -> Msg -> Model -> ( Model, Cmd Msg )
update _ msg model =
    case msg of
        StartedConnectingToWallet provider ->
            ( { model | userState = User.Connecting provider }, Cmd.none )

        ErrorConnectingToWallet provider ->
            ( { model | userState = User.WithError provider }
            , Process.sleep 3000
                |> Task.perform (\_ -> RemovedErrorFromWallet provider)
            )

        RemovedErrorFromWallet provider ->
            case model.userState of
                User.WithError errorProvider ->
                    if provider == errorProvider then
                        ( { model | userState = User.NotConnected }, Cmd.none )

                    else
                        ( model, Cmd.none )

                _ ->
                    ( model, Cmd.none )

        ConnectedToWallet provider accountName ->
            ( { model
                | userState =
                    User.Connected
                        (User.init
                            { accountName = accountName
                            , provider = provider
                            }
                        )
              }
            , Cmd.none
            )

        DisconnectedFromWallet provider ->
            ( { model
                | userState =
                    case model.userState of
                        User.NotConnected ->
                            User.NotConnected

                        User.Connecting currentProvider ->
                            if currentProvider == provider then
                                User.NotConnected

                            else
                                model.userState

                        User.WithError currentProvider ->
                            if currentProvider == provider then
                                User.NotConnected

                            else
                                model.userState

                        User.Connected user ->
                            if User.provider user == provider then
                                User.NotConnected

                            else
                                model.userState
              }
            , Cmd.none
            )


{-| Receive values from Typescript
-}
toElmSubscriptions : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscriptions toElm =
    case toElm of
        InteropDefinitions.StartedConnectingToWallet walletProvider ->
            Just (StartedConnectingToWallet walletProvider)

        InteropDefinitions.ErrorConnectingToWallet walletProvider ->
            Just (ErrorConnectingToWallet walletProvider)

        InteropDefinitions.ConnectedToWallet walletProvider accountName ->
            Just (ConnectedToWallet walletProvider accountName)

        InteropDefinitions.DisconnectedFromWallet walletProvider ->
            Just (DisconnectedFromWallet walletProvider)

        _ ->
            Nothing
