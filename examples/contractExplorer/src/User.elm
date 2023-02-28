module User exposing (State(..), User, init, isConnected, provider)

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


init : { accountName : Eos.Name.Name, provider : WalletProvider } -> User
init data =
    User data


isConnected : State -> Bool
isConnected state =
    case state of
        Connected _ ->
            True

        _ ->
            False


provider : User -> WalletProvider
provider (User user) =
    user.provider
