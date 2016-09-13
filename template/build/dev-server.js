/**
* npm run dev -- --host 0.0.0.0 --port 4000
*/

var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var http = require('http')
var app = express()
var compiler = webpack(config)

var argv = require('yargs').argv

var host = argv.host || '0.0.0.0'
var port = argv.port || 4000

// handle fallback for HTML5 history API
// app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr'
}))

app.use('/dist', express.static('./dist'))

app.listen(port, host, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening at http://${host}:${port}/`)
  // manully trigger bundle building to save time
  http.get(`http://${host}:${port}/index.html`)
})

