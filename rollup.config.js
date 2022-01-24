import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';
import terser from 'rollup-plugin-terser';

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
    terser.terser(),
    clear({
      target: ['./dist'],
      watch: false
    }),
    copy({
      targets: [
        {
          src: 'motl.d.ts',
          dest: 'dist/types'
        }
      ]
    })
  ]

}