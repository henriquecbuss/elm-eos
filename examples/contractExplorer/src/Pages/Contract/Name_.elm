module Pages.Contract.Name_ exposing (page, Model, Msg)

{-| A page that shows information about a particular contract. The name of the
contract comes from the url

@docs page, Model, Msg

-}

import AssocList
import Dict
import Dropdown
import Effect exposing (Effect)
import Eos.EosType
import Eos.Name
import Eos.Query
import EosAction
import EosTable
import Gen.Params.Contract.Name_ exposing (Params)
import Gen.Route
import Heroicons.Outline
import Heroicons.Solid
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events as Events
import Html.Extra as HtmlX
import Http
import Icons
import InteropDefinitions
import InteropPorts
import List.Extra as ListX
import Page
import RemoteData
import Request
import Shared
import Svg.Attributes as SvgAttr
import Table
import Ui.Form.Input
import Ui.Header
import View exposing (View)
import WalletProvider exposing (WalletProvider)


{-| This page
-}
page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared req =
    Page.advanced
        { init = init shared req
        , update = update
        , view = view req shared
        , subscriptions = \_ -> Sub.none
        }



-- INIT


init : Shared.Model -> Request.With Params -> ( Model, Effect Msg )
init shared req =
    let
        contractStatus : ContractStatus
        contractStatus =
            case Eos.Name.fromString req.params.name of
                Ok validName ->
                    case AssocList.get validName shared.contracts of
                        Just { actions, tables } ->
                            ValidContract
                                { contractName = validName
                                , actions = actions
                                , tables = tables
                                , selectedTable = Nothing
                                , scope = Eos.Name.toString validName
                                , limit = "100"
                                , reverse = False
                                , tableState = Table.initialSort ""
                                , tableData = RemoteData.NotAsked
                                , moreTableData = RemoteData.NotAsked
                                , selectedAction = Nothing
                                , actionInput = Dict.empty
                                }

                        Nothing ->
                            ContractNameDoesntExist validName

                Err err ->
                    InvalidContractName err
    in
    ( { contractStatus = contractStatus
      , connectWalletDropdownState = False
      }
    , Effect.none
    )


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        ClickedDisconnectWallet ->
            ( model
            , InteropPorts.fromElm InteropDefinitions.DisconnectWallet
                |> Effect.fromCmd
            )

        UpdatedConnectWalletDropdown dropdownState ->
            ( { model | connectWalletDropdownState = dropdownState }, Effect.none )

        ClickedConnectWallet provider ->
            -- TODO
            ( model
            , InteropPorts.fromElm (InteropDefinitions.ConnectWallet provider)
                |> Effect.fromCmd
            )

        SelectedTable tableName ->
            ( updateValidContractInfo
                (\info ->
                    { info | selectedTable = Just tableName }
                )
                model
            , Effect.none
            )

        EnteredScope scope ->
            ( updateValidContractInfo
                (\info -> { info | scope = scope })
                model
            , Effect.none
            )

        EnteredLimit limit ->
            ( updateValidContractInfo
                (\info -> { info | limit = limit })
                model
            , Effect.none
            )

        CheckedReverse reverse ->
            ( updateValidContractInfo (\info -> { info | reverse = reverse }) model
            , Effect.none
            )

        RequestedTableData ->
            case model.contractStatus of
                ValidContract info ->
                    case queryFromValidContractInfo info of
                        Just query ->
                            ( { model
                                | contractStatus =
                                    ValidContract
                                        { info
                                            | tableData = RemoteData.Loading
                                            , moreTableData = RemoteData.NotAsked
                                        }
                              }
                            , Eos.Query.send GotTableData query
                                |> Effect.fromCmd
                            )

                        Nothing ->
                            ( model, Effect.none )

                _ ->
                    ( model, Effect.none )

        RequestedMoreTableData ->
            case model.contractStatus of
                ValidContract info ->
                    case info.tableData of
                        RemoteData.Success response ->
                            case queryFromValidContractInfo info of
                                Just query ->
                                    ( { model
                                        | contractStatus =
                                            ValidContract
                                                { info
                                                    | moreTableData = RemoteData.Loading
                                                }
                                      }
                                    , Eos.Query.withLowerBound response.nextCursor query
                                        |> Eos.Query.send GotMoreTableData
                                        |> Effect.fromCmd
                                    )

                                Nothing ->
                                    ( model, Effect.none )

                        _ ->
                            ( model, Effect.none )

                _ ->
                    ( model, Effect.none )

        GotTableData (Ok response) ->
            ( updateValidContractInfo
                (\info ->
                    { info | tableData = RemoteData.Success response }
                )
                model
            , Effect.none
            )

        GotTableData (Err err) ->
            ( updateValidContractInfo
                (\info -> { info | tableData = RemoteData.Failure err })
                model
            , Effect.none
            )

        GotMoreTableData (Ok response) ->
            ( updateValidContractInfo
                (\info ->
                    case info.tableData of
                        RemoteData.Success previousData ->
                            { info
                                | tableData =
                                    RemoteData.Success
                                        { response | result = previousData.result ++ response.result }
                                , moreTableData = RemoteData.NotAsked
                            }

                        _ ->
                            info
                )
                model
            , Effect.none
            )

        GotMoreTableData (Err err) ->
            ( updateValidContractInfo
                (\info -> { info | moreTableData = RemoteData.Failure err })
                model
            , Effect.none
            )

        UpdatedTable newState ->
            ( updateValidContractInfo (\info -> { info | tableState = newState }) model
            , Effect.none
            )

        SelectedAction actionName ->
            ( updateValidContractInfo
                (\info ->
                    { info
                        | selectedAction = Just actionName
                        , actionInput =
                            if info.selectedAction == Just actionName then
                                info.actionInput

                            else
                                Dict.empty
                    }
                )
                model
            , Effect.none
            )

        EnteredActionInput { fieldName, newValue } ->
            ( updateValidContractInfo
                (\info ->
                    { info
                        | actionInput =
                            Dict.insert fieldName newValue info.actionInput
                    }
                )
                model
            , Effect.none
            )

        SubmittedAction ->
            case model.contractStatus of
                ValidContract info ->
                    case info.selectedAction of
                        Nothing ->
                            ( model, Effect.none )

                        Just selectedAction ->
                            let
                                _ =
                                    Debug.log "FROM DICT" (EosAction.fromDict selectedAction info.actionInput)
                            in
                            ( model, Effect.none )

                _ ->
                    ( model, Effect.none )


updateValidContractInfo : (ValidContractInfo -> ValidContractInfo) -> Model -> Model
updateValidContractInfo updateFn model =
    case model.contractStatus of
        ValidContract info ->
            { model | contractStatus = ValidContract (updateFn info) }

        _ ->
            model


queryFromValidContractInfo : ValidContractInfo -> Maybe (Eos.Query.Query EosTable.Table)
queryFromValidContractInfo info =
    let
        maybeValidTable : Maybe EosTable.Metadata
        maybeValidTable =
            ListX.find (\t -> Just t.name == info.selectedTable) info.tables

        maybeValidLimit : Maybe Int
        maybeValidLimit =
            String.toInt info.limit
    in
    Maybe.map2
        (\validTable validLimit ->
            validTable.queryFunction { scope = info.scope }
                |> Eos.Query.withLimit validLimit
                |> Eos.Query.withReverse info.reverse
        )
        maybeValidTable
        maybeValidLimit



-- UPDATE


view : Request.With Params -> Shared.Model -> Model -> View Msg
view req shared model =
    { title = "Contract " ++ req.params.name
    , body =
        [ Ui.Header.view
            { disconnectWallet = ClickedDisconnectWallet
            , connectWallet = ClickedConnectWallet
            , userState = shared.userState
            , updateDropdown = UpdatedConnectWalletDropdown
            , dropdownState = model.connectWalletDropdownState
            , walletProviders = shared.walletProviders
            }
        , Html.main_ [ class "min-h-full bg-slate-100 pt-4 pb-20" ]
            [ case model.contractStatus of
                InvalidContractName err ->
                    viewError
                        (Html.div []
                            [ Html.p []
                                [ Html.text "You were looking for the "
                                , Html.strong [ class "text-indigo-600" ] [ Html.text req.params.name ]
                                , Html.text " contract, but it's not a valid contract name. Here's why:"
                                ]
                            , Html.p [ class "mt-4 ml-4 pl-4 border-l-4 rounded border-indigo-600 text-gray-500" ]
                                [ Html.text (Eos.Name.errorToString err) ]
                            ]
                        )

                ContractNameDoesntExist name ->
                    viewError
                        (Html.div []
                            [ Html.p []
                                [ Html.text "You were looking for the "
                                , Html.strong [ class "text-indigo-600" ] [ Html.text (Eos.Name.toString name) ]
                                , Html.text " contract, but it doesn't exist."
                                ]
                            , Html.p [ class "mt-2" ] [ Html.text "If you think it should exist, you should include it in the command you used to generate the contracts." ]
                            ]
                        )

                ValidContract contract ->
                    Html.div [ class "container mx-auto px-4" ]
                        [ Html.div [ class "flex items-center justify-between" ]
                            [ Html.h2 [ class "py-2 text-xl" ] [ Html.text <| Eos.Name.toString contract.contractName ]
                            ]
                        , viewTables
                            { limit = contract.limit
                            , moreTableData = contract.moreTableData
                            , reverse = contract.reverse
                            , scope = contract.scope
                            , selectedTable = contract.selectedTable
                            , tableData = contract.tableData
                            , tableState = contract.tableState
                            , tables = contract.tables
                            }
                        , viewActions
                            { actionInput = contract.actionInput
                            , actions = contract.actions
                            , selectedAction = contract.selectedAction
                            }
                        ]
            ]
        ]
    }



-- SUBSCRIPTIONS


viewError : Html.Html msg -> Html.Html msg
viewError err =
    Html.div [ class "-mt-14 h-full container mx-auto px-4 flex items-center" ]
        [ Html.div [ class "bg-white w-full max-w-xl mx-auto rounded shadow-lg px-8 py-4 flex flex-col" ]
            [ Heroicons.Outline.exclamationTriangle [ SvgAttr.class "w-24 h-24 text-indigo-600 mx-auto" ]
            , Html.p [ class "font-bold text-indigo-600 mx-auto mb-6" ]
                [ Html.text "Uh oh, something went wrong" ]
            , err
            , Html.a
                [ class "mt-12 px-4 py-2 bg-indigo-600 w-full text-center text-white rounded hover:bg-indigo-500 active:bg-indigo-700"
                , Attr.href (Gen.Route.toHref Gen.Route.Home_)
                ]
                [ Html.text "Go back home"
                ]
            ]
        ]



-- VIEW


viewSelectionTag : { content : String, isSelected : Bool, onSelect : msg } -> Html.Html msg
viewSelectionTag { content, isSelected, onSelect } =
    Html.button
        [ class "py-1 px-2 rounded-sm transition-colors"
        , Attr.classList
            [ ( "bg-slate-700 text-white", isSelected )
            , ( "bg-slate-300 hover:bg-slate-400 active:bg-slate-500", not isSelected )
            ]
        , Events.onClick onSelect
        ]
        [ Html.text content ]


viewAccordion : { title : String } -> List (Html.Html msg) -> Html.Html msg
viewAccordion { title } content =
    Html.details [ class "border border-zinc-200 bg-white w-full rounded mt-4 group open:pb-4" ]
        (Html.summary [ class "p-4 marker-hidden flex justify-between items-center cursor-pointer" ]
            [ Html.h3 [ class "text-lg" ] [ Html.text title ]
            , Heroicons.Solid.chevronDown [ SvgAttr.class "w-5 h-5 ml-2 group-open:rotate-180 transition-transform" ]
            ]
            :: content
        )


viewHttpError : Http.Error -> Html.Html msg_
viewHttpError error =
    case error of
        Http.BadUrl givenUrl ->
            Html.text ("The given URL was not valid. I tried using " ++ givenUrl ++ ". Check the command you used to generate the code to get the correct URL - that's the one I used!")

        Http.Timeout ->
            Html.text "The server timed out. Is the server online? Is your internet working?"

        Http.NetworkError ->
            Html.text "There was a network error. Are you connected to the internet?"

        Http.BadStatus status ->
            Html.text ("I got a failure response from the server. The status code was " ++ String.fromInt status ++ ". Is the server running correctly?")

        Http.BadBody reason ->
            Html.div []
                [ Html.p [] [ Html.text "I couldn't decode the server's response! Here's the error I got:" ]
                , Html.div [ class "border-l-4 border-red-500 rounded bg-red-100 p-2 my-2" ] [ Html.text reason ]
                , Html.p []
                    [ Html.text "This is probably a bug in the library! Please consider "
                    , Html.a [ Attr.href "https://github.com/henriquecbuss/elm-eos", class "underline" ] [ Html.text "submitting a new issue." ]
                    ]
                ]


viewTables :
    { limit : String
    , moreTableData : RemoteData.RemoteData Http.Error (Eos.Query.Response EosTable.Table)
    , reverse : Bool
    , scope : String
    , selectedTable : Maybe Eos.Name.Name
    , tableData : RemoteData.RemoteData Http.Error (Eos.Query.Response EosTable.Table)
    , tableState : Table.State
    , tables : List EosTable.Metadata
    }
    -> Html.Html Msg
viewTables { tables, selectedTable, scope, limit, reverse, tableState, tableData, moreTableData } =
    viewAccordion { title = "Tables" }
        [ Html.div [ class "mt-4 px-4 grid gap-2 grid-col-auto-fit-150" ]
            (List.map
                (\table ->
                    viewSelectionTag
                        { content = Eos.Name.toString table.name
                        , isSelected = selectedTable == Just table.name
                        , onSelect = SelectedTable table.name
                        }
                )
                tables
            )
        , HtmlX.viewMaybe
            (\_ ->
                Html.form
                    [ class "flex flex-col mt-4 px-4 gap-4"
                    , Events.onSubmit RequestedTableData
                    ]
                    [ Html.div [ class "grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4" ]
                        [ Ui.Form.Input.view
                            { label = Html.text "Scope"
                            , labelAttrs = []
                            , onInput = EnteredScope
                            , placeholder = "eos.io"
                            , value = scope
                            }
                            []
                        , Ui.Form.Input.view
                            { label = Html.text "Limit"
                            , labelAttrs = []
                            , onInput = EnteredLimit
                            , placeholder = "100"
                            , value = limit
                            }
                            []
                        , Html.label [ class "flex items-center gap-2 md:mt-6 md:ml-4" ]
                            [ Html.input
                                [ Attr.type_ "checkbox"
                                , Events.onCheck CheckedReverse
                                , Attr.checked reverse
                                ]
                                []
                            , Html.text "Reverse"
                            ]
                        ]
                    , Html.button
                        [ class "bg-slate-700 text-white font-bold py-2 px-4 mt-2 rounded-sm w-full hover:bg-slate-600 active:bg-slate-800"
                        ]
                        [ Html.text "Search" ]
                    ]
            )
            selectedTable
        , case tableData of
            RemoteData.NotAsked ->
                case selectedTable of
                    Just _ ->
                        Html.p [ class "px-4 text-center text-gray-500 mt-8 mb-6" ] [ Html.text "Adjust the parameters and hit Search" ]

                    Nothing ->
                        Html.p [ class "px-4 text-center text-gray-500 mt-8 mb-6" ] [ Html.text "No table selected" ]

            RemoteData.Loading ->
                Icons.arrowPath [ SvgAttr.class "animate-spin text-slate-400 w-6 h-6 mt-8 mb-6 mx-auto" ]

            RemoteData.Failure err ->
                Html.div [ class "px-4" ]
                    [ Html.div [ class "border border-red-500 bg-red-200 text-black max-w-lg mt-8 mb-4 mx-auto p-4 rounded" ]
                        [ Html.p [ class "text-red-700 flex items-center gap-2 font-bold mb-4" ]
                            [ Heroicons.Outline.exclamationTriangle [ SvgAttr.class "w-6 h-6" ]
                            , Html.text "Something went wrong"
                            ]
                        , viewHttpError err
                        ]
                    ]

            RemoteData.Success data ->
                case data.result of
                    [] ->
                        Html.div [ class "px-4 text-center text-gray-500 mt-8 mb-4" ]
                            [ Html.p [] [ Html.text "This table is empty." ]
                            , Html.p [] [ Html.text "If you think there should be some data here, try adjusting the scope" ]
                            ]

                    first :: rest ->
                        viewSelectedTable tableState
                            { hasMore = data.hasMore
                            , moreTableData = moreTableData
                            , nextCursor = data.nextCursor
                            , result = ( first, rest )
                            }
        ]


viewSelectedTable :
    Table.State
    ->
        { hasMore : Bool
        , moreTableData : RemoteData.RemoteData Http.Error (Eos.Query.Response EosTable.Table)
        , nextCursor : Eos.Query.Cursor
        , result : ( EosTable.Table, List EosTable.Table )
        }
    -> Html.Html Msg
viewSelectedTable tableState tableData =
    let
        tableConfig : Table.Config EosTable.Table Msg
        tableConfig =
            Table.customConfig
                { columns =
                    Tuple.first tableData.result
                        |> EosTable.columns
                , customizations =
                    { tableAttrs = [ class "min-w-full" ]
                    , caption = Nothing
                    , thead =
                        \details ->
                            { attributes = [ class "border-b bg-slate-700 text-white" ]
                            , children =
                                List.map
                                    (\( name, status, onClick ) ->
                                        viewTableHead name status onClick
                                    )
                                    details
                            }
                    , tfoot = Nothing
                    , tbodyAttrs = [ class "px-6" ]
                    , rowAttrs = \_ -> [ class "even:bg-slate-200 hover:even:bg-slate-100 hover:bg-slate-100 transition-colors" ]
                    }
                , toId = EosTable.toId
                , toMsg = UpdatedTable
                }

        viewTableHead : String -> Table.Status -> Html.Attribute Msg -> Html.Html Msg
        viewTableHead name status onClick =
            let
                content : List (Html.Html Msg)
                content =
                    case status of
                        Table.Unsortable ->
                            [ Html.text name ]

                        Table.Sortable selected ->
                            [ Html.text name
                            , if selected then
                                Heroicons.Solid.chevronDown [ SvgAttr.class "w-4 h-4 ml-2 text-white inline" ]

                              else
                                Heroicons.Solid.chevronDown [ SvgAttr.class "w-4 h-4 ml-2 text-slate-100 inline" ]
                            ]

                        Table.Reversible (Just isReversed) ->
                            [ Html.text name
                            , if isReversed then
                                Heroicons.Solid.chevronUp [ SvgAttr.class "w-4 h-4 ml-2 text-white inline" ]

                              else
                                Heroicons.Solid.chevronDown [ SvgAttr.class "w-4 h-4 ml-2 text-white inline" ]
                            ]

                        Table.Reversible Nothing ->
                            [ Html.text name
                            , Heroicons.Solid.chevronUpDown [ SvgAttr.class "w-4 h-4 ml-2 text-slate-100 inline" ]
                            ]
            in
            Html.th
                [ onClick
                , Attr.classList [ ( "cursor-pointer", status /= Table.Unsortable ) ]
                , class "select-none text-left px-6 py-2 whitespace-nowrap capitalize"
                ]
                content

        allData : List EosTable.Table
        allData =
            Tuple.first tableData.result :: Tuple.second tableData.result
    in
    Html.div [ class "mx-4 mt-4" ]
        [ Html.div [ class "flex overflow-x-scroll border rounded" ]
            [ Table.view tableConfig tableState allData
            ]
        , HtmlX.viewIf tableData.hasMore
            (case tableData.moreTableData of
                RemoteData.Loading ->
                    Icons.arrowPath [ SvgAttr.class "animate-spin text-slate-400 w-6 h-6 mt-8 mb-6 mx-auto" ]

                RemoteData.Failure err ->
                    Html.div [ class "px-4" ]
                        [ Html.div [ class "border border-red-500 bg-red-200 text-black max-w-lg mt-8 mb-4 mx-auto p-4 rounded" ]
                            [ Html.p [ class "text-red-700 flex items-center gap-2 font-bold mb-4" ]
                                [ Heroicons.Outline.exclamationTriangle [ SvgAttr.class "w-6 h-6" ]
                                , Html.text "Something went wrong"
                                ]
                            , viewHttpError err
                            ]
                        ]

                _ ->
                    Html.button
                        [ class "bg-slate-700 text-white font-bold py-2 px-4 mt-4 rounded-sm w-full hover:bg-slate-600 active:bg-slate-800"
                        , Events.onClick RequestedMoreTableData
                        ]
                        [ Html.text "Load more" ]
            )
        ]


viewActions :
    { actionInput : Dict.Dict String String
    , actions : List ActionMetadata
    , selectedAction : Maybe Eos.Name.Name
    }
    -> Html.Html Msg
viewActions { actions, selectedAction, actionInput } =
    let
        selectedActionMetadata : Maybe ActionMetadata
        selectedActionMetadata =
            ListX.find (\action -> selectedAction == Just action.name) actions
    in
    viewAccordion { title = "Actions" }
        [ Html.div [ class "mt-4 px-4 grid gap-2 grid-col-auto-fit-150" ]
            (List.map
                (\action ->
                    viewSelectionTag
                        { content = Eos.Name.toString action.name
                        , isSelected = selectedAction == Just action.name
                        , onSelect = SelectedAction action.name
                        }
                )
                actions
            )
        , case selectedActionMetadata of
            Just actionMetadata ->
                viewSelectedActionForm actionMetadata actionInput

            Nothing ->
                Html.p [ class "px-4 text-center text-gray-500 mt-8 mb-6" ] [ Html.text "No action selected" ]
        ]


viewSelectedActionForm : ActionMetadata -> Dict.Dict String String -> Html.Html Msg
viewSelectedActionForm action actionInput =
    let
        inputs : List (Html.Html Msg)
        inputs =
            Dict.toList action.fields
                |> List.map
                    (\( name, type_ ) ->
                        Ui.Form.Input.viewWithEosType
                            { eosType = type_
                            , label = Html.text name
                            , labelAttrs = []
                            , onInput =
                                \newValue ->
                                    EnteredActionInput
                                        { fieldName = name
                                        , newValue = newValue
                                        }
                            , placeholder = ""
                            , value =
                                Dict.get name actionInput
                                    |> Maybe.withDefault ""
                            }
                            []
                    )
    in
    Html.form
        [ class "flex flex-col mx-4 mt-4 gap-4"
        , Events.onSubmit SubmittedAction
        ]
        (inputs
            ++ [ Html.button [ class "bg-slate-700 text-white font-bold py-2 px-4 mt-2 rounded-sm w-full hover:bg-slate-600 active:bg-slate-800" ]
                    [ Html.text "Submit" ]
               ]
        )


{-| This page's model
-}
type ContractStatus
    = InvalidContractName Eos.Name.Error
    | ContractNameDoesntExist Eos.Name.Name
    | ValidContract ValidContractInfo


type alias Model =
    { contractStatus : ContractStatus
    , connectWalletDropdownState : Dropdown.State
    }


{-| This page's msgs
-}
type Msg
    = ClickedDisconnectWallet
    | UpdatedConnectWalletDropdown Dropdown.State
    | ClickedConnectWallet WalletProvider
    | SelectedTable Eos.Name.Name
    | EnteredScope String
    | EnteredLimit String
    | CheckedReverse Bool
    | RequestedTableData
    | RequestedMoreTableData
    | GotTableData (Result Http.Error (Eos.Query.Response EosTable.Table))
    | GotMoreTableData (Result Http.Error (Eos.Query.Response EosTable.Table))
    | UpdatedTable Table.State
    | SelectedAction Eos.Name.Name
    | EnteredActionInput { fieldName : String, newValue : String }
    | SubmittedAction


viewActionField : String -> Eos.EosType.EosType -> Html.Html msg_
viewActionField name _ =
    Html.label []
        [ Html.text name
        , Html.input [] []
        ]


type alias ValidContractInfo =
    { contractName : Eos.Name.Name
    , actions : List ActionMetadata
    , tables : List EosTable.Metadata
    , selectedTable : Maybe Eos.Name.Name
    , scope : String
    , limit : String
    , reverse : Bool
    , tableState : Table.State
    , tableData : RemoteData.RemoteData Http.Error (Eos.Query.Response EosTable.Table)
    , moreTableData : RemoteData.RemoteData Http.Error (Eos.Query.Response EosTable.Table)
    , selectedAction : Maybe Eos.Name.Name
    , actionInput : Dict.Dict String String
    }


type alias ActionMetadata =
    { name : Eos.Name.Name
    , fields : Dict.Dict String Eos.EosType.EosType
    }
