<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_item">
    <input type="text" v-model="nom_item">
    <input type="number" v-model="stock_item">
    <input type="number" v-model="prix_item">
    <input type="text" v-model="image_item">
    <input type="text" v-model="description_item">
    <select name="selectPersonne" id="selectPersonne" v-model="id_personne">
      <option :value="personne.id_personne" v-for="personne in listPersonne" :key="personne.id_personne" :selected="personne.id_personne === id_personne">{{ personne.nom_personne }} - {{ personne.prenom_personne }}</option>
    </select>
    <select name="selectCalendrier" id="selectCalendrier" v-model="id_calendrier">
      <option :value="calendrier.id_calendrier" v-for="calendrier in listCalendrier" :key="calendrier.id_calendrier" :selected="calendrier.id_calendrier === id_calendrier">{{ calendrier.id_jour }}</option>
    </select>
    <button @click="updateRole">{{translate('valider')}}</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updateItem",
  components: {boutonRetourCrud},
  data: () => {
    return {
      id_item: 0,
      nom_item: '',
      stock_item: 0,
      prix_item: 0,
      image_item: '',
      description_item: '',
      id_personne: 0,
      id_calendrier: 0,

      list: [],
      listPersonne: [],
      listCalendrier: [],
      current: {},
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore', ['getAllItem', 'getAllPersonne', 'getAllCalendrier']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['updateRowItem']),
    async loadData() {
      this.listPersonne = this.getAllPersonne;
      this.listCalendrier = this.getAllCalendrier;

      this.id_item = this.$route.params.id;

      this.list = this.getAllItem;
      this.current = this.list.find(role => role.id_item === parseInt(this.id_item)) || {};

      this.nom_item = this.current.nom_item;
      this.stock_item = this.current.stock_item;
      this.prix_item = this.current.prix_item;
      this.image_item = this.current.image_item;
      this.description_item = this.current.description_item;
      this.id_personne = this.current.id_personne;
      this.id_calendrier = this.current.id_calendrier;
    },
    async updateRole() {
      try {
        if (this.id_item === '' || this.nom_item === '' || this.stock_item === '' || this.prix_item === '' || this.image_item === '' || this.description_item === '' || this.id_personne === '' || this.id_calendrier === '') {
          alert(this.translate('remplirtouschamps'))
          return
        }
        const body = { id_item: this.id_item, nom_item: this.nom_item, stock_item: this.stock_item, prix_item: this.prix_item, image_item: this.image_item, description_item: this.description_item, id_personne: this.id_personne, id_calendrier: this.id_calendrier }
        await this.updateRowItem(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updateItem', e)
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