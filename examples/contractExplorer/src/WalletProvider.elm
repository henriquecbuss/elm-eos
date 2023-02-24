module WalletProvider exposing (WalletProvider, fromId, name)


type WalletProvider
    = Simpleos
    | Scatter


fromId : String -> Maybe WalletProvider
fromId id =
    case id of
        "simpleos" ->
            Just Simpleos

        "scatter" ->
            Just Scatter

        _ ->
            Nothing


name : WalletProvider -> String
name provider =
    case provider of
        Simpleos ->
            "Simpleos"

        Scatter ->
            "Scatter"
