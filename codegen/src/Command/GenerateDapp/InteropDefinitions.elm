module Command.GenerateDapp.InteropDefinitions exposing (Flags, FlagsWithoutArgv, FromElm(..), ToElm(..), interop)

import Cli.Program
import Command.GenerateDapp.Options as Options
import Inquirer
import TsJson.Codec as TsCodec
import TsJson.Decode as TsDecode exposing (Decoder)
import TsJson.Encode as TsEncode exposing (Encoder)


type alias Flags =
    Cli.Program.FlagsIncludingArgv {}


type alias FlagsWithoutArgv =
    {}


type FromElm
    = PrintAndExitFailure String
    | PrintAndExitSuccess String
    | WriteToFiles { output : String, files : List { path : List String, contents : String } }
    | Inquire { questions : List Inquirer.Question, answers : List Inquirer.Answer }
    | SendValidationResult Inquirer.ValidationResult
    | CloneRepository
        { from : String
        , into : String
        , removeFiles : List String
        , generateCliOptions :
            { url : String
            , generatedFilesDirectory : String
            , contracts : List String
            , base : String
            }
        }


type ToElm
    = FinishedWritingToFiles
    | FinishedWritingToFilesWithError
    | ValidateInput { question : Inquirer.QuestionName, value : String }
    | ValidatedOptions Options.Parsed
    | DirectoryExistsAndIsNotEmpty
    | FinishedCloningProject


interop :
    { flags : Decoder Flags
    , fromElm : Encoder FromElm
    , toElm : Decoder ToElm
    }
interop =
    { flags = flags
    , fromElm = fromElm
    , toElm = toElm
    }


fromElm : Encoder FromElm
fromElm =
    TsEncode.union
        (\vPrintAndExitFailure vPrintAndExitSuccess vWriteAbisToFile vInquire vSendValidationResult vCloneRepository value ->
            case value of
                PrintAndExitFailure message ->
                    vPrintAndExitFailure message

                PrintAndExitSuccess message ->
                    vPrintAndExitSuccess message

                WriteToFiles info ->
                    vWriteAbisToFile info

                Inquire info ->
                    vInquire info

                SendValidationResult result ->
                    vSendValidationResult result

                CloneRepository info ->
                    vCloneRepository info
        )
        |> TsEncode.variantTagged "printAndExitFailure"
            (TsEncode.object [ TsEncode.required "message" identity TsEncode.string ])
        |> TsEncode.variantTagged "printAndExitSuccess"
            (TsEncode.object [ TsEncode.required "message" identity TsEncode.string ])
        |> TsEncode.variantTagged "writeToFiles"
            (TsEncode.object
                [ TsEncode.required "output" .output TsEncode.string
                , TsEncode.object
                    [ TsEncode.required "path" .path (TsEncode.list TsEncode.string)
                    , TsEncode.required "contents" .contents TsEncode.string
                    ]
                    |> TsEncode.list
                    |> TsEncode.required "files" .files
                ]
            )
        |> TsEncode.variantTagged "inquire"
            (TsEncode.object
                [ TsCodec.encoder Inquirer.questionCodec
                    |> TsEncode.list
                    |> TsEncode.required "questions" .questions
                , TsCodec.encoder Inquirer.answerCodec
                    |> TsEncode.list
                    |> TsEncode.required "answers" .answers
                ]
            )
        |> TsEncode.variantTagged "validationResult"
            (TsEncode.union
                (\vSuccess vFailure value ->
                    case value of
                        Inquirer.Valid ->
                            vSuccess

                        Inquirer.Invalid error ->
                            vFailure error
                )
                |> TsEncode.variant0 "success"
                |> TsEncode.variantTagged "failure" TsEncode.string
                |> TsEncode.buildUnion
            )
        |> TsEncode.variantTagged "cloneRepository"
            (TsEncode.object
                [ TsEncode.required "from" .from TsEncode.string
                , TsEncode.required "into" .into TsEncode.string
                , TsEncode.required "removeFiles" .removeFiles (TsEncode.list TsEncode.string)
                , TsEncode.required "generateCliOptions"
                    .generateCliOptions
                    (TsEncode.object
                        [ TsEncode.required "url" .url TsEncode.string
                        , TsEncode.required "generatedFilesDirectory" .generatedFilesDirectory TsEncode.string
                        , TsEncode.required "contracts" .contracts (TsEncode.list TsEncode.string)
                        , TsEncode.required "base" .base TsEncode.string
                        ]
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
        , ( "validateInput"
          , TsDecode.field "data"
                (TsDecode.succeed
                    (\question value ->
                        ValidateInput
                            { question = question
                            , value = value
                            }
                    )
                    |> TsDecode.andMap (TsDecode.field "question" (TsCodec.decoder Inquirer.questionNameCodec))
                    |> TsDecode.andMap (TsDecode.field "value" TsDecode.string)
                )
          )
        , ( "validatedOptions"
          , TsDecode.field "data"
                (TsCodec.decoder Options.parsedCodec
                    |> TsDecode.map ValidatedOptions
                )
          )
        , ( "directoryExistsAndIsNotEmpty"
          , TsDecode.succeed DirectoryExistsAndIsNotEmpty
          )
        , ( "finishedCloningProject"
          , TsDecode.succeed FinishedCloningProject
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
