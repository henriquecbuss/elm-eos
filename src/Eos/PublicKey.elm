module Eos.PublicKey exposing
    ( PublicKey
    , encode, decoder
    )

{-|

@docs PublicKey

@docs encode, decoder

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
