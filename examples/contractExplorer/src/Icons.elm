module Icons exposing (arrowPath)

{-| Some icons that are not available in the tailwind package

@docs arrowPath

-}

import Html
import Svg
import Svg.Attributes as SvgAttr


{-| The arrow-path icon
-}
arrowPath : List (Svg.Attribute msg) -> Html.Html msg
arrowPath attrs =
    Svg.svg
        (SvgAttr.fill "none"
            :: SvgAttr.viewBox "0 0 24 24"
            :: SvgAttr.strokeWidth "1.5"
            :: SvgAttr.stroke "currentColor"
            :: attrs
        )
        [ Svg.path [ SvgAttr.strokeLinecap "round", SvgAttr.strokeLinejoin "round", SvgAttr.d "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" ] [] ]
