module EosAction exposing (Action(..), encode, fromDict)

import Cambiatus.Cm.Action
import Cambiatus.Tk.Action
import Dict
import Eos.Name
import Json.Encode as Encode
import Maybe.Extra as MaybeX


type Action
    = CambiatusCmAction Cambiatus.Cm.Action.Action
    | CambiatusTkAction Cambiatus.Tk.Action.Action


encode : Action -> Encode.Value
encode genericAction =
    case genericAction of
        CambiatusCmAction action ->
            Cambiatus.Cm.Action.encode [] action

        CambiatusTkAction action ->
            Cambiatus.Tk.Action.encode [] action


fromDict : Eos.Name.Name -> Dict.Dict String String -> Maybe Action
fromDict contractName inputDict =
    MaybeX.oneOf
        [ Cambiatus.Cm.Action.fromDict contractName
            >> Maybe.map CambiatusCmAction
        , Cambiatus.Tk.Action.fromDict contractName
            >> Maybe.map CambiatusTkAction
        ]
        inputDict
