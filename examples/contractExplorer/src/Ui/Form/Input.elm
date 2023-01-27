module Ui.Form.Input exposing (view)

{-| Helpers to build an `input` element
-}

import Html
import Html.Attributes as Attr exposing (class)
import Html.Events as Events


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
view { label, placeholder, onInput, value, labelAttrs } attrs =
    Html.label (class "flex flex-col" :: labelAttrs)
        [ label
        , Html.input
            (Attr.placeholder placeholder
                :: Attr.value value
                :: class "border rounded-sm py-1 px-2"
                :: Events.onInput onInput
                :: attrs
            )
            []
        ]
