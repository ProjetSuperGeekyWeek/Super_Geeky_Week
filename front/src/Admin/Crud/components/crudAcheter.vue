<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Notes
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
              :items-per-page="5"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id"
              show-group-by
          >
          </v-data-table>

          moyenne sélection: {{average}}
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
    ...mapGetters(['getAllAcheters']),
    ...mapActions(['getAllAcheterStore']),
    average() {
      if (this.selected.length === 0) {
        return 0
      }
      let avg = 0
      this.selected.forEach(e => { avg += e.ratings})
      return avg/this.selected.length
    },

  },
  methods: {
    async loadData(){
      await this.getAllAcheterStore;
      this.stats = await this.getAllAcheters;
      console.log(this.stats,30)
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>