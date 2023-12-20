<template>
    <div id="page-paiement">
        <div id="facture">
            <div id="infos-facture">
                <span>Prestation</span>
                <span>Prix</span>
                <span>Quantite</span>
                <span>Sous-Total</span>
            </div>
            <div v-for="ligne in listeCart" :key="ligne.id" class="ligne-facture">
                <span class="ligne-prestation">{{ ligne.prestation }}</span>
                <span class="ligne-prix">{{ ligne.prix }}</span>
                <span class="ligne-quantite">{{ ligne.quantite }}</span>
                <span class="ligne-sous-total">{{ ligne.prix * ligne.quantite }}</span>
            </div>
            <div id="total-facture">
                <span>Total : </span>
                <span>{{ prixTotal }}</span>
            </div>
        </div>
        <div id="formulaire-paiement">
            <input type="text" name="num_carte" id="num_carte" required v-model="num_carte" @change="validNumCarte" placeholder="numéro de carte">
            <input type="text" name="date_expiration" id="date_expiration" required v-model="date_expiration" @change="validDateCarte" placeholder="date d'expiration">
            <input type="text" name="code_securite" id="code_securite" required v-model="code_securite" @change="validCCV" placeholder="CCV">
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
        listeCart : {
            type: Array,
            default: () => [{id:1,prestation: 'prestation1', prix: 10, quantite: 50}, {id:2,prestation: 'prestation2', prix: 20, quantite: 2}],
            // required: true,
        },
    },
    methods: {
        validNumCarte(){
            var num = document.getElementById('num_carte').value;
            var regex = new RegExp("^[0-9]{16}$");
            if (!regex.test(num)) {
                this.InvalideRouge(document.getElementById('num_carte'));
                alert("Le numéro de carte bancaire n'est pas valide");
                return false;
            }
            this.num_carte = num;
            this.ValideVert(document.getElementById('num_carte'));
            return true;
        },
        validDateCarte(){
            var date = document.getElementById('date_expiration').value;
            var regex = new RegExp("^[0-9]{2}/[0-9]{2}$");
            if (!regex.test(date)) {
                this.InvalideRouge(document.getElementById('date_expiration'));
                alert("La date d'expiration n'est pas valide");
                return false;
            }
            this.date_expiration = date;
            this.ValideVert(document.getElementById('date_expiration'));
            return true;
        },
        validCCV(){
            var ccv = document.getElementById('code_securite').value;
            var regex = new RegExp("^[0-9]{3}$");
            if (!regex.test(ccv)) {
                this.InvalideRouge(document.getElementById('code_securite'));
                alert("Le code de sécurité n'est pas valide");
                return false;
            }
            this.code_securite = ccv;
            this.ValideVert(document.getElementById('code_securite'));
            return true;
        },
        validPaiement(){
            if (this.validNumCarte() && this.validDateCarte() && this.validCCV()) {
                alert("Paiement validé");
                return true;
            }
        },
        InvalideRouge(elem){
            elem.style.border = "1px solid red";
            elem.style.backgroundColor = "red";
        },
        ValideVert(elem){
            elem.style.border = "1px solid green";
            elem.style.backgroundColor = "green";
        },
    },
    computed: {
        ...mapState(['nom']),

        prixTotal : function(){
            var total = 0;
            for (let i = 0; i < this.listeCart.length; i++) {
                total += this.listeCart[i].prix * this.listeCart[i].quantite;
            }
            return total;
        },
    },
}
</script>

<style scoped>
    /* #page-paiement{
        width: 100%;
        height: 100vh;
        background-color: rgb(177, 117, 233);
    } */
    .ligne-facture{
        display: flex;
        justify-content: space-between;
        width: 50%;
        margin-left: 25%;
        padding-top: 0;
        padding-bottom: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
    .ligne-facture span{
        width: 25%;
        padding-top: 0;
        padding-bottom: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
    #infos-facture{
        display: flex;
        justify-content: space-between;
        width: 50%;
        margin-left: 25%;
    }
    #infos-facture span{
        width: 25%;
        font-weight: bold;
    }
    #total-facture{
        display: flex;
        justify-content: space-between;
        width: 25%;
        margin-left: 50%;
    }
    #total-facture span{
        width: 25%;
        font-weight: bold;
    }
    #formulaire-paiement{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: 25%;
    }
    #formulaire-paiement input{
        margin-bottom: 10px;
    }
    #formulaire-paiement button{
        width: 20%;
        margin-left: 40%;
    }

    #num_carte{
        width: 100%;
    }
    #date_expiration{
        width: 50%;
    }
    #code_securite{
        width: 50%;
    }

    .ligne-facture{
        margin-top: 20px;
    }
    .ligne-facture span{
        border: 1px solid black;
        padding: 5px;
    }
    #infos-facture span{
        border: 1px solid black;
        padding: 5px;
    }
</style>