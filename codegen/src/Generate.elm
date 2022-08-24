module Generate exposing (main)

{-| -}

import Abi
import Elm
import Elm.Annotation
import Elm.Case
import EosType exposing (EosType)
import Gen.CodeGen.Generate as Generate
import Gen.Eos.Asset
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
import Gen.Time
import Json.Decode



-- TODO - Convert names to camelCase


main : Program Json.Decode.Value () ()
main =
    Generate.fromJson Abi.decoder
        (\abi ->
            [ Elm.file [ "Action" ]
                [ actionsType abi.actions
                    |> Elm.expose
                , encodeAction abi.actions
                    |> Elm.expose
                ]
            ]
        )


actionsType : List Abi.Action -> Elm.Declaration
actionsType actions =
    Elm.customType "Action" (List.map actionVariant actions)


actionVariant : Abi.Action -> Elm.Variant
actionVariant action =
    Elm.variantWith action.name [ actionParameter action ]


actionParameter : Abi.Action -> Elm.Annotation.Annotation
actionParameter action =
    Elm.Annotation.record
        (action.arguments
            |> List.map (\{ name, type_ } -> ( name, eosTypeToAnnotation type_ ))
        )


encodeAction : List Abi.Action -> Elm.Declaration
encodeAction actions =
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
    Elm.Case.branch1 action.name
        ( "args", actionParameter action )
        (\argsRecord ->
            Gen.Json.Encode.object
                (List.map
                    (\argument ->
                        Elm.tuple (Elm.string argument.name)
                            (encodeEosType argument.type_ (Elm.get argument.name argsRecord))
                    )
                    action.arguments
                )
        )


encodeEosType : EosType -> Elm.Expression -> Elm.Expression
encodeEosType eosType =
    case eosType of
        EosType.EosBool ->
            Gen.Json.Encode.call_.bool

        EosType.EosInt ->
            Gen.Json.Encode.call_.int

        EosType.EosFloat ->
            Gen.Json.Encode.call_.float

        EosType.TimePoint ->
            Gen.Eos.TimePoint.call_.encode

        EosType.TimePointSec ->
            Gen.Eos.TimePointSec.call_.encode

        EosType.BlockTimestampType ->
            Gen.Time.posixToMillis
                >> Gen.Json.Encode.call_.int

        EosType.Name ->
            Gen.Eos.Name.call_.encode

        EosType.EosString ->
            Gen.Json.Encode.call_.string

        EosType.Checksum ->
            Gen.Eos.Checksum.call_.encode

        EosType.PublicKey ->
            Gen.Eos.PublicKey.call_.encode

        EosType.Signature ->
            Gen.Eos.Signature.call_.encode

        EosType.Symbol ->
            Gen.Eos.Symbol.call_.encode

        EosType.SymbolCode ->
            Gen.Eos.SymbolCode.call_.encode

        EosType.Asset ->
            Gen.Eos.Asset.call_.encode

        EosType.ExtendedAsset ->
            Gen.Eos.ExtendedAsset.call_.encode


eosTypeToAnnotation : EosType -> Elm.Annotation.Annotation
eosTypeToAnnotation eosType =
    case eosType of
        EosType.EosBool ->
            Elm.Annotation.bool

        EosType.EosInt ->
            Elm.Annotation.int

        EosType.EosFloat ->
            Elm.Annotation.float

        EosType.TimePoint ->
            Gen.Eos.TimePoint.annotation_.timePoint

        EosType.TimePointSec ->
            Gen.Eos.TimePointSec.annotation_.timePointSec

        EosType.BlockTimestampType ->
            Gen.Time.annotation_.posix

        EosType.Name ->
            Gen.Eos.Name.annotation_.name

        EosType.EosString ->
            Elm.Annotation.string

        EosType.Checksum ->
            Gen.Eos.Checksum.annotation_.checksum

        EosType.PublicKey ->
            Gen.Eos.PublicKey.annotation_.publicKey

        EosType.Signature ->
            Gen.Eos.Signature.annotation_.signature

        EosType.Symbol ->
            Gen.Eos.Symbol.annotation_.symbol

        EosType.SymbolCode ->
            Gen.Eos.SymbolCode.annotation_.symbolCode

        EosType.Asset ->
            Gen.Eos.Asset.annotation_.asset

        EosType.ExtendedAsset ->
            Gen.Eos.ExtendedAsset.annotation_.extendedAsset
