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
    nom_stand : 'nom stand',
    nom_prestataire : 'nom prestataire',
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
    setNomStand(state, payload) {
      state.nom_stand = payload
    },
    setNomPrestataire(state, payload) {
      state.nom_prestataire = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
