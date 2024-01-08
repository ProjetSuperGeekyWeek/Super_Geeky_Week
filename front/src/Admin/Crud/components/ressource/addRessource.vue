<template>
  <div class="add">
    <input type="text" placeholder="nom de la ressource" v-model="nom_ressource">
    <input type="button" value="Ajouter" @click="addNewRessource">
    <input type="button" value="retour" @click="returnCrud">
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'addRessourceCrud',
  data: () => ({
    nom_ressource: '',
  }),
  methods: {
    ...mapActions('crudStore', ['addNewRessourceStore']),
    async addNewRessource() {
      try {
        if (this.nom_ressource === '') {
          return
        }
        await this.addNewRessourceStore(this.nom_ressource);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error addRessource', e)
      }
    },
    async returnCrud() {
      this.$router.push('/admin/crud')
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