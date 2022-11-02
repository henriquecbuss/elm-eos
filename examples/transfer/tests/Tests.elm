module Tests exposing (suite)

import Expect
import Test exposing (Test, test)


suite : Test
suite =
    test "should pass" <|
        \() -> Expect.pass
