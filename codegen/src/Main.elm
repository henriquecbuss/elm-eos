module Main exposing (CliOptions, Model, Msg, main, validateContractName)

import Abi
import Cli.Option
import Cli.OptionsParser
import Cli.OptionsParser.BuilderState
import Cli.Program
import Cli.Validate
import Elm
import Generate
import Http
import InteropDefinitions
import InteropPorts
import Json.Decode as Decode
import Json.Encode as Encode
import Task
import Url.Builder


type CliOptions
    = ApiFiles ApiFilesOptions
    | GenerateDapp GenerateDappOptions


type alias Model =
    {}


type Msg
    = GotAbis (Result String (List { baseUrl : String, contract : String, abi : Abi.Abi }))
    | FinishedWritingToFiles
    | FinishedWritingToFilesWithError
    | GotInteropPortsToElmDecodingError Decode.Error


main : Cli.Program.StatefulProgram Model Msg CliOptions InteropDefinitions.FlagsWithoutArgv
main =
    Cli.Program.stateful
        { config = config
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
            \cliOptions msg model ->
                update cliOptions msg model
                    |> Tuple.mapSecond effectToCmd
        }


config : Cli.Program.Config CliOptions
config =
    Cli.Program.add createDappOptionsParser Cli.Program.config
        |> Cli.Program.add apiFilesOptionsParser


urlValidator :
    String
    -> String
urlValidator =
    \url ->
        if String.endsWith "/" url then
            String.dropRight 1 url

        else
            url


elmPathParser :
    Cli.Option.Option from (Maybe String) builderState
    -> Cli.Option.Option from (Maybe (List String)) builderState
elmPathParser =
    Maybe.map (String.split ".")
        |> Cli.Option.map


contractListValidator :
    Cli.Option.Option from (List String) builderState
    -> Cli.Option.Option from (List String) builderState
contractListValidator =
    Cli.Option.validateMap
        (List.foldr
            (\contract context ->
                case validateContractName contract of
                    Ok validContract ->
                        { context | oks = validContract :: context.oks }

                    Err errorMessage ->
                        { context | errs = errorMessage :: context.errs }
            )
            { errs = []
            , oks = []
            }
            >> (\{ errs, oks } ->
                    if List.isEmpty errs then
                        Ok oks

                    else
                        Err
                            ("All contract names must be up to 12 characters long, with characters from a-Z, 1-5 and . (except for the last character, which can't be a .). Here are all the errors I found:\n\n"
                                ++ (List.map (\err -> "\t- " ++ err) errs
                                        |> String.join "\n"
                                   )
                                ++ "\n"
                            )
               )
        )


apiFilesOptionsParser : Cli.OptionsParser.OptionsParser CliOptions Cli.OptionsParser.BuilderState.AnyOptions
apiFilesOptionsParser =
    Cli.OptionsParser.build
        (\url output base contracts ->
            { url = url
            , output = output
            , base = base
            , contracts = contracts
            }
        )
        |> Cli.OptionsParser.with
            (Cli.Option.requiredPositionalArg "url"
                |> Cli.Option.map urlValidator
            )
        |> Cli.OptionsParser.with
            (Cli.Option.optionalKeywordArg "output"
                |> Cli.Option.map (Maybe.withDefault "generated")
            )
        |> Cli.OptionsParser.with
            (Cli.Option.optionalKeywordArg "base"
                |> elmPathParser
                |> Cli.Option.map (Maybe.withDefault [])
            )
        |> Cli.OptionsParser.with
            (Cli.Option.keywordArgList "contract"
                |> nonEmptyListValidator "I need at least one contract. You can give me a list like this:\n\n\telm-eos https://mydomain.com/v1/chain --contract first --contract second --contract third\n"
                |> contractListValidator
            )
        |> Cli.OptionsParser.withDoc "Get specified contracts from url. For example:\n\n\telm-eos https://mydomain.com/v1/chain --contract first --contract second --output generated --base My.Contract\n"
        |> Cli.OptionsParser.map ApiFiles


nonEmptyListValidator : String -> Cli.Option.Option from (List a) builderState -> Cli.Option.Option from (List a) builderState
nonEmptyListValidator errorMessage =
    Cli.Validate.predicate
        errorMessage
        (\list -> not (List.isEmpty list))
        |> Cli.Option.validate


createDappOptionsParser : Cli.OptionsParser.OptionsParser CliOptions Cli.OptionsParser.BuilderState.NoMoreOptions
createDappOptionsParser =
    Cli.OptionsParser.buildSubCommand "create-dapp"
        (\url apiFilesOutput apiFilesBase outputDirectory contracts ->
            { outputDirectory = outputDirectory
            , url = url
            , apiFilesOutput = apiFilesOutput
            , apiBase = apiFilesBase
            , contracts = contracts
            }
        )
        |> Cli.OptionsParser.with
            (Cli.Option.optionalKeywordArg "url"
                |> optionallyValidate urlValidator
            )
        |> Cli.OptionsParser.with (Cli.Option.optionalKeywordArg "api-files-output")
        |> Cli.OptionsParser.with
            (Cli.Option.optionalKeywordArg "api-files-base"
                |> elmPathParser
            )
        |> Cli.OptionsParser.withOptionalPositionalArg (Cli.Option.optionalPositionalArg "output directory")
        |> Cli.OptionsParser.withRestArgs
            (Cli.Option.restArgs "contracts"
                |> contractListValidator
                |> Cli.Option.map
                    (\contracts ->
                        if List.isEmpty contracts then
                            Nothing

                        else
                            Just contracts
                    )
            )
        |> Cli.OptionsParser.withDoc "Generate a dapp from the given contracts. For example:\n\n\telm-eos create-dapp --url https://mydomain.com/v1/chain --apiFilesOutput generated --apiFilesBase My.Contract --outputDirectory my-dapp --contract first --contract second\n"
        |> Cli.OptionsParser.map GenerateDapp


optionallyValidate :
    (a -> b)
    -> Cli.Option.Option from (Maybe a) builderState
    -> Cli.Option.Option from (Maybe b) builderState
optionallyValidate validationFn =
    Cli.Option.map (Maybe.map validationFn)


init : InteropDefinitions.Flags -> CliOptions -> ( Model, Effect )
init _ cliOptions =
    ( {}
    , case cliOptions of
        ApiFiles apiFilesOptions ->
            FetchContracts
                { baseUrl = apiFilesOptions.url
                , contracts = apiFilesOptions.contracts
                }

        _ ->
            Debug.todo ""
    )


update : CliOptions -> Msg -> Model -> ( Model, Effect )
update cliOptions msg model =
    case msg of
        GotAbis (Ok abis) ->
            case cliOptions of
                ApiFiles apiFilesOptions ->
                    ( model
                    , WriteToFiles
                        { output = apiFilesOptions.output
                        , files = Generate.apiFiles apiFilesOptions.base abis
                        }
                    )

                _ ->
                    Debug.todo ""

        GotAbis (Err error) ->
            ( model
            , PrintAndExitFailure error
            )

        FinishedWritingToFiles ->
            ( model
            , PrintAndExitSuccess "✅ Generated files"
            )

        FinishedWritingToFilesWithError ->
            ( model
            , "Something went wrong when I tried to write the files. Check the error above.\n"
                |> PrintAndExitFailure
            )

        GotInteropPortsToElmDecodingError error ->
            ( model
            , "I got a weird internal error, when trying to decode something from a port:\n\n\t"
                ++ Decode.errorToString error
                ++ "\n                   \n                   If you're up for it, please open an issue with the error message above, on this URL: https://github.com/henriquecbuss/elm-eos/issues.\n                   "
                |> PrintAndExitFailure
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

                Err error ->
                    GotInteropPortsToElmDecodingError error
        )
        InteropPorts.toElm


effectToCmd : Effect -> Cmd Msg
effectToCmd effect =
    case effect of
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


validateContractName : String -> Result String String
validateContractName contract =
    let
        sanitizedContract : String
        sanitizedContract =
            String.trim contract
                |> String.toLower

        isCharacterAllowed : Char -> Bool
        isCharacterAllowed char =
            Char.isAlpha char || List.member char [ '1', '2', '3', '4', '5', '.' ]
    in
    case
        String.filter (not << isCharacterAllowed) sanitizedContract
            |> String.toList
    of
        [] ->
            if String.length sanitizedContract > 12 then
                Err (contract ++ ": Contract name is too long. It must be 12 characters or less.")

            else if String.endsWith "." sanitizedContract then
                Err (contract ++ ": Contract name ends with `.`. You can use `.` in a contract name, just not as the last character.")

            else
                Ok sanitizedContract

        firstInvalidCharacter :: [] ->
            Err (contract ++ ": Invalid character: " ++ String.fromChar firstInvalidCharacter ++ ".")

        (_ :: _) as invalidCharacters ->
            Err
                (contract
                    ++ ": Invalid characters: "
                    ++ (List.map String.fromChar invalidCharacters
                            |> String.join ", "
                       )
                    ++ "."
                )


type alias ApiFilesOptions =
    { url : String
    , output : String
    , base : List String
    , contracts : List String
    }


type alias GenerateDappOptions =
    { outputDirectory : Maybe String
    , url : Maybe String
    , apiFilesOutput : Maybe String
    , apiBase : Maybe (List String)
    , contracts : Maybe (List String)
    }


type Effect
    = PrintAndExitFailure String
    | PrintAndExitSuccess String
    | FetchContracts { baseUrl : String, contracts : List String }
    | WriteToFiles { output : String, files : List Elm.File }
