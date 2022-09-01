import { Elm } from "./Main.elm";
import { version } from "../package.json";
import fs from "fs";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
global.XMLHttpRequest = require("xhr2");

const app = Elm.Main.init({
  node: null,
  flags: {
    argv: process.argv,
    versionMessage: version,
  },
});

app.ports.interopFromElm.subscribe((fromElm) => {
  switch (fromElm.tag) {
    case "printAndExitFailure": {
      console.log(fromElm.data.message);
      break;
    }
    case "printAndExitSuccess": {
      console.log(fromElm.data.message);
      break;
    }
    case "writeAbisToFile": {
      fs.writeFileSync(
        fromElm.data.fileName,
        `[${fromElm.data.abis.join(",\n")}]`
      );
    }
  }
});
