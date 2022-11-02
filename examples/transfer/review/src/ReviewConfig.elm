module ReviewConfig exposing (config)

{-| Do not rename the ReviewConfig module or the config function, because
`elm-review` will look for these.

To add packages that contain rules, add them to this review project using

    `elm install author/packagename`

when inside the directory containing this file.

-}

import CognitiveComplexity
import Docs.NoMissing
import Docs.ReviewAtDocs
import Docs.ReviewLinksAndSections
import Docs.UpToDateReadmeLinks
import NoBooleanCase
import NoConfusingPrefixOperator
import NoDebug.Log
import NoDebug.TodoOrToString
import NoDeprecated
import NoExposingEverything
import NoForbiddenWords
import NoFunctionOutsideOfModules
import NoImportingEverything
import NoInconsistentAliases
import NoLongImportLines
import NoMissingSubscriptionsCall
import NoMissingTypeAnnotation
import NoMissingTypeAnnotationInLetIn
import NoMissingTypeConstructor
import NoMissingTypeExpose
import NoModuleOnExposedNames
import NoPrematureLetComputation
import NoPrimitiveTypeAlias
import NoRecordAliasConstructor
import NoRecordAliasWithConstructor
import NoRecursiveUpdate
import NoRedundantConcat
import NoRedundantCons
import NoSimpleLetBody
import NoSinglePatternCase
import NoTestValuesInProductionCode
import NoUnmatchedUnit
import NoUnnecessaryTrailingUnderscore
import NoUnoptimizedRecursion
import NoUnsafeDivision
import NoUnsortedCases
import NoUnsortedLetDeclarations
import NoUnsortedRecords
import NoUnsortedTopLevelDeclarations
import NoUnused.CustomTypeConstructorArgs
import NoUnused.CustomTypeConstructors
import NoUnused.Dependencies
import NoUnused.Exports
import NoUnused.Modules
import NoUnused.Parameters
import NoUnused.Patterns
import NoUnused.Variables
import NoUrlStringConcatenation
import NoUselessSubscriptions
import OnlyAllSingleUseTypeVarsEndWith_
import Review.Rule as Rule exposing (Rule)
import ReviewPipelineStyles
import ReviewPipelineStyles.Premade
import Simplify
import UseCamelCase
import UseMemoizedLazyLambda


config : List Rule
config =
    [ NoMissingTypeConstructor.rule
    , NoSinglePatternCase.rule
        (NoSinglePatternCase.fixInArgument
            |> NoSinglePatternCase.ifAsPatternRequired
                (NoSinglePatternCase.fixInLetInstead
                    |> NoSinglePatternCase.andIfNoLetExists
                        NoSinglePatternCase.createNewLet
                )
        )
    , NoUnsortedCases.rule
        (NoUnsortedCases.defaults
            |> NoUnsortedCases.sortListPatternsByLength
        )
    , NoUnsortedLetDeclarations.rule
        (NoUnsortedLetDeclarations.sortLetDeclarations
            |> NoUnsortedLetDeclarations.valuesBeforeFunctions
            |> NoUnsortedLetDeclarations.glueDependenciesBeforeFirstDependent
            |> NoUnsortedLetDeclarations.glueHelpersAfter
            |> NoUnsortedLetDeclarations.usedInExpressionFirst
        )
    , NoUnsortedRecords.rule NoUnsortedRecords.defaults
    , NoUnsortedTopLevelDeclarations.rule
        (NoUnsortedTopLevelDeclarations.sortTopLevelDeclarations
            |> NoUnsortedTopLevelDeclarations.exposedOrderWithPrivateLast
            |> NoUnsortedTopLevelDeclarations.glueHelpersAfter
            |> NoUnsortedTopLevelDeclarations.glueDependenciesBeforeFirstDependent
        )
    , [ ReviewPipelineStyles.Premade.noMultilineLeftPizza
      , ReviewPipelineStyles.Premade.noMultilineLeftComposition
      , ReviewPipelineStyles.Premade.noSingleLineRightPizza
      , ReviewPipelineStyles.Premade.noSingleLineRightComposition
      , ReviewPipelineStyles.Premade.noPipelinesWithSimpleInputs
      , ReviewPipelineStyles.Premade.noRepeatedParentheticalApplication
      , ReviewPipelineStyles.Premade.noPipelinesWithConfusingNonCommutativeFunctions
      , ReviewPipelineStyles.Premade.noSemanticallyInfixFunctionsInLeftPipelines
      ]
        |> List.concat
        |> ReviewPipelineStyles.rule
    , NoUrlStringConcatenation.rule
    , NoPrimitiveTypeAlias.rule

    -- TODO
    , NoFunctionOutsideOfModules.rule
        [ ( forbiddenFunctionsEverywhere, [] )
        , ( [ "InteropPorts.toElm" ], [ "Main" ] )
        ]
    , NoSimpleLetBody.rule
    , NoUnnecessaryTrailingUnderscore.rule
    , CognitiveComplexity.rule 15
    , NoConfusingPrefixOperator.rule
    , NoDeprecated.rule NoDeprecated.defaults
    , NoExposingEverything.rule
    , NoImportingEverything.rule []
    , NoMissingTypeAnnotation.rule
    , NoMissingTypeAnnotationInLetIn.rule
    , NoMissingTypeExpose.rule
    , NoPrematureLetComputation.rule
    , NoDebug.Log.rule
    , NoDebug.TodoOrToString.rule
    , Docs.NoMissing.rule
        { document = Docs.NoMissing.onlyExposed
        , from = Docs.NoMissing.allModules
        }
        |> Rule.ignoreErrorsForDirectories [ "tests" ]
    , Docs.ReviewAtDocs.rule
    , Docs.ReviewLinksAndSections.rule
    , Docs.UpToDateReadmeLinks.rule
    , NoUnoptimizedRecursion.rule (NoUnoptimizedRecursion.optOutWithComment "IGNORE TCO")
    , Simplify.rule Simplify.defaults
    , NoTestValuesInProductionCode.rule (NoTestValuesInProductionCode.startsWith "test_")
    , NoMissingSubscriptionsCall.rule
    , NoRecursiveUpdate.rule
    , NoUselessSubscriptions.rule
    , NoUnused.CustomTypeConstructorArgs.rule
    , NoUnused.CustomTypeConstructors.rule []
    , NoUnused.Dependencies.rule
    , NoUnused.Exports.rule
    , NoUnused.Modules.rule
    , NoUnused.Parameters.rule
    , NoUnused.Patterns.rule
    , NoUnused.Variables.rule
    , NoRecordAliasConstructor.rule
    , OnlyAllSingleUseTypeVarsEndWith_.rule
    , NoUnmatchedUnit.rule
    , UseMemoizedLazyLambda.rule
    , NoLongImportLines.rule

    -- TODO - Do we need to worry about test values?
    , UseCamelCase.rule UseCamelCase.default
    , NoForbiddenWords.rule forbiddenWords
    , NoInconsistentAliases.config aliases
        |> NoInconsistentAliases.noMissingAliases
        |> NoInconsistentAliases.rule
    , NoModuleOnExposedNames.rule
    , NoBooleanCase.rule
    , NoRedundantConcat.rule
    , NoRedundantCons.rule
    , NoUnsafeDivision.rule
    ]
        |> List.map
            (Rule.ignoreErrorsForDirectories
                [ ".elm-spa"
                , "generated"
                , "tests/VerifyExamples"
                ]
            )


forbiddenFunctionsEverywhere : List String
forbiddenFunctionsEverywhere =
    [ -- use `mapFirst |> mapSecond` instead
      "Tuple.mapBoth"
    , -- use `String.indexes` instead
      "String.indices"
    , -- use a `case` instead
      "String.isEmpty"
    , "List.isEmpty"
    , "List.tail"
    ]


forbiddenWords : List String
forbiddenWords =
    [ [ "REPLACEME", "replaceme", "replace-me", "ReplaceMe" ]
    , [ "ToReplace", "TOREPLACE", "to-replace" ]
    , [ "TODO", "todo", "Todo", "to-do", "ToDo" ]
    , [ "- []" ]
    , [ "ToCheck", "to-check" ]
    , [ "ToFix", "TOFIX" ]
    , [ "FIXME", "fixme", "FixMe", "Fixme" ]
    ]
        |> List.concat


aliases : List ( String, String )
aliases =
    [ ( "Array.Extra", "ArrayX" )
    , ( "Html.Attributes", "Attr" )
    , ( "Html.Extra", "HtmlX" )
    , ( "Json.Decode", "Decode" )
    , ( "Json.Decode.Ancillary", "DecodeA" )
    , ( "Json.Decode.Extra", "DecodeX" )
    , ( "Json.Encode", "Encode" )
    , ( "Json.Encode.Extra", "EncodeX" )
    , ( "TsJson.Decode", "TsDecode" )
    , ( "TsJson.Encode", "TsEncode" )
    , ( "TsJson.Codec", "TsCodec" )
    , ( "List.Extra", "ListX" )
    , ( "List.Nonempty", "NE" )
    , ( "List.Nonempty.Ancillary", "NEA" )
    , ( "Maybe.Extra", "MaybeX" )
    , ( "Random.Extra", "RandomX" )
    , ( "Result.Extra", "ResultX" )
    , ( "Svg.Attributes", "SvgAttr" )
    , ( "Html.Styled", "Styled" )
    , ( "Html.Styled.Attributes", "StyledAttr" )
    , ( "Tailwind.Utilities", "Tw" )
    , ( "Tailwind.Breakpoints", "Tw" )
    ]
