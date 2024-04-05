<template>
    <div class="card-nourriture">
        <div class="image-nourriture">
            <img src="https://www.lesjardinsdelacomtesse.com/1166-large_default/panier-pique-nique-2-personnes-avec-sac-a-dos-isotherme.jpg" alt="image-nourriture">
            <input v-if="id_prestataire == id_proprietaire" type="file" name="image-nourriture" id="image-nourriture">
        </div>
        <div v-if="id_prestataire != id_proprietaire" class="infos-nourriture">
            <h3>{{ titre }}</h3>
            <p>{{ description }}</p>
            <p>{{ prix }}€</p>
        </div>
        <div v-if="id_prestataire == id_proprietaire" class="infos-nourriture">
            <h3>{{translate('titre')}}</h3>
            <input type="text" v-bind="titre">
            <h3>Description :</h3>
            <input type="text" v-bind="description">
            <h3>{{translate('prix3')}}</h3>
            <input type="number" v-bind="prix">
        </div>
        <div v-if="id_prestataire != id_proprietaire" class="button-nourriture">
            <input type="number" value="1">
            <button>{{translate('addpanier')}}</button>
        </div>
        <div v-if="(id_prestataire == id_proprietaire) && (!modifierCardNourriture)" class="button-nourriture">
            <button>{{translate('modifier')}}</button>
            <button>{{translate('supprimer')}}</button>
        </div>
        <div v-if="(id_prestataire == id_proprietaire) && (modifierCardNourriture)" class="button-nourriture">
            <button>{{translate('valider')}}</button>
            <button>{{translate('annuler')}}</button>
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
        id_proprietaire: Number
      },
      methods: {
        translate(prop) {
          return this[this.lang][this.lang][prop];
        },
        data() {
          return {
            modifierCardNourriture: false,
          }
        },
        computed: {
          ...mapState(['id_prestataire']),
          ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
        },
      }
    }
</script>

<style scoped>

</style>