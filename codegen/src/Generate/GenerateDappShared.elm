module Generate.GenerateDappShared exposing (file)

import String.Extra


contractModule : String -> String
contractModule contractName =
    String.split "." contractName
        |> List.map String.Extra.classify
        |> String.join "."


file : List String -> List String -> String
file baseModuleParts contracts =
    let
        baseModule : String
        baseModule =
            List.map String.Extra.classify baseModuleParts
                |> String.join "."
    in
    """module Shared exposing
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

{{IMPORT_ALL_CONTRACTS_METADATA}}
import {{BASE_DIR}}.GenericTable
import AssocList
import Dict
import Eos.EosType
import Eos.Name
import Eos.Query
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
                    , queryFunction : { scope : String } -> Eos.Query.Query {{BASE_DIR}}.GenericTable.Table
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
                , tables : List {{BASE_DIR}}.GenericTable.Metadata
                }
        contracts =
            ResultX.combine
                [ {{ALL_CONTRACTS_LIST}}
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
            -> (response -> {{BASE_DIR}}.GenericTable.Table)
            -> Eos.Name.Name
            ->
                ( Eos.Name.Name
                , { actions :
                        List
                            { fields : Dict.Dict String Eos.EosType.EosType
                            , name : Eos.Name.Name
                            }
                  , tables : List {{BASE_DIR}}.GenericTable.Metadata
                  }
                )
        makeContract { actions, tables } toTable name =
            ( name
            , { actions = actions
              , tables =
                    List.map
                        (\\table ->
                            { name = table.name
                            , queryFunction =
                                table.queryFunction
                                    >> Eos.Query.map toTable
                            }
                        )
                        tables
              }
            )
        
        {{MAKE_ALL_CONTRACTS}}
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
                |> Task.perform (\\_ -> RemovedErrorFromWallet provider)
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

"""
        |> String.replace "{{IMPORT_ALL_CONTRACTS_METADATA}}"
            (contracts
                |> List.map
                    (\contract ->
                        let
                            prefix : String
                            prefix =
                                String.join "."
                                    [ baseModule
                                    , contractModule contract
                                    ]
                        in
                        String.join "\n"
                            [ "import " ++ prefix ++ ".Action.Metadata"
                            , "import " ++ prefix ++ ".Table.Metadata"
                            ]
                    )
                |> String.join "\n"
            )
        |> String.replace "{{BASE_DIR}}" baseModule
        |> String.replace "{{ALL_CONTRACTS_LIST}}"
            (contracts
                |> List.map (String.Extra.classify >> String.Extra.decapitalize)
                |> String.join "\n                , "
            )
        |> String.replace "{{MAKE_ALL_CONTRACTS}}"
            (contracts
                |> List.map (createContract baseModule)
                |> String.join "\n\n"
            )


createContract : String -> String -> String
createContract moduleBase contractName =
    """
        {{FN_NAME}} :
            Result
                Eos.Name.Error
                ( Eos.Name.Name
                , { actions :
                        List
                            { fields : Dict.Dict String Eos.EosType.EosType
                            , name : Eos.Name.Name
                            }
                    , tables : List {{BASE_DIR}}.GenericTable.Metadata
                    }
                )
        {{FN_NAME}} =
            Eos.Name.fromString "{{CONTRACT_NAME}}"
                |> Result.map
                    (makeContract
                        { actions = {{BASE_DIR}}.{{CONTRACT_MODULE}}.Action.Metadata.metadata
                        , tables = {{BASE_DIR}}.{{CONTRACT_MODULE}}.Table.Metadata.metadata
                        }
                        {{BASE_DIR}}.GenericTable.{{CLASSIFIED_CONTRACT_NAME}}Table
                    )
"""
        |> String.replace "{{FN_NAME}}"
            (contractName
                |> String.Extra.classify
                |> String.Extra.decapitalize
            )
        |> String.replace "{{BASE_DIR}}" moduleBase
        |> String.replace "{{CONTRACT_NAME}}" contractName
        |> String.replace "{{CONTRACT_MODULE}}" (contractModule contractName)
        |> String.replace "{{CLASSIFIED_CONTRACT_NAME}}" (String.Extra.classify contractName)
