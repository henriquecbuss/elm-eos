module Eos.Signature exposing
    ( Signature
    , encode, decoder
    )

{-|

@docs Signature

@docs encode, decoder

-}

import Json.Decode as Decode
import Json.Encode as Encode


{-| A Signature
-}
type Signature
    = Signature String


{-| Encode a [Signature](#Signature) into JSON.
-}
encode : Signature -> Encode.Value
encode (Signature signature) =
    Encode.string signature


{-| Decode a Signature.
-}
decoder : Decode.Decoder Signature
decoder =
    Decode.map Signature Decode.string
