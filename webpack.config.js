const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = 'production';

const basePlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin('globals'),
  new HtmlWebpackPlugin({
    template: './src/index.html'
  })
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  })
];

const plugins = basePlugins
  .concat((process.env.NODE_ENV === PRODUCTION) ? prodPlugins: []);

module.exports = {
  entry: {
    globals: [
      'zone.js',
      'reflect-metadata'
    ],
    app: './src/main.ts',
  },
  output: {
    path: './dist',
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      { test: /.ts$/, loader: 'awesome-typescript-loader' },
      { test: /.json$/, loader: 'json-loader' },
      { test: /.html$/, loader: 'raw' },
      { test: /.css$/, loaders: ['to-string', 'css'] }
    ]
  },
  plugins: plugins
};