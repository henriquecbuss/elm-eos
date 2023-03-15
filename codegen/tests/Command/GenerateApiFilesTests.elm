module Command.GenerateApiFilesTests exposing (suite)

import Command.GenerateApiFiles
import Expect
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Main"
        [ validateContractName
        ]


validateContractName : Test
validateContractName =
    describe "validateContractName"
        [ test "Produces Ok with valid contract name" <|
            \() ->
                Command.GenerateApiFiles.validateContractName "valid"
                    |> Expect.equal (Ok "valid")
        , test "Produces Err with invalid character" <|
            \() ->
                Command.GenerateApiFiles.validateContractName "invalid!"
                    |> Expect.equal (Err "invalid!: Invalid character: !.")
        , test "Produces Err with invalid characters" <|
            \() ->
                Command.GenerateApiFiles.validateContractName "invalid!9"
                    |> Expect.equal (Err "invalid!9: Invalid characters: !, 9.")
        , test "Produces Err with long contract name" <|
            \() ->
                Command.GenerateApiFiles.validateContractName "invalid.contract"
                    |> Expect.equal (Err "invalid.contract: Contract name is too long. It must be 12 characters or less.")
        , test "Produces Err when ending with ." <|
            \() ->
                Command.GenerateApiFiles.validateContractName "invalid."
                    |> Expect.equal (Err "invalid.: Contract name ends with `.`. You can use `.` in a contract name, just not as the last character.")
        ]
