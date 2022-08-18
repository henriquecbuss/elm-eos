module Generate exposing (main)

{-| -}

import Abi
import Gen.CodeGen.Generate as Generate
import Json.Decode


main : Program Json.Decode.Value () ()
main =
    Generate.fromJson Abi.decoder
        (\_ -> [])
