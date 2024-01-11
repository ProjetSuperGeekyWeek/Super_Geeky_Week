<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_evenement">
    <input type="text" v-model="nom_evenement">
    <input type="text" v-model="description_evenement" maxlength="254">
    <input type="number" v-model="nb_place">
    <input type="text" v-model="image_evenement">
    <select name="selectPersonne" id="selectPersonne" v-model="id_personne">
      <option :value="personne.id_personne" v-for="personne in listPersonne" :key="personne.id_personne" :selected="personne.id_personne === id_personne">{{ personne.nom_personne }}</option>
    </select>
    <select name="selectEmplacement" id="selectEmplacement" v-model="id_emplacement">
      <option :value="emplacement.id_emplacement" v-for="emplacement in listEmplacement" :key="emplacement.id_emplacement" :selected="emplacement.id_emplacement === id_emplacement">{{ emplacement.nom_emplacement }}</option>
    </select>
    <button @click="updateRole">Valider</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updateEvenement",
  components: {
    boutonRetourCrud
  },
  data: () => {
    return {
      id_evenement: 0,
      nom_evenement: '',
      description_evenement: '',
      nb_place: 0,
      image_evenement: '',
      id_personne: 0,
      id_emplacement: 0,

      list: [],
      listPersonne: [],
      listEmplacement: [],
      current: {},
    };
  },
  computed: {
    ...mapGetters('crudStore', ['getAllEvenement', 'getAllPersonne', 'getAllEmplacement']),
  },
  methods: {
    ...mapActions('crudStore', ['updateRowEvenement']),
    async loadData() {
      this.listPersonne = this.getAllPersonne;
      this.listEmplacement = this.getAllEmplacement;

      this.id_evenement = this.$route.params.id;

      this.list = this.getAllEvenement;
      this.current = this.list.find(role => role.id_evenement === parseInt(this.id_evenement)) || {};

      this.nom_evenement = this.current.nom_evenement;
      this.description_evenement = this.current.description_evenement;
      this.nb_place = this.current.nb_place;
      this.image_evenement = this.current.image_evenement;
      this.id_personne = this.current.id_personne;
      this.id_emplacement = this.current.id_emplacement;
    },
    async updateRole() {
      try {
        if (this.id_evenement === '' || this.nom_evenement === '' || this.description_evenement === '' || this.nb_place === '' || this.image_evenement === '') {
          alert('Veuillez remplir tous les champs')
          return
        }
        const body = { id_evenement: this.id_evenement, nom_evenement: this.nom_evenement, description_evenement: this.description_evenement, nb_place: this.nb_place, image_evenement: this.image_evenement, id_personne:this.id_personne, id_emplacement:this.id_emplacement }
        await this.updateRowEvenement(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updateEvenement', e)
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