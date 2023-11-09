<template>
    <div id="page-paiement" @load="generationCommandeTotal">
        <div id="facture">
            <!-- générer par la fonction generationCommandeTotal en Js -->
        </div>
        <div id="formulaire-paiement">
            <input type="text" name="num_carte" id="num_carte" required v-model="num_carte" placeholder="numéro de carte">
            <input type="text" name="date_expiration" id="date_expiration" required v-model="date_expiration" placeholder="date d'expiration">
            <input type="text" name="code_securite" id="code_securite" required v-model="code_securite" placeholder="CCV">
            <button id="valide-paiement" @click="validPaiement">Valider</button>
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
        // commentaires à décocher et défault à enlever avec l'arrivé de l'API
        listePrix : {
            type: Array,
            default: () => [],
            // required: true,
        },
        listePrestations : {
            type: Array,
            default: () => [],
            // required: true,
        },
        listeQuantite : {
            type: Array,
            default: () => [],
            // required: true,
        }
    },
    methods: {
        generationCommandeTotal(){
            var facture = document.getElementById('facture');
            var commande = document.createElement('div');
            for(let i = 0; i < this.listePrix.length; i++) {
                commande.appendChild(this.generationNouvelleLigne(this.listePrestations[i], this.listePrix[i], this.listeQuantite[i]));
            }
            facture.appendChild(commande);
            facture.appendChild(generationLigneTotal(this.prixTotal));
        },
        generationNouvelleLigne(prestation, prix, quantite){
            var ligne = document.createElement('div');
            var texteLigne = document.createElement('p');
            texteLigne.innerHTML = prestation + ' ' + prix + '€ x' + quantite + ' = ' + prix * quantite + '€';
            ligne.appendChild(texteLigne);
            return ligne;
        },
        generationLigneTotal(total){
            var ligne = document.createElement('div');
            var texteLigne = document.createElement('p');
            texteLigne.innerHTML = 'Total : ' + total + '€';
            ligne.appendChild(texteLigne);
            return ligne;
        },
        validPaiement(){

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
        },
    },
}
</script>

<style scoped>

</style>