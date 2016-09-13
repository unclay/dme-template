var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.base.conf')
var pkg = require('../package')
var HtmlWebpackPlugin = require('html-webpack-plugin')

config.entry = {
  app: './src/demos/main.js'
}
config.output = {
  path: path.resolve(__dirname, '../dist/', pkg.version),
  filename: '[name].js'
}
config.plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/demos/index.html'),
    chunks: []
  })
]
module.exports = config