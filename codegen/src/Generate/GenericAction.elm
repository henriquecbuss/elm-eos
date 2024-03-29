module Generate.GenericAction exposing (encode, fromDict, type_)

import Context
import Elm
import Elm.Annotation
import Elm.Case
import Elm.Declare
import Gen.Dict
import Gen.Eos.Authorization
import Gen.Eos.Name
import Gen.Json.Encode
import Gen.Maybe
import Gen.Maybe.Extra
import String.Extra


actionModule : List String -> String -> List String
actionModule base contract =
    Context.contractNameParts base contract ++ [ "Action" ]


encode :
    List String
    -> List String
    ->
        { call : Elm.Expression -> Elm.Expression
        , callFrom : List String -> Elm.Expression -> Elm.Expression
        , declaration : Elm.Declaration
        }
encode base contracts =
    Elm.Declare.fn "encode"
        ( "action", Just (Elm.Annotation.named [] "Action") )
        (\genericAction ->
            Elm.Case.custom genericAction
                (Elm.Annotation.named [] "Action")
                (List.map
                    (\contract ->
                        let
                            baseContractName : String
                            baseContractName =
                                String.concat (Context.contractNamePartsWithoutBase contract)
                        in
                        Elm.Case.branch1 (baseContractName ++ "Action")
                            ( "action"
                            , Elm.Annotation.named (actionModule base contract) "Action"
                            )
                            (\action ->
                                Elm.apply
                                    (Elm.value
                                        { annotation =
                                            Just
                                                (Elm.Annotation.function
                                                    [ Elm.Annotation.list Gen.Eos.Authorization.annotation_.authorization
                                                    , Elm.Annotation.named (actionModule base contract) "Action"
                                                    ]
                                                    Gen.Json.Encode.annotation_.value
                                                )
                                        , importFrom = actionModule base contract
                                        , name = "encode"
                                        }
                                    )
                                    [ Elm.list []
                                    , action
                                    ]
                            )
                    )
                    contracts
                )
        )


fromDict :
    List String
    -> List String
    ->
        { call : Elm.Expression -> Elm.Expression -> Elm.Expression
        , callFrom : List String -> Elm.Expression -> Elm.Expression -> Elm.Expression
        , declaration : Elm.Declaration
        }
fromDict base contracts =
    Elm.Declare.fn2 "fromDict"
        ( "contractName", Just Gen.Eos.Name.annotation_.name )
        ( "inputDict", Just (Gen.Dict.annotation_.dict Elm.Annotation.string Elm.Annotation.string) )
        (\contractName inputDict ->
            Gen.Maybe.Extra.oneOf
                (List.map
                    (\contract ->
                        Elm.functionReduced "args"
                            (\args ->
                                Elm.apply
                                    (Elm.value
                                        { annotation =
                                            Elm.Annotation.function
                                                [ Gen.Eos.Name.annotation_.name
                                                , Elm.Annotation.dict Elm.Annotation.string Elm.Annotation.string
                                                ]
                                                (Elm.Annotation.named (actionModule base contract) "Action"
                                                    |> Elm.Annotation.maybe
                                                )
                                                |> Just
                                        , importFrom = actionModule base contract
                                        , name = "fromDict"
                                        }
                                    )
                                    [ contractName, args ]
                                    |> Gen.Maybe.map
                                        (\action ->
                                            Elm.apply
                                                (Elm.value
                                                    { annotation =
                                                        Elm.Annotation.function
                                                            [ Elm.Annotation.named (actionModule base contract) "Action"
                                                            ]
                                                            (Elm.Annotation.named [] "Action")
                                                            |> Just
                                                    , importFrom = []
                                                    , name = String.Extra.classify contract ++ "Action"
                                                    }
                                                )
                                                [ action ]
                                        )
                            )
                    )
                    contracts
                )
                inputDict
        )


type_ : List String -> List String -> Elm.Declaration
type_ base contracts =
    Elm.customType "Action"
        (List.map
            (\contract ->
                let
                    baseContractName : String
                    baseContractName =
                        String.concat (Context.contractNamePartsWithoutBase contract)
                in
                Elm.variantWith (baseContractName ++ "Action")
                    [ Elm.Annotation.named
                        (actionModule base contract)
                        "Action"
                    ]
            )
            contracts
        )
