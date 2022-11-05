module Generate.Action exposing (encode, encodeSingleAction, getName, type_)

import Abi
import Context
import Elm
import Elm.Annotation
import Elm.Case
import Elm.Op
import EosType
import Gen.Eos.Authorization
import Gen.Json.Encode
import String.Extra


encode : Context.Context -> Elm.Declaration
encode context =
    Elm.fn2
        ( "authorizations", Just (Elm.Annotation.list Gen.Eos.Authorization.annotation_.authorization) )
        ( "action", Just (Elm.Annotation.named [] "Action") )
        (\authorizationsArg actionArg ->
            Gen.Json.Encode.object
                [ Elm.tuple (Elm.string "account") (Gen.Json.Encode.string context.contract)
                , Elm.apply
                    (Elm.value
                        { annotation =
                            Just
                                (Elm.Annotation.function
                                    [ Elm.Annotation.named [] "Action" ]
                                    Elm.Annotation.string
                                )
                        , importFrom = []
                        , name = "getName"
                        }
                    )
                    [ actionArg ]
                    |> Gen.Json.Encode.call_.string
                    |> Elm.tuple (Elm.string "name")
                , Elm.tuple (Elm.string "authorization")
                    (Gen.Json.Encode.call_.list
                        -- elm-codegen messes up the imports if we don't do this
                        (Elm.value
                            { annotation =
                                Just
                                    (Elm.Annotation.function
                                        [ Gen.Eos.Authorization.annotation_.authorization ]
                                        Gen.Json.Encode.annotation_.value
                                    )
                            , importFrom = [ "Eos", "Authorization" ]
                            , name = "encode"
                            }
                        )
                        authorizationsArg
                    )
                , Elm.tuple (Elm.string "data")
                    (Elm.apply
                        (Elm.value
                            { annotation =
                                Just
                                    (Elm.Annotation.function
                                        [ Elm.Annotation.named [] "Action" ]
                                        Gen.Json.Encode.annotation_.value
                                    )
                            , importFrom = []
                            , name = "encodeSingleAction"
                            }
                        )
                        [ actionArg ]
                    )
                ]
        )
        |> Elm.declaration "encode"
        |> Elm.withDocumentation "Turn an [Action](#Action) into a JSON value to perform a transaction. You can then send it through a port to eosjs, or similar."


encodeSingleAction : List Abi.Action -> Elm.Declaration
encodeSingleAction actions =
    Elm.fn
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
        |> Elm.declaration "encodeSingleAction"
        |> Elm.withDocumentation "Turn an [Action](#Action) into a JSON value. If you want to send the action to the blockchain, use [encode](#encode) instead."


actionParameter : Abi.Action -> Elm.Annotation.Annotation
actionParameter action =
    Elm.Annotation.record
        (List.map (\arg -> ( String.Extra.camelize arg.name, EosType.toAnnotation arg.type_ )) action.arguments)


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


getName : List Abi.Action -> Elm.Declaration
getName actions =
    Elm.fn ( "action", Just (Elm.Annotation.named [] "Action") )
        (\actionArg ->
            Elm.Case.custom actionArg
                (Elm.Annotation.named [] "Action")
                (List.map getNameBranch actions)
        )
        |> Elm.declaration "getName"


getNameBranch : Abi.Action -> Elm.Case.Branch
getNameBranch action =
    Elm.Case.branch1 (String.Extra.classify action.name)
        ( "_", actionParameter action )
        (\_ -> Elm.string action.name)


type_ : List Abi.Action -> Elm.Declaration
type_ actions =
    Elm.customType "Action" (List.map actionVariant actions)
        |> Elm.withDocumentation "Represents an action that can be sent to the blockchain.\n\nYou can [encode](#encode) it and send it through a port to eosjs or similar."


actionVariant : Abi.Action -> Elm.Variant
actionVariant action =
    Elm.variantWith (String.Extra.camelize action.name) [ actionParameter action ]
