module User exposing (State(..), User, init, isConnected)

import Eos.Name
import WalletProvider exposing (WalletProvider)


type State
    = NotConnected
    | Connecting WalletProvider
    | WithError WalletProvider
    | Connected User


type User
    = User
        { provider : WalletProvider
        , accountName : Eos.Name.Name
        }


init : { provider : WalletProvider, accountName : Eos.Name.Name } -> User
init data =
    User data


isConnected : State -> Bool
isConnected state =
    case state of
        Connected _ ->
            True

        _ ->
            False
