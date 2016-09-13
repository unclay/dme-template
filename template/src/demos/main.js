// base list
import Vue from 'vue'
import Router from 'vue-router'
import app from './app'

// store
import store from '../vuex/store'

// page list
import demoConf from '../../examples/config'

// .md list
import readme from '../../README.md'
import history from '../../HISTORY.md'

// load styles
require('github-css')

Vue.use(Router)

const router = new Router()
const map = {
  '/': {
    component: {
      template: `<div class="markdown-body">${readme}</div>`
    }
  },
  '/history': {
    component: {
      template: `<div class="markdown-body">${history}</div>`
    }
  }
}
// config demoUrl from examples/config.js
for (let item of demoConf) {
  if (item.filename) {
    let path = '/demo'
    if (item.filename !== 'index') {
      path += `/${item.filename}`
    }
    map[path] = {
      component: require(`../../examples/${item.filename}`)
    }
    // config demos aside nav
    store.dispatch('ADD_DEMOS', {
      path,
      name: item.name || path
    })
  }
}

router.map(map)

router.beforeEach(({ to, from, next }) => {
  store.dispatch('UPDATE_PATH', to.path)
  next()
})

router.start(app, '#app')

