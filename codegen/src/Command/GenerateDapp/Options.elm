module Command.GenerateDapp.Options exposing (Input, Parsed, config, inputToAnswers, parsedCodec)

import Cli.Option
import Cli.OptionsParser
import Cli.OptionsParser.BuilderState
import Cli.Program
import Inquirer
import TsJson.Codec as TsCodec


type alias Input =
    { outputDirectory : Maybe String
    , url : Maybe String
    , apiFilesOutput : Maybe String
    , apiBase : Maybe (List String)
    , contracts : Maybe (List String)
    }


type alias Parsed =
    { outputDirectory : String
    , url : String
    , apiFilesOutput : String
    , apiBase : List String
    , contracts : List String
    }


config : Cli.Program.Config Input
config =
    Cli.Program.add createDappOptionsParser Cli.Program.config


createDappOptionsParser : Cli.OptionsParser.OptionsParser Input Cli.OptionsParser.BuilderState.NoMoreOptions
createDappOptionsParser =
    Cli.OptionsParser.build
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
        |> Cli.OptionsParser.withOptionalPositionalArg (Cli.Option.optionalPositionalArg "output-directory")
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
        |> Cli.OptionsParser.withDoc "Generate a dapp from the given contracts. For example:\n\n\telm-eos create-dapp --url https://mydomain.com/v1/chain --api-files-output generated --api-files-base My.Contract my-dapp contract1 contract2\n"


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


optionallyValidate :
    (a -> b)
    -> Cli.Option.Option from (Maybe a) builderState
    -> Cli.Option.Option from (Maybe b) builderState
optionallyValidate validationFn =
    Cli.Option.map (Maybe.map validationFn)


inputToAnswers : Input -> List Inquirer.Answer
inputToAnswers { outputDirectory, url, apiFilesOutput, apiBase, contracts } =
    [ { name = Inquirer.Output
      , value = outputDirectory
      }
    , { name = Inquirer.Url
      , value = url
      }
    , { name = Inquirer.ApiFilesOutput
      , value = apiFilesOutput
      }
    , { name = Inquirer.ApiBase
      , value = Maybe.map (String.join ".") apiBase
      }
    , { name = Inquirer.Contracts
      , value = Maybe.map (String.join " ") contracts
      }
    ]
        |> List.filterMap
            (\answer ->
                Maybe.map
                    (\value ->
                        { name = answer.name
                        , value = value
                        }
                    )
                    answer.value
            )


parsedCodec : TsCodec.Codec Parsed
parsedCodec =
    TsCodec.object
        (\outputDirectory url apiFilesOutput apiBase contracts ->
            { outputDirectory = outputDirectory
            , url = url
            , apiFilesOutput = apiFilesOutput
            , apiBase = apiBase
            , contracts = contracts
            }
        )
        |> TsCodec.field "output" .outputDirectory TsCodec.string
        |> TsCodec.field "url" .url TsCodec.string
        |> TsCodec.field "apiFilesOutput" .apiFilesOutput TsCodec.string
        |> TsCodec.field "apiBase" .apiBase (TsCodec.map (String.split ".") (String.join ".") TsCodec.string)
        |> TsCodec.field "contracts" .contracts (TsCodec.map (String.split " ") (String.join " ") TsCodec.string)
        |> TsCodec.buildObject
