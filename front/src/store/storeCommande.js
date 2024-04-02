
// import { getPrestataireMailPassword, adminVerif, changePassword } from '@/axiosFunctions/authentificationAxios';

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
        // async getPrestataireMailPassword({commit}, payload){
        //     try{
        //         const res = await getPrestataireMailPassword(payload.mail, payload.mdp);
        //         if(res.id_personne != undefined){
        //             commit('setAuthentifier', true);
        //             commit('setPrestataireAuthentifier', res);
        //             return true;
        //         }
        //         return false;
        //     }catch(error){
        //         console.log(error);
        //         return false;
        //     }
        // },
    },
}
