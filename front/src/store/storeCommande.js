
import { validerLigneCommande, getCommande, getCommandePresta } from '@/axiosFunctions/commandeAxios';

export default{
    namespaced: true,
    state: () => ({
        commande: null, // id_acheter, nom_produit, status, ...
        commande_presta: null,
    }),
    getters: {
    },
    mutations: {
        setCommande(state, payload){
            state.commande = payload;
        },
        setCommandePresta(state, payload){
            state.commande_presta = payload;
        },
    },
    actions: {
        async validerLigneCommande({commit}, payload){
            try{
                await validerLigneCommande(payload.id_acheter);
                const res = await getCommande(payload.uuid_commande);
                commit('setCommande', res);
                const res_presta = await getCommandePresta(payload.id_presta, payload.uuid_commande);
                commit('setCommandePresta', res_presta);
            }catch(error){
                console.log(error);
            }
        },
        async getCommande({commit},uuid_commande){
            try{
                const res = await getCommande(uuid_commande);
                commit('setCommande', res);
                return true;
            }catch(error){
                console.log(error);
                return false;
            }
        },
        async getCommandePresta({commit},payload){
            try{
                const res = await getCommandePresta(payload.id_presta, payload.uuid_commande)
                commit('setCommandePresta', res);
                return true;
            }catch(error){
                console.log(error);
                return false;
            }
        }
    },
}
