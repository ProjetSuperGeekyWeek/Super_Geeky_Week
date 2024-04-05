<template>
  <div class="add">
    <input type="text" :placeholder="translate('ressname')" v-model="nom_ressource">
    <input type="button" :value="translate('ajouter')" @click="addNewRessource">
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default {
  name: 'addRessourceCrud',
  components: {boutonRetourCrud},
  data: () => ({
    nom_ressource: '',
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['addNewRessourceStore']),
    async addNewRessource() {
      try {
        if (this.nom_ressource === '') {
          return
        }
        const body = {nom_ressource:this.nom_ressource}
        await this.addNewRessourceStore(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error addRessource', e)
      }
    },
  }
}
</script>

<style>
.add {
  padding-top: var(--padding-top-navBar);
}

.add input {
  border: 1px black solid;
}
</style>