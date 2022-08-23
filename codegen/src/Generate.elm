module Generate exposing (main)

{-| -}

import Abi
import Elm
import Elm.Annotation
import EosType exposing (EosType)
import Gen.CodeGen.Generate as Generate
import Gen.Eos.Name
import Gen.Eos.TimePoint
import Gen.Eos.TimePointSec
import Gen.Time
import Json.Decode



-- TODO - Convert names to camelCase


main : Program Json.Decode.Value () ()
main =
    Generate.fromJson Abi.decoder
        (\abi ->
            [ Elm.file [ "Action" ] [ actionsType abi.actions ]
            ]
        )


actionsType : List Abi.Action -> Elm.Declaration
actionsType actions =
    Elm.customType "Action" (List.map actionVariant actions)


actionVariant : Abi.Action -> Elm.Variant
actionVariant action =
    Elm.variantWith action.name
        [ Elm.Annotation.record
            (action.arguments
                |> List.map (\{ name, type_ } -> ( name, eosTypeToAnnotation type_ ))
            )
        ]


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

        EosType.Bytes ->
            Debug.todo ""

        EosType.EosString ->
            Elm.Annotation.string

        EosType.Checksum ->
            Debug.todo ""

        EosType.PublicKey ->
            Debug.todo ""

        EosType.Signature ->
            Debug.todo ""

        EosType.Symbol ->
            Debug.todo ""

        EosType.SymbolCode ->
            Debug.todo ""

        EosType.Asset ->
            Debug.todo ""

        EosType.ExtendedAsset ->
            Debug.todo ""