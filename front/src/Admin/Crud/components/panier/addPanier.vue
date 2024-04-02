<template>
  <div class="add">
    <input type="text" :placeholder="translate('paniername')" v-model="nom_panier">
    <input type="button" :value="translate('ajouter')" @click="addNewPanier">
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addPanierCrud',
  components: {boutonRetourCrud},
  data: () => ({
    nom_panier: '',
  }),
  computed:{
    ...mapState(['lang', 'en', 'fr']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
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