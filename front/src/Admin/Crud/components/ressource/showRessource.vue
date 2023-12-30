<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Ressource
              <v-spacer />
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
              :headers="ressource.headers"
              :items="ressource.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_ressource"
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
    ressource: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllRessource','getAllRessourceColumn']),
    ...mapActions(['getAllRessourceStore','getAllRessourceColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllRessourceStore;
      await this.getAllRessourceColumnStore;
      for(var i = 0; i<this.getAllRessourceColumn.length; i++){
        this.ressource.headers.push({text: this.getAllRessourceColumn[i].column_name, value: this.getAllRessourceColumn[i].column_name, groupable: false});
      }
      this.ressource.stats = this.getAllRessource;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>