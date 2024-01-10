<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_emplacement">
    <input type="text" v-model="nom_emplacement">
    <button @click="updateRole">Valider</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "updateEmplacement",
  data: () => {
    return {
      id_emplacement: 0,
      nom_emplacement: '',
      list: [],
      current: {},
    };
  },
  computed: {
    ...mapGetters('crudStore', ['getAllEmplacement']),
  },
  methods: {
    ...mapActions('crudStore', ['updateRowEmplacement']),
    async loadData() {
      this.id_emplacement = this.$route.params.id;

      this.list = this.getAllEmplacement;
      this.current = this.list.find(role => role.id_emplacement === parseInt(this.id_emplacement)) || {};

      this.nom_emplacement = this.current.nom_emplacement;
    },
    async updateRole() {
      try {
        if (this.id_emplacement === '' || this.nom_emplacement === '') {
          alert('Veuillez remplir tous les champs')
          return
        }
        const body = {
          id_emplacement: this.id_emplacement,
          nom_emplacement: this.nom_emplacement,
        }
        await this.updateRowEmplacement(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updateRole', e)
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