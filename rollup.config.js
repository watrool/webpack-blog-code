import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/main.ts',
  dest: 'dist/app.js',
  format: 'iife',
  treeshake: true,
  plugins: [
    typescript(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    uglify()
  ]
};