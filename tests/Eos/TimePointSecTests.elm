module Eos.TimePointSecTests exposing (suite)

import Eos.TimePointSec
import Expect
import Fuzz
import Json.Decode
import Test exposing (Test, describe, fuzz, test)
import Time


suite : Test
suite =
    describe "Eos.TimePointSec"
        [ secondsRoundtrip
        , posixRoundtrip
        , jsonRoundtrip
        ]


secondsRoundtrip : Test
secondsRoundtrip =
    describe "fomSeconds and toSeconds roundTrip"
        [ test "fromSeconds 1000 and toSeconds results in 1000" <|
            \_ ->
                1000
                    |> Eos.TimePointSec.fromSeconds
                    |> Eos.TimePointSec.toSeconds
                    |> Expect.equal 1000
        , fuzz Fuzz.int "fuzz fromSeconds and toSeconds" <|
            \seconds ->
                seconds
                    |> Eos.TimePointSec.fromSeconds
                    |> Eos.TimePointSec.toSeconds
                    |> Expect.equal seconds
        ]


posixRoundtrip : Test
posixRoundtrip =
    describe "fromPosix and toPosix roundtrip"
        [ test "fromPosix 1000 and toPosix results in 1000 when coming from TimePointSec" <|
            \_ ->
                1000
                    |> Eos.TimePointSec.fromSeconds
                    |> Eos.TimePointSec.toPosix
                    |> Eos.TimePointSec.fromPosix
                    |> Eos.TimePointSec.toSeconds
                    |> Expect.equal 1000
        , test "fromPosix 1000 and toPosix results in 1000 when coming from Time.Posix" <|
            \_ ->
                1000
                    |> Time.millisToPosix
                    |> Eos.TimePointSec.fromPosix
                    |> Eos.TimePointSec.toPosix
                    |> Time.posixToMillis
                    |> Expect.equal 1000
        , fuzz Fuzz.int "fuzz fromPosix and toPosix coming from TimePointSec" <|
            \seconds ->
                seconds
                    |> Eos.TimePointSec.fromSeconds
                    |> Eos.TimePointSec.toPosix
                    |> Expect.equal (Time.millisToPosix (seconds * 1000))
        , fuzz Fuzz.int "fuzz fromPosix and toPosix when coming from Time.Posix" <|
            \milliseconds ->
                milliseconds
                    |> Time.millisToPosix
                    |> Eos.TimePointSec.fromPosix
                    |> Expect.equal (Eos.TimePointSec.fromSeconds (milliseconds // 1000))
        ]


jsonRoundtrip : Test
jsonRoundtrip =
    describe "encode and decode roundtrip"
        [ test "1000 encoding and decoding results in 1000" <|
            \_ ->
                1000
                    |> Eos.TimePointSec.fromSeconds
                    |> Eos.TimePointSec.encode
                    |> Json.Decode.decodeValue Eos.TimePointSec.decoder
                    |> Expect.all
                        [ Expect.equal (Ok (Eos.TimePointSec.fromSeconds 1000))
                        , Result.map Eos.TimePointSec.toSeconds
                            >> Expect.equal (Ok 1000)
                        ]
        , fuzz Fuzz.int "fuzz encoding and decoding" <|
            \seconds ->
                seconds
                    |> Eos.TimePointSec.fromSeconds
                    |> Eos.TimePointSec.encode
                    |> Json.Decode.decodeValue Eos.TimePointSec.decoder
                    |> Expect.all
                        [ Expect.equal (Ok (Eos.TimePointSec.fromSeconds seconds))
                        , Result.map Eos.TimePointSec.toSeconds
                            >> Expect.equal (Ok seconds)
                        ]
        ]
