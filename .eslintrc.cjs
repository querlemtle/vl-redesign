module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@stylistic"],
  ignorePatterns: ["*.config.js", "assets/*", "public/*", "build/*"],
  rules: {
    "@stylistic/indent": ["error", 2],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/semi": ["error", "always"],
    "no-console": "error",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "@stylistic/object-curly-spacing": ["error", "always"],
    "@stylistic/comma-dangle": ["error", "only-multiline"],
    "no-unused-vars": "warning",
  },
};
