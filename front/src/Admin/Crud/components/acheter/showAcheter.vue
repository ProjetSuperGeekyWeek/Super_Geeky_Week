<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Acheter
              <v-spacer />
              <v-btn @click="navigateToAdd" color="primary">Ajouter</v-btn>
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
              :headers="acheter.headers"
              :items="acheter.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_acheter"
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
    acheter: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters('crudStore',['getAllAcheters','getAllAchetersColumn']),
    ...mapActions('crudStore',['getAllAcheterStore','getAllAcheterColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllAcheterStore;
      await this.getAllAcheterColumnStore;
      for(var i = 0; i<this.getAllAchetersColumn.length; i++){
        this.acheter.headers.push({text: this.getAllAchetersColumn[i].column_name, value: this.getAllAchetersColumn[i].column_name, groupable: false});
      }
      this.acheter.stats = this.getAllAcheters;
    },
    async navigateToAdd() {
      this.$router.push('/admin/crud/acheter/add');
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>