<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_qr_code">
    <input type="text" :placeholder="translate('nomclient')" v-model="nom_client">
    <input type="text" :placeholder="translate('prenomclient')" v-model="prenom_client">
    <input type="text" :placeholder="translate('emailclient')" v-model="mail_client" id="email" name="email">
    <button @click="updateRole">{{translate('valider')}}</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updateQrCode",
  components: {
    boutonRetourCrud
  },
  data: () => {
    return {
      id_qr_code: 0,
      nom_client: '',
      prenom_client: '',
      mail_client: '',

      list: [],
      current: {},
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
    ...mapGetters('crudStore', ['getAllQrCode']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['updateRowQrCode']),
    async loadData() {
      this.id_qr_code = this.$route.params.id;

      this.list = this.getAllQrCode;
      this.current = this.list.find(role => role.id_qr_code === parseInt(this.id_qr_code)) || {};

      this.nom_client = this.current.nom_client;
      this.prenom_client = this.current.prenom_client;
      this.mail_client = this.current.mail_client;
    },
    async updateRole() {
      try {
        if (this.id_qr_code === '' || this.nom_client === '' || this.prenom_client === '' || this.mail_client === '') {
          alert(this.translate('remplirtouschamps'))
          return
        }
        if(await this.verifEmail() === false){
          alert(this.translate('enteremail'))
          return
        }
        const body = { id_qr_code: this.id_qr_code, nom_client: this.nom_client, prenom_client: this.prenom_client, mail_client: this.mail_client }
        await this.updateRowQrCode(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updateQrCode', e)
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