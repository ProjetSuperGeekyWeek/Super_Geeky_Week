<template>
  <div class="add">
    <input type="text" placeholder="Nom de l'emplacement" v-model="nom_emplacement">
    <input type="button" value="Valider" @click="addNewQrCode">
    <input type="button" value="retour" @click="returnCrud">
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default{
  name: 'addEmplacementCrud',
  data: () => ({
    nom_emplacement: '',
  }),
  methods: {
    ...mapActions('crudStore',['addNewEmplacementStore']),
    async addNewQrCode() {
      try{
        if(this.nom_emplacement === ''){
          return
        }
        await this.addNewEmplacementStore(this.nom_emplacement);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addEmplacement', e)
      }
    },
    async returnCrud() {
      this.$router.push('/admin/crud')
    },
  },
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