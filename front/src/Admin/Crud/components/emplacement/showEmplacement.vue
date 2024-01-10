<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Emplacement
              <v-spacer />
              <v-btn @click="navigateToAdd" color="primary">Ajouter</v-btn>
              <v-spacer/>
              <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="chercher"
                  single-line
                  hide-details
              >
                <template v-slot:append-outer>
                  <v-icon
                      @click="search=''"
                  >
                    mdi-close
                  </v-icon>
                </template>
              </v-text-field>
            </v-card-title>
          </v-card>


          <v-data-table
              v-model="selected"
              :headers="emplacement.headers"
              :items="emplacement.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_emplacement"
              show-group-by
          >
          </v-data-table>
        </v-container>
        <v-btn @click="deleteRow" color="primary">Supprimé</v-btn>
        <v-btn @click="showUpdateDialog" color="primary">Modifier</v-btn>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'crudAcheter',
  data: () => ({
    selected: [],
    search: '',
    emplacement: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters('crudStore',['getAllEmplacement','getAllEmplacementColumn']),
    ...mapActions('crudStore',['getAllEmplacementStore','getAllEmplacementColumnStore']),
  },
  methods: {
    ...mapActions('crudStore',['deleteRowEmplacement']),
    async loadData(){
      this.emplacement.headers = [];
      this.emplacement.stats = [];
      await this.getAllEmplacementStore;
      await this.getAllEmplacementColumnStore;
      for(var i = 0; i<this.getAllEmplacementColumn.length; i++){
        this.emplacement.headers.push({text: this.getAllEmplacementColumn[i].column_name, value: this.getAllEmplacementColumn[i].column_name, groupable: false});
      }
      this.emplacement.stats = this.getAllEmplacement;
    },
    async navigateToAdd() {
      this.$router.push('/admin/crud/emplacement/add');
    },
    async deleteRow(){
      try{
        if(this.selected.length === 0){
          alert('Veuillez sélectionner une ligne')
          return
        }
        if(this.selected[0].nom_emplacement === 'default_EMPLACEMENT'){
          alert('Veuillez sélectionner une autre')
          return
        }
        const body = {id_emplacement: this.selected[0].id_emplacement}
        await this.deleteRowEmplacement(body);
        await this.loadData();
      }catch (e) {
        console.log('error deleteRow', e)
      }
    },
    async showUpdateDialog(){
      if(this.selected.length === 0){
        alert('Veuillez sélectionner une ligne')
        return
      }
      if(this.selected[0].nom_emplacement === 'default_EMPLACEMENT'){
        alert('Veuillez sélectionner une autre')
        return
      }
      this.$router.push('/admin/crud/update/emplacement/'+this.selected[0].id_emplacement);
    }
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>