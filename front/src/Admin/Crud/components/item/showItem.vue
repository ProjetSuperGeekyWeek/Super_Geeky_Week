<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Item
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
              :headers="item.headers"
              :items="item.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_item"
              show-group-by
          >
          </v-data-table>
        </v-container>
        <v-btn @click="deleteRow" color="primary">Supprimé</v-btn>
        <v-btn @click="showUpdateDialog" color="primary">Modifier</v-btn>
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
    item: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters('crudStore',['getAllItem','getAllItemColumn']),
    ...mapActions('crudStore',['getAllItemStore','getAllItemColumnStore']),
  },
  methods: {
    ...mapActions('crudStore',['deleteRowItem']),
    async loadData(){
      this.item.headers = [];
      this.item.stats = [];
      await this.getAllItemStore;
      await this.getAllItemColumnStore;
      for(var i = 0; i<this.getAllItemColumn.length; i++){
        this.item.headers.push({text: this.getAllItemColumn[i].column_name, value: this.getAllItemColumn[i].column_name, groupable: false});
      }
      this.item.stats = this.getAllItem;
    },
    async navigateToAdd() {
      await this.$router.push('/admin/crud/item/add');
    },
    async deleteRow() {
      try {
        if (this.selected.length === 0) {
          alert('Veuillez sélectionner une ligne')
          return
        }
        if (this.selected[0].nom_item === "default_ITEM") {
          alert("Vous ne pouvez pas supprimer cet item");
          return;
        }
        const body = {id_item: this.selected[0].id_item, id_personne: this.selected[0].id_personne, id_calendrier: this.selected[0].id_calendrier}
        await this.deleteRowItem(body);
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
      if (this.selected[0].nom_item === "default_ITEM") {
        alert("Vous ne pouvez pas supprimer cet item");
        return;
      }
      this.$router.push('/admin/crud/update/item/' + this.selected[0].id_item);
    }
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>