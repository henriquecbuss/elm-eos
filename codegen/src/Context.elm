module Context exposing (Context, decoder)

import Json.Decode


type alias Context =
    { baseUrl : String
    , contract : String
    }


decoder : Json.Decode.Decoder Context
decoder =
    Json.Decode.map2
        (\baseUrl contract -> { baseUrl = baseUrl, contract = contract })
        (Json.Decode.field "baseUrl" Json.Decode.string)
        (Json.Decode.field "contract" Json.Decode.string)
