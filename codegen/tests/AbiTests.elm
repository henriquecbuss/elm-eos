module AbiTests exposing (suite)

import Abi
import EosType
import Expect
import Json.Decode
import Test exposing (Test, describe, test)

suite : Test
suite =
    describe "Abi"
        [ decodesExampleAbiJson
        ]


decodesExampleAbiJson : Test
decodesExampleAbiJson =
    test "decodes example ABI Json" <|
        \_ ->
            exampleAbiJson
                |> Json.Decode.decodeString Abi.decoder
                |> Expect.equal
                    (Ok
                        { actions =
                            [ { name = "transfer"
                              , arguments =
                                    [ { name = "from", type_ = EosType.Name }
                                    , { name = "to", type_ = EosType.Name }
                                    , { name = "quantity", type_ = EosType.Asset }
                                    , { name = "memo", type_ = EosType.EosString }
                                    ]
                              }
                            ]
                        , tables =
                            [ { name = "accounts"
                              , columns = [ { name = "balance", type_ = EosType.Asset } ]
                              }
                            ]
                        }
                    )


exampleAbiJson : String
exampleAbiJson =
    """
{
    "version": "eosio::abi/1.2",
    "types": [],
    "structs": [
        {
            "name": "transfer",
            "base": "",
            "fields": [
                {
                    "name": "from",
                    "type": "name"
                },
                {
                    "name": "to",
                    "type": "name"
                },
                {
                    "name": "quantity",
                    "type": "asset"
                },
                {
                    "name": "memo",
                    "type": "string"
                }
            ]
        },
        {
            "name": "account",
            "base": "",
            "fields": [
                {
                    "name": "balance",
                    "type": "asset"
                }
            ]
        }
    ],
    "actions": [
        {
            "name": "transfer",
            "type": "transfer",
            "ricardian_contract": ""
        }
    ],
    "tables": [
        {
            "name": "accounts",
            "index_type": "i64",
            "key_names": [],
            "key_types": [],
            "type": "account"
        }
    ],
    "ricardian_clauses": [],
    "error_messages": [],
    "abi_extensions": [],
    "variants": [],
    "action_results": [],
    "kv_tables": {}
}
"""
