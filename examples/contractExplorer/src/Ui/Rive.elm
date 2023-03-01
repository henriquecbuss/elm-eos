module Ui.Rive exposing (viewLoadingAnimation, LoadingState(..))

{-| This module uses the auto-generated Ui.RiveComponent module to define animations
from Rive files

@docs viewLoadingAnimation, LoadingState

-}

import Html
import Html.Attributes as Attr
import Ui.RiveComponent


{-| An HTML element that plays a loading animation, with a failure and success
animation
-}
viewLoadingAnimation : List (Html.Attribute msg) -> LoadingState -> Html.Html msg
viewLoadingAnimation attrs stateMachineState =
    let
        intStateMachineState : Int
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


{-| The state of the state machine in the Rive file for `viewLoadingAnimation`
-}
type LoadingState
    = Loading
    | Failure
    | Success
