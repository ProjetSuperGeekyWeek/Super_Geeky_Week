<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              {{translate('lignepanier')}}
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
              :headers="lignePanier.headers"
              :items="lignePanier.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_lignePanier"
              show-group-by
          >
          </v-data-table>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: 'crudAcheter',
  data: () => ({
    selected: [],
    search: '',
    lignePanier: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore',['getAllLignePanier','getAllLignePanierColumn']),
    ...mapActions('crudStore',['getAllLignePanierStore','getAllLignePanierColumnStore']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    async loadData(){
      await this.getAllLignePanierStore;
      await this.getAllLignePanierColumnStore;
      for(var i = 0; i<this.getAllLignePanierColumn.length; i++){
        this.lignePanier.headers.push({text: this.getAllLignePanierColumn[i].column_name, value: this.getAllLignePanierColumn[i].column_name, groupable: false});
      }
      this.lignePanier.stats = this.getAllLignePanier;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>