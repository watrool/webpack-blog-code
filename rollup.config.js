import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import alias from 'rollup-plugin-alias';

export default {
  entry: 'src/main.ts',
  dest: 'dist/app.js',
  treeshake: true,
  plugins: [
    typescript(),
    alias({ rxjs: __dirname + '/node_modules/rxjs-es' }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js', '.ts']
    })
  ]
};