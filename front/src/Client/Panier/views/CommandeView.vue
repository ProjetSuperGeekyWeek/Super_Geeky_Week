<template>
    <div>
        <div class="vue-client-commande" v-if="!authentifier">
            <span v-for="ligne in commande">
                <span>{{ligne.nom_produit}}</span>
                <span>{{ligne.status}}</span>
            </span>
        </div>
        <div v-else>
            <span v-for="(index,ligne) in commande_presta">
                <span>{{ligne.nom_produit}}</span>
                <span v-if="ligne.status">
                    <button @click="valider(commande_presta[index].id_acheter)">valider</button>
                </span>
                <span v-else>
                    {{ligne.status}}
                </span>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
// add store/back get commande
// add store/back get commande_presta

export default {
    name: 'CommandeView',
    data() {
        return {
        }
    },
    methods:{
        ...mapActions('commandeStore',['validerLigneCommande','getCommande','getCommandePresta']),
        valider(id_acheter){
            this.validerLigneCommande(id_acheter);
        }
    },
    computed: {
        ...mapState('authentifierStore',['authentifier']),
        ...mapState('commandeStore',['commande','commande_presta']),
    }
}


</script>

<style>

</style>