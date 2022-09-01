module InteropDefinitions exposing (Flags, FlagsWithoutArgv, FromElm(..), ToElm(..), interop)

import Cli.Program
import Elm
import TsJson.Decode as TsDecode exposing (Decoder)
import TsJson.Encode as TsEncode exposing (Encoder, required)


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
    | WriteToFiles { output : String, files : List Elm.File }


type ToElm
    = FinishedWritingToFiles
    | FinishedWritingToFilesWithError


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

                WriteToFiles info ->
                    vWriteAbisToFile info
        )
        |> TsEncode.variantTagged "printAndExitFailure"
            (TsEncode.object [ required "message" identity TsEncode.string ])
        |> TsEncode.variantTagged "printAndExitSuccess"
            (TsEncode.object [ required "message" identity TsEncode.string ])
        |> TsEncode.variantTagged "writeToFiles"
            (TsEncode.object
                [ required "output" .output TsEncode.string
                , required "files"
                    .files
                    (TsEncode.list
                        (TsEncode.object
                            [ required "path" .path TsEncode.string
                            , required "contents" .contents TsEncode.string
                            ]
                        )
                    )
                ]
            )
        |> TsEncode.buildUnion


toElm : Decoder ToElm
toElm =
    TsDecode.discriminatedUnion "tag"
        [ ( "finishedWritingToFiles"
          , TsDecode.succeed FinishedWritingToFiles
          )
        , ( "finishedWritingToFilesWithError"
          , TsDecode.succeed FinishedWritingToFilesWithError
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
