module Pages.Home_ exposing
    ( Model, Transfer, VerifyClaim
    , Msg, page
    , toElmSubscription
    )

{-| Home\_

@docs Model, Transfer, VerifyClaim

@docs Msg, page

@docs toElmSubscription

-}

import Cambiatus.Cm.Action
import Cambiatus.Tk.Action
import Dict exposing (Dict)
import Effect exposing (Effect)
import Eos.Asset
import Eos.Name
import Eos.Permission
import Eos.Symbol
import Gen.Params.Home_ exposing (Params)
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events
import Html.Extra as HtmlX
import Html.Keyed
import InteropDefinitions
import InteropPorts
import Page
import Request
import Shared
import View exposing (View)


{-| The model for this page
-}
type alias Model =
    { transfer : Transfer
    , verifyClaim : VerifyClaim
    }


{-| A record to hold values from the `Transfer` transaction card
-}
type alias Transfer =
    { from : String
    , to : String
    , amount : String
    , symbolPrecision : String
    , symbolCode : String
    , memo : String
    }


{-| A record to hold values from the `VerifyClaim` transaction card
-}
type alias VerifyClaim =
    { symbolPrecision : String
    , symbolCode : String
    , claimId : String
    , verifier : String
    , vote : String
    }


{-| Everything this page can do
-}
type Msg
    = ClickedLogout
    | EnteredTransferFrom String
    | EnteredTransferTo String
    | EnteredTransferAmount String
    | EnteredTransferSymbolPrecision String
    | EnteredTransferSymbolCode String
    | EnteredTransferMemo String
    | ClickedTransfer
    | EnteredVerifyClaimSymbolPrecision String
    | EnteredVerifyClaimSymbolCode String
    | EnteredVerifyClaimId String
    | EnteredVerifyClaimVerifier String
    | SelectedVerifyClaimVote String
    | ClickedVerifyClaim


{-| This is how elm-spa knows what to do with our app
-}
page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared _ =
    Page.protected.advanced
        (\_ ->
            { init = init
            , update = update
            , view = view shared
            , subscriptions = \_ -> Sub.none
            }
        )



-- INIT


init : ( Model, Effect Msg )
init =
    ( { transfer = initTransfer
      , verifyClaim = initVerifyClaim
      }
    , Effect.none
    )


initTransfer : Transfer
initTransfer =
    { from = ""
    , to = ""
    , amount = "0"
    , symbolPrecision = "0"
    , symbolCode = ""
    , memo = ""
    }


initVerifyClaim : VerifyClaim
initVerifyClaim =
    { symbolPrecision = "0"
    , symbolCode = ""
    , claimId = ""
    , verifier = ""
    , vote = ""
    }



-- UPDATE


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        ClickedLogout ->
            ( model
            , InteropPorts.fromElm InteropDefinitions.Logout
                |> Effect.fromCmd
            )

        EnteredTransferFrom from ->
            ( mapTransfer (\transfer -> { transfer | from = from }) model
            , Effect.none
            )

        EnteredTransferTo to ->
            ( mapTransfer (\transfer -> { transfer | to = to }) model
            , Effect.none
            )

        EnteredTransferAmount amount ->
            ( mapTransfer (\transfer -> { transfer | amount = amount }) model
            , Effect.none
            )

        EnteredTransferSymbolPrecision symbolPrecision ->
            ( mapTransfer (\transfer -> { transfer | symbolPrecision = symbolPrecision }) model
            , Effect.none
            )

        EnteredTransferSymbolCode symbolCode ->
            ( mapTransfer (\transfer -> { transfer | symbolCode = symbolCode }) model
            , Effect.none
            )

        EnteredTransferMemo memo ->
            ( mapTransfer (\transfer -> { transfer | memo = memo }) model
            , Effect.none
            )

        ClickedTransfer ->
            case
                Eos.Name.fromString model.transfer.from
                    |> Result.toMaybe
                    |> Maybe.map2 Tuple.pair (parseTransfer model.transfer)
            of
                Just ( transfer, actor ) ->
                    ( model
                    , Cambiatus.Tk.Action.encode
                        [ { actor = actor
                          , permission = Eos.Permission.Active
                          }
                        ]
                        transfer
                        |> (\encodedAction ->
                                InteropDefinitions.PerformEosTransaction
                                    { encodedAction = encodedAction }
                           )
                        |> InteropPorts.fromElm
                        |> Effect.fromCmd
                    )

                Nothing ->
                    ( model, Effect.none )

        EnteredVerifyClaimSymbolPrecision symbolPrecision ->
            ( mapVerifyClaim (\verifyClaim -> { verifyClaim | symbolPrecision = symbolPrecision }) model
            , Effect.none
            )

        EnteredVerifyClaimSymbolCode symbolCode ->
            ( mapVerifyClaim (\verifyClaim -> { verifyClaim | symbolCode = symbolCode }) model
            , Effect.none
            )

        EnteredVerifyClaimId claimId ->
            ( mapVerifyClaim (\verifyClaim -> { verifyClaim | claimId = claimId }) model
            , Effect.none
            )

        EnteredVerifyClaimVerifier verifier ->
            ( mapVerifyClaim (\verifyClaim -> { verifyClaim | verifier = verifier }) model
            , Effect.none
            )

        SelectedVerifyClaimVote vote ->
            ( mapVerifyClaim (\verifyClaim -> { verifyClaim | vote = vote }) model
            , Effect.none
            )

        ClickedVerifyClaim ->
            case
                Eos.Name.fromString model.verifyClaim.verifier
                    |> Result.toMaybe
                    |> Maybe.map2 Tuple.pair (parseVerifyClaim model.verifyClaim)
            of
                Just ( verifyClaim, actor ) ->
                    ( model
                    , Cambiatus.Cm.Action.encode
                        [ { actor = actor
                          , permission = Eos.Permission.Active
                          }
                        ]
                        verifyClaim
                        |> (\encodedAction ->
                                InteropDefinitions.PerformEosTransaction
                                    { encodedAction = encodedAction }
                           )
                        |> InteropPorts.fromElm
                        |> Effect.fromCmd
                    )

                Nothing ->
                    ( model, Effect.none )


mapTransfer : (Transfer -> Transfer) -> Model -> Model
mapTransfer fn model =
    { model | transfer = fn model.transfer }


mapVerifyClaim : (VerifyClaim -> VerifyClaim) -> Model -> Model
mapVerifyClaim fn model =
    { model | verifyClaim = fn model.verifyClaim }


parseSymbol : { model_ | symbolCode : String, symbolPrecision : String } -> Maybe Eos.Symbol.Symbol
parseSymbol model =
    String.toInt model.symbolPrecision
        |> Maybe.andThen
            (\precision ->
                Eos.Symbol.fromPrecisionAndCodeString precision model.symbolCode
                    |> Result.toMaybe
            )


parseTransfer : Transfer -> Maybe Cambiatus.Tk.Action.Action
parseTransfer transfer =
    let
        parseQuantity : Maybe Eos.Asset.Asset
        parseQuantity =
            Maybe.map2 (\amount symbol -> { amount = amount, symbol = symbol })
                (String.toFloat transfer.amount)
                (parseSymbol transfer)
    in
    Maybe.map3
        (\from to quantity ->
            Cambiatus.Tk.Action.Transfer
                { from = from
                , to = to
                , quantity = quantity
                , memo = transfer.memo
                }
        )
        (Eos.Name.fromString transfer.from
            |> Result.toMaybe
        )
        (Eos.Name.fromString transfer.to
            |> Result.toMaybe
        )
        parseQuantity


parseVerifyClaim : VerifyClaim -> Maybe Cambiatus.Cm.Action.Action
parseVerifyClaim verifyClaim =
    let
        parseVote : String -> Maybe Int
        parseVote vote =
            case vote of
                "approve" ->
                    Just 1

                "reject" ->
                    Just 2

                _ ->
                    Nothing
    in
    Maybe.map4
        (\communityId claimId verifier vote ->
            Cambiatus.Cm.Action.Verifyclaim
                { communityId = communityId
                , claimId = claimId
                , verifier = verifier
                , vote = vote
                }
        )
        (parseSymbol verifyClaim)
        (String.toInt verifyClaim.claimId)
        (Eos.Name.fromString verifyClaim.verifier
            |> Result.toMaybe
        )
        (parseVote verifyClaim.vote)



-- VIEW


view : Shared.Model -> Model -> View Msg
view _ model =
    { title = "elm-watch starter"
    , body =
        [ Html.header [ class "w-full py-2 bg-slate-700 text-white" ]
            [ Html.div [ class "container mx-auto px-4 flex" ]
                [ Html.h1 [ class "text-4xl font-bold" ] [ Html.text "elm-eos" ]
                , Html.button
                    [ class "ml-auto hover:bg-slate-100 hover:text-black transition-colors rounded px-4 py-1"
                    , Html.Events.onClick ClickedLogout
                    ]
                    [ Html.text "Logout" ]
                ]
            ]
        , Html.main_ [ class "h-full bg-slate-100 pt-4" ]
            [ Html.div [ class "container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 w-full mt-4" ]
                [ viewTransfer model.transfer
                , viewVerifyClaim model.verifyClaim
                ]
            ]
        ]
    }


viewInput :
    { label : String
    , onInput : String -> msg
    , type_ : InputType
    , value : String
    }
    -> Html.Html msg
viewInput { label, onInput, type_, value } =
    Html.label [ class "border rounded flex relative h-10" ]
        [ Html.span [ class "absolute w-40 px-4 bg-slate-700 text-white -left-px -inset-y-px text-center flex items-center justify-center rounded-l" ]
            [ Html.text label ]
        , Html.input
            [ class "w-full rounded py-2 pl-44 pr-2"
            , inputTypeToAttribute type_
            , Attr.value value
            , Html.Events.onInput onInput
            ]
            []
        ]


inputTypeToAttribute : InputType -> Html.Attribute msg_
inputTypeToAttribute inputType =
    case inputType of
        Text ->
            Attr.type_ "text"

        Number ->
            Attr.type_ "number"


viewTransfer : Transfer -> Html.Html Msg
viewTransfer transfer =
    Html.div []
        [ Html.h2 [ class "font-bold text-xl" ] [ Html.text "Transfer" ]
        , Html.form
            [ Html.Events.onSubmit ClickedTransfer
            , class "w-full p-4 bg-white rounded-lg shadow flex flex-col mt-2"
            ]
            [ Html.div [ class "flex flex-col gap-2" ]
                [ viewInput
                    { label = "From"
                    , onInput = EnteredTransferFrom
                    , type_ = Text
                    , value = transfer.from
                    }
                , viewInput
                    { label = "To"
                    , onInput = EnteredTransferTo
                    , type_ = Text
                    , value = transfer.to
                    }
                , viewInput
                    { label = "Amount"
                    , onInput = EnteredTransferAmount
                    , type_ = Number
                    , value = transfer.amount
                    }
                , viewInput
                    { label = "Symbol Precision"
                    , onInput = EnteredTransferSymbolPrecision
                    , type_ = Number
                    , value = transfer.symbolPrecision
                    }
                , viewInput
                    { label = "Symbol Code"
                    , onInput = EnteredTransferSymbolCode
                    , type_ = Text
                    , value = transfer.symbolCode
                    }
                , viewInput
                    { label = "Memo"
                    , onInput = EnteredTransferMemo
                    , type_ = Text
                    , value = transfer.memo
                    }
                ]
            , Html.button [ class "w-full rounded mt-6 bg-orange-400 text-white py-2 px-4 hover:bg-orange-300 active:bg-orange-500" ]
                [ Html.text "Transfer" ]
            ]
        ]


viewVerifyClaim : VerifyClaim -> Html.Html Msg
viewVerifyClaim verifyClaim =
    Html.div []
        [ Html.h2 [ class "font-bold text-xl" ] [ Html.text "Verify Claim" ]
        , Html.form
            [ Html.Events.onSubmit ClickedVerifyClaim
            , class "w-full p-4 bg-white rounded-lg shadow flex flex-col mt-2"
            ]
            [ Html.div [ class "flex flex-col gap-2" ]
                [ viewInput
                    { label = "Symbol Precision"
                    , onInput = EnteredVerifyClaimSymbolPrecision
                    , type_ = Number
                    , value = verifyClaim.symbolPrecision
                    }
                , viewInput
                    { label = "Symbol Code"
                    , onInput = EnteredVerifyClaimSymbolCode
                    , type_ = Text
                    , value = verifyClaim.symbolCode
                    }
                , viewInput
                    { label = "Claim ID"
                    , onInput = EnteredVerifyClaimId
                    , type_ = Number
                    , value = verifyClaim.claimId
                    }
                , viewInput
                    { label = "Verifier"
                    , onInput = EnteredVerifyClaimVerifier
                    , type_ = Text
                    , value = verifyClaim.verifier
                    }
                , viewSelectInput
                    { label = "Vote"
                    , options =
                        [ ( "", "Choose an option" )
                        , ( "approve", "Approve" )
                        , ( "deny", "Deny" )
                        ]
                            |> Dict.fromList
                    , value = verifyClaim.vote
                    }
                ]
            , Html.button [ class "w-full rounded mt-6 bg-orange-400 text-white py-2 px-4 hover:bg-orange-300 active:bg-orange-500" ]
                [ Html.text "Verify" ]
            ]
        ]


viewSelectInput :
    { label : String
    , options : Dict String String
    , value : String
    }
    -> Html.Html Msg
viewSelectInput { label, options, value } =
    Html.label [ class "border rounded flex relative h-10" ]
        [ Html.Keyed.node "select"
            [ class "absolute inset-0 appearance-none"
            , Attr.value value
            , Html.Events.onInput SelectedVerifyClaimVote
            ]
            (Dict.toList options
                |> List.map
                    (\( optionValue, optionLabel ) ->
                        ( optionValue
                        , Html.option
                            [ Attr.value optionValue
                            ]
                            [ Html.text optionLabel ]
                        )
                    )
            )
        , Html.span [ class "absolute w-40 px-4 bg-slate-700 text-white -left-px -inset-y-px text-center flex items-center justify-center rounded-l pointer-events-none" ]
            [ Html.text label ]
        , HtmlX.viewMaybe
            (\optionLabel ->
                Html.div
                    [ class "z-10 w-full pointer-events-none rounded pl-44 pr-2 py-2"
                    , Attr.classList [ ( "text-gray-400", value == "" ) ]
                    ]
                    [ Html.text optionLabel ]
            )
            (Dict.get value options)
        , Html.div [ class "absolute right-2 top-1/2 -translate-y-1/2 border-transparent border-t-8 border-t-slate-700 border-l-8 border-r-8" ] []
        ]



-- PORT SUBSCRIPTION


{-| Subscribe to messages from Typescript
-}
toElmSubscription : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscription _ =
    Nothing


type InputType
    = Text
    | Number
