<template>
  <div class="add">
    <input type="text" :placeholder="translate('emplaname')" v-model="nom_emplacement">
    <input type="button" :value="translate('ajouter')" @click="addNewQrCode">
    <input type="button" :value="translate('retour')" @click="returnCrud">
  </div>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default{
  name: 'addEmplacementCrud',
  data: () => ({
    nom_emplacement: '',
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['addNewEmplacementStore']),
    async addNewQrCode() {
      try{
        if(this.nom_emplacement === ''){
          return
        }
        const body = {nom_emplacement:this.nom_emplacement}
        await this.addNewEmplacementStore(body);
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