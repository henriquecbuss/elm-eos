import * as fs from "fs/promises";
import * as path from "path";

const exportRegex = /^export default {[\s\S]*name: "(.*)"[\s\S]*};$/m;
const generatedDir = path.join(__dirname, "..", "generated");
const generatedUiDir = path.join(generatedDir, "Ui");
const customElementsDir = path.join(
  __dirname,
  "..",
  "src",
  "ts",
  "customElements"
);

const toSnakeCase = (text: string): string => {
  return text.replace(/(-\w)/g, clearAndUpper);
};

const toPascalCase = (text: string): string => {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
};

const clearAndUpper = (text: string): string => {
  return text.replace(/-/, "").toUpperCase();
};

const generateElmModuleString = (name: string) =>
  `module Ui.${toPascalCase(name)} exposing (view, viewKeyed)

{-| AutoAnimate

@docs view, viewKeyed

-}

import Html
import Html.Keyed


{-| View \`${name}\` as a regular Html node
-}
view : List (Html.Attribute msg) -> List (Html.Html msg) -> Html.Html msg
view =
    Html.node "${name}"


{-| View \`${name}\` as a keyed Html node
-}
viewKeyed : List (Html.Attribute msg) -> List ( String, Html.Html msg ) -> Html.Html msg
viewKeyed =
    Html.Keyed.node "${name}"
`;

const generateTsCustomElementsDefine = (fileNames: string[]) => `${fileNames
  .map(
    (fileName: string) =>
      `import ${toPascalCase(
        fileName
      )} from "../src/ts/customElements/${toSnakeCase(fileName)}";`
  )
  .join("\n")}

const allCustomElements = [${fileNames.map(toPascalCase).join(", ")}];

export const defineCustomElements = () => {
  allCustomElements.forEach(({ name, classConstructor }) => {
    customElements.define(name, classConstructor);
  });
};

`;

const run = async () => {
  const customElementFiles = await fs.readdir(customElementsDir);

  const modules = [];

  for (const file of customElementFiles) {
    const fullFilePath = path.join(customElementsDir, file);
    const contents = await fs.readFile(fullFilePath, "utf-8");

    const match = contents.match(exportRegex);

    if (!match) {
      throw new Error(
        `Could not find name in export default in file: ${fullFilePath}`
      );
    }

    const name = match[1];
    modules.push(name);
  }

  await fs.mkdir(generatedUiDir, {
    recursive: true,
  });
  for (const fileName of modules) {
    await fs.writeFile(
      path.join(generatedUiDir, `${toPascalCase(fileName)}.elm`),
      generateElmModuleString(fileName)
    );
  }

  await fs.writeFile(
    path.join(generatedDir, "customElements.ts"),
    generateTsCustomElementsDefine(modules)
  );

  console.log("✅ Generated custom elements");
};

void run();
