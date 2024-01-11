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
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_panier"
              show-group-by
          >
          </v-data-table>
          <v-btn @click="deleteRow" color="primary">Supprimé</v-btn>
          <v-btn @click="showUpdateDialog" color="primary">Modifier</v-btn>
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
    ...mapGetters('crudStore',['getAllPanier','getAllPanierColumn']),
    ...mapActions('crudStore',['getAllPanierStore','getAllPanierColumnStore']),
  },
  methods: {
    ...mapActions('crudStore',['deleteRowPanier']),
    async loadData(){
      this.panier.headers = [];
      this.panier.stats = [];
      await this.getAllPanierStore;
      await this.getAllPanierColumnStore;
      for(var i = 0; i<this.getAllPanierColumn.length; i++){
        this.panier.headers.push({text: this.getAllPanierColumn[i].column_name, value: this.getAllPanierColumn[i].column_name, groupable: false});
      }
      this.panier.stats = this.getAllPanier;
    },
    async navigateToAdd() {
      this.$router.push('/admin/crud/panier/add');
    },
    async deleteRow() {
      try {
        if (this.selected.length === 0) {
          alert('Veuillez sélectionner une ligne')
          return
        }
        if (this.selected[0].nom_panier === "default_PANIER") {
          alert("Vous ne pouvez pas supprimer ce role");
          return;
        }
        const body = {id_panier: this.selected[0].id_panier}
        await this.deleteRowPanier(body);
        await this.loadData();
      } catch (e) {
        console.log('error deleteRow', e)
      }
    },
    showUpdateDialog() {
      if (this.selected.length === 0) {
        alert("Veuillez sélectionner une ligne");
        return;
      }
      if (this.selected[0].nom_panier === "default_PANIER") {
        alert("Vous ne pouvez pas supprimer ce role");
        return;
      }
      this.$router.push('/admin/crud/update/panier/' + this.selected[0].id_panier);
    }
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>