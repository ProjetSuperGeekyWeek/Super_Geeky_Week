<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Creneau
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
              :headers="creneau.headers"
              :items="creneau.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_creneau"
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
  name: 'crudCreneau',
  data: () => ({
    selected: [],
    search: '',
    creneau: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllCreneau','getAllCreneauColumn']),
    ...mapActions(['getAllCreneauStore','getAllCreneauColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllCreneauStore;
      await this.getAllCreneauColumnStore;
      for(var i = 0; i<this.getAllCreneauColumn.length; i++){
        this.creneau.headers.push({text: this.getAllCreneauColumn[i].column_name, value: this.getAllCreneauColumn[i].column_name, groupable: false});
      }
      this.creneau.stats = this.getAllCreneau;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>