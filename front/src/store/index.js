import Vue from 'vue'
import Vuex from 'vuex'
import en from '@/assets/language/en';
import fr from '@/assets/language/fr';
import {getAllAcheter} from "@/../../back/axiosFunctions/crudAxios";

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
    nom_prestataire: '',
    prenom_prestataire: '',
    nom_stand: '',

    tabAllAcheters: [],
  },
  getters: {
    getAllAcheters: state => state.tabAllAcheters,
  },
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
    SET_ALL_ACHETER(state, payload){
      state.tabAllAcheters = payload;
    }
  },
  actions: {
    async getAllAcheterStore({commit}){
      try{
        const acheter = await getAllAcheter();
        await commit('SET_ALL_ACHETER', acheter);
      } catch (err){
        console.log(err);
      }
    }
  },
  modules: {
  }
})
