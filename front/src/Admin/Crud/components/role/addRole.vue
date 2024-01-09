<template>
<div class="add">
  <input type="text" placeholder="nom du rôle" v-model="nom_role">
  <input type="button" value="Ajouter" @click="addNewRole">
  <input type="button" value="retour" @click="returnCrud">
</div>
</template>

<script>
import {mapActions} from "vuex";

export default{
  name: 'addRoleCrud',
  data: () => ({
    nom_role: '',
  }),
  methods: {
    ...mapActions('crudStore',['addNewRoleStore']),
    async addNewRole() {
      try{
        if(this.nom_role === ''){
          return
        }
        const body = {nom_role:this.nom_role}
        await this.addNewRoleStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addRole', e)
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