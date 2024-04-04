import {addNewQrCode} from "@/axiosFunctions/qrCodeAxios";
import {addNewAcheter} from "@/axiosFunctions/acheterAxios"
import {getItemById, updateRowItem} from "@/axiosFunctions/itemAxios"

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
                var item = await getItemById(body.id_item)
                if(item.error !== 0 || item.stock_item === 0) {
                    return
                }
                item = item.data
                body.stock_item--
                await updateRowItem(body)
                console.log(1)
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
        },
        async createQrCode({state}) {
            try {
                const result = await addNewQrCode();
                if(result.error !== 0) {
                    console.error(result)
                }
                if(state.contentPanier.length === 0) {
                    console.log('Le panier est vide')
                    return
                }
                for (const content of state.contentPanier) {
                    for(var i = 0; i<content.quantite; i++) {
                        await addNewAcheter({id_item: content.id_item, id_qr_code: result.data, consommer: false})
                    }
                }
                return result.data
            }catch (e) {
                console.error(e, 'erreur createQrCode')
                return null
            }
        }
    }
}