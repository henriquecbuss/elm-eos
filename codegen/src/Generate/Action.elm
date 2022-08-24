module Generate.Action exposing (encode, type_)

import Abi
import Elm
import Elm.Annotation
import Elm.Case
import Elm.Op
import EosType
import Gen.Json.Encode
import String.Extra


type_ : List Abi.Action -> Elm.Declaration
type_ actions =
    Elm.customType "Action" (List.map actionVariant actions)


actionVariant : Abi.Action -> Elm.Variant
actionVariant action =
    Elm.variantWith (String.Extra.camelize action.name) [ actionParameter action ]


actionParameter : Abi.Action -> Elm.Annotation.Annotation
actionParameter action =
    Elm.Annotation.record
        (action.arguments
            |> List.map (\arg -> ( String.Extra.camelize arg.name, EosType.toAnnotation arg.type_ ))
        )


encode : List Abi.Action -> Elm.Declaration
encode actions =
    Elm.declaration "encode"
        (Elm.fn
            ( "action"
            , Just
                (Elm.Annotation.function
                    [ Elm.Annotation.named [] "Action" ]
                    Gen.Json.Encode.annotation_.value
                )
            )
            (\actionToEncode ->
                Elm.Case.custom actionToEncode
                    (Elm.Annotation.named [] "Action")
                    (List.map encodeActionBranch actions)
            )
            -- For some reason, if we don't use `withType` here, elm-codegen
            -- struggles to infer the type of the function and generates an error.
            |> Elm.withType
                (Elm.Annotation.function
                    [ Elm.Annotation.named [] "Action" ]
                    Gen.Json.Encode.annotation_.value
                )
        )


encodeActionBranch : Abi.Action -> Elm.Case.Branch
encodeActionBranch action =
    Elm.Case.branch1 (String.Extra.camelize action.name)
        ( "args", actionParameter action )
        (\argsRecord ->
            Gen.Json.Encode.object
                (List.map
                    (\argument ->
                        Elm.tuple (Elm.string argument.name)
                            (Elm.get (String.Extra.camelize argument.name) argsRecord
                                |> Elm.Op.pipe (EosType.generateEncoder argument.type_)
                            )
                    )
                    action.arguments
                )
        )
