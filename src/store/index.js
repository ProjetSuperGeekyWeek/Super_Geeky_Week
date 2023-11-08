import Vue from 'vue'
import Vuex from 'vuex'
import en from '../assets/language/en';
import fr from '../assets/language/fr';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentifier: false,
    admin: false,
    lang: 'fr',
    en: en.data(),
    fr: fr.data(),
    nom: 'Invité',
  },
  getters: {
  },
  mutations: {
    setAuthentifier(state, payload) {
      state.authentifier = payload
    },
    setAdmin(state, payload) {
      state.admin = payload
    },
    setLang(state, payload) {
      state.lang = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
