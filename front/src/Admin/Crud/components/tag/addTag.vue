<template>
  <div class="add">
    <input type="text" placeholder="nom du tag" v-model="nom_tag">
    <input type="button" value="Ajouter" @click="addNewTag">
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addTagCrud',
  components: {boutonRetourCrud},
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
        const body = {nom_tag:this.nom_tag}
        await this.addNewTagStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addTag', e)
      }
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