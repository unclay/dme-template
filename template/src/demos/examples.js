/**
 * 预先读取examples的预定数据和内容数据
 */

import config from '../../examples/config'
import yaml from 'js-yaml'

let examples = []
for (let item of config) {
  let example = {
    filename: item.replace('.md', ''),
    config: {},
    content: ''
  }
  let md = require(`../../examples/${example.filename}.md`)
  // 提取预定格式
  let config = md.match(/<code.*"lang-preyaml".*>([^<]*)<\/code>/i)
  if (config && config[1]) {
    example.config = yaml.safeLoad(config[1])
  }
  example.content = md.replace(/<code.*"lang-preyaml".*>([^<]*)<\/code>/i, '')
                      .replace('<pre></pre>', '')
  examples.push(example)
  // .md文档文件的预定格式必须是yaml格式
}

// order 序号排序
examples.sort(function (a, b) {
  a.config.order = a.config.order || 0
  b.config.order = b.config.order || 0
  return a.config.order > b.config.order
})

module.exports = examples