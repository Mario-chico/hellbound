import globals from "globals";
import tseslint, { parser } from "typescript-eslint";


module.exports = {
  globals:{
    NodeJS: true,
    NodeListOf: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "jsxx-quotes": ["warn", "prefer-double"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "never"],
  },
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts}"],
      parser: "@typescript-eslint/parser",
    },
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  ]
};