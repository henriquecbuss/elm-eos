module Eos.ExtendedAsset exposing
    ( ExtendedAsset
    , encode, decoder
    )

{-|

@docs ExtendedAsset


## Dealing with JSON

@docs encode, decoder

-}

import Eos.Asset
import Eos.Name
import Eos.Symbol
import Json.Decode
import Json.Encode as Encode


{-| An extended asset is simply an [Asset](Eos-Asset), but with a contract [Name](Eos-Name)
-}
type alias ExtendedAsset =
    { amount : Float
    , symbol : Eos.Symbol.Symbol
    , contract : Eos.Name.Name
    }


{-| Encode an [ExtendedAsset](#ExtendedAsset) into JSON.
-}
encode : ExtendedAsset -> Encode.Value
encode asset =
    Encode.object
        [ ( "asset"
          , Eos.Asset.encode { amount = asset.amount, symbol = asset.symbol }
          )
        , ( "contract", Eos.Name.encode asset.contract )
        ]


{-| Decode an [ExtendedAsset](#ExtendedAsset) from JSON.
-}
decoder : Json.Decode.Decoder ExtendedAsset
decoder =
    Json.Decode.map2
        (\asset contract ->
            { amount = asset.amount
            , symbol = asset.symbol
            , contract = contract
            }
        )
        (Json.Decode.field "asset" Eos.Asset.decoder)
        (Json.Decode.field "contract" Eos.Name.decoder)
