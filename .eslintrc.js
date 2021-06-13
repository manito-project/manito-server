module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-case-declarations": "off",
    "consistent-return": "off",
    "arrow-body-style": "off",
    camelcase: "off",
    quotes: "off",
    "no-unused-vars": "off",
    "comma-dangle": "off",
    "no-bitwise": "off",
    "no-use-before-define": "off",
    "no-extra-boolean-cast": "off",
    curly: "off",
  },
};
