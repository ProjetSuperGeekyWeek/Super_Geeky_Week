<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Panier
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
              :headers="panier.headers"
              :items="panier.stats"
              :items-per-page="5"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_panier"
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
    panier: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllPanier','getAllPanierColumn']),
    ...mapActions(['getAllPanierStore','getAllPanierColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllPanierStore;
      await this.getAllPanierColumnStore;
      for(var i = 0; i<this.getAllPanierColumn.length; i++){
        this.panier.headers.push({text: this.getAllPanierColumn[i].column_name, value: this.getAllPanierColumn[i].column_name, groupable: false});
      }
      this.panier.stats = this.getAllPanier;
    },
  },
  async navigateToAdd() {
    this.$router.push('/admin/crud/panier/add');
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>