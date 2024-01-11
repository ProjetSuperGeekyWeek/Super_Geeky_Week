<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Evenement
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
              :headers="evenement.headers"
              :items="evenement.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_evenement"
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
    evenement: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters('crudStore',['getAllEvenement','getAllEvenementColumn']),
    ...mapActions('crudStore',['getAllEvenementStore','getAllEvenementColumnStore']),
  },
  methods: {
    ...mapActions('crudStore',['deleteRowEvenement']),
    async loadData(){
      await this.getAllEvenementStore;
      await this.getAllEvenementColumnStore;
      for(var i = 0; i<this.getAllEvenementColumn.length; i++){
        this.evenement.headers.push({text: this.getAllEvenementColumn[i].column_name, value: this.getAllEvenementColumn[i].column_name, groupable: false});
      }
      this.evenement.stats = this.getAllEvenement;
    },
    async navigateToAdd() {
      this.$router.push('/admin/crud/evenement/add');
    },
    async deleteRow() {
      try {
        if (this.selected.length === 0) {
          alert('Veuillez sélectionner une ligne')
          return
        }
        if (this.selected[0].nom_evenement === "default_EVENEMENT") {
          alert("Vous ne pouvez pas supprimer cet evenement");
          return;
        }
        const body = {
          id_evenement: this.selected[0].id_evenement
        }
        await this.deleteRowEvenement(body);
        await this.loadData();
      } catch (e) {
        console.log('error deleteRow', e)
      }
    },
    async showUpdateDialog() {
      try {
        if (this.selected.length === 0) {
          alert('Veuillez sélectionner une ligne')
          return
        }
        if (this.selected[0].nom_evenement === "default_EVENEMENT") {
          alert("Vous ne pouvez pas supprimer cet evenement");
          return;
        }
        this.$router.push('/admin/crud/update/evenement/' + this.selected[0].id_evenement)
      } catch (e) {
        console.log('error showUpdateDialog', e)
      }
    }
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>