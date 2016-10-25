var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var src = path.join(projectRoot, 'src')

module.exports = {
  devtool: 'eval',
  entry: {
    'app': './src/demos/main.js',
    'index': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'github-css': 'github-markdown-css/github-markdown.css',
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.md\?yaml$/,
        loader: 'markdown'
      },
      {
        test: /\.md$/,
        loader: 'html!markdown'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
}
