module Pages.Contract.Name_ exposing (page, Model, Msg)

{-| A page that shows information about a particular contract. The name of the
contract comes from the url

@docs page, Model, Msg

-}

import AssocList as Dict
import Effect exposing (Effect)
import Eos.Name
import Eos.Query
import EosTable
import Gen.Params.Contract.Name_ exposing (Params)
import Gen.Route
import Heroicons.Outline
import Heroicons.Solid
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events exposing (onClick)
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
import Ui.Header
import View exposing (View)


{-| This page
-}
page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared req =
    Page.advanced
        { init = init shared req
        , update = update
        , view = view req
        , subscriptions = \_ -> Sub.none
        }



-- INIT


init : Shared.Model -> Request.With Params -> ( Model, Effect Msg )
init shared req =
    case Eos.Name.fromString req.params.name of
        Ok validName ->
            case Dict.get validName shared.contracts of
                Just { actions, tables } ->
                    ( ValidContract
                        { contractName = validName
                        , actions = actions
                        , tables = tables
                        , selectedTable = Nothing
                        , tableState = Table.initialSort ""
                        , tableData = RemoteData.NotAsked
                        }
                    , Effect.none
                    )

                Nothing ->
                    ( ContractNameDoesntExist validName, Effect.none )

        Err err ->
            ( InvalidContractName err, Effect.none )


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        ClickedLogout ->
            ( model
            , InteropPorts.fromElm InteropDefinitions.Logout
                |> Effect.fromCmd
            )

        SelectedTable tableName ->
            case model of
                ValidContract info ->
                    case ListX.find (\t -> t.name == tableName) info.tables of
                        Just validTable ->
                            ( ValidContract
                                { info
                                    | selectedTable = Just tableName
                                    , tableData = RemoteData.Loading
                                }
                              -- TODO - Accept scope as input
                            , validTable.queryFunction { scope = "cambiatus.cm" }
                                |> Eos.Query.withLimit 100
                                |> Eos.Query.send GotTableData
                                |> Effect.fromCmd
                            )

                        Nothing ->
                            ( model, Effect.none )

                _ ->
                    ( model, Effect.none )

        GotTableData (Ok response) ->
            case model of
                ValidContract info ->
                    ( ValidContract { info | tableData = RemoteData.Success response }, Effect.none )

                _ ->
                    ( model, Effect.none )

        GotTableData (Err err) ->
            case model of
                ValidContract info ->
                    ( ValidContract { info | tableData = RemoteData.Failure err }, Effect.none )

                _ ->
                    ( model, Effect.none )

        UpdatedTable newState ->
            case model of
                ValidContract info ->
                    ( ValidContract { info | tableState = newState }
                    , Effect.none
                    )

                _ ->
                    ( model, Effect.none )



-- UPDATE


view : Request.With Params -> Model -> View Msg
view req model =
    { title = "Contract " ++ req.params.name
    , body =
        [ Ui.Header.view { logout = ClickedLogout }
        , Html.main_ [ class "h-full bg-slate-100 pt-4" ]
            [ case model of
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

                ValidContract { contractName, actions, tables, selectedTable, tableState, tableData } ->
                    Html.div [ class "container mx-auto px-4" ]
                        [ Html.div [ class "flex items-center justify-between" ]
                            [ Html.h2 [ class "py-2 text-xl" ] [ Html.text <| Eos.Name.toString contractName ]
                            ]
                        , viewTables
                            { selectedTable = selectedTable
                            , tableData = tableData
                            , tableState = tableState
                            , tables = tables
                            }
                        , viewActions actions
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


viewTables :
    { selectedTable : Maybe Eos.Name.Name
    , tableData : RemoteData.RemoteData Http.Error (Eos.Query.Response EosTable.Table)
    , tableState : Table.State
    , tables : List EosTable.Metadata
    }
    -> Html.Html Msg
viewTables { selectedTable, tableData, tableState, tables } =
    Html.details [ class "border border-zinc-200 bg-white w-full rounded mt-4 group open:pb-4" ]
        [ Html.summary [ class "p-4 marker-hidden flex justify-between items-center cursor-pointer" ]
            [ Html.h3 [ class "text-lg" ] [ Html.text "Tables" ]
            , Heroicons.Solid.chevronDown [ SvgAttr.class "w-5 h-5 ml-2 group-open:rotate-180 transition-transform" ]
            ]
        , Html.div [ class "mt-4 px-4 grid gap-2 grid-col-auto-fit-150" ]
            (List.map
                (\table ->
                    let
                        isSelected : Bool
                        isSelected =
                            selectedTable == Just table.name
                    in
                    Html.button
                        [ class "py-1 px-2 rounded-sm transition-colors"
                        , Attr.classList
                            [ ( "bg-slate-700 text-white", isSelected )
                            , ( "bg-slate-300 hover:bg-slate-400 active:bg-slate-500", not isSelected )
                            ]
                        , onClick (SelectedTable table.name)
                        ]
                        [ Html.text (Eos.Name.toString table.name) ]
                )
                tables
            )
        , case tableData of
            RemoteData.NotAsked ->
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
                            , nextCursor = data.nextCursor
                            , result = ( first, rest )
                            }
        ]


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


viewSelectedTable :
    Table.State
    ->
        { hasMore : Bool
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
                                    (\( name, status, onClick_ ) ->
                                        viewTableHead name status onClick_
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
        viewTableHead name status onClick_ =
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
                [ onClick_
                , Attr.classList [ ( "cursor-pointer", status /= Table.Unsortable ) ]
                , class "select-none text-left px-6 py-2 whitespace-nowrap capitalize"
                ]
                content

        allData : List EosTable.Table
        allData =
            Tuple.first tableData.result :: Tuple.second tableData.result
    in
    Html.div [ class "mx-4 flex overflow-x-scroll border rounded mt-8 mb-4" ]
        [ Table.view tableConfig tableState allData
        ]


viewActions : List () -> Html.Html msg_
viewActions _ =
    Html.details [ class "border border-zinc-200 bg-white w-full p-4 rounded mt-4 group" ]
        [ Html.summary [ class "marker-hidden flex justify-between items-center cursor-pointer" ]
            [ Html.h3 [ class "text-lg" ] [ Html.text "Actions" ]
            , Heroicons.Solid.chevronDown [ SvgAttr.class "w-5 h-5 ml-2 group-open:rotate-180 transition-transform" ]
            ]
        ]


{-| This page's model
-}
type Model
    = InvalidContractName Eos.Name.Error
    | ContractNameDoesntExist Eos.Name.Name
    | ValidContract
        { contractName : Eos.Name.Name
        , actions : List ()
        , tables : List EosTable.Metadata
        , selectedTable : Maybe Eos.Name.Name
        , tableState : Table.State
        , tableData : RemoteData.RemoteData Http.Error (Eos.Query.Response EosTable.Table)
        }


{-| This page's msgs
-}
type Msg
    = ClickedLogout
    | SelectedTable Eos.Name.Name
    | GotTableData (Result Http.Error (Eos.Query.Response EosTable.Table))
    | UpdatedTable Table.State
