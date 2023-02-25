module Auth exposing
    ( User
    , beforeProtectedInit
    )

{-|

@docs User
@docs beforeProtectedInit

-}

import ElmSpa.Page as ElmSpa
import Gen.Route exposing (Route)
import Request exposing (Request)
import Shared
import User


{-| Replace the "()" with your actual User type
-}
type alias User =
    User.User


{-| This function will run before any `protected` pages.

Here, you can provide logic on where to redirect if a user is not signed in. Here's an example:

    case shared.user of
        Just user ->
            ElmSpa.Provide user

        Nothing ->
            ElmSpa.RedirectTo Gen.Route.SignIn

-}
beforeProtectedInit : Shared.Model -> Request -> ElmSpa.Protected User Route
beforeProtectedInit shared _ =
    case shared.userState of
        User.Connected user ->
            ElmSpa.Provide user

        _ ->
            ElmSpa.RedirectTo Gen.Route.Login
