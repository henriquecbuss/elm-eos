module EosAction exposing
    ( Action(..)
    , encode, fromDict
    )

{-| Conveniences to work with actions from multiple contracts

@docs Action


## Building actions

@docs encode, fromDict

-}

import Cambiatus.Cm.Action
import Cambiatus.Tk.Action
import Dict
import Eos.Name
import Json.Encode as Encode
import Maybe.Extra as MaybeX


{-| All possible actions
-}
type Action
    = CambiatusCmAction Cambiatus.Cm.Action.Action
    | CambiatusTkAction Cambiatus.Tk.Action.Action


{-| Encode an action to JSON
-}
encode : Action -> Encode.Value
encode genericAction =
    case genericAction of
        CambiatusCmAction action ->
            Cambiatus.Cm.Action.encode [] action

        CambiatusTkAction action ->
            Cambiatus.Tk.Action.encode [] action


{-| Turn a dict into an action. Useful for building forms
-}
fromDict : Eos.Name.Name -> Dict.Dict String String -> Maybe Action
fromDict contractName inputDict =
    MaybeX.oneOf
        [ Cambiatus.Cm.Action.fromDict contractName
            >> Maybe.map CambiatusCmAction
        , Cambiatus.Tk.Action.fromDict contractName
            >> Maybe.map CambiatusTkAction
        ]
        inputDict
