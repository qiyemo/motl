
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import clear from 'rollup-plugin-clear';
import babel from '@rollup/plugin-babel';

export default {
  input: 'index.js',
  cache: false,
  output: [{
    file: 'dist/motl.es.js',
    format: 'es',
    name: 'motl'
  }],
  exclude: ['node_modules'],
  plugins: [
    clear({
      target: ['./dist'],
      watch: false
    }),
    copy({
      targets: [{
        src: 'motl.d.ts',
        dest: 'dist/types'
      }]
    }),
    terser(),
    babel({ babelHelpers: 'bundled' }),
  ]
}