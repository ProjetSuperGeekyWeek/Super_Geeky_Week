import Vue from 'vue'
import Vuex from 'vuex'

import crudStore from './storeCrud';
import authentifierStore from './storeAuthentifier';

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
  modules: {
    crudStore,
    authentifierStore,
  }
})
