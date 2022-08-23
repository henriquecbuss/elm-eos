module Eos.TimePoint exposing
    ( TimePoint
    , fromMicroseconds, toMicroseconds
    , toPosix, fromPosix
    , encode, decoder
    )

{-| TimePoint encodes a point in time in microseconds.

@docs TimePoint


## Converting to and from microseconds

@docs fromMicroseconds, toMicroseconds


## Converting to and from `Time.Posix`

@docs toPosix, fromPosix


## Dealing with JSON

@docs encode, decoder

-}

import Json.Decode
import Json.Encode
import Time


{-| A point in time in microseconds.
-}
type TimePoint
    = TimePoint Int



-- CONVERTING TO AND FROM MICROSECONDS


{-| Convert microseconds to a `TimePoint`.
-}
fromMicroseconds : Int -> TimePoint
fromMicroseconds microseconds =
    TimePoint microseconds


{-| Convert a `TimePoint` to microseconds.
-}
toMicroseconds : TimePoint -> Int
toMicroseconds (TimePoint microseconds) =
    microseconds



-- CONVERTING TO AND FROM TIME.POSIX


{-| Convert a `TimePoint` to a `Time.Posix`. Since `Time.Posix` uses milliseconds
and EOSIO uses microseconds, you may lose some information.
-}
toPosix : TimePoint -> Time.Posix
toPosix (TimePoint microseconds) =
    Time.millisToPosix (microseconds // 1000)


{-| Convert a `Time.Posix` to a `TimePoint`. Since `Time.Posix` uses milliseconds
and EOSIO uses microseconds, you may lose some information.
-}
fromPosix : Time.Posix -> TimePoint
fromPosix posix =
    TimePoint (Time.posixToMillis posix * 1000)



-- JSON


{-| Encode a [TimePoint](#TimePoint) into JSON. You can use this to send a
[TimePoint](#TimePoint) to the blockchain or some server.
-}
encode : TimePoint -> Json.Encode.Value
encode (TimePoint microseconds) =
    Json.Encode.int microseconds


{-| Decode a [TimePoint](#TimePoint) from JSON. You can use this to receive a
[TimePoint](#TimePoint) from the blockchain or some server.
-}
decoder : Json.Decode.Decoder TimePoint
decoder =
    Json.Decode.int
        |> Json.Decode.map TimePoint
