<template>
  <div class="add">
    <input type="button" value="Ajouter" @click="addNewPanier">
    <input type="button" value="retour" @click="returnCrud">
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default{
  name: 'addPanierCrud',
  data: () => ({
  }),
  methods: {
    ...mapActions('crudStore',['addNewPanierStore']),
    async addNewPanier() {
      try{
        await this.addNewPanierStore();
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