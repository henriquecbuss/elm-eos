module Ui.Rive exposing (LoadingState(..), viewLoadingAnimation)

import Html
import Html.Attributes as Attr
import Ui.RiveComponent


type LoadingState
    = Loading
    | Failure
    | Success


viewLoadingAnimation : List (Html.Attribute msg) -> LoadingState -> Html.Html msg
viewLoadingAnimation attrs stateMachineState =
    let
        intStateMachineState =
            case stateMachineState of
                Loading ->
                    2

                Failure ->
                    1

                Success ->
                    0
    in
    Ui.RiveComponent.view
        (Attr.attribute "src" "/assets/check_loading_animation.riv"
            :: Attr.attribute "autoplay" "true"
            :: Attr.attribute "stateMachine" "State Machine 1"
            :: Attr.attribute "stateMachineState" (String.fromInt intStateMachineState)
            :: attrs
        )
        []
