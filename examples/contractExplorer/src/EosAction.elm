module EosAction exposing
    ( Action(..)
    , encode, fromDict
    )

{-| Conveniences to work with actions from multiple contracts

@docs Action


## Building actions

@docs encode, fromDict

-}

import Api.Cambiatus.Cm.Action
import Api.Cambiatus.Tk.Action
import Dict
import Eos.Name
import Json.Encode as Encode
import Maybe.Extra as MaybeX


{-| All possible actions
-}
type Action
    = CambiatusCmAction Api.Cambiatus.Cm.Action.Action
    | CambiatusTkAction Api.Cambiatus.Tk.Action.Action


{-| Encode an action to JSON
-}
encode : Action -> Encode.Value
encode genericAction =
    case genericAction of
        CambiatusCmAction action ->
            Api.Cambiatus.Cm.Action.encode [] action

        CambiatusTkAction action ->
            Api.Cambiatus.Tk.Action.encode [] action


{-| Turn a dict into an action. Useful for building forms
-}
fromDict : Eos.Name.Name -> Dict.Dict String String -> Maybe Action
fromDict contractName inputDict =
    MaybeX.oneOf
        [ Api.Cambiatus.Cm.Action.fromDict contractName
            >> Maybe.map CambiatusCmAction
        , Api.Cambiatus.Tk.Action.fromDict contractName
            >> Maybe.map CambiatusTkAction
        ]
        inputDict
