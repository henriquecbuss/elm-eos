module Eos.Checksum exposing
    ( Checksum
    , encode, decoder
    , fromString, toString
    )

{-|

@docs Checksum

@docs encode, decoder

@docs fromString, toString

-}

import Json.Decode
import Json.Encode as Encode


{-| A Checksum
-}
type Checksum
    = Checksum String


{-| Encode a [Checksum](#Checksum) into JSON.
-}
encode : Checksum -> Encode.Value
encode (Checksum checksum) =
    Encode.string checksum


{-| Decode a Checksum.
-}
decoder : Json.Decode.Decoder Checksum
decoder =
    Json.Decode.map Checksum Json.Decode.string


{-| Turn a String into a Checksum
-}
fromString : String -> Checksum
fromString =
    Checksum


{-| Turn a Checksum into a String
-}
toString : Checksum -> String
toString (Checksum checksum) =
    checksum
