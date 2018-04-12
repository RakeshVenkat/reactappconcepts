const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// var webpack = require('webpack');
//import webapck from 'webpack'; --> not working !!

// Deployment change - values should be development or staging or production
const environment = 'development';
process.env.NODE_ENV = environment;
const isNonProEnv = process.env.NODE_ENV !== 'production';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  context: __dirname,
  devtool: isNonProEnv ? 'inline-sourcemap' : null, // https://webpack.js.org/guides/development/#using-source-maps
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?cacheDirectory=true',
        query: {
          presets: ['react','env','stage-0'],
          plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    filename: 'client.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: isNonProEnv ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};