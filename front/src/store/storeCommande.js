
import { validerLigneCommande, getCommande, getCommandePresta } from '@/axiosFunctions/commandeAxios';

export default{
    namespaced: true,
    state: () => ({
        uuid_commande: null,
        commande: null, // id_acheter, nom_produit, status, ...
        commande_presta: null,
    }),
    getters: {
        getUUIDCommande: state => state.uuid_commande,
    },
    mutations: {
        setUUIDCommande(state, payload){
            state.uuid_commande = payload;
        },
        setCommande(state, payload){
            state.commande = payload;
        },
        setCommandePresta(state, payload){
            state.commande_presta = payload;
        },
    },
    actions: {
        async validerLigneCommande({commit}, id_acheter){
            try{
                await validerLigneCommande(id_acheter);
                const res = await getCommande(this.uuid_commande);
                commit('setCommande', res);
                const res_presta = await getCommandePresta(this.prestataireAuthentifier.id_personne, this.uuid_commande);
                commit('setCommandePresta', res_presta);
            }catch(error){
                console.log(error);
            }
        },
        async getCommande({commit}){
            try{
                const res = await getCommande(this.uuid_commande);
                commit('setCommande', res);
                return true;
            }catch(error){
                console.log(error);
                return false;
            }
        },
        async getCommandePresta({commit}){
            try{
                const res = await getCommandePresta(this.prestataireAuthentifier.id_personne, this.uuid_commande);
                commit('setCommandePresta', res);
                return true;
            }catch(error){
                console.log(error);
                return false;
            }
        }
    },
}
