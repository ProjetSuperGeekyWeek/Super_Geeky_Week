import {getItemById} from "@/axiosFunctions/itemAxios";

export default {
    namespaced: true,
    state: () => ({
        contentPanier: [],
    }),
    getters: {
        getContentPanier: state => state.contentPanier,
    },
    mutations: {
        setContentPanierStore(state, payload) {
            state.contentPanier = payload
        }
    },
    actions: {
        async addContentPanier({commit, state}, body){
            var results = state.contentPanier
            try{
                var item = await getItemById(body)
                if(item.error !== 0) {
                    return
                }
                item = item.data
                var index = results.findIndex(result => result.nom_item === item.nom_item)
                console.log(index, 'index')
                if(index !== -1) {
                    results[index].quantite += 1
                    commit('setContentPanierStore', results)
                } else {
                    results.push({id_item:item.id_item, quantite:1, nom_item:item.nom_item, prix_item:item.prix_item})
                    commit('setContentPanierStore', results)
                }
            }catch (e) {
                console.error(e, 'erreur addContentPanier')
            }
        }
    }
}