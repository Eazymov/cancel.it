/* @flow */
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

const devDependencies = Object.keys(pkg.devDependencies || {});

/* prettier-ignore */
const banner =
  '/*!\n' +
  ' * ' + pkg.name + ' v' + pkg.version + '\n' +
  ' * (c) 2019 - Present, ' + pkg.author.name + '\n' +
  ' * Released under the ' + pkg.license + ' License.\n' +
  ' */';

const config = {
  input: 'src/index.js',
  plugins: [
    babel(),
    uglify({
      output: {
        comments: (_, { value }) => value.includes('License'),
      },
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    }),
  ],
  output: {
    format: 'iife',
    name: 'Cancelable',
    exports: 'named',
    banner,
  },
  external: [...devDependencies],
};

export default config;
