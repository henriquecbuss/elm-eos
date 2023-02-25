module User exposing (State(..), User, init)

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
