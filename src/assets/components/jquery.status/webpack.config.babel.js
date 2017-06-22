const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: resolve('src'),
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'jquery.status.js',
    publicPath: '/build/',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },

    ],
    // rules: [
    //   { enforce: 'pre',test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" },
    // ]
  },
  plugins: [
    new ExtractTextPlugin(`styles/jquery.status.css`),
    new HtmlWebpackPlugin({
      title: 'build template',
      inject: false,
      template: './examples/index.html'
    }),
  ],
};
