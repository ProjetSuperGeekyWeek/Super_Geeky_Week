<template>
  <div class="add">
    <input type="text" placeholder="nom" v-model="nom_panier">
    <input type="button" value="Ajouter" @click="addNewPanier">
    <input type="button" value="retour" @click="returnCrud">
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default{
  name: 'addPanierCrud',
  data: () => ({
    nom_panier: '',
  }),
  methods: {
    ...mapActions('crudStore',['addNewPanierStore']),
    async addNewPanier() {
      try{
        const body = {nom_panier:this.nom_panier}
        await this.addNewPanierStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addPanier', e)
      }
    },
    async returnCrud() {
      this.$router.push('/admin/crud')
    },
  }
}
</script>

<style>
.add{
  padding-top: var(--padding-top-navBar);
}
.add input{
  border: 1px black solid;
}
</style>