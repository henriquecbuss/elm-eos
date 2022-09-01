import { Elm } from "./Main.elm";
import { version } from "../package.json";
import fs from "fs/promises";
import path from "path";

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
    case "writeToFiles": {
      Promise.all(
        fromElm.data.map(async (file) => {
          const dirname = path.dirname(file.path);

          await fs.mkdir(dirname, { recursive: true });

          return fs.writeFile(file.path, file.contents, { flag: "w+" });
        })
      )
        .then(() => {
          app.ports.interopToElm.send({ tag: "finishedWritingToFiles" });
        })
        .catch((err) => {
          console.log(err);
          app.ports.interopToElm.send({
            tag: "finishedWritingToFilesWithError",
          });
        });
    }
  }
});
