const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.svg$/,
        use: [ 'url-loader?mimetype=image/svg+xml' ]
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html')
    })
  ]
}
