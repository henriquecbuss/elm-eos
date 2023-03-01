# memberFetching example

[![Netlify Status](https://api.netlify.com/api/v1/badges/b01f9a6d-9e5e-4494-a18d-5931881383bb/deploy-status)](https://app.netlify.com/sites/elm-eos-member-fetching/deploys)

This example shows how to fetch data from the blockchain and display it in a table. It's a simple example, but it's a good place to start. It has a single Elm file, along with the generated code from elm-eos.

## Running the example

You need to have Elm installed. It's already in the `package.json`, so you can just do `npm install`.

After that, you need to generate the eos bindings:

```bash
npm run generate
```

You can now build the example with 

```bash
npm run build
```

This will generate an `index.html` file in the `public` folder. You can open this file in your browser to see the example.

You can also see the example live at https://elm-eos-member-fetching.netlify.app
