module Eos.Checksum exposing
    ( Checksum
    , encode, decoder
    )

{-|

@docs Checksum

@docs encode, decoder

-}

import Json.Decode as Decode
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
decoder : Decode.Decoder Checksum
decoder =
    Decode.map Checksum Decode.string
