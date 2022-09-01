module Main exposing (CliOptions, Model, Msg, main)

import Cli.Option
import Cli.OptionsParser
import Cli.Program
import Cli.Validate
import Http
import InteropDefinitions
import InteropPorts
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
        , init = init
        , update = update
        , subscriptions = \_ -> Sub.none
        , config = config
        }


config : Cli.Program.Config CliOptions
config =
    Cli.Program.config
        |> Cli.Program.add
            (Cli.OptionsParser.build
                (\url contracts ->
                    { url = url
                    , contracts = contracts
                    }
                )
                |> Cli.OptionsParser.with
                    (Cli.Option.requiredPositionalArg "url"
                        |> Cli.Option.map
                            (\url ->
                                if String.endsWith "/" url then
                                    String.dropRight 1 url

                                else
                                    url
                            )
                    )
                |> Cli.OptionsParser.with
                    (Cli.Option.keywordArgList "contract"
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
                    )
                |> Cli.OptionsParser.withDoc "Get specified contracts from url. For example:\n\n\telm-eos https://mydomain.com/v1/chain --contract first --contract second --contract third\n"
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
    , contracts : List String
    }


type alias Model =
    {}


init : InteropDefinitions.Flags -> CliOptions -> ( Model, Cmd Msg )
init _ cliOptions =
    let
        fetchContract : String -> Task.Task String String
        fetchContract contract =
            Http.task
                { method = "POST"
                , headers = []
                , url = cliOptions.url ++ "/get_abi"
                , body = Http.jsonBody (Json.Encode.object [ ( "account_name", Json.Encode.string contract ) ])
                , resolver =
                    Http.stringResolver
                        (\response ->
                            case response of
                                Http.GoodStatus_ _ body ->
                                    Ok body

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
    ( {}
    , List.foldr
        (\contract currentTask ->
            fetchContract contract
                |> Task.andThen
                    (\result -> Task.map (\abis -> result :: abis) currentTask)
        )
        (Task.succeed [])
        cliOptions.contracts
        |> Task.attempt GotAbis
    )


type Msg
    = GotAbis (Result String (List String))


update : CliOptions -> Msg -> Model -> ( Model, Cmd Msg )
update _ msg model =
    case msg of
        GotAbis (Err error) ->
            ( model
            , InteropDefinitions.PrintAndExitFailure error
                |> InteropPorts.fromElm
            )

        GotAbis (Ok abis) ->
            ( model
            , InteropDefinitions.WriteAbisToFile { fileName = "abis.json", abis = abis }
                |> InteropPorts.fromElm
            )
