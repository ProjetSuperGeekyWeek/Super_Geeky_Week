import Vue from 'vue'
import Vuex from 'vuex'

import crudStore from './storeCrud';
import authentifierStore from './storeAuthentifier';
import commandeStore from './storeCommande';
import panierStore from './storePanier'

import en from '@/assets/language/en';
import fr from '@/assets/language/fr';

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    lang: 'fr',
    en: en.data(),
    fr: fr.data(),
    nom: 'Invité',
    idPanier: null,

    nom_prestataire: '',
    prenom_prestataire: '',
    nom_stand: '',
  }),
  mutations: {
    setAuthentifier(state, payload) {
      state.authentifier = payload;
    },
    setAdmin(state, payload) {
      state.admin = payload;
    },
    setLang(state, payload) {
      state.lang = payload;
    },
    setPrestataire(state, payload) {
      state.prestataire = payload;
    },
    setNomPrestataire(state, payload) {
      state.nom_prestataire = payload;
    },
    setPrenomPrestataire(state, payload) {
      state.prenom_prestataire = payload;
    },
    setNomStand(state, payload) {
      state.nom_stand = payload;
    },
  },
  modules: {
    crudStore,
    authentifierStore,
    commandeStore,
    panierStore,
  }
})
