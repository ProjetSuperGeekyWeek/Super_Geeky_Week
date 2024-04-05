<template>
    <div class="box-commande">
        <div v-if="!authentifier">
            <span v-if="commande[0]">
                <spanFor v-for="ligne in commande" v-bind:key="ligne">
                    <h3>{{ligne.nom_item}}</h3>
                    <h5 class="not-consommer" v-if="!ligne.consommer">
                        {{translate('Nonutilise')}}
                    </h5>
                    <h5 class="consommer" v-else>
                        {{translate('Utilise')}}
                    </h5>
                </spanFor>
            </span>
            <span v-else>
                <h3>{{translate('Commandevide')}}</h3>
            </span>
        </div>
        <div v-else>
            <span v-if="commande_presta[0]">
                <spanFor v-for="(ligne,index) in commande_presta" v-bind:key="ligne">
                    <h3>{{ligne.nom_item}}</h3>
                    <span v-if="!ligne.consommer">
                        <button @click="valider(commande_presta[index].id_acheter)">{{translate('valider')}}</button>
                    </span>
                    <h5 class="not-consommer" v-else>
                        {{translate('Utilise')}}
                    </h5>
                </spanFor>
            </span>
            <span v-else>
                <h3>{{translate('Commandevide')}}</h3>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'CommandeView',
    data() {
        return {
            uuid_commande: '',
        }
    },
    methods:{
        ...mapActions('commandeStore',['validerLigneCommande','getCommande','getCommandePresta']),
        valider(id_acheter){
            this.validerLigneCommande({id_acheter:id_acheter,uuid_commande:this.uuid_commande,id_presta:this.prestataireAuthentifier.id_personne});
        },
        translate(prop) {
          return this[this.lang][this.lang][prop];
        },
    },
    computed: {
        ...mapState('authentifierStore',['authentifier','prestataireAuthentifier']),
        ...mapState('commandeStore',['commande','commande_presta']),
        ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    },
    mounted() {
        this.uuid_commande = this.$route.params.uuid_commande;
        this.getCommande(this.uuid_commande);
        this.getCommandePresta({id_presta:this.prestataireAuthentifier.id_personne,uuid_commande:this.uuid_commande});
    }
}


</script>

<style>

.box-commande{
    margin-top: 0%;
    background-color: grey;
    width: 100vw;
    min-height: 100vh;
    max-height: 100%;
    padding-top: 310px;
    padding-bottom: 50px;
}

.box-commande div{
    margin-left: 15%;
    margin-right: 15%;
    background-color: bisque;
    width: 70%;
    border: 5px solid goldenrod;
    border-radius: 10px;
}

spanFor{
    display: flex;
}

span{
    margin: 1%;
    margin-left: 3%;
    font-size: larger;
}

h5, button{
    align-self: center;
    font-size: large;
}

.consommer{
    color: lightgray;
}

.not-consommer{
    color: green;
}

button{
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin-left: 5px;
}

button:hover{
    background-color: darkgreen;
}

</style>