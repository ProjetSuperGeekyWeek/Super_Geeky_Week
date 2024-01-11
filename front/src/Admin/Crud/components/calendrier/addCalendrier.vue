<template>
  <div class="add">
    <select name="selectJour" id="selectJour" v-model="id_jour">
      <option :value="jour.id_jour" v-for="jour in listJour" :key="jour.id_jour">{{ jour.date_calendrier}}</option>
    </select>
    <input type="time" :placeholder="translate('hordeb')" v-model="horaire_debut">
    <input type="time" :placeholder="translate('horfin')" v-model="horaire_fin">
    <input type="button" :value="translate('ajouter')" @click="addNewQrCode">
    <boutonRetourCrud/>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addCalendrierCrud',
  components: {boutonRetourCrud},
  data: () => ({
    id_jour: 1,
    horaire_debut: '',
    horaire_fin: '',
    listJour: [],
  }),
  computed:{
    ...mapState(['lang', 'en', 'fr']),
    ...mapGetters('crudStore', ['getAllJour'])
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['addNewCalendrierStore', 'getAllJourStore']),
    async addNewQrCode() {
      try{
        if(this.id_jour === '' || this.horaire_debut === '' || this.horaire_fin === ''){
          return
        }
        const body = {id_jour:this.id_jour,horaire_debut:this.horaire_debut,horaire_fin:this.horaire_fin}
        await this.addNewCalendrierStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addCalendrier', e)
      }
    },
    async loadData(){
      await this.getAllJourStore()
      this.listJour = this.getAllJour;
      console.log(this.listJour, "listJour")
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
</style>