<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Personne
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
              :headers="personne.headers"
              :items="personne.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_personne"
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
    personne: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllPersonne','getAllPersonneColumn']),
    ...mapActions(['getAllPersonneStore','getAllPersonneColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllPersonneStore;
      await this.getAllPersonneColumnStore;
      for(var i = 0; i<this.getAllPersonneColumn.length; i++){
        this.personne.headers.push({text: this.getAllPersonneColumn[i].column_name, value: this.getAllPersonneColumn[i].column_name, groupable: false});
      }
      this.personne.stats = this.getAllPersonne;
      console.log(this.personne.headers)
      console.log(this.personne.stats)
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>