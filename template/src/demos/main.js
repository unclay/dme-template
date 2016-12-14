// base list
import Vue from 'vue'
import Router from 'vue-router'

// store
import store from '../vuex/store'

// .md list
import readme from '../../README.md'
import history from '../../HISTORY.md'

import pkg from '../../package.json'

// tool: tools
import tools from './tools'

// load index.js
import dme from '../'

import App from './app'
// load styles
require('github-css')
// 提供全局事件给examples使用
window.getScript = () => {
  return dme
}

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: {
      template: `<div class="markdown-body">${readme}</div>`
    }
  },
  {
    path: '/history',
    component: {
      template: `<div class="markdown-body">${history}</div>`
    }
  },
  {
    path: '/test',
    component: {
      template: `<div class="markdown-body">请用命令行进行单元测试，npm run test</div>`
    }
  }
]

import examples from './examples'
for (let item of examples) {
  if (item.filename) {

    let path = '/demo'
    if (item.filename !== 'index') {
      path += `/${item.filename}`
    }

    // 定义demo路由
    routes.push({
      path,
      component: {
        template: `<div class="markdown-body">${item.content}</div>`,
        mounted: function () {
          let content = item
          // 加载demo脚本
          for (let item of content.javascript) {
            eval(tools.toJs(item))
          }
        }
      }
    })

    store.commit('ADD_DEMOS', {
      path,
      name: item.config.name || path
    })
  }
}

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('UPDATE_PATH', to.path)
  next()
})

const app = new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})

