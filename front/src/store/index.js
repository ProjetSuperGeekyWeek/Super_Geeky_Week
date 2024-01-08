import Vue from 'vue'
import Vuex from 'vuex'

import crudStore from './storeCrud';

import en from '@/assets/language/en';
import fr from '@/assets/language/fr';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentifier: false,
    admin: false,
    lang: 'fr',
    en: en.data(),
    fr: fr.data(),
    nom: 'Invité',
    prestataire: {
      prenom: 'Jean',
      nom: 'Dupont',
      email: 'jean.dupont@example.com',
      description: 'Gérant des tournois de super smash bros',
      image: '../assets/main_logo.png',
      service: 'Tournois de super smash bros',
    },
    idPanier: null,

    nom_prestataire: '',
    prenom_prestataire: '',
    nom_stand: '',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    crudStore,
  }
})
