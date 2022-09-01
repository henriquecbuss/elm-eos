module Context exposing (Context, prefixed)

import String.Extra


type alias Context =
    { baseUrl : String
    , contract : String
    }


prefixed : Context -> List String -> List String
prefixed context suffix =
    (String.split "." context.contract ++ suffix)
        |> List.map String.Extra.classify
