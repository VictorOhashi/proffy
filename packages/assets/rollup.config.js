import path from 'path';

import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

import pkg from './package.json';
import nativePkg from './native/package.json';

const plugins = ({ include } = {}) => [
  external(),
  resolve(),
  json(),
  typescript({
    abortOnError: false,
    tsconfigOverride: { include },
  }),
  commonjs(),
];

export default [
  {
    input: 'src/web/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: plugins({ include: ['./src/web'] }),
  },
  {
    input: 'src/native/index.tsx',
    output: [
      {
        file: path.resolve('./native', nativePkg.main),
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: path.resolve('./native', nativePkg.module),
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: plugins({ include: ['./src/native'] }),
  },
];
