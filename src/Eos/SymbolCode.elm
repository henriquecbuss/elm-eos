module Eos.SymbolCode exposing
    ( SymbolCode
    , toString, fromString, Error(..), errorToString
    , encode, decoder
    )

{-| A symbol code is usually used in a [Symbol](Eos-Symbol#Symbol), along with a precision.

@docs SymbolCode


## Converting to and from `String`

@docs toString, fromString, Error, errorToString


## Dealing with JSON

@docs encode, decoder

-}

import Json.Decode
import Json.Encode


{-| The symbol code is the "name" of the symbol. For example, the symbol `0,ABC` has
precision `0` and symbol code `ABC`.

A symbol code is a `String` of up to 7 characters, consisting of uppercase letters
from A-Z.

-}
type SymbolCode
    = SymbolCode String



-- CONVERTING TO AND FROM STRING


{-| Convert a [SymbolCode](#SymbolCode) to a `String`

    fromString "EOS"
        |> Result.map toString
    --> Ok "EOS"

-}
toString : SymbolCode -> String
toString (SymbolCode code) =
    code


{-| Convert a `String` into a [SymbolCode](#SymbolCode). A SymbolCode must be
a `String` of up to 7 characters, all uppercase letters (A-Z).

    fromString "Test"
    --> Err (InvalidCharacters ( 'e', [ 's', 't' ] ))

    fromString "VERYLONG"
    --> Err TooLong

    fromString "EOS"
        |> Result.map toString
    --> Ok ("EOS")

-}
fromString : String -> Result Error SymbolCode
fromString code =
    if String.length code > 7 then
        Err TooLong

    else
        case
            code
                |> String.filter (\c -> not (Char.isAlpha c) || not (Char.isUpper c))
                |> String.toList
        of
            firstInvalidCharacter :: otherInvalidCharacters ->
                Err (InvalidCharacters ( firstInvalidCharacter, otherInvalidCharacters ))

            [] ->
                Ok (SymbolCode code)


{-| Converting a `String` into a `SymbolCode` (with [fromString](#fromString))
can fail. This type represents all of the possible errors.

    fromString "Test"
    --> Err (InvalidCharacters ( 'e', [ 's', 't' ] ))

    fromString "VERYLONG"
    --> Err TooLong

    fromString "EOS"
        |> Result.map toString
    --> Ok ("EOS")

-}
type Error
    = InvalidCharacters ( Char, List Char )
    | TooLong


{-| You can use this function to convert an [Error](#Error) into a human-readable
`String`.
-}
errorToString : Error -> String
errorToString error =
    case error of
        InvalidCharacters ( firstInvalidCharacter, otherInvalidCharacters ) ->
            let
                invalidCharactersString : String
                invalidCharactersString =
                    (firstInvalidCharacter :: otherInvalidCharacters)
                        |> List.map String.fromChar
                        |> String.join ", "
            in
            "The given symbol code contains invalid characters. Valid characters range from A-Z. The following characters are invalid: " ++ invalidCharactersString

        TooLong ->
            "The given symbol code is too long. Symbol codes must be at most 7 characters long."



-- JSON


{-| Encode a [SymbolCode](#SymbolCode) into JSON.
-}
encode : SymbolCode -> Json.Encode.Value
encode (SymbolCode symbolCode) =
    Json.Encode.string symbolCode


{-| Decode a [SymbolCode](#SymbolCode) from JSON. It already does all of the
validation necessary to ensure the [SymbolCode](#SymbolCode) is valid.
-}
decoder : Json.Decode.Decoder SymbolCode
decoder =
    Json.Decode.string
        |> Json.Decode.andThen
            (\code ->
                case fromString code of
                    Ok symbolCode ->
                        Json.Decode.succeed symbolCode

                    Err error ->
                        Json.Decode.fail (errorToString error ++ ". Received: " ++ code)
            )
