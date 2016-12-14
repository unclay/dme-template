const toJs = (str) => {
  let unicodes = str.match(/&#(\d+);/g) || []
  for (let item of unicodes) {
    let codeNum = item.replace(/[&#;]/g, '')
    console.log(codeNum, String.fromCharCode(codeNum))
    str = str.replace(new RegExp(item, 'gi'), String.fromCharCode(codeNum))
  }
  return str
}

exports.toJs = toJs