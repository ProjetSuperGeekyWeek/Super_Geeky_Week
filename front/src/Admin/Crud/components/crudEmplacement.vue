<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Emplacement
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
              :headers="emplacement.headers"
              :items="emplacement.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_emplacement"
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
    emplacement: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllEmplacement','getAllEmplacementColumn']),
    ...mapActions(['getAllEmplacementStore','getAllEmplacementColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllEmplacementStore;
      await this.getAllEmplacementColumnStore;
      for(var i = 0; i<this.getAllEmplacementColumn.length; i++){
        this.emplacement.headers.push({text: this.getAllEmplacementColumn[i].column_name, value: this.getAllEmplacementColumn[i].column_name, groupable: false});
      }
      this.emplacement.stats = this.getAllEmplacement;
      console.log(this.emplacement.headers)
      console.log(this.emplacement.stats)
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>