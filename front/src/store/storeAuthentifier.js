
import { getPrestataireMailPassword, adminVerif } from '@/../../back/axiosFunctions/authentificationAxios';

export default{
    namespaced: true,
    state: () => ({
        authentifier: false,
        admin: false,
        prestataireAuthentifier: {
            id_personne: null,
            nom_personne: '',
            prenom_personne: '',
            mail_personne: '',
            description_personne: '',
            image_personne: '../assets/main_logo.png',
        },
    }),
    getters: {
        getAuthentifier: state => state.authentifier,
        getAdmin: state => state.admin,
        getPrestataireAuthentifier: state => state.prestataireAuthentifier,
    },
    mutations: {
        setAuthentifier(state, payload){
            state.authentifier = payload;
        },
        setAdmin(state, payload){
            state.admin = payload;
        },
        setPrestataireAuthentifier(state, payload){
            state.prestataireAuthentifier = payload;
        },
    },
    actions: {
        async getPrestataireMailPassword({commit}, payload){
            try{
                const res = await getPrestataireMailPassword(payload.mail, payload.mdp);
                if(res.id_personne != undefined){
                    commit('setAuthentifier', true);
                    commit('setPrestataireAuthentifier', res);
                    return true;
                }
                return false;
            }catch(error){
                console.log(error);
                return false;
            }
        },
        async adminVerif({commit}, payload){
            try{
                const res = await adminVerif(payload);
                if(res.id_personne != undefined){
                    commit('setAdmin', true);
                    return true;
                }
                return false;
            }catch(error){
                console.log(error);
                return false;
            }
        },
    },
}
