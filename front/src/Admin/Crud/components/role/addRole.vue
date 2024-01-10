<template>
<div class="add">
  <input type="text" placeholder="nom du rôle" v-model="nom_role">
  <input type="button" value="Ajouter" @click="addNewRole">
  <boutonRetourCrud/>
</div>
</template>

<script>
import {mapActions} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addRoleCrud',
  components: {boutonRetourCrud},
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