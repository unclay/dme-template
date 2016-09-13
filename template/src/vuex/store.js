import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  path: '',
  demos: []
}

const mutations = {
  UPDATE_PATH (state, path) {
    state.path = path
  },
  ADD_DEMOS (state, demo) {
    state.demos.push(demo)
  }
}

export default new Vuex.Store({
  state,
  mutations
})