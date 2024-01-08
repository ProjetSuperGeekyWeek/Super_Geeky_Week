<template>
  <div class="add">
    <input type="text" placeholder="nom du tag" v-model="nom_tag">
    <input type="button" value="Ajouter" @click="addNewTag">
    <input type="button" value="retour" @click="returnCrud">
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default{
  name: 'addTagCrud',
  data: () => ({
    nom_tag: '',
  }),
  methods: {
    ...mapActions('crudStore',['addNewTagStore']),
    async addNewTag() {
      try{
        if(this.nom_tag === ''){
          return
        }
        await this.addNewTagStore(this.nom_tag);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addTag', e)
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