module User exposing (User, fromPrivateKey)


type User
    = User
        { privateKey : String
        }


fromPrivateKey : String -> User
fromPrivateKey privateKey =
    User
        { privateKey = privateKey
        }
