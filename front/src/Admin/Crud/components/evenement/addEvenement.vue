<template>
  <div class="add">
    <input type="text" :placeholder="translate('nomevent')" v-model="nom_evenement">
    <input type="text" :placeholder="translate('Description')" v-model="description_evenement">
    <input type="number" :placeholder="translate('nbrplace')" v-model="nb_place">
    <input type="text" placeholder="Image" v-model="image_evenement">
    <select name="selectPersonne" id="selectPersonne" v-model="id_personne">
      <option v-for="personne in listPersonne" :key="personne.id_personne" :value="personne.id_personne">{{ personne.nom_personne }} - {{ personne.prenom_personne }}</option>
    </select>
    <select name="selectEmplacement" id="selectEmplacement" v-model="id_emplacement">
      <option v-for="emplacement in listEmplacement" :key="emplacement.id_emplacement" :value="emplacement.id_emplacement">{{ emplacement.nom_emplacement }}</option>
    </select>
    <input type="button" :value="translate('ajouter')" @click="addNewRole">
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addItemCrud',
  components: {boutonRetourCrud},
  data: () => ({
    nom_evenement: '',
    description_evenement: '',
    nb_place: 0,
    image_evenement: '',
    id_personne:1,
    id_emplacement:1,
    listPersonne: [],
    listEmplacement: []
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore',['getAllPersonne', 'getAllEmplacement'])
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['addNewEvenementStore']),
    async loadData(){
      this.listPersonne = this.getAllPersonne;
      this.listEmplacement = this.getAllEmplacement;
    },
    async addNewRole() {
      try{
        if(this.nom_evenement === '' || this.description_evenement === '' || this.nb_place === '' || this.image_evenement === '' || this.id_personne === null || this.id_emplacement === null){
          return
        }
        const body = {nom_evenement:this.nom_evenement,description_evenement:this.description_evenement,nb_place:this.nb_place,image_evenement:this.image_evenement,id_personne:this.id_personne,id_emplacement:this.id_emplacement}
        await this.addNewEvenementStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addEvenement', e)
      }
    }
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

.add select{
  border: 1px black solid;
}
</style>