module Context exposing (Context, contractNameParts, contractNamePartsWithoutBase, prefixed)

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


contractNameParts : List String -> String -> List String
contractNameParts base contract =
    (base ++ String.split "." contract)
        |> List.map String.Extra.classify


contractNamePartsWithoutBase : String -> List String
contractNamePartsWithoutBase contract =
    String.split "." contract
        |> List.map String.Extra.classify
