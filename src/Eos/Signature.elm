module Eos.Signature exposing
    ( Signature
    , encode, decoder
    , fromString, toString
    )

{-|

@docs Signature

@docs encode, decoder

@docs fromString, toString

-}

import Json.Decode
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
decoder : Json.Decode.Decoder Signature
decoder =
    Json.Decode.map Signature Json.Decode.string


{-| Turn a String into a Signature
-}
fromString : String -> Signature
fromString =
    Signature


{-| Turn a Signature into a String
-}
toString : Signature -> String
toString (Signature signature) =
    signature
