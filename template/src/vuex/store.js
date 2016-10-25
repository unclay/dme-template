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

const actions = {
  addDemos ({ commit }, demo) {
    commit('ADD_DEMOS', demo)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})