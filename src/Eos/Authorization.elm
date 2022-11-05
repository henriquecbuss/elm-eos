module Eos.Authorization exposing
    ( Authorization
    , encode
    )

{-| An authorization is what is used to declare who is performing an action. It
uses the user's name and a [Permission](Eos-Permission).

@docs Authorization


## Dealing with JSON

@docs encode

-}

import Eos.Name
import Eos.Permission
import Json.Encode as Encode


{-| An authorization is just a name and a permission.
-}
type alias Authorization =
    { actor : Eos.Name.Name
    , permission : Eos.Permission.Permission
    }


{-| Turn an authorization into a JSON value.
-}
encode : Authorization -> Encode.Value
encode authorization =
    Encode.object
        [ ( "actor", Eos.Name.encode authorization.actor )
        , ( "permission", Eos.Permission.encode authorization.permission )
        ]
