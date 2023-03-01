module Ui.Form.Input exposing (view, viewWithEosType)

{-| Helpers to build an `input` element
-}

import Eos.EosType
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events as Events


baseClasses : Html.Attribute msg_
baseClasses =
    class "border rounded-sm py-1 px-2 w-full"


{-| View a styled `input` element
-}
view :
    { label : Html.Html msg
    , labelAttrs : List (Html.Attribute msg)
    , onInput : String -> msg
    , placeholder : String
    , value : String
    }
    -> List (Html.Attribute msg)
    -> Html.Html msg
view { label, labelAttrs, onInput, placeholder, value } attrs =
    Html.label (class "flex flex-col" :: labelAttrs)
        [ label
        , Html.input
            (Attr.placeholder placeholder
                :: Attr.value value
                :: baseClasses
                :: Events.onInput onInput
                :: attrs
            )
            []
        ]


{-| View an input that's represents an eos type input
-}
viewWithEosType :
    { eosType : Eos.EosType.EosType
    , label : Html.Html msg
    , labelAttrs : List (Html.Attribute msg)
    , onInput : String -> msg
    , placeholder : String
    , value : String
    }
    -> List (Html.Attribute msg)
    -> Html.Html msg
viewWithEosType { eosType, label, labelAttrs, onInput, placeholder, value } attrs =
    Html.label (class "flex flex-col" :: labelAttrs)
        [ label
        , Html.div [ class "relative w-full" ]
            [ Html.input
                (Attr.placeholder placeholder
                    :: Attr.value value
                    :: baseClasses
                    :: Events.onInput onInput
                    :: attrs
                )
                []
            , Html.div [ class "absolute right-0 inset-y-0 flex items-center justify-center px-2 bg-slate-700 text-white rounded-r-sm min-w-[4rem] sm:min-w-[6rem]" ]
                [ Html.text (eosTypeToString eosType) ]
            ]
        ]


eosTypeToString : Eos.EosType.EosType -> String
eosTypeToString eosType =
    -- elm-review: IGNORE TCO
    case eosType of
        Eos.EosType.EosBool ->
            "bool"

        Eos.EosType.EosInt ->
            "int"

        Eos.EosType.EosFloat ->
            "float"

        Eos.EosType.TimePoint ->
            "timePoint"

        Eos.EosType.TimePointSec ->
            "timePointSec"

        Eos.EosType.BlockTimestampType ->
            "blockTimestamp"

        Eos.EosType.Name ->
            "name"

        Eos.EosType.EosString ->
            "string"

        Eos.EosType.Checksum ->
            "checksum"

        Eos.EosType.PublicKey ->
            "publicKey"

        Eos.EosType.Signature ->
            "signature"

        Eos.EosType.Symbol ->
            "symbol"

        Eos.EosType.SymbolCode ->
            "symbolCode"

        Eos.EosType.Asset ->
            "asset"

        Eos.EosType.ExtendedAsset ->
            "extendedAsset"

        Eos.EosType.EosList innerType ->
            eosTypeToString innerType ++ "[]"
