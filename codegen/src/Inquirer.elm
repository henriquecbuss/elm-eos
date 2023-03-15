module Inquirer exposing (Answer, Question, QuestionName(..), Type(..), ValidationResult(..), answerCodec, questionCodec, questionNameCodec, questions, validate)

import TsJson.Codec as TsCodec
import Url


type alias Answer =
    { name : QuestionName
    , value : String
    }


type alias Question =
    { defaultValue : Maybe String
    , message : String
    , name : QuestionName
    , type_ : Type
    }


type QuestionName
    = Output
    | Url
    | ApiFilesOutput
    | ApiBase
    | Contracts


type Type
    = Input
    | InputList


type ValidationResult
    = Valid
    | Invalid String


answerCodec : TsCodec.Codec Answer
answerCodec =
    TsCodec.object
        (\name value ->
            { name = name
            , value = value
            }
        )
        |> TsCodec.field "name" .name questionNameCodec
        |> TsCodec.field "value" .value TsCodec.string
        |> TsCodec.buildObject


questionCodec : TsCodec.Codec Question
questionCodec =
    TsCodec.object
        (\defaultValue_ message_ name typeVal ->
            { defaultValue = defaultValue_
            , message = message_
            , name = name
            , type_ = typeVal
            }
        )
        |> TsCodec.field "default" .defaultValue (TsCodec.maybe TsCodec.string)
        |> TsCodec.field "message" .message TsCodec.string
        |> TsCodec.field "name" .name questionNameCodec
        |> TsCodec.field "type" .type_ typeCodec
        |> TsCodec.buildObject


typeCodec : TsCodec.Codec Type
typeCodec =
    TsCodec.custom Nothing
        (\vInput vInputList typeVal ->
            case typeVal of
                Input ->
                    vInput

                InputList ->
                    vInputList
        )
        |> TsCodec.variant0 "input" Input
        |> TsCodec.variant0 "list" InputList
        |> TsCodec.buildCustom


questionNameCodec : TsCodec.Codec QuestionName
questionNameCodec =
    TsCodec.custom Nothing
        (\vOutput vUrl vApiFilesOutput vApiBase vContracts nameVal ->
            case nameVal of
                Output ->
                    vOutput

                Url ->
                    vUrl

                ApiFilesOutput ->
                    vApiFilesOutput

                ApiBase ->
                    vApiBase

                Contracts ->
                    vContracts
        )
        |> TsCodec.variant0 "output" Output
        |> TsCodec.variant0 "url" Url
        |> TsCodec.variant0 "apiFilesOutput" ApiFilesOutput
        |> TsCodec.variant0 "apiBase" ApiBase
        |> TsCodec.variant0 "contracts" Contracts
        |> TsCodec.buildCustom


questions : List Question
questions =
    List.map
        (\name ->
            { defaultValue = defaultValue name
            , message = message name
            , name = name
            , type_ = type_ name
            }
        )
        allQuestionNames


type_ : QuestionName -> Type
type_ question =
    case question of
        Output ->
            Input

        Url ->
            Input

        ApiFilesOutput ->
            Input

        ApiBase ->
            Input

        Contracts ->
            Input


allQuestionNames : List QuestionName
allQuestionNames =
    [ Output
    , Url
    , ApiFilesOutput
    , ApiBase
    , Contracts
    ]


defaultValue : QuestionName -> Maybe String
defaultValue question =
    case question of
        Output ->
            Just "."

        Url ->
            Nothing

        ApiFilesOutput ->
            Just "generated"

        ApiBase ->
            Just "Api.Eos"

        Contracts ->
            Nothing


message : QuestionName -> String
message question =
    case question of
        Output ->
            "Where do you want to create this dapp?"

        Url ->
            "What is the URL where the contracts are stored? (e.g. https://mydomain.com/v1/chain)"

        ApiFilesOutput ->
            "In what folder (inside of the app) would you like to save generated files?"

        ApiBase ->
            "What should the prefix for the generated API modules be?"

        Contracts ->
            "Which contracts should we generate types for? (space-separated list)"


validate : QuestionName -> String -> ValidationResult
validate questionName =
    case questionName of
        Output ->
            outputValidator

        Url ->
            urlValidator

        ApiFilesOutput ->
            apiFilesOutputValidator

        ApiBase ->
            apiBaseValidator

        Contracts ->
            contractsValidator


outputValidator : String -> ValidationResult
outputValidator _ =
    Valid


urlValidator : String -> ValidationResult
urlValidator value =
    case Url.fromString value of
        Just _ ->
            Valid

        Nothing ->
            Invalid "invalid url"


apiFilesOutputValidator : String -> ValidationResult
apiFilesOutputValidator _ =
    Valid


apiBaseValidator : String -> ValidationResult
apiBaseValidator value =
    let
        isModuleNameValid : String -> Bool
        isModuleNameValid moduleName =
            case String.toList moduleName of
                [] ->
                    False

                firstChar :: otherChars ->
                    Char.isUpper firstChar
                        && List.all
                            (\char ->
                                Char.isAlphaNum char || char == '_'
                            )
                            otherChars
    in
    String.split "." value
        |> List.all isModuleNameValid
        |> validationResultFromBool "invalid module name. They can contain alphanumerical characters, and be split by `.`. All module names must start with an upper case letter"


validationResultFromBool : String -> Bool -> ValidationResult
validationResultFromBool errorMessage isValid =
    if isValid then
        Valid

    else
        Invalid errorMessage


contractsValidator : String -> ValidationResult
contractsValidator value =
    String.split " " value
        |> List.foldl
            (\contract acc ->
                case acc of
                    Valid ->
                        validateSingleContract contract

                    Invalid reason ->
                        Invalid reason
            )
            Valid


validateSingleContract : String -> ValidationResult
validateSingleContract value =
    let
        sanitizedString : String
        sanitizedString =
            String.trim value
                |> String.toLower

        isCharacterAllowed : Char -> Bool
        isCharacterAllowed char =
            Char.isAlpha char || List.member char [ '1', '2', '3', '4', '5', '.' ]

        error : String -> ValidationResult
        error errorMessage =
            Invalid ("Error at " ++ value ++ ": " ++ errorMessage)
    in
    case
        String.filter (not << isCharacterAllowed) sanitizedString
            |> String.toList
    of
        [] ->
            let
                minLength : Int
                minLength =
                    1
            in
            if String.length sanitizedString < minLength then
                error ("Names must have at least " ++ String.fromInt minLength ++ " characters")

            else
                let
                    maxLength : Int
                    maxLength =
                        12
                in
                if String.length sanitizedString > maxLength then
                    error ("Names must have at most " ++ String.fromInt maxLength ++ " characters")

                else if String.endsWith "." sanitizedString then
                    error "Names cannot end with a dot (`.`)"

                else
                    Valid

        firstInvalidCharacter :: otherInvalidCharacters ->
            let
                invalidCharactersString : String
                invalidCharactersString =
                    (firstInvalidCharacter :: otherInvalidCharacters)
                        |> List.map String.fromChar
                        |> String.join ", "
            in
            error ("The given name contains invalid characters. Valid characters range from a-z, 1-5, and the dot character (except for the last character). The following characters are invalid: " ++ invalidCharactersString)
