import * as esbuild from "esbuild";
import * as ElmPluginImport from "esbuild-plugin-elm";

type ElmPluginSignature = (config: { optimize: boolean }) => esbuild.Plugin;

const ElmPlugin = ElmPluginImport as unknown as ElmPluginSignature;

const options: esbuild.BuildOptions = {
  platform: "node",
  entryPoints: ["src/index.ts"],
  bundle: true,
  outdir: "dist",
  plugins: [ElmPlugin({ optimize: process.env.NODE_ENV === "production" })],
};

if (process.argv.includes("--watch")) {
  esbuild.context(options).then((ctx) =>
    ctx.watch().catch(() => {
      ctx.dispose().then(() => process.exit(1));
    })
  );
} else {
  esbuild.build(options).catch(() => process.exit(1));
}
