# henriquecbuss/elm-eos

This package provides a way to interact with the EOS blockchain, while maintaining
Elm's type safety. In order to do so, it reads the ABI of the contracts you want
to interact with, and generates all of the necessary Elm code to interact with
them.


## Overview

This package mainly serves to translate EOSIO types to Elm types. There is a
[CLI app](#cli) that is responsible for generating code specific to the contracts
you need. The exception to that is the [Eos.Query](https://package.elm-lang.org/packages/henriquecbuss/elm-eos/1.0.1/Eos-Query/) module, which is
used to send queries to the blockchain.

For example, let's say you have a contract named `company.acc`, with an `accounts`
table, described by this struct:

```json
{
    "name": "account",
    "base": "",
    "fields": [
        {
            "name": "account_name",
            "type": "name"
        },
        {
            "name": "balance",
            "type": "asset"
        }
    ]
}
```

In order to get data from that table, you would write some Elm code like this
(all of the code that starts with `Company.Acc` is generated by the [CLI app](#cli)):

```elm
import Company.Acc.Table.Query
import Company.Acc.Table
import Eos.Query
import Http

fetchAccounts : (Result Http.Error (Eos.Query.Response Company.Acc.Table.Account) -> msg) -> Cmd msg
fetchAccounts toMsg =
    Company.Acc.Table.Query.account { scope = "company.acc" }
        |> Eos.Query.withLimit 100
        |> Eos.Query.send toMsg
```

You never need to define JSON encoders, decoders, or types for the data you're
querying for. The generated code does all of that for you, including setting the
target url (though you can override that if you need).

Here's a sneak peak of what the generated code looks like:

```elm
-- In file Company/Acc/Table/Query.elm

import Eos.Query

account : { scope : String } -> Eos.Query.Query Company.Acc.Table.Account

-- In file Company/Acc/Table.elm

import Eos.Name
import Eos.Asset

type alias Account =
    { accountName : Eos.Name.Name
    , balance : Eos.Asset.Asset
    }
```

Similarly, if you want to **send** data to the blockchain, all of the code is
generated for you. For example, let's say you want to send a `transfer` action,
described by this struct:

```json
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
            "name": "amount",
            "type": "asset"
        }
    ]
}
```

In order to generate JSON to send over to the blockchain, all you have to do is
this:

```elm
import Json.Encode
import Eos.Name
import Eos.Permission
import Eos.Asset
import Company.Acc.Action

sendMoney : { currentUser : Eos.Name.Name, currentPermission : Eos.Permission.Permission to : Eos.Name.Name, amount : Eos.Asset.Asset } -> Json.Encode.Value
sendMoney { currentUser, currentPermission, to, amount } =
    Company.Acc.Action.Transfer
        { from = currentUser
        , to = to
        , amount = amount
        }
        |> Company.Acc.Action.encode [ { actor = currentUser, permission = currentPermission } ]
```

You can then send that JSON to the blockchain using the `eosjs` library (through
a port), or using your preferred method.

### Examples

You can take a look at the [examples](https://github.com/henriquecbuss/elm-eos/tree/main/examples) folder
for complete examples (each one has more detailed information in their `README.md`):

- [memberFetching](https://github.com/henriquecbuss/elm-eos/tree/main/examples/memberFetching): a simple example of fetching data from the blockchain and displaying it in a table. This is the simplest example there is, and it's a good place to start.
- [transfer](https://github.com/henriquecbuss/elm-eos/tree/main/examples/transfer): a more complex example, where you can send a transfer to the blockchain. This is an example for when you know what actions do and which ones you want to use.
- [contractExplorer](https://github.com/henriquecbuss/elm-eos/tree/main/examples/contractExplorer): an even more complex example, where you can explore the tables and actions of multiple contracts. This is an example for when you want to explore the API of a contract, and see what actions and tables it has. This example also includes integration with third-party wallets using [eos-transit](https://github.com/eosnewyork/eos-transit). This app is roughly what the tool generation does for you if you ask it to generate an app based on some contracts.

## Setup

There are a few moving pieces that need to work together in order to use
`henriquecbuss/elm-eos`. Here's how to set them up:

1. Add the elm package as a dependency in your `elm.json`, along with `elm/json`, `elm/http` and `NoRedInk/elm-json-decode-pipeline`:
   ```bash
   elm install henriquecbuss/elm-eos
   elm install elm/json
   elm install elm/http
   elm install elm/time
   elm install NoRedInk/elm-json-decode-pipeline
   elm install elm-community/maybe-extra
   elm install elm-community/result-extra
   ```

2. Install the `elm-eos` command line through npm. This is what you will
   use to generate Elm code for the EOSIO API. You can save it as a dev dependency
   to ensure everyone on your team has access to the same version:
   ```bash
   # With npm
   npm install --save-dev elm-eos

   # With yarn
   yarn add --dev elm-eos
   ```

3. Run the CLI tool to generate the Elm code for your contracts. If you installed
   like shown above, you can run with `npx elm-eos`, or create a script in your `package.json` like this:
   ```json
   {
       "scripts": {
           "generate:eos": "elm-eos https://mydomain.com/v1/chain --contract my.first --contract my.second --output generated --base Contracts"
       }
   }
   ```

   This will generate files in `Contracts/My/First` and `Contracts/My/Second`

4. Now whenever you need to refresh the generated code, you can run `npm run generate-eos`.

## CLI

The CLI tool is used to generate the Elm code for your contracts. It takes some
arguments:

- URL: the base url of the contracts. For example: `https://mydomain.com/v1/chain`
- Output: the directory to write the generated code to. For example: `generated`
- Base: the base module name to use for the generated code. For example: `My.Contract`
- Contracts: the names of the contracts to generate code for. For example: `--contract first --contract second`

Joining all of that together, you can run the CLI like this:

```bash
elm-eos https://mydomain.com/v1/chain --contract first --contract second --output generated --base My.Contract
```

Only URL and Contracts are required.

## Support

If you need any kind of support, feel free to open an issue on GitHub, or ping me @HenriqueBuss on the [Elm Slack](https://elm-lang.org/community/slack).
