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
import Json.Decode as Decode
import Json.Encode as Encode


{-| An asset is simply an amount of a given symbol.
-}
type alias Asset =
    { amount : Float
    , symbol : Eos.Symbol.Symbol
    }


{-| Encode an [Asset](#Asset) into JSON.
-}
encode : Asset -> Encode.Value
encode asset =
    let
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

        precision : Int
        precision =
            Eos.Symbol.precision asset.symbol
    in
    Encode.string
        (padWithDecimals (String.fromFloat asset.amount)
            ++ " "
            ++ Eos.SymbolCode.toString (Eos.Symbol.code asset.symbol)
        )


{-| Decode an [Asset](#Asset) from JSON.
-}
decoder : Decode.Decoder Asset
decoder =
    Decode.string
        |> Decode.andThen
            (\decodedString ->
                case String.split " " decodedString of
                    [ amount, symbol ] ->
                        let
                            floatAmount : Maybe Float
                            floatAmount =
                                String.toFloat amount

                            symbolValue : Maybe (Result Eos.Symbol.Error Eos.Symbol.Symbol)
                            symbolValue =
                                Maybe.map (\validPrecision -> Eos.Symbol.fromPrecisionAndCodeString validPrecision symbol)
                                    precision

                            precision : Maybe Int
                            precision =
                                case String.split "." amount of
                                    [ _ ] ->
                                        Just 0

                                    [ _, decimals ] ->
                                        Just (String.length decimals)

                                    _ ->
                                        Nothing
                        in
                        case ( symbolValue, floatAmount ) of
                            ( Just (Ok validSymbol), Just validAmount ) ->
                                Decode.succeed
                                    { amount = validAmount
                                    , symbol = validSymbol
                                    }

                            ( Just (Ok _), Nothing ) ->
                                Decode.fail ("Invalid amount: " ++ amount)

                            ( Just (Err err), _ ) ->
                                Decode.fail (Eos.Symbol.errorToString err)

                            ( Nothing, Just _ ) ->
                                Decode.fail ("Invalid symbol: " ++ symbol)

                            ( Nothing, Nothing ) ->
                                Decode.fail ("Invalid precision and symbol:\n" ++ "Amount: " ++ amount ++ "\nSymbol: " ++ symbol)

                    _ ->
                        Decode.fail "Invalid asset format"
            )
