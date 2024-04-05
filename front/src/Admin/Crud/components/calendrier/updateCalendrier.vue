<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_calendrier">
    <select name="selectItem" id="selectItem" v-model="id_jour">
      <option :value="jour.id_jour" v-for="jour in listJour" :key="jour.id_jour" :selected="jour.id_jour === id_jour">{{ jour.date_calendrier }}</option>
    </select>
    <input type="time" v-model="horaire_debut">
    <input type="time" v-model="horaire_fin">
    <button @click="updateRole">{{translate('valider')}}</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updateCalendrier",
  components: {boutonRetourCrud},
  data: () => {
    return {
      id_calendrier: 0,
      id_jour: 0,
      horaire_debut: '',
      horaire_fin: '',
      list: [],
      listJour: [],
      current: {},
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore', ['getAllCalendrier', 'getAllJour']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['updateRowCalendrier','getAllJourStore']),
    async loadData() {
      await this.getAllJourStore;
      this.id_calendrier = this.$route.params.id;
      this.list = this.getAllCalendrier;
      this.current = this.list.find(role => role.id_calendrier === parseInt(this.id_calendrier)) || {};
      this.id_jour = this.current.id_jour;
      this.horaire_debut = this.current.horaire_debut;
      this.horaire_fin = this.current.horaire_fin;
      this.listJour = this.getAllJour;
    },
    async updateRole() {
      try {
        if (this.id_jour === '' || this.horaire_debut === '' || this.horaire_fin === '') {
          alert(this.translate('remplirtouschamps'))
          return
        }
        const body = { id_calendrier: this.id_calendrier, id_jour: this.id_jour, horaire_debut: this.horaire_debut, horaire_fin: this.horaire_fin }
        await this.updateRowCalendrier(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updateCalendrier', e)
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