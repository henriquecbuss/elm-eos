#!/usr/bin/env node

import { Elm } from "./Command/GenerateDapp.elm";
import { version } from "../../package.json";
import fs from "node:fs/promises";
import path from "node:path";
import inquirer from "inquirer";
import EventEmitter from "node:events";
import degit from "degit";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
global.XMLHttpRequest = require("xhr2");

const app = Elm.Command.GenerateDapp.init({
  flags: {
    argv: process.argv,
    versionMessage: version,
  },
});

const validationEventEmitter = new EventEmitter();

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

    case "inquire": {
      const { questions, answers } = fromElm.data;
      const parsedQuestions = questions.map((question) => ({
        ...question,
        name: question.name.tag,
        type: question.type.tag,
        validate: (input: string): Promise<string | true> => {
          return new Promise((resolve) => {
            validationEventEmitter.addListener(
              "validation",
              (validationResult: string | true) => {
                validationEventEmitter.removeAllListeners();
                resolve(validationResult);
              }
            );

            app.ports.interopToElm.send({
              tag: "validateInput",
              data: {
                question: question.name,
                value: input,
              },
            });
          });
        },
      }));

      const parsedAnswers = answers.reduce(
        (acc, answer) => ({
          ...acc,
          [answer.name.tag]: answer.value,
        }),
        {}
      );

      void inquirer
        .prompt(parsedQuestions, parsedAnswers)
        .then((parsedOptions) =>
          app.ports.interopToElm.send({
            tag: "validatedOptions",
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data: parsedOptions,
          })
        );

      break;
    }
    case "validationResult": {
      const result = fromElm.data.tag === "failure" ? fromElm.data.data : true;
      validationEventEmitter.emit("validation", result);
      break;
    }

    case "cloneRepository": {
      const { from, into, removeFiles, generateCliOptions } = fromElm.data;

      void (async () => {
        let dirExists = false;
        try {
          await fs.access(into);
          const filesInDir = await fs.readdir(into);
          dirExists = filesInDir.length !== 0;
        } catch {
          dirExists = false;
        }

        if (dirExists) {
          app.ports.interopToElm.send({
            tag: "directoryExistsAndIsNotEmpty",
          });
          return;
        }

        const emitter = degit(from, {
          cache: false,
          force: true,
          verbose: false,
        });

        await emitter.clone(into);

        console.log("DONE! Removing files...");

        await Promise.all(
          removeFiles.map((file) => fs.rm(path.join(into, file)))
        );

        const packageJsonBuffer = await fs.readFile(
          path.join(into, "package.json")
        );

        const packageJson = JSON.parse(packageJsonBuffer.toString()) as {
          scripts: { "generate:eos": string };
          devDependencies: Record<string, string>;
        };

        const { url, generatedFilesDirectory, contracts, base } =
          generateCliOptions;

        const contractsString = contracts
          .map((contract) => `--contract ${contract}`)
          .join(" ");

        packageJson.scripts[
          "generate:eos"
        ] = `elm-eos ${url} --output ${generatedFilesDirectory} --base ${base} ${contractsString}`;

        packageJson.devDependencies["elm-eos"] = `^${version}`;

        const elmJsonBuffer = await fs.readFile(path.join(into, "elm.json"));
        const elmJson = JSON.parse(elmJsonBuffer.toString()) as {
          "source-directories": string[];
        };

        elmJson["source-directories"] = [
          "src",
          generatedFilesDirectory,
          ".elm-spa/defaults",
          ".elm-spa/generated",
        ];

        await fs.writeFile(
          path.join(into, "package.json"),
          JSON.stringify(packageJson, undefined, 2)
        );

        await fs.writeFile(
          path.join(into, "elm.json"),
          JSON.stringify(elmJson, undefined, 4)
        );

        app.ports.interopToElm.send({
          tag: "finishedCloningProject",
        });
      })();

      break;
    }

    case "writeToFiles": {
      const { files, output } = fromElm.data;

      void (async () => {
        await Promise.all(
          files.map(async (file) => {
            console.log(file.path);
            const filePath = path.join(output, ...file.path);
            await fs.mkdir(path.dirname(filePath), { recursive: true });
            await fs.writeFile(filePath, file.contents, { flag: "w+" });
          })
        );
      })();
    }
  }
});
