module EosTable exposing
    ( Table(..), Metadata
    , toId, columns
    )

{-| Conveniences to work with tables from multiple contracts

@docs Table, Metadata


## Building sortable tabels

@docs toId, columns

-}

import Cambiatus.Cm.Table
import Cambiatus.Cm.Table.Metadata
import Cambiatus.Tk.Table
import Cambiatus.Tk.Table.Metadata
import Eos.Asset
import Eos.Name
import Eos.Query
import Eos.Symbol
import Eos.SymbolCode
import Html
import Html.Attributes as Attr exposing (class)
import Html.Attributes.Extra as AttrX
import Html.Extra as HtmlX
import Mask
import Table


{-| All possible tables
-}
type Table
    = CambiatusCmTable Cambiatus.Cm.Table.Metadata.Table
    | CambiatusTkTable Cambiatus.Tk.Table.Metadata.Table
    | EosIoTable


{-| Metadata about a table
-}
type alias Metadata =
    { name : Eos.Name.Name
    , queryFunction : { scope : String } -> Eos.Query.Query Table
    }


symbolToString : Eos.Symbol.Symbol -> String
symbolToString symbol =
    String.fromInt (Eos.Symbol.precision symbol)
        ++ ","
        ++ Eos.SymbolCode.toString (Eos.Symbol.code symbol)


{-| Get an identifying field from a table. Useful for building tables with elm-sortable-table
-}
toId : Table -> String
toId genericTable =
    case genericTable of
        CambiatusCmTable table ->
            case table of
                Cambiatus.Cm.Table.Metadata.Action action ->
                    String.fromInt action.id

                Cambiatus.Cm.Table.Metadata.Check check ->
                    String.fromInt check.id

                Cambiatus.Cm.Table.Metadata.Claim claim ->
                    String.fromInt claim.id

                Cambiatus.Cm.Table.Metadata.Community community ->
                    symbolToString community.symbol

                Cambiatus.Cm.Table.Metadata.Indexes indexes ->
                    String.fromInt indexes.lastUsedSaleId
                        ++ String.fromInt indexes.lastUsedObjectiveId
                        ++ String.fromInt indexes.lastUsedActionId
                        ++ String.fromInt indexes.lastUsedClaimId

                Cambiatus.Cm.Table.Metadata.Member member ->
                    Eos.Name.toString member.name

                Cambiatus.Cm.Table.Metadata.Network network ->
                    String.fromInt network.id

                Cambiatus.Cm.Table.Metadata.Objective objective ->
                    String.fromInt objective.id

                Cambiatus.Cm.Table.Metadata.Role role ->
                    Eos.Name.toString role.name

                Cambiatus.Cm.Table.Metadata.Validator validator ->
                    String.fromInt validator.id

        CambiatusTkTable table ->
            case table of
                Cambiatus.Tk.Table.Metadata.Accounts accounts ->
                    symbolToString accounts.balance.symbol

                Cambiatus.Tk.Table.Metadata.Expiryopts expiryopts ->
                    symbolToString expiryopts.currency

                Cambiatus.Tk.Table.Metadata.Stat stat ->
                    symbolToString stat.supply.symbol

        EosIoTable ->
            ""


{-| Given an example table, generate the list of columns needed to display it
-}
columns : Table -> List (Table.Column Table msg_)
columns genericTable =
    case genericTable of
        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Action table) ->
            cambiatusCmActionColumns table

        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Check table) ->
            cambiatusCmCheckColumns table

        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Claim table) ->
            cambiatusCmClaimColumns table

        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Community table) ->
            cambiatusCmCommunityColumns table

        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Indexes table) ->
            cambiatusCmIndexesColumns table

        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Member table) ->
            cambiatusCmMemberColumns table

        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Network table) ->
            cambiatusCmNetworkColumns table

        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Objective table) ->
            cambiatusCmObjectiveColumns table

        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Role table) ->
            cambiatusCmRoleColumns table

        CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Validator table) ->
            cambiatusCmValidatorColumns table

        CambiatusTkTable (Cambiatus.Tk.Table.Metadata.Accounts table) ->
            cambiatusTkAccountsColumns table

        CambiatusTkTable (Cambiatus.Tk.Table.Metadata.Expiryopts table) ->
            cambiatusTkExpiryoptsColumns table

        CambiatusTkTable (Cambiatus.Tk.Table.Metadata.Stat table) ->
            cambiatusTkStatColumns table

        EosIoTable ->
            []


customColumn : { name : String, sorter : Table.Sorter data, viewData : data -> String } -> Table.Column data msg_
customColumn { name, sorter, viewData } =
    Table.veryCustomColumn
        { name = name
        , sorter = sorter
        , viewData =
            \data ->
                customColumnHtmlDetails (viewData data)
        }


customColumnHtmlDetails : String -> Table.HtmlDetails msg_
customColumnHtmlDetails stringData =
    let
        maxLength : Int
        maxLength =
            40
    in
    { attributes =
        [ AttrX.attributeIf (String.length stringData > maxLength) (Attr.title stringData)
        , class "whitespace-nowrap py-2 px-6"
        ]
    , children =
        [ Html.text (String.left maxLength stringData)
        , HtmlX.viewIf (String.length stringData > maxLength) (Html.text "...")
        ]
    }


assetColumn : String -> (data -> Eos.Asset.Asset) -> Table.Column data msg_
assetColumn name toAsset =
    customColumn
        { name = name
        , sorter =
            Table.increasingOrDecreasingBy
                (\data ->
                    let
                        asset : Eos.Asset.Asset
                        asset =
                            toAsset data
                    in
                    ( asset.amount
                    , Eos.Symbol.code asset.symbol
                        |> Eos.SymbolCode.toString
                    )
                )
        , viewData =
            \data ->
                let
                    asset : Eos.Asset.Asset
                    asset =
                        toAsset data
                in
                Mask.float (Mask.Precisely (Eos.Symbol.precision asset.symbol))
                    { decimalSeparator = ".", thousandsSeparator = "" }
                    asset.amount
                    ++ " "
                    ++ (Eos.Symbol.code asset.symbol
                            |> Eos.SymbolCode.toString
                       )
        }


stringColumn : String -> (data -> String) -> Table.Column data msg_
stringColumn name toString =
    customColumn
        { name = name
        , sorter = Table.increasingOrDecreasingBy toString
        , viewData = toString
        }


intColumn : String -> (data -> Int) -> Table.Column data msg_
intColumn name toInt =
    customColumn
        { name = name
        , sorter = Table.increasingOrDecreasingBy toInt
        , viewData =
            toInt
                >> String.fromInt
        }


boolColumn : String -> (data -> Int) -> Table.Column data msg_
boolColumn name toBool =
    customColumn
        { name = name
        , sorter = Table.increasingOrDecreasingBy toBool
        , viewData =
            \data ->
                if toBool data == 1 then
                    "Yes"

                else
                    "No"
        }


nameColumn : String -> (data -> Eos.Name.Name) -> Table.Column data msg_
nameColumn name toName =
    customColumn
        { name = name
        , sorter =
            Table.increasingOrDecreasingBy
                (toName
                    >> Eos.Name.toString
                )
        , viewData =
            \data ->
                Eos.Name.toString (toName data)
        }


wrapCol : (String -> (Table -> colType) -> Table.Column Table msg) -> String -> (table -> colType) -> (Table -> table) -> Table.Column Table msg
wrapCol colFn name toData toTable =
    colFn name (\table -> toData (toTable table))


cambiatusCmActionColumns : Cambiatus.Cm.Table.Action -> List (Table.Column Table msg_)
cambiatusCmActionColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Action
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Action action) ->
                    action

                _ ->
                    exampleData
    in
    [ wrapCol intColumn "id" .id unwrap
    , wrapCol intColumn "objectiveId" .objectiveId unwrap
    , wrapCol stringColumn "description" .description unwrap
    , wrapCol assetColumn "reward" .reward unwrap
    , wrapCol assetColumn "verifierReward" .reward unwrap

    -- TODO - Turn this into posix?
    , wrapCol intColumn "deadline" .deadline unwrap
    , wrapCol intColumn "usages" .usages unwrap
    , wrapCol intColumn "usagesLeft" .usagesLeft unwrap
    , wrapCol intColumn "verifications" .verifications unwrap
    , wrapCol stringColumn "verificationType" .verificationType unwrap
    , wrapCol boolColumn "isCompleted" .isCompleted unwrap
    , wrapCol nameColumn "creator" .creator unwrap
    , wrapCol boolColumn "hasProofPhoto" .hasProofPhoto unwrap
    , wrapCol boolColumn "hasProofCode" .hasProofCode unwrap
    , wrapCol stringColumn "photoProofInstructions" .photoProofInstructions unwrap
    ]


cambiatusCmCheckColumns : Cambiatus.Cm.Table.Check -> List (Table.Column Table msg_)
cambiatusCmCheckColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Check
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Check check) ->
                    check

                _ ->
                    exampleData
    in
    [ wrapCol intColumn "id" .id unwrap
    , wrapCol intColumn "claimId" .claimId unwrap
    , wrapCol nameColumn "validator" .validator unwrap
    , wrapCol boolColumn "isVerified" .isVerified unwrap
    ]


cambiatusCmClaimColumns : Cambiatus.Cm.Table.Claim -> List (Table.Column Table msg_)
cambiatusCmClaimColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Claim
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Claim claim) ->
                    claim

                _ ->
                    exampleData
    in
    [ wrapCol intColumn "id" .id unwrap
    , wrapCol intColumn "actionId" .actionId unwrap
    , wrapCol nameColumn "claimer" .claimer unwrap
    , wrapCol stringColumn "status" .status unwrap
    , wrapCol stringColumn "proofPhoto" .proofPhoto unwrap
    , wrapCol stringColumn "proofCode" .proofCode unwrap
    ]


symbolColumn : String -> (data -> Eos.Symbol.Symbol) -> Table.Column data msg_
symbolColumn name toSymbol =
    customColumn
        { name = name
        , sorter =
            Table.increasingOrDecreasingBy
                (\data ->
                    let
                        symbol : Eos.Symbol.Symbol
                        symbol =
                            toSymbol data
                    in
                    ( Eos.SymbolCode.toString (Eos.Symbol.code symbol), Eos.Symbol.precision symbol )
                )
        , viewData =
            toSymbol
                >> symbolToString
        }


cambiatusCmCommunityColumns : Cambiatus.Cm.Table.Community -> List (Table.Column Table msg_)
cambiatusCmCommunityColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Community
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Community community) ->
                    community

                _ ->
                    exampleData
    in
    [ wrapCol symbolColumn "symbol" .symbol unwrap
    , wrapCol nameColumn "creator" .creator unwrap
    , wrapCol stringColumn "logo" .logo unwrap
    , wrapCol stringColumn "name" .name unwrap
    , wrapCol stringColumn "description" .description unwrap
    , wrapCol assetColumn "inviterReward" .inviterReward unwrap
    , wrapCol assetColumn "invitedReward" .invitedReward unwrap
    , wrapCol boolColumn "hasObjectives" .hasObjectives unwrap
    , wrapCol boolColumn "hasShop" .hasShop unwrap
    , wrapCol boolColumn "hasKyc" .hasKyc unwrap
    ]


cambiatusCmIndexesColumns : Cambiatus.Cm.Table.Indexes -> List (Table.Column Table msg_)
cambiatusCmIndexesColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Indexes
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Indexes indexes) ->
                    indexes

                _ ->
                    exampleData
    in
    [ wrapCol intColumn "lastUsedSaleId" .lastUsedSaleId unwrap
    , wrapCol intColumn "lastUsedObjectiveId" .lastUsedObjectiveId unwrap
    , wrapCol intColumn "lastUsedActionId" .lastUsedActionId unwrap
    , wrapCol intColumn "lastUsedClaimId" .lastUsedClaimId unwrap
    ]


listColumn : String -> (data -> List item) -> (item -> String) -> (Table -> data) -> Table.Column Table msg_
listColumn name toList itemToString toData =
    customColumn
        { name = name
        , sorter =
            Table.increasingOrDecreasingBy
                (toData
                    >> toList
                    >> List.length
                )
        , viewData =
            \data ->
                "["
                    ++ (toList (toData data)
                            |> List.map itemToString
                            |> String.join ", "
                       )
                    ++ "]"
        }


cambiatusCmMemberColumns : Cambiatus.Cm.Table.Member -> List (Table.Column Table msg_)
cambiatusCmMemberColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Member
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Member member) ->
                    member

                _ ->
                    exampleData
    in
    [ wrapCol nameColumn "name" .name unwrap
    , wrapCol nameColumn "inviter" .inviter unwrap
    , wrapCol stringColumn "userType" .userType unwrap
    , listColumn "roles" .roles Eos.Name.toString unwrap
    ]


cambiatusCmNetworkColumns : Cambiatus.Cm.Table.Network -> List (Table.Column Table msg_)
cambiatusCmNetworkColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Network
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Network network) ->
                    network

                _ ->
                    exampleData
    in
    [ wrapCol intColumn "id" .id unwrap
    , wrapCol symbolColumn "community" .community unwrap
    , wrapCol nameColumn "invitedUser" .invitedUser unwrap
    , wrapCol nameColumn "invitedBy" .invitedBy unwrap
    , wrapCol stringColumn "userType" .userType unwrap
    ]


cambiatusCmObjectiveColumns : Cambiatus.Cm.Table.Objective -> List (Table.Column Table msg_)
cambiatusCmObjectiveColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Objective
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Objective objective) ->
                    objective

                _ ->
                    exampleData
    in
    [ wrapCol intColumn "id" .id unwrap
    , wrapCol stringColumn "description" .description unwrap
    , wrapCol symbolColumn "community" .community unwrap
    , wrapCol nameColumn "creator" .creator unwrap
    ]


cambiatusCmRoleColumns : Cambiatus.Cm.Table.Role -> List (Table.Column Table msg_)
cambiatusCmRoleColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Role
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Role role) ->
                    role

                _ ->
                    exampleData
    in
    [ wrapCol nameColumn "name" .name unwrap
    , listColumn "permissions" .permissions identity unwrap
    ]


cambiatusCmValidatorColumns : Cambiatus.Cm.Table.Validator -> List (Table.Column Table msg_)
cambiatusCmValidatorColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Cm.Table.Validator
        unwrap data =
            case data of
                CambiatusCmTable (Cambiatus.Cm.Table.Metadata.Validator validator) ->
                    validator

                _ ->
                    exampleData
    in
    [ wrapCol intColumn "id" .id unwrap
    , wrapCol intColumn "actionId" .actionId unwrap
    , wrapCol nameColumn "validator" .validator unwrap
    ]


cambiatusTkAccountsColumns : Cambiatus.Tk.Table.Accounts -> List (Table.Column Table msg_)
cambiatusTkAccountsColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Tk.Table.Accounts
        unwrap data =
            case data of
                CambiatusTkTable (Cambiatus.Tk.Table.Metadata.Accounts accounts) ->
                    accounts

                _ ->
                    exampleData
    in
    [ wrapCol assetColumn "balance" .balance unwrap

    -- TODO - Posix?
    , wrapCol intColumn "lastActivity" .lastActivity unwrap
    ]


cambiatusTkExpiryoptsColumns : Cambiatus.Tk.Table.Expiryopts -> List (Table.Column Table msg_)
cambiatusTkExpiryoptsColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Tk.Table.Expiryopts
        unwrap data =
            case data of
                CambiatusTkTable (Cambiatus.Tk.Table.Metadata.Expiryopts expiryopts) ->
                    expiryopts

                _ ->
                    exampleData
    in
    [ wrapCol symbolColumn "currency" .currency unwrap
    , wrapCol intColumn "naturalExpirationPeriod" .naturalExpirationPeriod unwrap
    , wrapCol intColumn "juridicalExpirationPeriod" .juridicalExpirationPeriod unwrap
    , wrapCol assetColumn "renovationAmount" .renovationAmount unwrap
    ]


cambiatusTkStatColumns : Cambiatus.Tk.Table.Stat -> List (Table.Column Table msg_)
cambiatusTkStatColumns exampleData =
    let
        unwrap : Table -> Cambiatus.Tk.Table.Stat
        unwrap data =
            case data of
                CambiatusTkTable (Cambiatus.Tk.Table.Metadata.Stat stat) ->
                    stat

                _ ->
                    exampleData
    in
    [ wrapCol assetColumn "supply" .supply unwrap
    , wrapCol assetColumn "maxSupply" .maxSupply unwrap
    , wrapCol assetColumn "minBalance" .minBalance unwrap
    , wrapCol nameColumn "issuer" .issuer unwrap
    , wrapCol stringColumn "type_" .type_ unwrap
    ]
