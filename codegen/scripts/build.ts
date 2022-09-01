import * as esbuild from "esbuild";
import * as ElmPluginImport from "esbuild-plugin-elm";

type ElmPluginSignature = (config: { optimize: boolean }) => esbuild.Plugin;

const ElmPlugin = ElmPluginImport as unknown as ElmPluginSignature;

esbuild
  .build({
    platform: "node",
    entryPoints: ["src/index.ts"],
    bundle: true,
    outdir: "dist",
    watch: process.argv.includes("--watch"),
    plugins: [ElmPlugin({ optimize: process.env.NODE_ENV === "production" })],
  })
  .catch(() => process.exit(1));
