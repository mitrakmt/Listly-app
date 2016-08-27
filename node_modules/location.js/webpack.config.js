var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    publicPath: __dirname + '/dist/',
    filename: 'location.js'
  },
  plugins: [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
