<template>
<div class="add">
  <input type="text" :placeholder="translate('namerole')" v-model="nom_role">
  <input type="button" :value="translate('ajouter')" @click="addNewRole">
  <boutonRetourCrud/>
</div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addRoleCrud',
  components: {boutonRetourCrud},
  data: () => ({
    nom_role: '',
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
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