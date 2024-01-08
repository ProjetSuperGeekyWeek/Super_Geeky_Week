<template>
  <div class="add">
    <input type="text" placeholder="Nom" v-model="nom_item">
    <input type="number" placeholder="Stock" v-model="stock_item">
    <input type="number" placeholder="Prix" v-model="prix_item">
    <input type="text" placeholder="Image" v-model="image_item">
    <input type="text" placeholder="Description" v-model="description_item" maxlength="254">
    <select name="selectPersonne" id="selectPersonne" v-model="id_personne">
      <option v-for="personne in listPersonnes" :key="personne.id_personne" :value="personne.id_personne">{{ personne.nom_personne }} - {{ personne.prenom_personne }}</option>
    </select>
    <select name="selectCalendrier" id="selectCalendrier" v-model="id_calendrier">
      <option v-for="calendrier in listCalendriers" :key="calendrier.id_calendrier" :value="calendrier.id_calendrier">{{ calendrier.date_calendrier }}</option>
    </select>
    <input type="button" value="Ajouter" @click="addNewRole">
    <input type="button" value="retour" @click="returnCrud">
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default{
  name: 'addItemCrud',
  data: () => ({
    nom_item: '',
    stock_item: 0,
    prix_item: 0,
    image_item: '',
    description_item: '',
    id_personne: 0,
    id_calendrier: 0,
    listCalendriers: [],
    listPersonnes: [],
  }),
  computed: {
    ...mapGetters('crudStore',['getAllPersonne', 'getAllCalendrier'])
  },
  methods: {
    ...mapActions('crudStore',['addNewItemStore','getAllPersonneStore']),
    async loadData(){
      this.listCalendriers = this.getAllCalendrier;
      this.listPersonnes = this.getAllPersonne;
    },
    async addNewRole() {
      try{
        if(this.nom_item === '' || this.stock_item === null || this.prix_item === null || this.image_item === '' || this.description_item === '' || this.id_personne === null || this.id_calendrier === null){
          return
        }
        await this.addNewItemStore(this.nom_item,this.stock_item,this.prix_item,this.image_item,this.description_item,this.id_personne,this.id_calendrier);
        //console.log(this.nom_item,this.stock_item,this.prix_item,this.image_item,this.description_item,this.id_personne,this.id_calendrier)
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addItem', e)
      }
    },
    async returnCrud() {
      this.$router.push('/admin/crud')
    },
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