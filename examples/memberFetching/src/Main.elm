module Main exposing (main)

{-| We depend on a `generated` folder, which is gitignored. In order to generate
it, use the CLI to generate the Elm code from the `cambiatus.cm` and
`cambiatus.tk` contracts, from `https://staging.cambiatus.io/v1/chain`
-}

import AssocList as Dict exposing (Dict)
import Browser
import Cambiatus.Cm.Table
import Cambiatus.Cm.Table.Query
import Cambiatus.Tk.Table
import Cambiatus.Tk.Table.Query
import Eos.Asset
import Eos.Name
import Eos.Query
import Eos.Symbol
import Eos.SymbolCode
import Html exposing (Html, button, div, h1, table, tbody, td, text, th, thead, tr)
import Html.Events exposing (onClick)
import Http
import Process
import Task


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


type Model
    = FetchingCommunities (List Cambiatus.Cm.Table.Community)
    | WaitingToStart (List Cambiatus.Cm.Table.Community)
    | FetchingMembers
        { community : Cambiatus.Cm.Table.Community
        , members : List Cambiatus.Cm.Table.Member
        }
    | FetchingBalances
        { community : Cambiatus.Cm.Table.Community
        , members : List Cambiatus.Cm.Table.Member
        , balances : Dict Cambiatus.Cm.Table.Member (List Eos.Asset.Asset)
        }
    | Finished
        { community : Cambiatus.Cm.Table.Community
        , members : List Cambiatus.Cm.Table.Member
        , balances : Dict Cambiatus.Cm.Table.Member (List Eos.Asset.Asset)
        }


init : () -> ( Model, Cmd Msg )
init _ =
    ( FetchingCommunities []
    , Cambiatus.Cm.Table.Query.community { scope = "cambiatus.cm" }
        |> Eos.Query.withLimit 50
        |> Eos.Query.send GotCommunities
    )


type Msg
    = GotCommunities (Result Http.Error (Eos.Query.Response Cambiatus.Cm.Table.Community))
    | ClickedStart Cambiatus.Cm.Table.Community
    | GotMembers (Result Http.Error (Eos.Query.Response Cambiatus.Cm.Table.Member))
    | RequestedBalances Cambiatus.Cm.Table.Member
    | GotBalances Cambiatus.Cm.Table.Member (Result Http.Error (Eos.Query.Response Cambiatus.Tk.Table.Accounts))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotCommunities (Ok response) ->
            case model of
                FetchingCommunities communities ->
                    if response.hasMore then
                        ( FetchingCommunities (communities ++ response.result)
                        , Cambiatus.Cm.Table.Query.community { scope = "cambiatus.cm" }
                            |> Eos.Query.withLowerBound response.nextCursor
                            |> Eos.Query.withLimit 50
                            |> Eos.Query.send GotCommunities
                        )

                    else
                        ( WaitingToStart (communities ++ response.result), Cmd.none )

                _ ->
                    ( model, Cmd.none )

        GotCommunities (Err err) ->
            let
                _ =
                    Debug.log "GotCommunities" err
            in
            ( model, Cmd.none )

        ClickedStart community ->
            ( FetchingMembers { community = community, members = [] }
            , Cambiatus.Cm.Table.Query.member { scope = symbolToString community.symbol }
                |> Eos.Query.withLimit 500
                |> Eos.Query.send GotMembers
            )

        GotMembers (Ok response) ->
            case model of
                FetchingMembers { community, members } ->
                    let
                        allMembers =
                            members ++ response.result
                    in
                    if response.hasMore then
                        ( FetchingMembers { community = community, members = allMembers }
                        , Cambiatus.Cm.Table.Query.member { scope = symbolToString community.symbol }
                            |> Eos.Query.withLimit 500
                            |> Eos.Query.withLowerBound response.nextCursor
                            |> Eos.Query.send GotMembers
                        )

                    else if List.isEmpty allMembers then
                        ( Finished
                            { community = community
                            , members = allMembers
                            , balances = Dict.empty
                            }
                        , Cmd.none
                        )

                    else
                        let
                            sendRequest : Int -> Cambiatus.Cm.Table.Member -> Cmd Msg
                            sendRequest index member =
                                Process.sleep ((toFloat index / 500) * 30 * 1000)
                                    |> Task.perform (\_ -> RequestedBalances member)
                        in
                        ( FetchingBalances
                            { community = community
                            , members = allMembers
                            , balances = Dict.empty
                            }
                        , allMembers
                            |> List.indexedMap sendRequest
                            |> Cmd.batch
                        )

                _ ->
                    ( model, Cmd.none )

        GotMembers (Err err) ->
            let
                _ =
                    Debug.log "GotMembers" err
            in
            ( model, Cmd.none )

        RequestedBalances member ->
            ( model
            , { scope = Eos.Name.toString member.name }
                |> Cambiatus.Tk.Table.Query.accounts
                |> Eos.Query.withLimit 20
                |> Eos.Query.send (GotBalances member)
            )

        GotBalances member (Ok result) ->
            case model of
                FetchingBalances balances ->
                    let
                        newBalances =
                            { balances
                                | balances =
                                    Dict.update member
                                        (Maybe.withDefault []
                                            >> (\existingBalances -> existingBalances ++ List.map .balance result.result)
                                            >> Just
                                        )
                                        balances.balances
                            }
                    in
                    if
                        (Dict.size balances.balances == List.length balances.members)
                            && not result.hasMore
                    then
                        ( Finished newBalances
                        , Cmd.none
                        )

                    else
                        ( FetchingBalances newBalances
                        , if result.hasMore then
                            { scope = Eos.Name.toString member.name }
                                |> Cambiatus.Tk.Table.Query.accounts
                                |> Eos.Query.withLimit 20
                                |> Eos.Query.withLowerBound result.nextCursor
                                |> Eos.Query.send (GotBalances member)

                          else
                            Cmd.none
                        )

                _ ->
                    ( model, Cmd.none )

        GotBalances _ (Err err) ->
            let
                _ =
                    Debug.log "GotBalances" err
            in
            ( model, Cmd.none )


symbolToString : Eos.Symbol.Symbol -> String
symbolToString symbol =
    String.fromInt (Eos.Symbol.precision symbol)
        ++ ","
        ++ (symbol |> Eos.Symbol.code |> Eos.SymbolCode.toString)


view : Model -> Html Msg
view model =
    case model of
        FetchingCommunities communities ->
            viewWaiting { isDoneFetching = False } communities

        WaitingToStart communities ->
            viewWaiting { isDoneFetching = True } communities

        FetchingMembers data ->
            viewFetchingMembers data

        FetchingBalances data ->
            viewFetchingBalances { isFinished = False } data

        Finished data ->
            viewFetchingBalances { isFinished = True } data


viewWaiting :
    { isDoneFetching : Bool }
    -> List Cambiatus.Cm.Table.Community
    -> Html Msg
viewWaiting { isDoneFetching } communities =
    div []
        [ h1 []
            [ if isDoneFetching then
                text "Click on a community to start fetching balances"

              else
                text "Fetching all communities"
            ]
        , table []
            [ thead []
                [ tr []
                    [ th [] [ text "Symbol" ]
                    , th [] [ text "Name" ]
                    , th [] [ text "Action" ]
                    ]
                ]
            , tbody []
                (List.map
                    (\community ->
                        tr []
                            [ td [] [ text (symbolToString community.symbol) ]
                            , td [] [ text community.name ]
                            , td [] [ button [ onClick (ClickedStart community) ] [ text "Fetch balances" ] ]
                            ]
                    )
                    communities
                )
            ]
        ]


viewFetchingMembers :
    { community : Cambiatus.Cm.Table.Community
    , members : List Cambiatus.Cm.Table.Member
    }
    -> Html Msg
viewFetchingMembers { community, members } =
    div []
        [ h1 [] [ text ("Fetching members from " ++ symbolToString community.symbol) ]
        , table []
            [ thead [] [ tr [] [ th [] [ text "Name" ] ] ]
            , tbody []
                (List.map
                    (\member ->
                        tr [] [ td [] [ text (Eos.Name.toString member.name) ] ]
                    )
                    members
                )
            ]
        ]


viewFetchingBalances :
    { isFinished : Bool }
    ->
        { community : Cambiatus.Cm.Table.Community
        , members : List Cambiatus.Cm.Table.Member
        , balances : Dict Cambiatus.Cm.Table.Member (List Eos.Asset.Asset)
        }
    -> Html Msg
viewFetchingBalances { isFinished } { community, members, balances } =
    div []
        [ h1 []
            [ if isFinished then
                text ("Finished fetching balances from " ++ symbolToString community.symbol)

              else
                text ("Fetching balances from " ++ symbolToString community.symbol)
            ]
        , table []
            [ thead []
                [ tr []
                    [ th [] [ text "Name" ]
                    , th [] [ text ("Balance in " ++ symbolToString community.symbol) ]
                    ]
                ]
            , tbody []
                (List.map
                    (\member ->
                        tr []
                            [ td [] [ text (Eos.Name.toString member.name) ]
                            , td []
                                [ case
                                    Dict.get member balances
                                        |> Maybe.andThen
                                            (List.filter (\asset -> asset.symbol == community.symbol)
                                                >> List.head
                                            )
                                  of
                                    Nothing ->
                                        text "Loading..."

                                    Just asset ->
                                        text (String.fromFloat asset.amount)
                                ]
                            ]
                    )
                    members
                )
            ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
