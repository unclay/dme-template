var fs = require('fs-extra')
var path = require('path')
var examplesPath = path.join(__dirname, '../examples')
var yaml = require('js-yaml')

exports.index = function () {
  var mds = []
  if (fs.existsSync(examplesPath)) {
    var dirs = fs.readdirSync(examplesPath)
    for (var i = 0; i < dirs.length; i++) {
      if (dirs[i].match(/\.md$/gi)) {
        mds.push(dirs[i])
      }
    }
    fs.writeFileSync(path.join(examplesPath, 'config.js'), createJs(mds), 'utf-8')
  } else {
    console.error('Examples directory not found')
  }
}

function createJs(data, level) {
  data = data || []
  var str = JSON.stringify(data)
  return `module.exports = ${str}`
}
