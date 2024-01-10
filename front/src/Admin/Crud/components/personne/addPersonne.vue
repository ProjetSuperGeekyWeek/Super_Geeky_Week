<template>
  <div class="add">
    <input type="text" placeholder="Nom" v-model="nom_personne">
    <input type="text" placeholder="Prenom" v-model="prenom_personne">
    <input type="text" placeholder="mail personne" v-model="mail_personne" id="email" name="email">
    <input type="password" placeholder="Mot de passe" v-model="mdp_personne">
    <input type="text" placeholder="Image" v-model="image_personne">
    <input type="text" placeholder="Description" v-model="description_personne" maxlength="255">
    <select name="selectRole" id="selectRole" v-model="id_role">
      <option :value="role.id_role" v-for="role in listRole" :key="role.id_role">{{ role.nom_role }}</option>
    </select>
    <input type="button" value="Valider" @click="addNewPersonne">
    <boutonRetourCrud/>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addPersonneCrud',
  components: {boutonRetourCrud},
  data: () => ({
    nom_personne: '',
    prenom_personne: '',
    mail_personne: '',
    mdp_personne: '',
    image_personne: '',
    description_personne: '',
    id_role: 1,
    listRole: [],
    correctEmail: false,
  }),
  computed: {
    ...mapGetters('crudStore',['getAllRole'])
  },
  methods: {
    ...mapActions('crudStore',['addNewPersonneStore']),
    async loadData(){
      this.listRole = this.getAllRole;
      console.log(this.listRole, 10)
    },
    async addNewPersonne() {
      console.log(await this.verifEmail());
      try{
        if(this.nom_personne === '' || this.prenom_personne === '' || await this.verifEmail() === false || this.mdp_personne === '' || this.image_personne === '' || this.description_personne === '' || this.id_role === null){
          return
        }
        const body = {nom_personne:this.nom_personne,prenom_personne:this.prenom_personne,mail_personne:this.mail_personne,mdp_personne:this.mdp_personne,image_personne:this.image_personne,description_personne:this.description_personne,id_role:this.id_role}
        await this.addNewPersonneStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addPersonne', e)
      }
    },
    async verifEmail() {
      const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
      const email = document.getElementById("email").value;
      return regexEmail.test(email);
    },
  },
  async created(){
    await this.loadData();
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