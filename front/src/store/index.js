import Vue from 'vue'
import Vuex from 'vuex'
import en from '@/assets/language/en';
import fr from '@/assets/language/fr';
import {getAllAcheter,getAllAcheterColumn,getAllCalendrier,getAllCalendrierColumn,getAllRoleColumn,getAllRole,getAllCreneau,
  getAllCreneauColumn,getAllEmplacement,getAllEmplacementColumn,getAllEmplacementRessource,getAllEmplacementRessourceColumn,
  getAllEvenement,getAllEvenementColumn,getAllItem,getAllItemColumn,getAllLignePanier,getAllLignePanierColumn,getAllPanier,
  getAllPanierColumn,getAllPersonne,getAllPersonneColumn,getAllPersonneTag,getAllPersonneTagColumn,getAllQrCode,getAllQrCodeColumn,
  getAllRessource,getAllRessourceColumn,getAllStand,getAllStandColumn,getAllTag,getAllTagColumn} from "@/../../back/axiosFunctions/crudAxios";
import {cleanSession,createSession,getIdSession,getAuthentifierSession,updateSessionTime} from "@/../../back/axiosFunctions/sessionAxios";
import {adminVerif} from "@/../../back/axiosFunctions/authentificationAxios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentifier: false,
    id_session: null, // id session dans bdd
    admin: false,
    lang: 'fr',
    en: en.data(),
    fr: fr.data(),
    nom: 'Invité',
    id_prestataire: null,
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

    tabAllAcheters: [],
    tabAllAchetersColumn: [],

    tabAllCalendrier: [],
    tabAllCalendrierColumn: [],

    tabAllRole: [],
    tabAllRoleColumn: [],

    tabAllCreneau: [],
    tabAllCreneauColumn: [],

    tabAllEmplacement: [],
    tabAllEmplacementColumn: [],

    tabAllEmplacementRessource: [],
    tabAllEmplacementRessourceColumn: [],

    tabAllEvenement: [],
    tabAllEvenementColumn: [],

    tabAllItem: [],
    tabAllItemColumn: [],

    tabAllLignePanier: [],
    tabAllLignePanierColumn: [],

    tabAllPanier: [],
    tabAllPanierColumn: [],

    tabAllPersonne: [],
    tabAllPersonneColumn: [],

    tabAllPersonneTag: [],
    tabAllPersonneTagColumn: [],

    tabAllQrCode: [],
    tabAllQrCodeColumn: [],

    tabAllRessource: [],
    tabAllRessourceColumn: [],

    tabAllStand: [],
    tabAllStandColumn: [],

    tabAllTag: [],
    tabAllTagColumn: [],

    /*tabAll: [],
    tabAllColumn: [],*/
  },
  getters: {
    getAllAcheters: state => state.tabAllAcheters,
    getAllAchetersColumn: state => state.tabAllAchetersColumn,
    getAllCalendrier: state => state.tabAllCalendrier,
    getAllCalendrierColumn: state => state.tabAllCalendrierColumn,
    getAllRole: state => state.tabAllRole,
    getAllRoleColumn: state => state.tabAllRoleColumn,
    getAllCreneau: state => state.tabAllCreneau,
    getAllCreneauColumn: state => state.tabAllCreneauColumn,
    getAllEmplacement: state => state.tabAllEmplacement,
    getAllEmplacementColumn: state => state.tabAllEmplacementColumn,
    getAllEmplacementRessource: state => state.tabAllEmplacementRessource,
    getAllEmplacementRessourceColumn: state => state.tabAllEmplacementRessourceColumn,
    getAllEvenement: state => state.tabAllEvenement,
    getAllEvenementColumn: state => state.tabAllEvenementColumn,
    getAllItem: state => state.tabAllItem,
    getAllItemColumn: state => state.tabAllItemColumn,
    getAllLignePanier: state => state.tabAllLignePanier,
    getAllLignePanierColumn: state => state.tabAllLignePanierColumn,
    getAllPanier: state => state.tabAllPanier,
    getAllPanierColumn: state => state.tabAllPanierColumn,
    getAllPersonne: state => state.tabAllPersonne,
    getAllPersonneColumn: state => state.tabAllPersonneColumn,
    getAllPersonneTag: state => state.tabAllPersonneTag,
    getAllPersonneTagColumn: state => state.tabAllPersonneTagColumn,
    getAllQrCode: state => state.tabAllQrCode,
    getAllQrCodeColumn: state => state.tabAllQrCodeColumn,
    getAllRessource: state => state.tabAllRessource,
    getAllRessourceColumn: state => state.tabAllRessourceColumn,
    getAllStand: state => state.tabAllStand,
    getAllStandColumn: state => state.tabAllStandColumn,
    getAllTag: state => state.tabAllTag,
    getAllTagColumn: state => state.tabAllTagColumn,

    /*getAll: state => state.tabAll,
    getAllColumn: state => state.tabAllColumn,*/

    //session
    getIdSession: state => state.id_session,
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
    },
    SET_ALL_ACHETER_COLUMN(state, payload){
      state.tabAllAchetersColumn = payload;
    },
    SET_ALL_CALENDRIER(state, payload){
      state.tabAllCalendrier = payload;
    },
    SET_ALL_CALENDRIER_COLUMN(state, payload){
      state.tabAllCalendrierColumn = payload;
    },
    SET_ALL_ROLE(state, payload){
      state.tabAllRole = payload;
    },
    SET_ALL_ROLE_COLUMN(state, payload){
      state.tabAllRoleColumn = payload;
    },
    SET_ALL_CRENEAU(state, payload){
      state.tabAllCreneau = payload;
    },
    SET_ALL_CRENEAU_COLUMN(state, payload){
      state.tabAllCreneauColumn = payload;
    },
    SET_ALL_EMPLACEMENT(state, payload){
      state.tabAllEmplacement = payload;
    },
    SET_ALL_EMPLACEMENT_COLUMN(state, payload){
      state.tabAllEmplacementColumn = payload;
    },
    SET_ALL_EMPLACEMENT_RESSOURCE(state, payload){
      state.tabAllEmplacementRessource = payload;
    },
    SET_ALL_EMPLACEMENT_RESSOURCE_COLUMN(state, payload){
      state.tabAllEmplacementRessourceColumn = payload;
    },
    SET_ALL_EVENEMENT(state, payload){
      state.tabAllEvenement = payload;
    },
    SET_ALL_EVENEMENT_COLUMN(state, payload){
      state.tabAllEvenementColumn = payload;
    },
    SET_ALL_ITEM(state, payload){
      state.tabAllItem = payload;
    },
    SET_ALL_ITEM_COLUMN(state, payload){
      state.tabAllItemColumn = payload;
    },
    SET_ALL_LIGNE_PANIER(state, payload){
      state.tabAllLignePanier = payload;
    },
    SET_ALL_LIGNE_PANIER_COLUMN(state, payload){
      state.tabAllLignePanierColumn = payload;
    },
    SET_ALL_PANIER(state, payload){
      state.tabAllPanier = payload;
    },
    SET_ALL_PANIER_COLUMN(state, payload){
      state.tabAllPanierColumn = payload;
    },
    SET_ALL_PERSONNE(state, payload){
      state.tabAllPersonne = payload;
    },
    SET_ALL_PERSONNE_COLUMN(state, payload){
      state.tabAllPersonneColumn = payload;
    },
    SET_ALL_PERSONNE_TAG(state, payload){
      state.tabAllPersonneTag = payload;
    },
    SET_ALL_PERSONNE_TAG_COLUMN(state, payload){
      state.tabAllPersonneTagColumn = payload;
    },
    SET_ALL_QR_CODE(state, payload){
      state.tabAllQrCode = payload;
    },
    SET_ALL_QR_CODE_COLUMN(state, payload){
      state.tabAllQrCodeColumn = payload;
    },
    SET_ALL_RESSOURCE(state, payload){
      state.tabAllRessource = payload;
    },
    SET_ALL_RESSOURCE_COLUMN(state, payload){
      state.tabAllRessourceColumn = payload;
    },
    SET_ALL_STAND(state, payload){
      state.tabAllStand = payload;
    },
    SET_ALL_STAND_COLUMN(state, payload){
      state.tabAllStandColumn = payload;
    },
    SET_ALL_TAG(state, payload){
      state.tabAllTag = payload;
    },
    SET_ALL_TAG_COLUMN(state, payload){
      state.tabAllTagColumn = payload;
    },

    /*SET_ALL(state, payload){
      state.tabAll = payload;
    },
    SET_ALL_COLUMN(state, payload){
      state.tabAllColumn = payload;
    },*/


    //session
    setIdSession(state, payload) {
      state.id_session = payload;
    },
    setIdPanier(state, payload) {
      state.idPanier = payload;
    },
  },
  actions: {
    async getAllAcheterStore({commit}){
      try{
        const acheter = await getAllAcheter();
        await commit('SET_ALL_ACHETER', acheter);
      } catch (err){
        console.log(err);
      }
    },
    async getAllAcheterColumnStore({commit}){
      try{
        const columnAcheter = await getAllAcheterColumn();
        await commit('SET_ALL_ACHETER_COLUMN', columnAcheter);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllCalendrierStore({commit}){
      try{
        const calendrier = await getAllCalendrier();
        await commit('SET_ALL_CALENDRIER', calendrier);
      } catch (err){
        console.log(err);
      }
    },
    async getAllCalendrierColumnStore({commit}){
      try{
        const columnCalendrier = await getAllCalendrierColumn();
        await commit('SET_ALL_CALENDRIER_COLUMN', columnCalendrier);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllRoleStore({commit}){
        try{
          const role = await getAllRole();
          await commit('SET_ALL_ROLE', role);
        } catch (err){
          console.log(err);
        }
    },
    async getAllRoleColumnStore({commit}){
        try{
          const columnrole = await getAllRoleColumn();
          await commit('SET_ALL_ROLE_COLUMN', columnrole);
        } catch (e) {
          console.log(e);
        }
    },
      async getAllCreneauStore({commit}){
        try{
          const creneau = await getAllCreneau();
          await commit('SET_ALL_CRENEAU', creneau);
        } catch (err){
          console.log(err);
        }
      },
      async getAllCreneauColumnStore({commit}){
        try{
          const columnCreneau = await getAllCreneauColumn();
          await commit('SET_ALL_CRENEAU_COLUMN', columnCreneau);
        } catch (e) {
          console.log(e);
        }
      },
    async getAllEmplacementStore({commit}){
      try{
        const emplacement = await getAllEmplacement();
        await commit('SET_ALL_EMPLACEMENT', emplacement);
      } catch (err){
        console.log(err);
      }
    },
    async getAllEmplacementColumnStore({commit}){
      try{
        const columnEmplacement = await getAllEmplacementColumn();
        await commit('SET_ALL_EMPLACEMENT_COLUMN', columnEmplacement);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllEmplacementRessourceStore({commit}){
      try{
        const emplacementRessource = await getAllEmplacementRessource();
        await commit('SET_ALL_EMPLACEMENT_RESSOURCE', emplacementRessource);
      } catch (err){
        console.log(err);
      }
    },
    async getAllEmplacementRessourceColumnStore({commit}){
      try{
        const columnEmplacementRessource = await getAllEmplacementRessourceColumn();
        await commit('SET_ALL_EMPLACEMENT_RESSOURCE_COLUMN', columnEmplacementRessource);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllEvenementStore({commit}){
      try{
        const evenement = await getAllEvenement();
        await commit('SET_ALL_EVENEMENT', evenement);
      } catch (err){
        console.log(err);
      }
    },
    async getAllEvenementColumnStore({commit}){
      try{
        const columnEvenement = await getAllEvenementColumn();
        await commit('SET_ALL_EVENEMENT_COLUMN', columnEvenement);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllItemStore({commit}){
      try{
        const item = await getAllItem();
        await commit('SET_ALL_ITEM', item);
      } catch (err){
        console.log(err);
      }
    },
    async getAllItemColumnStore({commit}){
      try{
        const columnItem = await getAllItemColumn();
        await commit('SET_ALL_ITEM_COLUMN', columnItem);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllLignePanierStore({commit}){
      try{
        const lignePanier = await getAllLignePanier();
        await commit('SET_ALL_LIGNE_PANIER', lignePanier);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllLignePanierColumnStore({commit}){
      try{
        const columnLignePanier = await getAllLignePanierColumn();
        await commit('SET_ALL_LIGNE_PANIER_COLUMN', columnLignePanier);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllPanierStore({commit}){
      try{
        const panier = await getAllPanier();
        await commit('SET_ALL_PANIER', panier);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllPanierColumnStore({commit}){
      try{
        const columnPanier = await getAllPanierColumn();
        await commit('SET_ALL_PANIER_COLUMN', columnPanier);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllPersonneStore({commit}){
      try{
        const personne = await getAllPersonne();
        await commit('SET_ALL_PERSONNE', personne);
      } catch (err){
        console.log(err);
      }
    },
    async getAllPersonneColumnStore({commit}){
      try{
        const columnPersonne = await getAllPersonneColumn();
        await commit('SET_ALL_PERSONNE_COLUMN', columnPersonne);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllPersonneTagStore({commit}){
      try{
        const personneTag = await getAllPersonneTag();
        await commit('SET_ALL_PERSONNE_TAG', personneTag);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllPersonneTagColumnStore({commit}){
      try{
        const columnPersonneTag = await getAllPersonneTagColumn();
        await commit('SET_ALL_PERSONNE_TAG_COLUMN', columnPersonneTag);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllQrCodeStore({commit}){
      try{
        const qrCode = await getAllQrCode();
        await commit('SET_ALL_QR_CODE', qrCode);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllQrCodeColumnStore({commit}){
      try{
        const columnQrCode = await getAllQrCodeColumn();
        await commit('SET_ALL_QR_CODE_COLUMN', columnQrCode);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllRessourceStore({commit}){
      try{
        const ressource = await getAllRessource();
        await commit('SET_ALL_RESSOURCE', ressource);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllRessourceColumnStore({commit}){
      try{
        const columnRessource = await getAllRessourceColumn();
        await commit('SET_ALL_RESSOURCE_COLUMN', columnRessource);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllStandStore({commit}){
      try{
        const stand = await getAllStand();
        await commit('SET_ALL_STAND', stand);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllStandColumnStore({commit}){
      try{
        const columnStand = await getAllStandColumn();
        await commit('SET_ALL_STAND_COLUMN', columnStand);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllTagStore({commit}){
      try{
        const tag = await getAllTag();
        await commit('SET_ALL_TAG', tag);
      } catch (e) {
        console.log(e);
      }
    },
    async getAllTagColumnStore({commit}){
      try{
        const columnTag = await getAllTagColumn();
        await commit('SET_ALL_TAG_COLUMN', columnTag);
      } catch (e) {
        console.log(e);
      }
    },
    /*async getAllStore({commit}, params){
      var responce;
        try{
          switch (params) {
            case 'creneau':
              responce = await getAllCreneau();
              await commit('SET_ALL_CRENEAU', responce); break;
            case 'evenement':
              responce = await getAllEvenement(); break;
            case 'personne_tag':
              responce = await getAllPersonneTag(); break;
            case 'tag':
              responce = await getAllTag(); break;
            case 'acheter':
              responce = await getAllAcheter(); break;
            case 'qr_code':
              responce = await getAllQrCode(); break;
            case 'ligne_panier':
              responce = await getAllLignePanier(); break;
            case 'item':
              responce = await getAllItem(); break;
            case 'panier':
              responce = await getAllPanier(); break;
            case 'calendrier':
              responce = await getAllCalendrier(); break;
            case 'stand':
              responce = await getAllStand(); break;
            case 'emplacement_ressource':
              responce = await getAllEmplacementRessource(); break;
            case 'ressource':
              responce = await getAllRessource(); break;
            case 'emplacement':
              responce = await getAllEmplacement(); break;
            case 'personne':
              responce = await getAllPersonne(); break;
            case 'role':
              responce = await getAllRole(); break;
          }
      } catch (e) {
        console.log(e);
      }
    },
    async getAllColumnStore({commit}, params){
      var responce;
      try{
        switch (params) {
          case 'creneau':
            responce = await getAllCreneauColumn(); break;
          case 'evenement':
            responce = await getAllEvenementColumn(); break;
          case 'personne_tag':
            responce = await getAllPersonneTagColumn(); break;
          case 'tag':
            responce = await getAllTagColumn(); break;
          case 'acheter':
            responce = await getAllAcheterColumn(); break;
          case 'qr_code':
            responce = await getAllQrCodeColumn(); break;
          case 'ligne_panier':
            responce = await getAllLignePanierColumn(); break;
          case 'item':
            responce = await getAllItemColumn(); break;
          case 'panier':
            responce = await getAllPanierColumn(); break;
          case 'calendrier':
            responce = await getAllCalendrierColumn(); break;
          case 'stand':
            responce = await getAllStandColumn(); break;
          case 'emplacement_ressource':
            responce = await getAllEmplacementRessourceColumn(); break;
          case 'ressource':
            responce = await getAllRessourceColumn(); break;
          case 'emplacement':
            responce = await getAllEmplacementColumn(); break;
          case 'personne':
            responce = await getAllPersonneColumn(); break;
          case 'role':
            responce = await getAllRoleColumn(); break;
        }
        await commit('SET_ALL_COLUMN', responce);
      } catch (e) {
        console.log(e);
      }
    }*/
    
    //session
    async cleanSession(){
      try{
        await cleanSession(); // doit faire ménage parmi sessions trop vieilles (plus de 24h)
      } catch (e) {
        console.log(e);
      }
    },
    async setIdSessionStore({commit}){
      try{
        // alert("getId")
        const oldSession = await getIdSession(); // vérifie session dans cookies (token uuid), si existe et dans cookies et bdd le retourne, sinon retourne false
        if(oldSession === false){
          try{
            await createSession(); // crée session dans bdd et cookies (token uuid)
            const newSession = await getIdSession();
            await commit('setIdSession', newSession);
          } catch (e) {
            console.log(e);
          }
        }
        else{
          await updateSessionTime(oldSession); // met à jour la date de session dans bdd (24h)
          await commit('setIdSession', oldSession);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async setAuthentifierStore({commit},id){
      try{
        const authentifier = await getAuthentifierSession(id); // si session non presta/admin return false, sinon return true
        await commit('setAuthentifier', authentifier);
      } catch (e) {
        console.log(e);
      }
    },
    async setAdminStore({commit},id){
      try{
        const admin = await adminVerif(id); // si session non admin return false, sinon return true
        await commit('setAdmin', admin);
      } catch (e) {
        console.log(e);
      }
    },
    // async setIdPanierStore({commit},id){
    //   try{
    //     const panier = await getIdPanier(id); // si pas de panier lié return null
    //     await commit('setIdPanier', panier);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
  },
  modules: {
  }
})
