<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_personne">
    <input type="text" v-model="nom_personne">
    <input type="text" v-model="prenom_personne">
    <input type="text" v-model="mail_personne" id="email">
    <input type="text" v-model="mdp_personne">
    <select name="selectRole" id="selectRole" v-model="id_role">
      <option :value="role.id_role" v-for="role in listRole" :key="role.id_role" :selected="role.id_role === id_role">{{ role.nom_role }}</option>
    </select>
    <input type="text" v-model="image_personne">
    <input type="text" v-model="description_personne">
    <button @click="updateRole">{{translate('valider')}}</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updatePersonne",
  components: {
    boutonRetourCrud
  },
  data: () => {
    return {
      id_personne: 0,
      nom_personne: '',
      prenom_personne: '',
      mail_personne: '',
      mdp_personne: '',
      id_role: 0,
      image_personne: '',
      description_personne: '',

      list: [],
      listRole: [],
      current: {},
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore', ['getAllPersonne', 'getAllRole']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['updateRowPersonne']),
    async loadData() {
      this.listRole = this.getAllRole;

      this.id_personne = this.$route.params.id;

      this.list = this.getAllPersonne;
      this.current = this.list.find(role => role.id_personne === parseInt(this.id_personne)) || {};

      this.nom_personne = this.current.nom_personne;
      this.prenom_personne = this.current.prenom_personne;
      this.mail_personne = this.current.mail_personne;
      this.mdp_personne = this.current.mdp_personne;
      this.id_role = this.current.id_role;
      this.image_personne = this.current.image_personne;
      this.description_personne = this.current.description_personne;
    },
    async updateRole() {
      try {
        if (this.id_personne === '' || this.nom_personne === '' || this.prenom_personne === '' || this.mail_personne === '' || this.mdp_personne === '' || this.id_role === '' || this.image_personne === '' || this.description_personne === '') {
          alert(this.translate('remplirtouschamps'))
          return
        }
        if(await this.verifEmail() === false){
          alert(this.translate('enteremail'))
          return
        }
        const body = { id_personne: this.id_personne, nom_personne: this.nom_personne, prenom_personne: this.prenom_personne, mail_personne: this.mail_personne, mdp_personne: this.mdp_personne, id_role: this.id_role, image_personne: this.image_personne, description_personne: this.description_personne }
        await this.updateRowPersonne(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updatePersonne', e)
      }
    },
    async verifEmail() {
      const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
      const email = document.getElementById("email").value;
      return regexEmail.test(email);
    },
  },
  async mounted() {
    await this.loadData();
  },

};
</script>

<style>
.updateCrud {
  padding-top: var(--padding-top-navBar);
}

.updateCrud input {
  border: 1px solid black;
}
</style>