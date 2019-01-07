let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_PATH, 'dist'),
    publicPath: '/'
  },
  context: path.resolve(ROOT_PATH, 'src'),
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(ROOT_PATH, 'dist'),
    publicPath: '/',
    port: 9999
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      filename: path.resolve(ROOT_PATH,'index.html')
    })
  ]
}