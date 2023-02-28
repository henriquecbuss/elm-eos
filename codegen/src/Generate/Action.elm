module Generate.Action exposing (assetFromString, blockTimestampFromString, boolFromString, checksumFromString, encode, encodeSingleAction, extendedAssetFromString, floatFromString, fromDict, getName, intFromString, listFromString, nameFromString, publicKeyFromString, signatureFromString, stringFromString, symbolCodeFromString, symbolFromString, timePointFromString, timePointSecFromString, type_)

import Abi
import Context
import Elm
import Elm.Annotation
import Elm.Case
import Elm.Op
import EosType
import Gen.Basics
import Gen.Dict
import Gen.Eos.Asset
import Gen.Eos.Authorization
import Gen.Eos.Checksum
import Gen.Eos.ExtendedAsset
import Gen.Eos.Name
import Gen.Eos.PublicKey
import Gen.Eos.Signature
import Gen.Eos.Symbol
import Gen.Eos.SymbolCode
import Gen.Eos.TimePoint
import Gen.Eos.TimePointSec
import Gen.Json.Encode
import Gen.List
import Gen.Maybe
import Gen.Maybe.Extra
import Gen.Result
import Gen.String
import Gen.Time
import String.Extra


assetFromString : Elm.Declaration
assetFromString =
    Elm.fn ( "assetString", Just Elm.Annotation.string )
        (\assetString ->
            Elm.Case.custom (Gen.String.call_.split (Elm.string " ") assetString)
                (Elm.Annotation.list Elm.Annotation.string)
                [ Elm.Case.branchList 2
                    (\args ->
                        case args of
                            [ amountString, symbolString ] ->
                                Gen.Maybe.map2
                                    (\amount symbol ->
                                        Gen.Eos.Asset.make_.asset
                                            { amount = amount, symbol = symbol }
                                    )
                                    (Gen.String.call_.toFloat amountString)
                                    (Elm.apply (Elm.val "symbolFromString") [ symbolString ])

                            _ ->
                                Elm.nothing
                    )
                , Elm.Case.otherwise (\_ -> Elm.nothing)
                ]
        )
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.Asset.annotation_.asset))
        |> Elm.declaration "assetFromString"


blockTimestampFromString : Elm.Declaration
blockTimestampFromString =
    Elm.fn ( "blockTimestampString", Just Elm.Annotation.string )
        (\blockTimestampString ->
            Gen.Maybe.map Gen.Time.call_.millisToPosix
                (Gen.String.call_.toInt blockTimestampString)
        )
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Time.annotation_.posix))
        |> Elm.declaration "blockTimestampFromString"


boolFromString : Elm.Declaration
boolFromString =
    Elm.fn ( "boolString", Just Elm.Annotation.string )
        (\boolString ->
            Elm.Op.equal (Gen.String.call_.toLower boolString) (Elm.string "false")
                |> Elm.Op.or (Gen.String.call_.isEmpty boolString)
                |> Gen.Basics.call_.not
                |> Elm.just
        )
        |> Elm.declaration "boolFromString"


checksumFromString : Elm.Declaration
checksumFromString =
    Elm.fn ( "checksumString", Just Elm.Annotation.string )
        (\checksumString ->
            Elm.just (Gen.Eos.Checksum.call_.fromString checksumString)
        )
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.Checksum.annotation_.checksum))
        |> Elm.declaration "checksumFromString"


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


extendedAssetFromString : Elm.Declaration
extendedAssetFromString =
    Elm.fn ( "extendedAssetString", Just Elm.Annotation.string )
        (\extendedAssetString ->
            Elm.Case.custom (Gen.String.call_.split (Elm.string " ") extendedAssetString)
                (Elm.Annotation.list Elm.Annotation.string)
                [ Elm.Case.branchList 3
                    (\args ->
                        case args of
                            [ amountString, symbolString, contractString ] ->
                                Gen.Maybe.map3
                                    (\amount symbol contract ->
                                        Gen.Eos.ExtendedAsset.make_.extendedAsset
                                            { amount = amount
                                            , contract = contract
                                            , symbol = symbol
                                            }
                                    )
                                    (Gen.String.call_.toFloat amountString)
                                    (Elm.apply (Elm.val "symbolFromString") [ symbolString ])
                                    (Gen.Eos.Name.call_.fromString contractString
                                        |> Elm.Op.pipe Gen.Result.values_.toMaybe
                                    )

                            _ ->
                                Elm.nothing
                    )
                , Elm.Case.otherwise (\_ -> Elm.nothing)
                ]
        )
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.ExtendedAsset.annotation_.extendedAsset))
        |> Elm.declaration "extendedAssetFromString"


floatFromString : Elm.Declaration
floatFromString =
    Elm.fn ( "floatString", Just Elm.Annotation.string ) Gen.String.call_.toFloat
        |> Elm.declaration "floatFromString"


fromDict : List Abi.Action -> Elm.Declaration
fromDict actions =
    Elm.fn2 ( "actionName", Just Gen.Eos.Name.annotation_.name )
        ( "args", Just (Elm.Annotation.dict Elm.Annotation.string Elm.Annotation.string) )
        (\actionName args ->
            Elm.Case.custom (Gen.Eos.Name.toString actionName)
                Elm.Annotation.string
                (List.map (actionFromDict args) actions
                    ++ [ Elm.Case.otherwise (\_ -> Elm.nothing) ]
                )
        )
        |> Elm.withType
            (Elm.Annotation.function
                [ Gen.Eos.Name.annotation_.name
                , Elm.Annotation.dict Elm.Annotation.string Elm.Annotation.string
                ]
                (Elm.Annotation.maybe (Elm.Annotation.named [] "Action"))
            )
        |> Elm.declaration "fromDict"
        |> Elm.withDocumentation "Given an action name and a dictionary of strings, try to build an [Action](#Action). This is useful for having generic forms"


actionFromDict : Elm.Expression -> Abi.Action -> Elm.Case.Branch
actionFromDict argsDict action =
    let
        pipelineStart : Elm.Expression
        pipelineStart =
            Elm.just
                (Elm.function
                    (List.map
                        (\arg ->
                            ( String.Extra.camelize arg.name, Just (EosType.toAnnotation arg.type_) )
                        )
                        action.arguments
                    )
                    buildRecord
                )

        buildRecord : List Elm.Expression -> Elm.Expression
        buildRecord argsExpression =
            Elm.apply (Elm.val (String.Extra.classify action.name))
                [ Elm.record
                    (List.map2 (\arg exprArg -> ( String.Extra.camelize arg.name, exprArg ))
                        action.arguments
                        argsExpression
                    )
                ]

        getFromDict : Abi.Field -> Elm.Expression
        getFromDict arg =
            Gen.Dict.get (Elm.string arg.name) argsDict
                |> Elm.Op.pipe (Elm.apply Gen.Maybe.values_.andThen [ parseFromStringFunction arg.type_ ])
    in
    Elm.Case.branch0 ("\"" ++ action.name ++ "\"")
        (List.foldl
            (\arg ->
                Elm.Op.pipe (Elm.apply Gen.Maybe.Extra.values_.andMap [ getFromDict arg ])
            )
            pipelineStart
            action.arguments
        )


parseFromStringFunction : EosType.EosType -> Elm.Expression
parseFromStringFunction eosType =
    -- elm-review: IGNORE TCO
    case eosType of
        EosType.EosBool ->
            Elm.val "boolFromString"

        EosType.EosInt ->
            Elm.val "intFromString"

        EosType.EosFloat ->
            Elm.val "floatFromString"

        EosType.TimePoint ->
            Elm.val "timePointFromString"

        EosType.TimePointSec ->
            Elm.val "timePointSecFromString"

        EosType.BlockTimestampType ->
            Elm.val "blockTimestampFromString"

        EosType.Name ->
            Elm.val "nameFromString"

        EosType.EosString ->
            Elm.val "stringFromString"

        EosType.Checksum ->
            Elm.val "checksumFromString"

        EosType.PublicKey ->
            Elm.val "publicKeyFromString"

        EosType.Signature ->
            Elm.val "signatureFromString"

        EosType.Symbol ->
            Elm.val "symbolFromString"

        EosType.SymbolCode ->
            Elm.val "symbolCodeFromString"

        EosType.Asset ->
            Elm.val "assetFromString"

        EosType.ExtendedAsset ->
            Elm.val "extendedAssetFromString"

        EosType.EosList innerType ->
            Elm.apply (Elm.val "listFromString") [ parseFromStringFunction innerType ]


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


intFromString : Elm.Declaration
intFromString =
    Elm.fn ( "intString", Just Elm.Annotation.string ) Gen.String.call_.toInt
        |> Elm.declaration "intFromString"


listFromString : Elm.Declaration
listFromString =
    Elm.fn2
        ( "parseItem"
        , Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe (Elm.Annotation.var "item"))
            |> Just
        )
        ( "listString", Just Elm.Annotation.string )
        (\parseItemFunction listString ->
            Elm.Op.pipe (Elm.apply Gen.String.values_.dropLeft [ Elm.int 1 ]) listString
                |> Elm.Op.pipe (Elm.apply Gen.String.values_.dropRight [ Elm.int 1 ])
                |> Elm.Op.pipe (Elm.apply Gen.String.values_.split [ Elm.string "," ])
                |> Elm.Op.pipe (Elm.apply Gen.List.values_.map [ parseItemFunction ])
                |> Elm.Op.pipe (Elm.apply Gen.Maybe.Extra.values_.combine [])
        )
        |> Elm.withType
            (Elm.Annotation.function
                [ Elm.Annotation.maybe (Elm.Annotation.var "item")
                    |> Elm.Annotation.function [ Elm.Annotation.string ]
                , Elm.Annotation.string
                ]
                (Elm.Annotation.maybe (Elm.Annotation.list (Elm.Annotation.var "item")))
            )
        |> Elm.declaration "listFromString"


nameFromString : Elm.Declaration
nameFromString =
    Elm.fn ( "nameString", Just Elm.Annotation.string )
        (Gen.Eos.Name.call_.fromString
            >> Elm.Op.pipe Gen.Result.values_.toMaybe
        )
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.Name.annotation_.name))
        |> Elm.declaration "nameFromString"


publicKeyFromString : Elm.Declaration
publicKeyFromString =
    Elm.fn ( "publicKeyString", Just Elm.Annotation.string )
        (\publicKeyString -> Elm.just (Gen.Eos.PublicKey.call_.fromString publicKeyString))
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.PublicKey.annotation_.publicKey))
        |> Elm.declaration "publicKeyFromString"


signatureFromString : Elm.Declaration
signatureFromString =
    Elm.fn ( "signatureString", Just Elm.Annotation.string )
        (\signatureString -> Elm.just (Gen.Eos.Signature.call_.fromString signatureString))
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.Signature.annotation_.signature))
        |> Elm.declaration "signatureFromString"


stringFromString : Elm.Declaration
stringFromString =
    Elm.fn ( "stringString", Just Elm.Annotation.string ) Elm.just
        |> Elm.declaration "stringFromString"


symbolCodeFromString : Elm.Declaration
symbolCodeFromString =
    Elm.fn ( "symbolCodeString", Just Elm.Annotation.string )
        (Gen.Eos.SymbolCode.call_.fromString
            >> Elm.Op.pipe Gen.Result.values_.toMaybe
        )
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.SymbolCode.annotation_.symbolCode))
        |> Elm.declaration "symbolCodeFromString"


symbolFromString : Elm.Declaration
symbolFromString =
    Elm.fn ( "symbolString", Just Elm.Annotation.string )
        (\symbolString ->
            Elm.Case.custom (Gen.String.call_.split (Elm.string ",") symbolString)
                (Elm.Annotation.list Elm.Annotation.string)
                [ Elm.Case.branchList 2
                    (\args ->
                        case args of
                            [ precisionString, codeString ] ->
                                Gen.Maybe.caseOf_.maybe (Gen.String.call_.toInt precisionString)
                                    { just =
                                        \precisionInt ->
                                            Gen.Eos.Symbol.call_.fromPrecisionAndCodeString precisionInt codeString
                                                |> Elm.Op.pipe Gen.Result.values_.toMaybe
                                    , nothing = Elm.nothing
                                    }

                            _ ->
                                Elm.nothing
                    )
                , Elm.Case.otherwise (\_ -> Elm.nothing)
                ]
        )
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.Symbol.annotation_.symbol))
        |> Elm.declaration "symbolFromString"


timePointFromString : Elm.Declaration
timePointFromString =
    Elm.fn ( "timePointString", Just Elm.Annotation.string )
        (\timePointString ->
            Gen.String.call_.toInt timePointString
                |> Elm.Op.pipe (Elm.apply Gen.Maybe.values_.map [ Gen.Eos.TimePoint.values_.fromMicroseconds ])
        )
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.TimePoint.annotation_.timePoint))
        |> Elm.declaration "timePointFromString"


timePointSecFromString : Elm.Declaration
timePointSecFromString =
    Elm.fn ( "timePointSecString", Just Elm.Annotation.string )
        (\timePointSecString ->
            Gen.String.call_.toInt timePointSecString
                |> Elm.Op.pipe (Elm.apply Gen.Maybe.values_.map [ Gen.Eos.TimePointSec.values_.fromSeconds ])
        )
        |> Elm.withType (Elm.Annotation.function [ Elm.Annotation.string ] (Elm.Annotation.maybe Gen.Eos.TimePointSec.annotation_.timePointSec))
        |> Elm.declaration "timePointSecFromString"


type_ : List Abi.Action -> Elm.Declaration
type_ actions =
    Elm.customType "Action" (List.map actionVariant actions)
        |> Elm.withDocumentation "Represents an action that can be sent to the blockchain.\n\nYou can [encode](#encode) it and send it through a port to eosjs or similar."


actionVariant : Abi.Action -> Elm.Variant
actionVariant action =
    Elm.variantWith (String.Extra.camelize action.name) [ actionParameter action ]
