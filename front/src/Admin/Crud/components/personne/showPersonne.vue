<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Personne
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
              :headers="personne.headers"
              :items="personne.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_personne"
              show-group-by
          >
          </v-data-table>
          <v-btn @click="deleteRow" color="primary">Supprimé</v-btn>
          <v-btn @click="showUpdateDialog" color="primary">Modifier</v-btn>
        </v-container>
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
    personne: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters('crudStore',['getAllPersonne','getAllPersonneColumn']),
    ...mapActions('crudStore',['getAllPersonneStore','getAllPersonneColumnStore']),
  },
  methods: {
    ...mapActions('crudStore',['deleteRowPersonne']),
    async loadData(){
      this.personne.headers = [];
      this.personne.stats = [];
      await this.getAllPersonneStore;
      await this.getAllPersonneColumnStore;
      for(var i = 0; i<this.getAllPersonneColumn.length; i++){
        this.personne.headers.push({text: this.getAllPersonneColumn[i].column_name, value: this.getAllPersonneColumn[i].column_name, groupable: false});
      }
      this.personne.stats = this.getAllPersonne;
    },
    async navigateToAdd() {
      this.$router.push('/admin/crud/personne/add');
    },
    async deleteRow() {
      try {
        if (this.selected.length === 0) {
          alert('Veuillez sélectionner une ligne')
          return
        }
        if (this.selected[0].nom_personne === "default_PERSONNE") {
          alert("Vous ne pouvez pas supprimer ce rôle");
          return;
        }
        const body = {id_personne: this.selected[0].id_personne}
        await this.deleteRowPersonne(body);
        await this.loadData();
      } catch (e) {
        console.log('error deleteRow', e)
      }
    },
    showUpdateDialog() {
      if (this.selected.length === 0) {
        alert("Veuillez sélectionner une ligne");
        return;
      }
      if (this.selected[0].nom_personne === "default_PERSONNE") {
        alert("Vous ne pouvez pas supprimer ce rôle");
        return;
      }
      this.$router.push('/admin/crud/update/personne/' + this.selected[0].id_personne);
    }
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>