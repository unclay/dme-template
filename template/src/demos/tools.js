const toJs = (str) => {
  let unicodes = str.match(/&#(\d+);/g) || []
  for (let item of unicodes) {
    let codeNum = item.replace(/[&#;]/g, '')
    console.log(codeNum, String.fromCharCode(codeNum))
    str = str.replace(new RegExp(item, 'gi'), String.fromCharCode(codeNum))
  }
  return str
}

const toHtml = (str) => {
  let arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
}

exports.toJs = toJs
exports.toHtml = toHtml