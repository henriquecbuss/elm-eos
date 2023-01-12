module Eos.TimePointTests exposing (suite)

import Eos.TimePoint
import Expect
import Fuzz
import Json.Decode
import Test exposing (Test, describe, fuzz, test)
import Time


suite : Test
suite =
    describe "Eos.TimePoint"
        [ microsecondsRoundtrip
        , posixRoundtrip
        , jsonRoundtrip
        ]


microsecondsRoundtrip : Test
microsecondsRoundtrip =
    describe "fromMicroseconds and toMicroseconds roundTrip"
        [ test "fromMicroseconds 1000 and toMicroseconds results in 1000" <|
            \() ->
                Eos.TimePoint.fromMicroseconds 1000
                    |> Eos.TimePoint.toMicroseconds
                    |> Expect.equal 1000
        , fuzz Fuzz.int "fuzz fromMicroseconds and toMicroseconds" <|
            \microseconds ->
                Eos.TimePoint.fromMicroseconds microseconds
                    |> Eos.TimePoint.toMicroseconds
                    |> Expect.equal microseconds
        ]


posixRoundtrip : Test
posixRoundtrip =
    describe "fromPosix and toPosix roundtrip"
        [ test "fromPosix 1000 and toPosix results in 1000 when coming from timepoint" <|
            \() ->
                Eos.TimePoint.fromMicroseconds 1000
                    |> Eos.TimePoint.toPosix
                    |> Eos.TimePoint.fromPosix
                    |> Eos.TimePoint.toMicroseconds
                    |> Expect.equal 1000
        , test "fromPosix 1000 and toPosix results in 1000 when coming from Time.Posix" <|
            \() ->
                Time.millisToPosix 1000
                    |> Eos.TimePoint.fromPosix
                    |> Eos.TimePoint.toPosix
                    |> Time.posixToMillis
                    |> Expect.equal 1000
        , fuzz Fuzz.int "fuzz fromPosix and toPosix coming from timepoint" <|
            \microseconds ->
                Eos.TimePoint.fromMicroseconds microseconds
                    |> Eos.TimePoint.toPosix
                    |> Eos.TimePoint.fromPosix
                    |> Eos.TimePoint.toMicroseconds
                    |> Expect.equal ((microseconds // 1000) * 1000)
        , fuzz Fuzz.int "fuzz fromPosix and toPosix when coming from Time.Posix" <|
            \microseconds ->
                (microseconds // 1000)
                    |> Time.millisToPosix
                    |> Eos.TimePoint.fromPosix
                    |> Eos.TimePoint.toPosix
                    |> Time.posixToMillis
                    |> Expect.equal (microseconds // 1000)
        ]


jsonRoundtrip : Test
jsonRoundtrip =
    describe "encode and decode roundtrip"
        [ test "1000 encoding and decoding results in 1000" <|
            \() ->
                Eos.TimePoint.fromMicroseconds 1000
                    |> Eos.TimePoint.encode
                    |> Json.Decode.decodeValue Eos.TimePoint.decoder
                    |> Expect.all
                        [ Eos.TimePoint.fromMicroseconds 1000
                            |> Ok
                            |> Expect.equal
                        , Result.map Eos.TimePoint.toMicroseconds
                            >> Expect.equal (Ok 1000)
                        ]
        , fuzz Fuzz.int "fuzz encoding and decoding" <|
            \microseconds ->
                Eos.TimePoint.fromMicroseconds microseconds
                    |> Eos.TimePoint.encode
                    |> Json.Decode.decodeValue Eos.TimePoint.decoder
                    |> Expect.all
                        [ Eos.TimePoint.fromMicroseconds microseconds
                            |> Ok
                            |> Expect.equal
                        , Result.map Eos.TimePoint.toMicroseconds
                            >> Expect.equal (Ok microseconds)
                        ]
        ]
