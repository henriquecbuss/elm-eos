module Eos.Asset exposing
    ( Asset
    , encode, decoder
    )

{-|

@docs Asset


## Dealing with JSON

@docs encode, decoder

-}

import Eos.Symbol
import Json.Decode
import Json.Encode


{-| An asset is simply an amount of a given symbol.
-}
type alias Asset =
    { amount : Float
    , symbol : Eos.Symbol.Symbol
    }


{-| Encode an [Asset](#Asset) into JSON.
-}
encode : Asset -> Json.Encode.Value
encode asset =
    Json.Encode.object
        [ ( "amount", Json.Encode.float asset.amount )
        , ( "symbol", Eos.Symbol.encode asset.symbol )
        ]


{-| Decode an [Asset](#Asset) from JSON.
-}
decoder : Json.Decode.Decoder Asset
decoder =
    Json.Decode.map2
        (\amount symbol ->
            { amount = amount, symbol = symbol }
        )
        (Json.Decode.field "amount" Json.Decode.float)
        (Json.Decode.field "symbol" Eos.Symbol.decoder)
