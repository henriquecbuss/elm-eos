module Eos.Checksum exposing
    ( Checksum
    , encode, decoder
    )

{-|

@docs Checksum

@docs encode, decoder

-}

import Json.Decode
import Json.Encode


{-| A Checksum
-}
type Checksum
    = Checksum String


{-| Encode a [Checksum](#Checksum) into JSON.
-}
encode : Checksum -> Json.Encode.Value
encode (Checksum checksum) =
    Json.Encode.string checksum


{-| Decode a Checksum.
-}
decoder : Json.Decode.Decoder Checksum
decoder =
    Json.Decode.map Checksum Json.Decode.string
