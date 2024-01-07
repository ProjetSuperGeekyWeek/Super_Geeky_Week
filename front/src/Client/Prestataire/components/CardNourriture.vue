<template>
    <div class="card-nourriture">
        <div class="image-nourriture">
            <img src="https://www.lesjardinsdelacomtesse.com/1166-large_default/panier-pique-nique-2-personnes-avec-sac-a-dos-isotherme.jpg" alt="image-nourriture">
            <input v-if="id_prestataire == id_proprietaire" type="file" name="image-nourriture" id="image-nourriture">
        </div>
        <div v-if="id_prestataire != id_proprietaire" class="infos-nourriture">
            <h3 v-bind="titre"></h3>
            <p v-bind="description"></p>
            <p>{{ prix }}€</p>
        </div>
        <div v-if="id_prestataire == id_proprietaire" class="infos-nourriture">
            <h3>Titre :</h3>
            <input type="text" v-bind="titre">
            <h3>Description :</h3>
            <input type="text" v-bind="description">
            <h3>Prix :</h3>
            <input type="number" v-bind="prix">
        </div>
        <div v-if="id_prestataire != id_proprietaire" class="button-nourriture">
            <input type="number" value="1">
            <button>Ajouter au panier</button>
        </div>
        <div v-if="(id_prestataire == id_proprietaire) && (!modifierCardNourriture)" class="button-nourriture">
            <button>Modifier</button>
            <button>Supprimer</button>
        </div>
        <div v-if="(id_prestataire == id_proprietaire) && (modifierCardNourriture)" class="button-nourriture">
            <button>Valider</button>
            <button>Annuler</button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'CardNourriture',
        props: {
            titre: String,
            description: String,
            prix: Number,
            id_proprietaire : Number
        },
        data() {
            return {
                modifierCardNourriture: false,
            }
        },
        computed: {
            ...mapState(['id_prestataire']),
        },
    }
</script>

<style scoped>

</style>