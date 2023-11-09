<template>
    <div id="page-paiement">
        <div id="facture">

        </div>
        <div id="formulaire-paiement">

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PagePaiement',
    data() {
        return {
            num_carte : '',
            date_expiration : '',
            code_securite : '',
        }
    },
    props: {
        listePrix : Array,
        listePrestations : Array,
        listeQuantite : Array,
    },
    methods: {
        generationCommandeTotal(){
            
        }
    },
    computed: {
        ...mapState(['nom']),

        prixTotal : function () {
            let total = 0;
            for(let i = 0; i < this.listePrix.length; i++) {
                total += this.listePrix[i] * this.listeQuantite[i];
            }
            return total;
        }
    },
}
</script>

<style scoped>

</style>