<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Calendrier
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
              :headers="calendrier.headers"
              :items="calendrier.stats"
              :items-per-page="5"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_calendrier"
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
    calendrier: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters('crudStore',['getAllCalendrier','getAllCalendrierColumn']),
    ...mapActions('crudStore',['getAllCalendrierStore','getAllCalendrierColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllCalendrierStore;
      await this.getAllCalendrierColumnStore;
      for(var i = 0; i<this.getAllCalendrierColumn.length; i++){
        this.calendrier.headers.push({text: this.getAllCalendrierColumn[i].column_name, value: this.getAllCalendrierColumn[i].column_name, groupable: false});
      }
      this.calendrier.stats = this.getAllCalendrier;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>