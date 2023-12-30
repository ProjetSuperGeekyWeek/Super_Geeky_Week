<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Stand
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
              :headers="stand.headers"
              :items="stand.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_stand"
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
    stand: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllStand','getAllStandColumn']),
    ...mapActions(['getAllStandStore','getAllStandColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllStandStore;
      await this.getAllStandColumnStore;
      for(var i = 0; i<this.getAllStandColumn.length; i++){
        this.stand.headers.push({text: this.getAllStandColumn[i].column_name, value: this.getAllStandColumn[i].column_name, groupable: false});
      }
      this.stand.stats = this.getAllStand;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>