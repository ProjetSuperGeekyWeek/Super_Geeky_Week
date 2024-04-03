
import { validerLigneCommande } from '@/axiosFunctions/commandeAxios';

export default{
    namespaced: true,
    state: () => ({
        uuid_commande: null,
    }),
    getters: {
        getUUIDCommande: state => state.uuid_commande,
    },
    mutations: {
        setUUIDCommande(state, payload){
            state.uuid_commande = payload;
        },
    },
    actions: {
        async validerLigneCommande({commit}, payload){
            try{
                const res = await validerLigneCommande(payload.mail, payload.mdp);
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
    },
}
