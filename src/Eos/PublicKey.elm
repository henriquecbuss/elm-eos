module Eos.PublicKey exposing
    ( PublicKey
    , encode, decoder
    , fromString, toString
    )

{-|

@docs PublicKey

@docs encode, decoder

@docs fromString, toString

-}

import Json.Decode
import Json.Encode as Encode


{-| A PublicKey
-}
type PublicKey
    = PublicKey String


{-| Encode a [PublicKey](#PublicKey) into JSON.
-}
encode : PublicKey -> Encode.Value
encode (PublicKey publicKey) =
    Encode.string publicKey


{-| Decode a PublicKey.
-}
decoder : Json.Decode.Decoder PublicKey
decoder =
    Json.Decode.map PublicKey Json.Decode.string


{-| Turn a String into a PublicKey
-}
fromString : String -> PublicKey
fromString =
    PublicKey


{-| Turn a PublicKey into a String
-}
toString : PublicKey -> String
toString (PublicKey publicKey) =
    publicKey
