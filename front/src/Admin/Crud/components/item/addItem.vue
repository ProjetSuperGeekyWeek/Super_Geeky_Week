<template>
  <div class="add">
    <input type="text" :placeholder="translate('nom')" v-model="nom_item">
    <input type="number" :placeholder="translate('Stock')" v-model="stock_item">
    <input type="number" :placeholder="translate('prix2')" v-model="prix_item">
    <input type="text" placeholder="Image" v-model="image_item">
    <input type="text" :placeholder="translate('Description')" v-model="description_item" maxlength="254">
    <select name="selectPersonne" id="selectPersonne" v-model="id_personne">
      <option v-for="personne in listPersonnes" :key="personne.id_personne" :value="personne.id_personne">{{ personne.nom_personne }} - {{ personne.prenom_personne }}</option>
    </select>
    <select name="selectCalendrier" id="selectCalendrier" v-model="id_jour">
      <option v-for="jour in listjour" :key="jour.id_jour" :value="jour.id_jour">{{ jour.date_calendrier }}</option>
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
    nom_item: '',
    stock_item: 0,
    prix_item: 0,
    image_item: '',
    description_item: '',
    id_personne: 1,
    id_jour: 1,
    listjour: [],
    listPersonnes: [],
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore',['getAllPersonne', 'getAllJour'])
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['addNewItemStore','getAllPersonneStore', 'getAllJourStore']),
    async loadData(){
      await this.getAllJourStore()
      await this.getAllPersonneStore()
      this.listjour = this.getAllJour;
      this.listPersonnes = this.getAllPersonne;
      console.log(this.listjour, 'liste jours add')
    },
    async addNewRole() {
      try{
        if(this.nom_item === '' || this.stock_item === null || this.prix_item === null || this.image_item === '' || this.description_item === '' || this.id_personne === null || this.id_jour === null){
          return
        }
        const body = {nom_item:this.nom_item,stock_item:this.stock_item,prix_item:this.prix_item,image_item:this.image_item,description_item:this.description_item,id_personne:this.id_personne,id_jour:this.id_jour}
        await this.addNewItemStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addItem', e)
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