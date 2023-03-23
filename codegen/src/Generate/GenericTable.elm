module Generate.GenericTable exposing
    ( type_
    , metadataType
    , toId
    , columns
    , boolToString, columnsForTable, customColumn, customColumnHtmlDetails, wrapCol
    , columnForType
    )

{-|

@docs type_

@docs metadataType

@docs toId

@docs columns


## Helpers

@docs boolToString, columnsForTable, customColumn, customColumnHtmlDetails, wrapCol


## Generating columns

@docs columnForType

-}

import Abi
import Elm
import Elm.Annotation
import Elm.Case
import Elm.Declare
import Elm.Let
import Elm.Op
import EosType
import Gen.Eos.Name
import Gen.Eos.Query
import Gen.Html
import Gen.Html.Attributes
import Gen.String
import Gen.Table
import Generate.Table
import String.Extra


contractNamePartsWithoutBase : String -> List String
contractNamePartsWithoutBase contract =
    String.split "." contract
        |> List.map String.Extra.classify


contractNameParts : List String -> String -> List String
contractNameParts base contract =
    (base ++ String.split "." contract)
        |> List.map String.Extra.classify


type_ : List String -> List String -> Elm.Declaration
type_ base contracts =
    Elm.customType "Table"
        (List.map
            (\contract ->
                let
                    baseContractName : String
                    baseContractName =
                        String.concat (contractNamePartsWithoutBase contract)
                in
                Elm.variantWith (baseContractName ++ "Table")
                    [ Elm.Annotation.named (contractNameParts base contract ++ [ "Table", "Metadata" ]) "Table"
                    ]
            )
            contracts
        )


metadataType : Elm.Declaration
metadataType =
    Elm.alias "Metadata"
        (Elm.Annotation.record
            [ ( "name", Gen.Eos.Name.annotation_.name )
            , ( "queryFunction"
              , Gen.Eos.Query.annotation_.query (Elm.Annotation.named [] "Table")
                    |> Elm.Annotation.function
                        [ Elm.Annotation.record [ ( "scope", Elm.Annotation.string ) ]
                        ]
              )
            ]
        )


toId :
    List String
    -> List ( String, List Abi.Table )
    ->
        { call : Elm.Expression -> Elm.Expression
        , callFrom : List String -> Elm.Expression -> Elm.Expression
        , declaration : Elm.Declaration
        }
toId base contractsAndTables =
    Elm.Declare.fn "toId"
        ( "genericTable", Just (Elm.Annotation.named [] "Table") )
        (\genericTable ->
            Elm.Case.custom genericTable
                (Elm.Annotation.named [] "Table")
                (List.map
                    (\( contract, tables ) ->
                        let
                            constructor : String
                            constructor =
                                String.concat (contractNamePartsWithoutBase contract ++ [ "Table" ])
                        in
                        Elm.Case.branch1 constructor
                            ( "table"
                            , Elm.Annotation.named
                                (contractNameParts base contract ++ [ "Table", "Metadata" ])
                                "Table"
                            )
                            (contractToId base contract tables)
                    )
                    contractsAndTables
                )
        )


contractToId : List String -> String -> List Abi.Table -> Elm.Expression -> Elm.Expression
contractToId base contract tables tableExpr =
    Elm.Case.custom tableExpr
        (Elm.Annotation.named (contractNameParts base contract ++ [ "Table", "Metadata" ]) "Table")
        (List.map
            (\table ->
                Elm.Case.branch1 (String.Extra.classify table.name)
                    ( String.Extra.camelize table.name
                    , Generate.Table.record table
                    )
                    (tableToId table)
            )
            tables
        )
        |> Elm.withType Elm.Annotation.string


tableToId : Abi.Table -> Elm.Expression -> Elm.Expression
tableToId table tableExpr =
    List.map
        (\column ->
            EosType.toId column.type_ (Elm.get (String.Extra.camelize column.name) tableExpr)
        )
        table.columns
        |> Elm.list
        |> Gen.String.call_.join (Elm.string ":")


columns :
    List String
    -> List ( String, List Abi.Table )
    ->
        { call : Elm.Expression -> Elm.Expression
        , callFrom : List String -> Elm.Expression -> Elm.Expression
        , declaration : Elm.Declaration
        }
columns base contractsAndTables =
    Elm.Declare.fn "columns"
        ( "genericTable", Just (Elm.Annotation.named [] "Table") )
        (\genericTable ->
            Elm.Case.custom genericTable
                (Elm.Annotation.named [] "Table")
                (List.map
                    (\( contract, tables ) ->
                        let
                            contractName : String
                            contractName =
                                contractNamePartsWithoutBase contract
                                    |> String.concat
                        in
                        Elm.Case.branch1 (contractName ++ "Table")
                            ( String.Extra.camelize contractName ++ "Table"
                            , Elm.Annotation.named
                                (contractNameParts base contract ++ [ "Table", "Metadata" ])
                                "Table"
                            )
                            (\tableMetadata ->
                                Elm.Case.custom tableMetadata
                                    (Elm.Annotation.named
                                        (contractNameParts base contract ++ [ "Table", "Metadata" ])
                                        "Table"
                                    )
                                    (List.map
                                        (\table ->
                                            Elm.Case.branch1
                                                (String.Extra.classify table.name)
                                                ( String.Extra.camelize table.name
                                                , Elm.Annotation.named (contractNameParts base contract ++ [ "Table" ])
                                                    (String.Extra.classify table.name)
                                                )
                                                (\specificTable ->
                                                    Elm.apply
                                                        (Elm.value
                                                            { annotation =
                                                                Elm.Annotation.function
                                                                    [ Elm.Annotation.named (contractNameParts base contract ++ [ "Table" ])
                                                                        (String.Extra.classify table.name)
                                                                    ]
                                                                    (Gen.Table.annotation_.column (Elm.Annotation.named [] "Table") (Elm.Annotation.var "msg_")
                                                                        |> Elm.Annotation.list
                                                                    )
                                                                    |> Just
                                                            , importFrom = []
                                                            , name = String.Extra.decapitalize contractName ++ String.Extra.classify table.name ++ "Columns"
                                                            }
                                                        )
                                                        [ specificTable ]
                                                )
                                        )
                                        tables
                                    )
                            )
                    )
                    contractsAndTables
                )
        )


boolToString :
    { call : Elm.Expression -> Elm.Expression
    , callFrom : List String -> Elm.Expression -> Elm.Expression
    , declaration : Elm.Declaration
    }
boolToString =
    Elm.Declare.fn "boolToString"
        ( "bool", Just Elm.Annotation.bool )
        (\bool ->
            Elm.ifThen bool (Elm.string "True") (Elm.string "False")
        )


columnsForTable :
    List String
    -> String
    -> Abi.Table
    ->
        { call : Elm.Expression -> Elm.Expression
        , callFrom : List String -> Elm.Expression -> Elm.Expression
        , declaration : Elm.Declaration
        }
columnsForTable base contract table =
    let
        contractName : String
        contractName =
            contractNamePartsWithoutBase contract
                |> String.concat
                |> String.Extra.decapitalize
    in
    Elm.Declare.fn (contractName ++ String.Extra.classify table.name ++ "Columns")
        ( "exampleData"
        , Elm.Annotation.named
            (contractNameParts base contract ++ [ "Table" ])
            (String.Extra.classify table.name)
            |> Just
        )
        (\exampleData ->
            Elm.Let.letIn
                (\unwrap ->
                    table.columns
                        |> List.map
                            (\column ->
                                wrapCol.call
                                    (Elm.functionReduced "data"
                                        (\data ->
                                            Elm.functionReduced "toData"
                                                (\toData ->
                                                    (columnForType column.type_).call data toData
                                                )
                                        )
                                    )
                                    (Elm.string (String.Extra.camelize column.name))
                                    (Elm.functionReduced "data" (Elm.get (String.Extra.camelize column.name)))
                                    (Elm.functionReduced "data" unwrap)
                            )
                        |> Elm.list
                )
                |> Elm.Let.fn "unwrap"
                    ( "data"
                    , Just (Elm.Annotation.named [] "Table")
                    )
                    (\data ->
                        Elm.Case.custom data
                            (Elm.Annotation.named [] "Table")
                            [ Elm.Case.branch1 (String.Extra.classify contractName ++ "Table")
                                ( "table", Elm.Annotation.named [] "Table" )
                                (\tableFromRightContract ->
                                    Elm.Case.custom tableFromRightContract
                                        (Elm.Annotation.named (contractNameParts base contract ++ [ "Table", "Metadata" ])
                                            (String.Extra.classify table.name)
                                        )
                                        [ Elm.Case.branch1 (String.Extra.classify table.name)
                                            ( String.Extra.camelize table.name
                                            , Elm.Annotation.named
                                                (contractNameParts base contract ++ [ "Table", "Metadata" ])
                                                (String.Extra.classify table.name)
                                            )
                                            (\finalTable -> finalTable)
                                        , Elm.Case.otherwise (\_ -> exampleData)
                                        ]
                                )
                            , Elm.Case.otherwise (\_ -> exampleData)
                            ]
                    )
                |> Elm.Let.toExpression
                |> Elm.withType (Elm.Annotation.list (Gen.Table.annotation_.column (Elm.Annotation.named [] "Table") (Elm.Annotation.var "msg")))
        )


customColumn :
    { call : Elm.Expression -> Elm.Expression
    , declaration : Elm.Declaration
    }
customColumn =
    let
        fnName : String
        fnName =
            "customColumn"
    in
    { call = \data -> Elm.apply (Elm.val fnName) [ data ]
    , declaration =
        Elm.fn
            ( "data"
            , Nothing
            )
            (\data ->
                Gen.Table.call_.veryCustomColumn
                    (Elm.record
                        [ ( "name", Elm.get "name" data )
                        , ( "sorter", Elm.get "sorter" data )
                        , ( "viewData"
                          , Elm.fn ( "data", Just (Elm.Annotation.var "data") )
                                (\dataToView ->
                                    customColumnHtmlDetails.call
                                        (Elm.apply (Elm.get "viewData" data) [ dataToView ])
                                )
                          )
                        ]
                    )
            )
            |> Elm.declaration fnName
    }


customColumnHtmlDetails :
    { call : Elm.Expression -> Elm.Expression
    , callFrom : List String -> Elm.Expression -> Elm.Expression
    , declaration : Elm.Declaration
    }
customColumnHtmlDetails =
    Elm.Declare.fn "customColumnHtmlDetails"
        ( "stringData", Just Elm.Annotation.string )
        (\stringData ->
            Elm.Let.letIn
                (\maxLength ->
                    Gen.Table.make_.htmlDetails
                        { attributes =
                            [ Gen.Html.Attributes.call_.title stringData
                            , Gen.Html.Attributes.class "whitespace-nowrap py-2 px-6"
                            ]
                                |> Elm.list
                        , children =
                            [ Gen.Html.call_.text (Gen.String.call_.left maxLength stringData)
                            , Elm.ifThen
                                (Elm.Op.gt (Gen.String.call_.length stringData) maxLength)
                                (Gen.Html.text "...")
                                (Gen.Html.text "")
                            ]
                                |> Elm.list
                        }
                )
                |> Elm.Let.value "maxLength" (Elm.int 40)
                |> Elm.Let.toExpression
        )


wrapCol :
    { call : Elm.Expression -> Elm.Expression -> Elm.Expression -> Elm.Expression -> Elm.Expression
    , callFrom : List String -> Elm.Expression -> Elm.Expression -> Elm.Expression -> Elm.Expression -> Elm.Expression
    , declaration : Elm.Declaration
    }
wrapCol =
    Elm.Declare.fn4 "wrapCol"
        ( "colFn"
        , Elm.Annotation.function
            [ Elm.Annotation.string
            , Elm.Annotation.function [ Elm.Annotation.named [] "Table" ] (Elm.Annotation.var "colType")
            ]
            (Gen.Table.annotation_.column (Elm.Annotation.named [] "Table") (Elm.Annotation.var "msg"))
            |> Just
        )
        ( "name", Just Elm.Annotation.string )
        ( "toData"
        , Elm.Annotation.function [ Elm.Annotation.var "table" ] (Elm.Annotation.var "colType")
            |> Just
        )
        ( "toTable"
        , Elm.Annotation.function [ Elm.Annotation.named [] "Table" ] (Elm.Annotation.var "table")
            |> Just
        )
        (\colFn name toData toTable ->
            Elm.apply colFn
                [ name
                , Elm.fn ( "table", Just (Elm.Annotation.named [] "Table") )
                    (\table ->
                        Elm.apply toData [ Elm.apply toTable [ table ] ]
                    )
                ]
        )


columnForType :
    EosType.EosType
    ->
        { call : Elm.Expression -> Elm.Expression -> Elm.Expression
        , callFrom : List String -> Elm.Expression -> Elm.Expression -> Elm.Expression
        , declaration : Elm.Declaration
        }
columnForType eosType =
    generateColumnTransformer (EosType.toTypeName eosType)
        (EosType.toAnnotation eosType)
        (EosType.valueToComparable eosType)
        (EosType.valueToString eosType)


generateColumnTransformer :
    String
    -> Elm.Annotation.Annotation
    -> (Elm.Expression -> Elm.Expression)
    -> (Elm.Expression -> Elm.Expression)
    ->
        { call : Elm.Expression -> Elm.Expression -> Elm.Expression
        , callFrom : List String -> Elm.Expression -> Elm.Expression -> Elm.Expression
        , declaration : Elm.Declaration
        }
generateColumnTransformer typeName returnAnnotation toComparable toString =
    Elm.Declare.fn2 (typeName ++ "Column")
        ( "name", Just Elm.Annotation.string )
        ( "to" ++ String.Extra.classify typeName
        , Elm.Annotation.function [ Elm.Annotation.var "data" ] returnAnnotation
            |> Just
        )
        (\name toType ->
            [ ( "name", name )
            , ( "sorter"
              , (\data ->
                    Elm.Let.letIn (\actualData -> toComparable actualData)
                        |> Elm.Let.value "actualData"
                            (Elm.apply toType [ data ]
                                |> Elm.withType returnAnnotation
                            )
                        |> Elm.Let.toExpression
                        |> Elm.withType (Elm.Annotation.var "comparable")
                )
                    |> Elm.fn ( "data", Just (Elm.Annotation.var "data") )
                    |> Gen.Table.call_.increasingOrDecreasingBy
              )
            , ( "viewData"
              , Elm.fn ( "data", Just (Elm.Annotation.var "data") )
                    (\data ->
                        Elm.Let.letIn
                            (\actualData ->
                                toString actualData
                            )
                            |> Elm.Let.value "actualData"
                                (Elm.apply toType [ data ]
                                    |> Elm.withType returnAnnotation
                                )
                            |> Elm.Let.toExpression
                            |> Elm.withType Elm.Annotation.string
                    )
              )
            ]
                |> Elm.record
                |> customColumn.call
                |> Elm.withType
                    (Gen.Table.annotation_.column (Elm.Annotation.var "data")
                        (Elm.Annotation.var "msg")
                    )
        )
