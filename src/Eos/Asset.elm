module Eos.Asset exposing
    ( Asset
    , encode, decoder
    )

{-|

@docs Asset


## Dealing with JSON

@docs encode, decoder

-}

import Eos.Symbol
import Eos.SymbolCode
import Json.Decode
import Json.Encode


{-| An asset is simply an amount of a given symbol.
-}
type alias Asset =
    { amount : Float
    , symbol : Eos.Symbol.Symbol
    }


{-| Encode an [Asset](#Asset) into JSON.
-}
encode : Asset -> Json.Encode.Value
encode asset =
    let
        precision : Int
        precision =
            Eos.Symbol.precision asset.symbol

        padWithDecimals : String -> String
        padWithDecimals amountString =
            if precision == 0 then
                amountString

            else
                case String.split "." amountString of
                    [ withoutDecimals ] ->
                        withoutDecimals ++ "." ++ String.repeat precision "0"

                    [ number, decimals ] ->
                        number ++ "." ++ decimals ++ String.repeat (precision - String.length decimals) "0"

                    _ ->
                        amountString
    in
    Json.Encode.string
        (padWithDecimals (String.fromFloat asset.amount)
            ++ " "
            ++ Eos.SymbolCode.toString (Eos.Symbol.code asset.symbol)
        )


{-| Decode an [Asset](#Asset) from JSON.
-}
decoder : Json.Decode.Decoder Asset
decoder =
    Json.Decode.string
        |> Json.Decode.andThen
            (\decodedString ->
                case String.split " " decodedString of
                    [ amount, symbol ] ->
                        let
                            floatAmount : Maybe Float
                            floatAmount =
                                String.toFloat amount

                            precision : Maybe Int
                            precision =
                                case String.split "." amount of
                                    [ _ ] ->
                                        Just 0

                                    [ _, decimals ] ->
                                        Just (String.length decimals)

                                    _ ->
                                        Nothing

                            symbolValue : Maybe (Result Eos.Symbol.Error Eos.Symbol.Symbol)
                            symbolValue =
                                Maybe.map (\validPrecision -> Eos.Symbol.fromPrecisionAndCodeString validPrecision symbol)
                                    precision
                        in
                        case ( symbolValue, floatAmount ) of
                            ( Just (Ok validSymbol), Just validAmount ) ->
                                Json.Decode.succeed
                                    { amount = validAmount
                                    , symbol = validSymbol
                                    }

                            ( Just (Ok _), Nothing ) ->
                                Json.Decode.fail ("Invalid amount: " ++ amount)

                            ( Just (Err err), _ ) ->
                                Json.Decode.fail (Eos.Symbol.errorToString err)

                            ( Nothing, Just _ ) ->
                                Json.Decode.fail ("Invalid symbol: " ++ symbol)

                            ( Nothing, Nothing ) ->
                                Json.Decode.fail ("Invalid precision and symbol:\n" ++ "Amount: " ++ amount ++ "\nSymbol: " ++ symbol)

                    _ ->
                        Json.Decode.fail "Invalid asset format"
            )
