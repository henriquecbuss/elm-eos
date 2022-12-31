module Ui.Header exposing (..)

import Gen.Route
import Html
import Html.Attributes as Attr exposing (class)
import Html.Events


view : { logout : msg } -> Html.Html msg
view { logout } =
    Html.header [ class "w-full py-2 bg-slate-700 text-white" ]
        [ Html.div [ class "container mx-auto px-4 flex" ]
            [ Html.a [ Attr.href (Gen.Route.toHref Gen.Route.Home_) ]
                [ Html.h1 [ class "text-4xl font-bold" ] [ Html.text "elm-eos" ]
                ]
            , Html.button
                [ class "ml-auto hover:bg-slate-100 hover:text-black transition-colors rounded px-4 py-1"
                , Html.Events.onClick logout
                ]
                [ Html.text "Logout" ]
            ]
        ]
