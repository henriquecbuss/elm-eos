module InteropDefinitions exposing (Flags, FlagsWithoutArgv, FromElm(..), ToElm(..), interop)

import Cli.Program
import Json.Encode
import TsJson.Decode as TsDecode exposing (Decoder)
import TsJson.Encode as TsEncode exposing (Encoder, optional, required)


interop :
    { toElm : Decoder ToElm
    , fromElm : Encoder FromElm
    , flags : Decoder Flags
    }
interop =
    { toElm = toElm
    , fromElm = fromElm
    , flags = flags
    }


type FromElm
    = PrintAndExitFailure String
    | PrintAndExitSuccess String
    | WriteAbisToFile { fileName : String, abis : List String }


type ToElm
    = AuthenticatedUser User


type alias User =
    { username : String }


type alias Flags =
    Cli.Program.FlagsIncludingArgv {}


type alias FlagsWithoutArgv =
    {}


fromElm : Encoder FromElm
fromElm =
    TsEncode.union
        (\vPrintAndExitFailure vPrintAndExitSuccess vWriteAbisToFile value ->
            case value of
                PrintAndExitFailure message ->
                    vPrintAndExitFailure message

                PrintAndExitSuccess message ->
                    vPrintAndExitSuccess message

                WriteAbisToFile info ->
                    vWriteAbisToFile info
        )
        |> TsEncode.variantTagged "printAndExitFailure"
            (TsEncode.object [ required "message" identity TsEncode.string ])
        |> TsEncode.variantTagged "printAndExitSuccess"
            (TsEncode.object [ required "message" identity TsEncode.string ])
        |> TsEncode.variantTagged "writeAbisToFile"
            (TsEncode.object
                [ required "fileName" .fileName TsEncode.string
                , required "abis" .abis (TsEncode.list TsEncode.string)
                ]
            )
        |> TsEncode.buildUnion


toElm : Decoder ToElm
toElm =
    TsDecode.discriminatedUnion "tag"
        [ ( "authenticatedUser"
          , TsDecode.map AuthenticatedUser
                (TsDecode.map User
                    (TsDecode.field "username" TsDecode.string)
                )
          )
        ]


flags : Decoder Flags
flags =
    TsDecode.succeed
        (\argv versionMessage ->
            { argv = argv
            , versionMessage = versionMessage
            }
        )
        |> TsDecode.andMap (TsDecode.field "argv" (TsDecode.list TsDecode.string))
        |> TsDecode.andMap (TsDecode.field "versionMessage" TsDecode.string)
