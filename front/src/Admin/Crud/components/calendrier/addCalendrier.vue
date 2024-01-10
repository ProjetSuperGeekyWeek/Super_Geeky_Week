<template>
  <div class="add">
    <select name="selectJour" id="selectJour" v-model="id_jour">
      <option :value="jour.id_jour" v-for="jour in listJour" :key="jour.id_jour">{{ jour.date_calendrier}}</option>
    </select>
    <input type="time" placeholder="Horaire début" v-model="horaire_debut">
    <input type="time" placeholder="Horaire fin" v-model="horaire_fin">
    <input type="button" value="Valider" @click="addNewQrCode">
    <input type="button" value="retour" @click="returnCrud">
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default{
  name: 'addCalendrierCrud',
  data: () => ({
    id_jour: 1,
    horaire_debut: '',
    horaire_fin: '',
    listJour: [],
  }),
  computed:{
    ...mapGetters('crudStore', ['getAllJour'])
  },
  methods: {
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
</style>