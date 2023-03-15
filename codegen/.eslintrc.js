// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { es2021: true },
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: ["@typescript-eslint"],
      parserOptions: {
        project: ["./tsconfig.json", "./scripts/build.tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/switch-exhaustiveness-check": "error",
      },
    },
  ],
  extends: ["eslint:recommended"],
  rules: {
    quotes: [2, "double"],
    semi: [2, "always"],
  },
  ignorePatterns: ["src/Command/**/*.elm.d.ts", "dist/", "bin/", "elm-stuff/"],
};
