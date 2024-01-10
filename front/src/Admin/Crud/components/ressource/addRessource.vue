<template>
  <div class="add">
    <input type="text" placeholder="nom de la ressource" v-model="nom_ressource">
    <input type="button" value="Ajouter" @click="addNewRessource">
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default {
  name: 'addRessourceCrud',
  components: {boutonRetourCrud},
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