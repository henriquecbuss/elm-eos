module User exposing
    ( State(..), User
    , init
    , isConnected, provider
    )

{-| This module helps us represent the state of the user's wallet connection.

@docs State, User


## Creating a user

@docs init


## Extracting data

@docs isConnected, provider

-}

import Eos.Name
import WalletProvider exposing (WalletProvider)


{-| The state of the user's wallet connection
-}
type State
    = NotConnected
    | Connecting WalletProvider
    | WithError WalletProvider
    | Connected User


{-| A user
-}
type User
    = User
        { provider : WalletProvider
        , accountName : Eos.Name.Name
        }


{-| Initialize a user
-}
init : { accountName : Eos.Name.Name, provider : WalletProvider } -> User
init data =
    User data


{-| Check if a user is connected
-}
isConnected : State -> Bool
isConnected state =
    case state of
        Connected _ ->
            True

        _ ->
            False


{-| Get the provider of a user
-}
provider : User -> WalletProvider
provider (User user) =
    user.provider
