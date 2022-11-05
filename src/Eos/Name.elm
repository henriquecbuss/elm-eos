module Eos.Name exposing
    ( Name
    , toString, fromString, Error(..), errorToString
    , encode, decoder
    )

{-| Name is a very fundamental basic type of EOSIO. It is used to identify
accounts, permissions, actions, tables, etc.

@docs Name


## Converting to and from `String`

@docs toString, fromString, Error, errorToString


## Dealing with JSON

@docs encode, decoder

-}

import Json.Decode as Decode
import Json.Encode as Encode


{-| Names are strings of up to 12 characters in length. They can include
characters a-z, 1-5, and the dot character (except for the last character).

In order to generate a `Name`, you can use [fromString](#fromString) or
[decoder](#decoder).

To display a `Name`, use the [toString](#toString) function. You can also
[encode](#encode) a `Name`

-}
type Name
    = Name String



-- CONVERTING TO AND FROM STRING


{-| Convert a [Name](#Name) to a regular `String`. This is useful if you want to
display names in your application.

    fromString "eosio.token"
        |> Result.map toString
    --> Ok "eosio.token"

-}
toString : Name -> String
toString (Name name) =
    name


minLength : Int
minLength =
    1


maxLength : Int
maxLength =
    12


{-| Convert a regular `String` into a [Name](#Name). Since there are some
restrictions on the possible names, this function can fail with an [Error](#Error).

    fromString "eosio.token"
        |> Result.map toString
    --> Ok "eosio.token"

    fromString "0123456789"
    --> Err (InvalidCharacters ( '0', [ '6', '7', '8', '9' ] ))

    fromString "eosio."
    --> Err DotInLastPlace

    fromString ""
    --> Err TooShort

    fromString "a.very.long.name"
    --> Err TooLong

-}
fromString : String -> Result Error Name
fromString name =
    let
        sanitizedString : String
        sanitizedString =
            String.trim name
                |> String.toLower

        isCharacterAllowed : Char -> Bool
        isCharacterAllowed char =
            Char.isAlpha char || List.member char [ '1', '2', '3', '4', '5', '.' ]
    in
    case
        String.filter (not << isCharacterAllowed) sanitizedString
            |> String.toList
    of
        [] ->
            if String.length sanitizedString < minLength then
                Err TooShort

            else if String.length sanitizedString > maxLength then
                Err TooLong

            else if String.endsWith "." sanitizedString then
                Err DotInLastPlace

            else
                Ok (Name sanitizedString)

        firstInvalidCharacter :: otherInvalidCharacters ->
            Err (InvalidCharacters ( firstInvalidCharacter, otherInvalidCharacters ))


{-| The `Error` type represents all of the possible errors when converting a [Name](#Name)
[fromString](#fromString).

    fromString "0123456789"
    --> Err (InvalidCharacters ( '0', [ '6', '7', '8', '9' ] ))

    fromString "eosio."
    --> Err DotInLastPlace

    fromString ""
    --> Err TooShort

    fromString "a.very.long.name"
    --> Err TooLong

-}
type Error
    = InvalidCharacters ( Char, List Char )
    | DotInLastPlace
    | TooShort
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
            "The given name contains invalid characters. Valid characters range from a-z, 1-5, and the dot character (except for the last character). The following characters are invalid: " ++ invalidCharactersString

        DotInLastPlace ->
            "The given name contains a dot (`.`) as the last character. Dots are allowed, but not as the last character!"

        TooShort ->
            "The given name is too short. Names must be at least " ++ String.fromInt minLength ++ " characters long."

        TooLong ->
            "The given name is too long. Names must be at most " ++ String.fromInt maxLength ++ " characters long."



-- JSON


{-| Encode a [Name](#Name) into JSON. You can use this to send a [Name](#Name) to
the blockchain or some server.
-}
encode : Name -> Encode.Value
encode (Name name) =
    Encode.string name


{-| Decode a [Name](#Name) from JSON. You can use this to receive a [Name](#Name)
from the blockchain or some server. It already does all of the validation necessary
to ensure the [Name](#Name) is valid.
-}
decoder : Decode.Decoder Name
decoder =
    Decode.string
        |> Decode.andThen
            (\name ->
                case fromString name of
                    Ok validName ->
                        Decode.succeed validName

                    Err error ->
                        Decode.fail (errorToString error)
            )
