<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_panier">
    <input type="text" v-model="nom_panier" :placeholder="translate('paniername')">
    <button @click="updateRole">{{translate('valider')}}</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updatePanier",
  components: {
    boutonRetourCrud
  },
  data: () => {
    return {
      id_panier: 0,
      nom_panier: '',

      list: [],
      current: {},
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
    ...mapGetters('crudStore', ['getAllPanier']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['updateRowPanier']),
    async loadData() {
      this.id_panier = this.$route.params.id;

      this.list = this.getAllPanier;
      this.current = this.list.find(role => role.id_panier === parseInt(this.id_panier)) || {};

      this.nom_panier = this.current.nom_panier;
    },
    async updateRole() {
      try {
        if (this.id_panier === '' || this.nom_panier === '') {
          alert(this.translate('remplirtouschamps'))
          return
        }
        const body = { id_panier: this.id_panier, nom_panier: this.nom_panier }
        await this.updateRowPanier(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updatePanier', e)
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