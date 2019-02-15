/* @flow strict */

const config = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['flowtype'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
  },
};

module.exports = config;
