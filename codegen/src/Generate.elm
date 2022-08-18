module Generate exposing (main)

{-| -}

import Elm
import Gen.CodeGen.Generate as Generate
import Gen.Helper


main : Program {} () ()
main =
    Generate.run
        []
