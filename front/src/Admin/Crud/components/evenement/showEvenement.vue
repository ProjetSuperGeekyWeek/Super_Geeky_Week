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
              :items-per-page="5"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_evenement"
              show-group-by
          >
          </v-data-table>
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
    evenement: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllEvenement','getAllEvenementColumn']),
    ...mapActions(['getAllEvenementStore','getAllEvenementColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllEvenementStore;
      await this.getAllEvenementColumnStore;
      for(var i = 0; i<this.getAllEvenementColumn.length; i++){
        this.evenement.headers.push({text: this.getAllEvenementColumn[i].column_name, value: this.getAllEvenementColumn[i].column_name, groupable: false});
      }
      this.evenement.stats = this.getAllEvenement;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>