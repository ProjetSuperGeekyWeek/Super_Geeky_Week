<template>
<div class="add">
  <input type="text" placeholder="nom du rôle" v-model="nom_role">
  <input type="button" value="Ajouter" @click="addNewRole">
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
    ...mapActions(['addNewRoleStore']),
    async addNewRole() {
      console.log(this.nom_role,1)
      try{
        if(this.nom_role === ''){
          return
        }
        this.addNewRoleStore(this.nom_role);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addRole', e)
      }
    }
  },
  watch: {
    nom_role: function (newVal) {
      console.log("nom_role variable modified:", newVal);
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