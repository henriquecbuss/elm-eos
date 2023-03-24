module Command.GenerateDapp exposing (Model, Msg, main)

import Abi
import Cli.Program
import Command.GenerateDapp.InteropDefinitions as InteropDefinitions
import Command.GenerateDapp.InteropPorts as InteropPorts
import Command.GenerateDapp.Options as Options
import Generate
import Http
import Inquirer
import Json.Decode as Decode
import Json.Encode as Encode
import Task
import Url.Builder


type Model
    = ValidatingInput
    | WithValidatedInput
        { input : Options.Parsed
        , filesToWrite : List { path : List String, contents : String }
        }


type Msg
    = GotAbis (Result String (List { baseUrl : String, contract : String, abi : Abi.Abi }))
    | FinishedWritingToFiles
    | FinishedWritingToFilesWithError
    | GotInteropPortsToElmDecodingError Decode.Error
    | ValidateInput { question : Inquirer.QuestionName, value : String }
    | ValidatedOptions Options.Parsed
    | CheckedThatDirectoryExistsAndIsNotEmpty
    | FinishedCloningProject


main : Cli.Program.StatefulProgram Model Msg Options.Input InteropDefinitions.FlagsWithoutArgv
main =
    Cli.Program.stateful
        { config = Options.config
        , init =
            \flags cliOptions ->
                init flags cliOptions
                    |> Tuple.mapSecond effectToCmd
        , printAndExitFailure =
            InteropDefinitions.PrintAndExitFailure
                >> InteropPorts.fromElm
        , printAndExitSuccess =
            InteropDefinitions.PrintAndExitSuccess
                >> InteropPorts.fromElm
        , subscriptions = subscriptions
        , update =
            \_ msg model ->
                update msg model
                    |> Tuple.mapSecond effectToCmd
        }


init : InteropDefinitions.Flags -> Options.Input -> ( Model, Effect )
init _ cliOptions =
    ( ValidatingInput
    , Inquire
        { questions = Inquirer.questions
        , answers = Options.inputToAnswers cliOptions
        }
    )


update : Msg -> Model -> ( Model, Effect )
update msg model =
    case msg of
        GotAbis (Ok abis) ->
            addFilesToWriteAndIssueEffect
                (\options ->
                    ( Generate.files options.apiBase abis
                        |> List.map
                            (\file ->
                                { contents = file.contents
                                , path = options.apiFilesOutput :: String.split "/" file.path
                                }
                            )
                    , CloneRepository
                        { from = "henriquecbuss/elm-eos/examples/contractExplorer"
                        , into = options.outputDirectory
                        , removeFiles = [ "package-lock.json" ]
                        , generateCliOptions =
                            { url = options.url
                            , generatedFilesDirectory = options.apiFilesOutput
                            , contracts = options.contracts
                            , base = String.join "." options.apiBase
                            }
                        }
                    )
                )
                model

        GotAbis (Err error) ->
            ( model
            , PrintAndExitFailure error
            )

        FinishedWritingToFiles ->
            case model of
                ValidatingInput ->
                    ( model, NoEffect )

                WithValidatedInput input ->
                    ( model
                    , "\nYou're all done! The project has been generated at OUTPUT_DIR.\n\nYou can get started by running the following commands:\n\n\tcd OUTPUT_DIR\n\tnpm install\n\tnpm run dev\n\n"
                        |> String.replace "OUTPUT_DIR" input.input.outputDirectory
                        |> PrintAndExitSuccess
                    )

        FinishedWritingToFilesWithError ->
            ( model
            , "Something went wrong when I tried to write the files. Check the error above.\n"
                |> PrintAndExitFailure
            )

        GotInteropPortsToElmDecodingError error ->
            ( model
            , "I got a weird internal error when trying to decode something from a port:\n\n\t"
                ++ Decode.errorToString error
                ++ "\n\nIf you're up for it, please open an issue with the error message above, on this URL: https://github.com/henriquecbuss/elm-eos/issues.\n"
                |> PrintAndExitFailure
            )

        ValidateInput { question, value } ->
            ( model
            , Inquirer.validate question value
                |> SendValidationResult
            )

        ValidatedOptions parsedOptions ->
            ( WithValidatedInput
                { input = parsedOptions
                , filesToWrite = []
                }
            , FetchContracts
                { baseUrl = parsedOptions.url
                , contracts = parsedOptions.contracts
                }
            )

        CheckedThatDirectoryExistsAndIsNotEmpty ->
            ( model
            , PrintAndExitFailure "The directory you gave me already exists and is not empty. Please give me a different directory.\n"
            )

        FinishedCloningProject ->
            case model of
                ValidatingInput ->
                    ( model
                    , "I got a weird internal error after cloning the template project\n\nIf you're up for it, please open an issue with the error message above, on this URL: https://github.com/henriquecbuss/elm-eos/issues.\n"
                        |> PrintAndExitFailure
                    )

                WithValidatedInput data ->
                    ( model
                    , WriteToFiles
                        { output = data.input.outputDirectory
                        , files = data.filesToWrite
                        }
                    )


addFilesToWriteAndIssueEffect : (Options.Parsed -> ( List { contents : String, path : List String }, Effect )) -> Model -> ( Model, Effect )
addFilesToWriteAndIssueEffect filesToWriteAndEffect model =
    case model of
        ValidatingInput ->
            ( model, NoEffect )

        WithValidatedInput data ->
            let
                ( filesToWrite, effect ) =
                    filesToWriteAndEffect data.input
            in
            ( WithValidatedInput { data | filesToWrite = data.filesToWrite ++ filesToWrite }
            , effect
            )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.map
        (\toElm ->
            case toElm of
                Ok InteropDefinitions.FinishedWritingToFiles ->
                    FinishedWritingToFiles

                Ok InteropDefinitions.FinishedWritingToFilesWithError ->
                    FinishedWritingToFilesWithError

                Ok (InteropDefinitions.ValidateInput input) ->
                    ValidateInput input

                Ok (InteropDefinitions.ValidatedOptions parsedOptions) ->
                    ValidatedOptions parsedOptions

                Ok InteropDefinitions.DirectoryExistsAndIsNotEmpty ->
                    CheckedThatDirectoryExistsAndIsNotEmpty

                Ok InteropDefinitions.FinishedCloningProject ->
                    FinishedCloningProject

                Err error ->
                    GotInteropPortsToElmDecodingError error
        )
        InteropPorts.toElm


effectToCmd : Effect -> Cmd Msg
effectToCmd effect =
    case effect of
        NoEffect ->
            Cmd.none

        PrintAndExitFailure message ->
            InteropDefinitions.PrintAndExitFailure message
                |> InteropPorts.fromElm

        PrintAndExitSuccess message ->
            InteropDefinitions.PrintAndExitSuccess message
                |> InteropPorts.fromElm

        FetchContracts { baseUrl, contracts } ->
            let
                fetchContract :
                    String
                    ->
                        Task.Task
                            String
                            { abi : Abi.Abi
                            , baseUrl : String
                            , contract : String
                            }
                fetchContract contract =
                    Http.task
                        { body = Http.jsonBody (Encode.object [ ( "account_name", Encode.string contract ) ])
                        , headers = []
                        , method = "POST"
                        , resolver =
                            Http.stringResolver
                                (\response ->
                                    case response of
                                        Http.BadUrl_ badUrl ->
                                            Err ("It seems like you gave me a bad url. This is what you gave me:\n\n\t" ++ badUrl ++ "\n")

                                        Http.Timeout_ ->
                                            Err "The request to the server timed out! Try again later.\n"

                                        Http.NetworkError_ ->
                                            Err "I got a network error when I tried to reach the servers. Check your internet connection and try again. If that doesn't work, maybe the server is down.\n"

                                        Http.BadStatus_ metadata _ ->
                                            Err
                                                ("The server returned a bad status:\n\n\t"
                                                    ++ String.fromInt metadata.statusCode
                                                    ++ " "
                                                    ++ metadata.statusText
                                                    ++ "\n"
                                                )

                                        Http.GoodStatus_ _ body ->
                                            case Decode.decodeString contractDecoder body of
                                                Ok valid ->
                                                    Ok valid

                                                Err error ->
                                                    Err ("Failed to decode response from " ++ Url.Builder.crossOrigin baseUrl [ "/get_abi" ] [] ++ "\n\n\t " ++ Decode.errorToString error ++ "\n")
                                )
                        , timeout = Nothing
                        , url = Url.Builder.crossOrigin baseUrl [ "/get_abi" ] []
                        }

                contractDecoder :
                    Decode.Decoder
                        { abi : Abi.Abi
                        , baseUrl : String
                        , contract : String
                        }
                contractDecoder =
                    Decode.map2
                        (\contract abi ->
                            { abi = abi
                            , baseUrl = baseUrl
                            , contract = contract
                            }
                        )
                        (Decode.field "account_name" Decode.string)
                        (Decode.field "abi" Abi.decoder)
            in
            List.foldr
                (\contract currentTask ->
                    fetchContract contract
                        |> Task.andThen
                            (\result -> Task.map (\abis -> result :: abis) currentTask)
                )
                (Task.succeed [])
                contracts
                |> Task.attempt GotAbis

        WriteToFiles files ->
            InteropDefinitions.WriteToFiles files
                |> InteropPorts.fromElm

        Inquire questionsAndAnswers ->
            InteropDefinitions.Inquire questionsAndAnswers
                |> InteropPorts.fromElm

        SendValidationResult result ->
            InteropDefinitions.SendValidationResult result
                |> InteropPorts.fromElm

        CloneRepository info ->
            InteropDefinitions.CloneRepository info
                |> InteropPorts.fromElm


type Effect
    = NoEffect
    | PrintAndExitFailure String
    | PrintAndExitSuccess String
    | FetchContracts { baseUrl : String, contracts : List String }
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
