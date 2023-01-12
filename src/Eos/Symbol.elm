module Eos.Symbol exposing
    ( Symbol
    , precision, code
    , fromPrecisionAndCodeString, fromPrecisionAndCode, Error(..), PrecisionError(..), errorToString
    , encode, decoder
    )

{-|

@docs Symbol


## Extracting information

@docs precision, code


## Converting from `String`s and `Int`s

@docs fromPrecisionAndCodeString, fromPrecisionAndCode, Error, PrecisionError, errorToString


## Dealing with JSON

@docs encode, decoder

-}

import Eos.SymbolCode
import Json.Decode
import Json.Encode as Encode


{-| A Symbol is what identifies a currency, and is made of a `precision` and a
[SymbolCode](Eos-SymbolCode). For example, the symbol `1,EOS` is a symbol with
precision 1, and a symbol code of `EOS`.

The precision number determines how many decimal digits can be used. In the
example above, someone can have 0.1 EOS, but not 0.01 EOS.

-}
type Symbol
    = Symbol
        { precision : Int
        , code : Eos.SymbolCode.SymbolCode
        }



-- EXTRACTING INFORMATION


{-| Get the precision of a [Symbol](#Symbol).

    fromPrecisionAndCodeString 1 "EOS"
        |> Result.map precision
    --> Ok 1

-}
precision : Symbol -> Int
precision (Symbol symbol) =
    symbol.precision


{-| Get the [SymbolCode](Eos-SymbolCode) of a [Symbol](#Symbol)

    import Eos.SymbolCode

    fromPrecisionAndCodeString 1 "EOS"
        |> Result.map (code >> Eos.SymbolCode.toString)
    --> Ok "EOS"

-}
code : Symbol -> Eos.SymbolCode.SymbolCode
code (Symbol symbol) =
    symbol.code



-- CONVERTING FROM STRINGS AND INTS


{-| Create a [Symbol](#Symbol) from a precision and a `String` that represents a
[SymbolCode](Eos-SymbolCode). If you already have a [SymbolCode](Eos-SymbolCode),
use [fromPrecisionAndCode](#fromPrecisionAndCode) instead.

    import Eos.SymbolCode

    fromPrecisionAndCodeString 1 "EOS"
        |> Result.map
            (\symbol ->
                { precision = precision symbol
                , codeString = Eos.SymbolCode.toString (code symbol)
                }
            )
    --> Ok { precision = 1, codeString = "EOS" }

    fromPrecisionAndCodeString -1 "EOS"
    --> Err (PrecisionError NegativePrecision)

    fromPrecisionAndCodeString 1 "eos"
    --> Err (SymbolCodeError (Eos.SymbolCode.InvalidCharacters ( 'e', [ 'o', 's' ] )))

-}
fromPrecisionAndCodeString : Int -> String -> Result Error Symbol
fromPrecisionAndCodeString precision_ code_ =
    case Eos.SymbolCode.fromString code_ of
        Ok symbolCode ->
            fromPrecisionAndCode precision_ symbolCode
                |> Result.mapError PrecisionError

        Err err ->
            Err (SymbolCodeError err)


{-| Create a [Symbol](#Symbol) from a precision and a [SymbolCode](Eos-SymbolCode).
-}
fromPrecisionAndCode : Int -> Eos.SymbolCode.SymbolCode -> Result PrecisionError Symbol
fromPrecisionAndCode precision_ code_ =
    if precision_ < 0 then
        Err NegativePrecision

    else
        Ok (Symbol { precision = precision_, code = code_ })


{-| When creating a [Symbol](#Symbol), there are two things we validate: the
precision and the symbol code. This type represents that.
-}
type Error
    = PrecisionError PrecisionError
    | SymbolCodeError Eos.SymbolCode.Error


{-| Precisions must be >= 0. This type represents the error that can happen when
trying to create a [Symbol](#Symbol) with a negative precision.
-}
type PrecisionError
    = NegativePrecision


{-| You can use this function to convert an [Error](#Error) to a human-readable
`String`.
-}
errorToString : Error -> String
errorToString error =
    case error of
        PrecisionError NegativePrecision ->
            "Invalid precision. I was expecting something in the format 0,EOS, with a positive numver before the comma."

        SymbolCodeError err ->
            Eos.SymbolCode.errorToString err



-- JSON


{-| Encode a [Symbol](#Symbol) into a JSON value.
-}
encode : Symbol -> Encode.Value
encode (Symbol symbol) =
    String.replace "{{precision}}" (String.fromInt symbol.precision) "{{precision}},{{code}}"
        |> String.replace "{{code}}" (Eos.SymbolCode.toString symbol.code)
        |> Encode.string


{-| Decode a [Symbol](#Symbol) from a JSON value.
-}
decoder : Json.Decode.Decoder Symbol
decoder =
    Json.Decode.string
        |> Json.Decode.andThen
            (\symbolString ->
                case String.split "," symbolString of
                    [ precisionString, codeString ] ->
                        case String.toInt precisionString of
                            Just precision_ ->
                                case fromPrecisionAndCodeString precision_ codeString of
                                    Ok symbol ->
                                        Json.Decode.succeed symbol

                                    Err err ->
                                        Json.Decode.fail (errorToString err ++ ". Received: " ++ symbolString)

                            Nothing ->
                                Json.Decode.fail ("Invalid precision. I was expecting something in the format 0,EOS, with a number before the comma. Received: " ++ symbolString)

                    _ ->
                        Json.Decode.fail ("Invalid symbol. I was expecting something in the format 0,EOS. Received: " ++ symbolString)
            )
