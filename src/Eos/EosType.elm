module Eos.EosType exposing (EosType(..))

{-| This module is only used internally by the library. It is not meant to be used
directly by the user, unless you're using the code generation tool to build
dynamic forms.

@docs EosType

-}


{-| This includes all of the native types, declared in [abi\_serializer::configure\_built\_in\_types()](https://github.com/EOSIO/eos/blob/de78b49b5765c88f4e005046d1489c3905985b94/libraries/chain/abi_serializer.cpp#L89-L127).

It only doesn't support `bytes`. If you need support for `bytes`, please open an
issue on GitHub

-}
type EosType
    = EosBool
    | EosInt
    | EosFloat
    | TimePoint
    | TimePointSec
    | BlockTimestampType
    | Name
    | EosString
    | Checksum
    | PublicKey
    | Signature
    | Symbol
    | SymbolCode
    | Asset
    | ExtendedAsset
    | EosList EosType
