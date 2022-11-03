module Pages.Home_ exposing
    ( Model, Msg, page
    , toElmSubscription
    )

{-| Home\_

@docs Model, Msg, page

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
import Html.Attributes exposing (class)
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
    { privateKey : String
    , from : String
    , to : String
    , amount : String
    , symbolPrecision : String
    , symbolCode : String
    , memo : String
    }


{-| Everything this page can do
-}
type Msg
    = ClickedTransfer


{-| This is how elm-spa knows what to do with our app
-}
page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared _ =
    Page.advanced
        { init = init
        , update = update
        , view = view shared
        , subscriptions = \_ -> Sub.none
        }



-- INIT


init : ( Model, Effect Msg )
init =
    ( { privateKey = ""
      , from = "henriquebuss"
      , to = "henriquebus2"
      , amount = "2"
      , symbolPrecision = "0"
      , symbolCode = "BUSS"
      , memo = "Hello from elm-eos!"
      }
    , Effect.none
    )



-- UPDATE


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        ClickedTransfer ->
            case
                Maybe.map2 Tuple.pair
                    (parseModel model)
                    (Eos.Name.fromString model.from |> Result.toMaybe)
            of
                Just ( transfer, actor ) ->
                    ( model
                    , transfer
                        |> Cambiatus.Tk.Action.encode
                            [ { actor = actor
                              , permission = Eos.Permission.Active
                              }
                            ]
                        |> (\encodedAction ->
                                InteropDefinitions.Transfer
                                    { encodedAction = encodedAction }
                           )
                        |> InteropPorts.fromElm
                        |> Effect.fromCmd
                    )

                Nothing ->
                    ( model, Effect.none )


parseModel : Model -> Maybe Cambiatus.Tk.Action.Action
parseModel model =
    let
        parseQuantity : Maybe Eos.Asset.Asset
        parseQuantity =
            Maybe.map2 Eos.Asset.Asset
                (String.toFloat model.amount)
                parseSymbol

        parseSymbol : Maybe Eos.Symbol.Symbol
        parseSymbol =
            Maybe.andThen
                (\precision ->
                    Eos.Symbol.fromPrecisionAndCodeString precision model.symbolCode
                        |> Result.toMaybe
                )
                (String.toInt model.symbolPrecision)
    in
    Maybe.map3
        (\from to quantity ->
            Cambiatus.Tk.Action.Transfer
                { from = from
                , to = to
                , quantity = quantity
                , memo = model.memo
                }
        )
        (Eos.Name.fromString model.from |> Result.toMaybe)
        (Eos.Name.fromString model.to |> Result.toMaybe)
        parseQuantity



-- VIEW


view : Shared.Model -> Model -> View Msg
view _ _ =
    let
        inputClass : Html.Attribute msg
        inputClass =
            class "border"
    in
    { title = "elm-watch starter"
    , body =
        [ Html.main_ []
            [ Html.form
                [ Html.Events.onSubmit ClickedTransfer
                , class "flex flex-col"
                ]
                [ Html.label []
                    [ Html.text "Private Key"
                    , Html.input [ inputClass ] []
                    ]
                , Html.label []
                    [ Html.text "From"
                    , Html.input [ inputClass ] []
                    ]
                , Html.label []
                    [ Html.text "To"
                    , Html.input [ inputClass ] []
                    ]
                , Html.label []
                    [ Html.text "Amount"
                    , Html.input [ inputClass ] []
                    ]
                , Html.label []
                    [ Html.text "Symbol Precision"
                    , Html.input [ inputClass ] []
                    ]
                , Html.label []
                    [ Html.text "Symbol Code"
                    , Html.input [ inputClass ] []
                    ]
                , Html.label []
                    [ Html.text "Memo"
                    , Html.input [ inputClass ] []
                    ]
                , Html.button [ class "bg-orange-400 text-white rounded-full w-40 py-2" ] [ Html.text "Transfer" ]
                ]
            ]
        ]
    }



-- PORT SUBSCRIPTION


{-| Subscribe to messages from Typescript
-}
toElmSubscription : InteropDefinitions.ToElm -> Maybe Msg
toElmSubscription _ =
    Nothing
