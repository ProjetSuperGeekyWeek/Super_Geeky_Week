<template>
  <div class="add">
    <input type="date" placeholder="Date" v-model="date_calendrier">
    <input type="time" placeholder="Horaire début" v-model="horaire_debut">
    <input type="time" placeholder="Horaire fin" v-model="horaire_fin">
    <input type="button" value="Valider" @click="addNewQrCode">
    <input type="button" value="retour" @click="returnCrud">
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default{
  name: 'addCalendrierCrud',
  data: () => ({
    date_calendrier: '',
    horaire_debut: '',
    horaire_fin: '',
  }),
  methods: {
    ...mapActions('crudStore',['addNewCalendrierStore']),
    async addNewQrCode() {
      try{
        if(this.date_calendrier === '' || this.horaire_debut === '' || this.horaire_fin === ''){
          return
        }
        const body = {date_calendrier:this.date_calendrier,horaire_debut:this.horaire_debut,horaire_fin:this.horaire_fin}
        await this.addNewCalendrierStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addCalendrier', e)
      }
    },
    async returnCrud() {
      this.$router.push('/admin/crud')
    },
  },
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