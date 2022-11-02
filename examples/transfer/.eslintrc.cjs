module.exports = {
  env: {
    node: true,
    browser: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/switch-exhaustiveness-check": "error",
  },
};
