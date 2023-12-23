<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              EmplacementRessource
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
              :headers="role.headers"
              :items="role.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_role"
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
    role: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllEmplacementRessource','getAllEmplacementRessourceColumn']),
    ...mapActions(['getAllEmplacementRessourceStore','getAllEmplacementRessourceColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllEmplacementRessourceStore;
      await this.getAllEmplacementRessourceColumnStore;
      for(var i = 0; i<this.getAllEmplacementRessourceColumn.length; i++){
        this.role.headers.push({text: this.getAllEmplacementRessourceColumn[i].column_name, value: this.getAllEmplacementRessourceColumn[i].column_name, groupable: false});
      }
      this.role.stats = this.getAllEmplacementRessource;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>