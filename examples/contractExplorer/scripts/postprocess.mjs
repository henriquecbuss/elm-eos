// @ts-check
import * as esbuild from "esbuild";
import * as UglifyJS from "uglify-js";

/**
 * @type {import("elm-watch/elm-watch-node").Postprocess}
 */
export default async function postprocess({
  code,
  targetName,
  compilationMode,
}) {
  switch (compilationMode) {
    case "standard":
    case "debug":
      return code;

    case "optimize":
      return minify(code, {
        minimal: !["Html", "Sandbox", "Element", "Document", "Worker"].includes(
          targetName
        ),
      });

    default:
      throw new Error(
        `Unknown compilation mode: ${JSON.stringify(compilationMode)}`
      );
  }
}

const pureFuncs = [
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8",
  "A9",
];

/**
 * Source: https://discourse.elm-lang.org/t/what-i-ve-learned-about-minifying-elm-code/7632
 *
 * @param {string} code
 * @param {{minimal: boolean}} options
 * @returns {Promise<string>}
 */
async function minify(code, { minimal }) {
  return minimal ? runUglifyJSAndEsbuild(code) : runEsbuild(code);
}

/**
 * @param {string} code
 * @returns {Promise<string>}
 */
async function runUglifyJSAndEsbuild(code) {
  const result = UglifyJS.minify(code, {
    compress: {
      pure_funcs: pureFuncs,
      pure_getters: true,
      strings: true,
      sequences: true,
      merge_vars: true,
      switches: true,
      dead_code: true,
      if_return: true,
      inline: true,
      join_vars: true,
      reduce_vars: true,
      conditionals: true,
      collapse_vars: true,
      unused: true,
    },
    mangle: false,
  });

  if (result.error !== undefined) {
    throw result.error;
  }

  return (
    await esbuild.transform(result.code, {
      minify: true,
      target: "es5",
    })
  ).code;
}

/**
 * @param {string} code
 * @returns {Promise<string>}
 */
async function runEsbuild(code) {
  return (
    await esbuild.transform(removeIIFE(code), {
      minify: true,
      pure: pureFuncs,
      target: "es5",
      format: "iife",
    })
  ).code;
}

/**
 * @param {string} code
 * @returns {string}
 */
function removeIIFE(code) {
  return `var scope = window;${code.slice(
    code.indexOf("{") + 1,
    code.lastIndexOf("}")
  )}`;
}
