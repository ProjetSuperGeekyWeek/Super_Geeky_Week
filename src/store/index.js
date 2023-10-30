import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentifier: false,
    admin: false
  },
  getters: {
  },
  mutations: {
    setAuthentifier(state, payload) {
      state.authentifier = payload
    },
    setAdmin(state, payload) {
      state.admin = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
