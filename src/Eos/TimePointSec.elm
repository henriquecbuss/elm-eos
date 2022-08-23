module Eos.TimePointSec exposing
    ( TimePointSec
    , fromSeconds, toSeconds
    , toPosix, fromPosix
    , encode, decoder
    )

{-| TimePointSec encodes a point in time in seconds.

@docs TimePointSec


## Converting to and from seconds

@docs fromSeconds, toSeconds


## Converting to and from `Time.Posix`

@docs toPosix, fromPosix


## Dealing with JSON

@docs encode, decoder

-}

import Json.Decode
import Json.Encode
import Time


{-| A point in time in seconds.
-}
type TimePointSec
    = TimePointSec Int



-- CONVERTING TO AND FROM SECONDS


{-| Convert seconds to a `TimePointSec`.
-}
fromSeconds : Int -> TimePointSec
fromSeconds seconds =
    TimePointSec seconds


{-| Convert a `TimePointSec` to seconds.
-}
toSeconds : TimePointSec -> Int
toSeconds (TimePointSec seconds) =
    seconds



-- CONVERTING TO AND FROM TIME.POSIX


{-| Convert a `TimePointSec` to a `Time.Posix`.
-}
toPosix : TimePointSec -> Time.Posix
toPosix (TimePointSec seconds) =
    Time.millisToPosix (seconds * 1000)


{-| Convert a `Time.Posix` to a `TimePointSec`.
-}
fromPosix : Time.Posix -> TimePointSec
fromPosix posix =
    TimePointSec (Time.posixToMillis posix // 1000)



-- JSON


{-| Encode a [TimePointSec](#TimePointSec) into JSON. You can use this to send a
[TimePointSec](#TimePointSec) to the blockchain or some server.
-}
encode : TimePointSec -> Json.Encode.Value
encode (TimePointSec seconds) =
    Json.Encode.int seconds


{-| Decode a [TimePointSec](#TimePointSec) from JSON. You can use this to receive a
[TimePointSec](#TimePointSec) from the blockchain or some server.
-}
decoder : Json.Decode.Decoder TimePointSec
decoder =
    Json.Decode.int
        |> Json.Decode.map TimePointSec
