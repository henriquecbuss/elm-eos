module Context exposing (Context, prefixed)

import String.Extra


type alias Context =
    { baseUrl : String
    , contract : String
    , basePath : List String
    }


prefixed : Context -> List String -> List String
prefixed context suffix =
    (context.basePath ++ String.split "." context.contract ++ suffix)
        |> List.map String.Extra.classify
