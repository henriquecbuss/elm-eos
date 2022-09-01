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
import Json.Decode
import Json.Encode
import Task


main : Cli.Program.StatefulProgram Model Msg CliOptions InteropDefinitions.FlagsWithoutArgv
main =
    Cli.Program.stateful
        { printAndExitFailure =
            InteropDefinitions.PrintAndExitFailure
                >> InteropPorts.fromElm
        , printAndExitSuccess =
            InteropDefinitions.PrintAndExitSuccess
                >> InteropPorts.fromElm
        , init =
            \flags cliOptions ->
                init flags cliOptions
                    |> Tuple.mapSecond effectToCmd
        , update =
            \cliOptions msg model ->
                update cliOptions msg model
                    |> Tuple.mapSecond effectToCmd
        , subscriptions = subscriptions
        , config = config
        }



-- PARSING CLI ARGUMENTS


config : Cli.Program.Config CliOptions
config =
    Cli.Program.config
        |> Cli.Program.add baseUrlOptionsParser


baseUrlOptionsParser : Cli.OptionsParser.OptionsParser CliOptions Cli.OptionsParser.BuilderState.AnyOptions
baseUrlOptionsParser =
    Cli.OptionsParser.build
        (\url output contracts ->
            { url = url
            , output = output
            , contracts = contracts
            }
        )
        |> Cli.OptionsParser.with urlArg
        |> Cli.OptionsParser.with outputArg
        |> Cli.OptionsParser.with contractsArg
        |> Cli.OptionsParser.withDoc "Get specified contracts from url. For example:\n\n\telm-eos https://mydomain.com/v1/chain --contract first --contract second --output generated\n"


urlArg : Cli.Option.Option String String Cli.Option.BeginningOption
urlArg =
    Cli.Option.requiredPositionalArg "url"
        |> Cli.Option.map
            (\url ->
                if String.endsWith "/" url then
                    String.dropRight 1 url

                else
                    url
            )


outputArg : Cli.Option.Option (Maybe String) String Cli.Option.BeginningOption
outputArg =
    Cli.Option.optionalKeywordArg "output"
        |> Cli.Option.map (Maybe.withDefault "generated")


contractsArg : Cli.Option.Option (List String) (List String) Cli.Option.BeginningOption
contractsArg =
    Cli.Option.keywordArgList "contract"
        |> Cli.Option.validate
            (Cli.Validate.predicate
                "I need at least one contract. You can give me a list like this:\n\n\telm-eos https://mydomain.com/v1/chain --contract first --contract second --contract third\n"
                (List.isEmpty >> not)
            )
        |> Cli.Option.validateMap
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
                                    ++ (errs
                                            |> List.map (\err -> "\t- " ++ err)
                                            |> String.join "\n"
                                       )
                                    ++ "\n"
                                )
                   )
            )


validateContractName : String -> Result String String
validateContractName contract =
    let
        sanitizedContract : String
        sanitizedContract =
            contract
                |> String.trim
                |> String.toLower

        isCharacterAllowed : Char -> Bool
        isCharacterAllowed char =
            Char.isAlpha char || List.member char [ '1', '2', '3', '4', '5', '.' ]
    in
    case String.filter (not << isCharacterAllowed) sanitizedContract |> String.toList of
        firstInvalidCharacter :: [] ->
            Err (contract ++ ": Invalid character: " ++ String.fromChar firstInvalidCharacter ++ ".")

        (_ :: _) as invalidCharacters ->
            Err
                (contract
                    ++ ": Invalid characters: "
                    ++ (invalidCharacters
                            |> List.map String.fromChar
                            |> String.join ", "
                       )
                    ++ "."
                )

        [] ->
            if String.length sanitizedContract > 12 then
                Err (contract ++ ": Contract name is too long. It must be 12 characters or less.")

            else if String.endsWith "." sanitizedContract then
                Err (contract ++ ": Contract name ends with `.`. You can use `.` in a contract name, just not as the last character.")

            else
                Ok sanitizedContract


type alias CliOptions =
    { url : String
    , output : String
    , contracts : List String
    }



-- INITIALIZING


type alias Model =
    {}


init : InteropDefinitions.Flags -> CliOptions -> ( Model, Effect )
init _ cliOptions =
    ( {}
    , FetchContracts { baseUrl = cliOptions.url, contracts = cliOptions.contracts }
    )



-- UPDATING


type Msg
    = GotAbis (Result String (List { baseUrl : String, contract : String, abi : Abi.Abi }))
    | FinishedWritingToFiles
    | FinishedWritingToFilesWithError
    | GotInteropPortsToElmDecodingError Json.Decode.Error


update : CliOptions -> Msg -> Model -> ( Model, Effect )
update cliOptions msg model =
    case msg of
        GotAbis (Err error) ->
            ( model
            , PrintAndExitFailure error
            )

        GotAbis (Ok abis) ->
            ( model
            , WriteToFiles { output = cliOptions.output, files = Generate.files abis }
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
                ++ Json.Decode.errorToString error
                ++ "\n\n"
                ++ "If you're up for it, please open an issue with the error message above, on this URL: https://github.com/NeoVier/elm-eos/issues.\n"
                |> PrintAndExitFailure
            )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    InteropPorts.toElm
        |> Sub.map
            (\toElm ->
                case toElm of
                    Ok InteropDefinitions.FinishedWritingToFiles ->
                        FinishedWritingToFiles

                    Ok InteropDefinitions.FinishedWritingToFilesWithError ->
                        FinishedWritingToFilesWithError

                    Err error ->
                        GotInteropPortsToElmDecodingError error
            )



-- EFFECTS


type Effect
    = PrintAndExitFailure String
    | PrintAndExitSuccess String
    | FetchContracts { baseUrl : String, contracts : List String }
    | WriteToFiles { output : String, files : List Elm.File }


effectToCmd : Effect -> Cmd Msg
effectToCmd effect =
    case effect of
        PrintAndExitFailure message ->
            message
                |> InteropDefinitions.PrintAndExitFailure
                |> InteropPorts.fromElm

        PrintAndExitSuccess message ->
            message
                |> InteropDefinitions.PrintAndExitSuccess
                |> InteropPorts.fromElm

        FetchContracts { baseUrl, contracts } ->
            let
                contractDecoder :
                    Json.Decode.Decoder
                        { contract : String
                        , abi : Abi.Abi
                        , baseUrl : String
                        }
                contractDecoder =
                    Json.Decode.map2
                        (\contract abi ->
                            { contract = contract
                            , abi = abi
                            , baseUrl = baseUrl
                            }
                        )
                        (Json.Decode.field "account_name" Json.Decode.string)
                        (Json.Decode.field "abi" Abi.decoder)

                fetchContract :
                    String
                    ->
                        Task.Task
                            String
                            { contract : String
                            , abi : Abi.Abi
                            , baseUrl : String
                            }
                fetchContract contract =
                    Http.task
                        { method = "POST"
                        , headers = []
                        , url = baseUrl ++ "/get_abi"
                        , body = Http.jsonBody (Json.Encode.object [ ( "account_name", Json.Encode.string contract ) ])
                        , resolver =
                            Http.stringResolver
                                (\response ->
                                    case response of
                                        Http.GoodStatus_ _ body ->
                                            case Json.Decode.decodeString contractDecoder body of
                                                Ok valid ->
                                                    Ok valid

                                                Err error ->
                                                    Err ("Failed to decode response from " ++ baseUrl ++ "/get_abi:\n\n\t " ++ Json.Decode.errorToString error ++ "\n")

                                        Http.BadStatus_ metadata _ ->
                                            Err
                                                ("The server returned a bad status:\n\n\t"
                                                    ++ String.fromInt metadata.statusCode
                                                    ++ " "
                                                    ++ metadata.statusText
                                                    ++ "\n"
                                                )

                                        Http.NetworkError_ ->
                                            Err "I got a network error when I tried to reach the servers. Check your internet connection and try again. If that doesn't work, maybe the server is down.\n"

                                        Http.Timeout_ ->
                                            Err "The request to the server timed out! Try again later.\n"

                                        Http.BadUrl_ badUrl ->
                                            Err ("It seems like you gave me a bad url. This is what you gave me:\n\n\t" ++ badUrl ++ "\n")
                                )
                        , timeout = Nothing
                        }
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
            files
                |> InteropDefinitions.WriteToFiles
                |> InteropPorts.fromElm
