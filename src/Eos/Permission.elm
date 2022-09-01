module Eos.Permission exposing
    ( Permission(..)
    , encode, decoder
    )

{-| Permissions control what EOSIO accounts can do and how actions are authorized.
They are organized in a hierarchical structure, with the root permission being
the `Owner` permission. The `Active` permission is a child of the `Owner`.

@docs Permission


## Working with JSON

@docs encode, decoder

-}

import Eos.Name
import Json.Decode
import Json.Encode


{-| There are two permissions by default: Owner and Active. However, each account
may have arbitrary permissions (that's what `Custom` is for).
-}
type Permission
    = Owner
    | Active
    | Custom Eos.Name.Name


{-| Turn a permission into a JSON value.
-}
encode : Permission -> Json.Encode.Value
encode permission =
    case permission of
        Owner ->
            Json.Encode.string "owner"

        Active ->
            Json.Encode.string "active"

        Custom name ->
            Eos.Name.encode name


{-| Decode a JSON value into a Permission
-}
decoder : Json.Decode.Decoder Permission
decoder =
    Json.Decode.oneOf
        [ Json.Decode.string
            |> Json.Decode.andThen
                (\string ->
                    case String.toLower string of
                        "owner" ->
                            Json.Decode.succeed Owner

                        "active" ->
                            Json.Decode.succeed Active

                        _ ->
                            Json.Decode.fail ("Invalid permission. I was expecting either `owner` or `active`, but got " ++ string)
                )
        , Json.Decode.map Custom Eos.Name.decoder
        ]
