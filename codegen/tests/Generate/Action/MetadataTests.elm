module Generate.Action.MetadataTests exposing (suite)

import Abi
import Elm.ToString
import EosType
import Expect
import Generate.Action.Metadata
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Generate.Action.Metadata"
        [ generateAllMetadata ]


generateAllMetadata : Test
generateAllMetadata =
    describe "allMetadata"
        [ test "generates for single action with no arguments" <|
            \() ->
                Generate.Action.Metadata.allMetadata [ exampleAction1 ]
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal """metadata :
    List { name : Eos.Name.Name
    , fields : AssocList.Dict Eos.Name.Name Eos.EosType.EosType
    }"""
                        , .body
                            >> Expect.equal """metadata :
    List { name : Eos.Name.Name
    , fields : AssocList.Dict Eos.Name.Name Eos.EosType.EosType
    }
metadata =
    Result.withDefault
        []
        (Result.Extra.combine
            [ Result.map
                (\\mapUnpack ->
                    { name = mapUnpack
                    , fields =
                        AssocList.fromList
                            (Result.withDefault [] (Result.Extra.combine []))
                    }
                )
                (Eos.Name.fromString "action1")
            ]
        )


"""
                        ]
        , test "generates for single action with some arguments" <|
            \() ->
                Generate.Action.Metadata.allMetadata [ exampleAction2 ]
                    |> Elm.ToString.declaration
                    |> Expect.all
                        [ .signature
                            >> Expect.equal """metadata :
    List { name : Eos.Name.Name
    , fields : AssocList.Dict Eos.Name.Name Eos.EosType.EosType
    }"""
                        , .body
                            >> Expect.equal """metadata :
    List { name : Eos.Name.Name
    , fields : AssocList.Dict Eos.Name.Name Eos.EosType.EosType
    }
metadata =
    Result.withDefault
        []
        (Result.Extra.combine
            [ Result.map
                (\\mapUnpack ->
                    { name = mapUnpack
                    , fields =
                        AssocList.fromList
                            (Result.withDefault
                                []
                                (Result.Extra.combine
                                    [ Result.map
                                        (\\mapUnpack0 ->
                                            ( mapUnpack0, Eos.EosType.EosBool )
                                        )
                                        (Eos.Name.fromString "arg1")
                                    , Result.map
                                        (\\mapUnpack0 ->
                                            ( mapUnpack0, Eos.EosType.EosInt )
                                        )
                                        (Eos.Name.fromString "arg2")
                                    , Result.map
                                        (\\mapUnpack0 ->
                                            ( mapUnpack0
                                            , Eos.EosType.EosList
                                                Eos.EosType.EosInt
                                            )
                                        )
                                        (Eos.Name.fromString "arg3")
                                    ]
                                )
                            )
                    }
                )
                (Eos.Name.fromString "action2")
            ]
        )


"""
                        ]
        ]


exampleAction1 : Abi.Action
exampleAction1 =
    { name = "action1"
    , arguments = []
    }


exampleAction2 : Abi.Action
exampleAction2 =
    { name = "action2"
    , arguments =
        [ { name = "arg1", type_ = EosType.EosBool }
        , { name = "arg2", type_ = EosType.EosInt }
        , { name = "arg3", type_ = EosType.EosList EosType.EosInt }
        ]
    }
