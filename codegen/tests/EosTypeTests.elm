module EosTypeTests exposing (suite)

import Elm.ToString
import EosType
import Expect
import Json.Decode as Decode
import Json.Encode as Encode
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "EosType"
        [ decoder
        , generateEncoder
        , generateDecoder
        , toAnnotation
        ]


decoder : Test
decoder =
    let
        decodeTypeTest : String -> EosType.EosType -> Test
        decodeTypeTest typeName typeValue =
            test typeName <|
                \() ->
                    Encode.string typeName
                        |> Decode.decodeValue EosType.decoder
                        |> Expect.equal (Ok typeValue)
    in
    describe "decoder"
        [ decodeTypeTest "bool" EosType.EosBool
        , decodeTypeTest "int8" EosType.EosInt
        , decodeTypeTest "uint8" EosType.EosInt
        , decodeTypeTest "int16" EosType.EosInt
        , decodeTypeTest "uint16" EosType.EosInt
        , decodeTypeTest "int32" EosType.EosInt
        , decodeTypeTest "uint32" EosType.EosInt
        , decodeTypeTest "int64" EosType.EosInt
        , decodeTypeTest "uint64" EosType.EosInt
        , decodeTypeTest "int128" EosType.EosInt
        , decodeTypeTest "uint128" EosType.EosInt
        , decodeTypeTest "varint32" EosType.EosInt
        , decodeTypeTest "varuint32" EosType.EosInt
        , decodeTypeTest "float32" EosType.EosFloat
        , decodeTypeTest "float64" EosType.EosFloat
        , decodeTypeTest "float128" EosType.EosFloat
        , decodeTypeTest "time_point" EosType.TimePoint
        , decodeTypeTest "time_point_sec" EosType.TimePointSec
        , decodeTypeTest "block_timestamp_type" EosType.BlockTimestampType
        , decodeTypeTest "name" EosType.Name
        , decodeTypeTest "string" EosType.EosString
        , decodeTypeTest "checksum160" EosType.Checksum
        , decodeTypeTest "checksum256" EosType.Checksum
        , decodeTypeTest "checksum512" EosType.Checksum
        , decodeTypeTest "public_key" EosType.PublicKey
        , decodeTypeTest "signature" EosType.Signature
        , decodeTypeTest "symbol" EosType.Symbol
        , decodeTypeTest "symbol_code" EosType.SymbolCode
        , decodeTypeTest "asset" EosType.Asset
        , decodeTypeTest "extended_asset" EosType.ExtendedAsset
        , decodeTypeTest "bool[]" (EosType.EosList EosType.EosBool)
        , EosType.EosList EosType.EosBool
            |> EosType.EosList
            |> decodeTypeTest "bool[][]"
        ]


generateEncoder : Test
generateEncoder =
    let
        generateEncoderTest : EosType.EosType -> String -> Test
        generateEncoderTest eosType expectedBody =
            test expectedBody <|
                \() ->
                    EosType.generateEncoder eosType
                        |> Elm.ToString.expression
                        |> .body
                        |> Expect.equal expectedBody
    in
    describe "generateEncoder"
        [ generateEncoderTest EosType.EosBool "Json.Encode.bool"
        , generateEncoderTest EosType.EosInt "Json.Encode.int"
        , generateEncoderTest EosType.EosFloat "Json.Encode.float"
        , generateEncoderTest EosType.TimePoint "Eos.TimePoint.encode"
        , generateEncoderTest EosType.TimePointSec "Eos.TimePointSec.encode"
        , generateEncoderTest EosType.BlockTimestampType "Time.posixToMillis |> Json.Encode.int"
        , generateEncoderTest EosType.Name "Eos.Name.encode"
        , generateEncoderTest EosType.EosString "Json.Encode.string"
        , generateEncoderTest EosType.Checksum "Eos.Checksum.encode"
        , generateEncoderTest EosType.PublicKey "Eos.PublicKey.encode"
        , generateEncoderTest EosType.Signature "Eos.Signature.encode"
        , generateEncoderTest EosType.Symbol "Eos.Symbol.encode"
        , generateEncoderTest EosType.SymbolCode "Eos.SymbolCode.encode"
        , generateEncoderTest EosType.Asset "Eos.Asset.encode"
        , generateEncoderTest EosType.ExtendedAsset "Eos.ExtendedAsset.encode"
        , generateEncoderTest (EosType.EosList EosType.EosBool) "Json.Encode.list Json.Encode.bool"
        , generateEncoderTest (EosType.EosList (EosType.EosList EosType.EosBool)) "Json.Encode.list (Json.Encode.list Json.Encode.bool)"
        ]


generateDecoder : Test
generateDecoder =
    let
        generateDecoderTest : EosType.EosType -> String -> Test
        generateDecoderTest eosType expectedBody =
            test expectedBody <|
                \() ->
                    EosType.generateDecoder eosType
                        |> Elm.ToString.expression
                        |> .body
                        |> Expect.equal expectedBody
    in
    describe "generateDecoder"
        [ generateDecoderTest EosType.EosBool "Json.Decode.bool"
        , generateDecoderTest EosType.EosInt "intDecoder"
        , generateDecoderTest EosType.EosFloat "Json.Decode.float"
        , generateDecoderTest EosType.TimePoint "Eos.TimePoint.decoder"
        , generateDecoderTest EosType.TimePointSec "Eos.TimePointSec.decoder"
        , generateDecoderTest EosType.BlockTimestampType "Json.Decode.map Time.millisToPosix Json.Decode.int"
        , generateDecoderTest EosType.Name "Eos.Name.decoder"
        , generateDecoderTest EosType.EosString "Json.Decode.string"
        , generateDecoderTest EosType.Checksum "Eos.Checksum.decoder"
        , generateDecoderTest EosType.PublicKey "Eos.PublicKey.decoder"
        , generateDecoderTest EosType.Signature "Eos.Signature.decoder"
        , generateDecoderTest EosType.Symbol "Eos.Symbol.decoder"
        , generateDecoderTest EosType.SymbolCode "Eos.SymbolCode.decoder"
        , generateDecoderTest EosType.Asset "Eos.Asset.decoder"
        , generateDecoderTest EosType.ExtendedAsset "Eos.ExtendedAsset.decoder"
        , generateDecoderTest (EosType.EosList EosType.EosBool) "Json.Decode.list Json.Decode.bool"
        , generateDecoderTest (EosType.EosList (EosType.EosList EosType.EosBool)) "Json.Decode.list (Json.Decode.list Json.Decode.bool)"
        ]


toAnnotation : Test
toAnnotation =
    let
        toAnnotationTest : EosType.EosType -> String -> Test
        toAnnotationTest eosType expectedSignature =
            test expectedSignature <|
                \() ->
                    EosType.toAnnotation eosType
                        |> Elm.ToString.annotation
                        |> .signature
                        |> Expect.equal expectedSignature
    in
    describe "toAnnotation"
        [ toAnnotationTest EosType.EosBool "Bool"
        , toAnnotationTest EosType.EosInt "Int"
        , toAnnotationTest EosType.EosFloat "Float"
        , toAnnotationTest EosType.TimePoint "Eos.TimePoint.TimePoint"
        , toAnnotationTest EosType.TimePointSec "Eos.TimePointSec.TimePointSec"
        , toAnnotationTest EosType.BlockTimestampType "Time.Posix"
        , toAnnotationTest EosType.Name "Eos.Name.Name"
        , toAnnotationTest EosType.EosString "String"
        , toAnnotationTest EosType.Checksum "Eos.Checksum.Checksum"
        , toAnnotationTest EosType.PublicKey "Eos.PublicKey.PublicKey"
        , toAnnotationTest EosType.Signature "Eos.Signature.Signature"
        , toAnnotationTest EosType.Symbol "Eos.Symbol.Symbol"
        , toAnnotationTest EosType.SymbolCode "Eos.SymbolCode.SymbolCode"
        , toAnnotationTest EosType.Asset "Eos.Asset.Asset"
        , toAnnotationTest EosType.ExtendedAsset "Eos.ExtendedAsset.ExtendedAsset"
        , toAnnotationTest (EosType.EosList EosType.EosBool) "List Bool"
        , toAnnotationTest (EosType.EosList (EosType.EosList EosType.EosBool)) "List (List Bool)"
        ]
