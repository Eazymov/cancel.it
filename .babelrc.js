/* @flow strict */

const { BABEL_ENV } = process.env;
const presets = ['@babel/preset-flow'];
const plugins = ['@babel/plugin-proposal-class-properties'];

switch (BABEL_ENV) {
  case 'es':
    presets.push([
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        targets: {
          esmodules: true,
        },
      },
    ]);

    break;

  default:
    presets.push([
      '@babel/preset-env',
      {
        loose: true,
      },
    ]);

    break;
}

const config = {
  presets,
  plugins,
};

module.exports = config;
