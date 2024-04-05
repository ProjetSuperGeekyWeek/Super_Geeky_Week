<template>
  <div class="add">
    <input type="text" :placeholder="translate('nomclient')" v-model="nom_client">
    <input type="text" :placeholder="translate('prenomclient')" v-model="prenom_client">
    <input type="text" :placeholder="translate('emailclient')" v-model="mail_client" @change="verifEmail" id="email" name="email">
    <input type="button" :value="translate('ajouter')" @click="addNewQrCode">
    <boutonRetourCrud/>
  </div>
</template>
<script>
import {mapActions, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addQrCodeCrud',
  components: {boutonRetourCrud},
  data: () => ({
    nom_client: '',
    prenom_client: '',
    mail_client: '',
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['addNewQrCodeStore']),
    async addNewQrCode() {
      try{
        if(this.nom_client === '' || this.prenom_client === '' || await this.verifEmail() === false){
          return
        }
        const body = {nom_client:this.nom_client,prenom_client:this.prenom_client,mail_client:this.mail_client}
        await this.addNewQrCodeStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addQrCode', e)
      }
    },
    async verifEmail() {
      const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
      const email = document.getElementById("email").value;
      return regexEmail.test(email);
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