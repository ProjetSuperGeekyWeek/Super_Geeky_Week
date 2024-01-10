<template>
  <div class="add">
    <input type="text" placeholder="nom" v-model="nom_panier">
    <input type="button" value="Ajouter" @click="addNewPanier">
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addPanierCrud',
  components: {boutonRetourCrud},
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
    }
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