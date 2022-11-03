module Pages.{{module}} exposing (page)

{-| {{module}}

@docs page

-}

import Gen.Params.{{module}} exposing (Params)
import Page exposing (Page)
import Request
import Shared
import View exposing (View)


{-| This is how elm-spa knows what to do with our app
-}
page : Shared.Model -> Request.With Params -> Page
page shared req =
    Page.static
        { view = view
        }


view : View msg
view =
    View.placeholder "{{module}}"
