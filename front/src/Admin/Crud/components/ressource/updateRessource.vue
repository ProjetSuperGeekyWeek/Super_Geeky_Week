<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_ressource">
    <input type="text" v-model="nom_ressource">
    <button @click="updateRole">Valider</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updateRessource",
  components: {
    boutonRetourCrud
  },
  data: () => {
    return {
      id_ressource: 0,
      nom_ressource: '',

      list: [],
      current: {},
    };
  },
  computed: {
    ...mapGetters('crudStore', ['getAllRessource']),
  },
  methods: {
    ...mapActions('crudStore', ['updateRowRessource']),
    async loadData() {
      this.id_ressource = this.$route.params.id;

      this.list = this.getAllRessource;
      this.current = this.list.find(role => role.id_ressource === parseInt(this.id_ressource)) || {};

      this.nom_ressource = this.current.nom_ressource;
    },
    async updateRole() {
      try {
        if (this.id_ressource === '' || this.nom_ressource === '') {
          alert('Veuillez remplir tous les champs')
          return
        }
        const body = { id_ressource: this.id_ressource, nom_ressource: this.nom_ressource }
        await this.updateRowRessource(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updateRessource', e)
      }

    }
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