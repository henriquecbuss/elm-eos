module Pages.Home_ exposing
    ( Model, Transfer, Msg, page
    , toElmSubscription
    )

{-| Home\_

@docs Model, Transfer, Msg, page

@docs toElmSubscription

-}

import Cambiatus.Tk.Action
import Effect exposing (Effect)
import Eos.Asset
import Eos.Name
import Eos.Permission
import Eos.Symbol
import Gen.Params.Home_ exposing (Params)
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events
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
    ( { transfer = initTransfer }
    , Effect.none
    )


initTransfer : Transfer
initTransfer =
    { from = "henriquebuss"
    , to = "henriquebus2"
    , amount = "2"
    , symbolPrecision = "0"
    , symbolCode = "BUSS"
    , memo = "Hello from elm-eos!"
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
                                InteropDefinitions.Transfer
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


parseTransfer : Transfer -> Maybe Cambiatus.Tk.Action.Action
parseTransfer transfer =
    let
        parseQuantity : Maybe Eos.Asset.Asset
        parseQuantity =
            Maybe.map2 (\amount symbol -> { amount = amount, symbol = symbol })
                (String.toFloat transfer.amount)
                parseSymbol

        parseSymbol : Maybe Eos.Symbol.Symbol
        parseSymbol =
            String.toInt transfer.symbolPrecision
                |> Maybe.andThen
                    (\precision ->
                        Eos.Symbol.fromPrecisionAndCodeString precision transfer.symbolCode
                            |> Result.toMaybe
                    )
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



-- VIEW


view : Shared.Model -> Model -> View Msg
view _ model =
    { title = "elm-watch starter"
    , body =
        [ Html.header [ class "w-full py-2 bg-slate-700 text-white" ]
            [ Html.div [ class "container mx-auto px-4" ]
                [ Html.button
                    [ class "block ml-auto hover:bg-slate-100 hover:text-black transition-colors rounded px-4 py-1"
                    , Html.Events.onClick ClickedLogout
                    ]
                    [ Html.text "Logout" ]
                ]
            ]
        , Html.main_ [ class "h-full bg-slate-100 pt-4" ]
            [ Html.div [ class "container mx-auto px-4" ]
                [ Html.h1 [ class "text-4xl font-bold" ] [ Html.text "elm-eos" ]
                , Html.div [ class "grid grid-cols-1 md:grid-cols-2 w-full" ]
                    [ Html.form
                        [ Html.Events.onSubmit ClickedTransfer
                        , class "mt-8 w-full p-4 bg-white rounded-lg shadow flex flex-col"
                        ]
                        [ Html.h2 [ class "font-bold text-xl" ] [ Html.text "Transfer" ]
                        , Html.div [ class "flex flex-col gap-2 mt-4" ]
                            [ viewInput
                                { label = "From"
                                , onInput = EnteredTransferFrom
                                , type_ = Text
                                , value = model.transfer.from
                                }
                            , viewInput
                                { label = "To"
                                , onInput = EnteredTransferTo
                                , type_ = Text
                                , value = model.transfer.to
                                }
                            , viewInput
                                { label = "Amount"
                                , onInput = EnteredTransferAmount
                                , type_ = Number
                                , value = model.transfer.amount
                                }
                            , viewInput
                                { label = "Symbol Precision"
                                , onInput = EnteredTransferSymbolPrecision
                                , type_ = Number
                                , value = model.transfer.symbolPrecision
                                }
                            , viewInput
                                { label = "Symbol Code"
                                , onInput = EnteredTransferSymbolCode
                                , type_ = Text
                                , value = model.transfer.symbolCode
                                }
                            , viewInput
                                { label = "Memo"
                                , onInput = EnteredTransferMemo
                                , type_ = Text
                                , value = model.transfer.memo
                                }
                            ]
                        , Html.button [ class "w-full rounded mt-6 bg-orange-400 text-white py-2 px-4 hover:bg-orange-300 active:bg-orange-500" ] [ Html.text "Transfer" ]
                        ]
                    ]
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
    Html.label [ class "border rounded flex relative" ]
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



-- PORT SUBSCRIPTION


{-| Subscribe to messages from Typescript
-}
toElmSubscription : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscription _ =
    Nothing


type InputType
    = Text
    | Number
