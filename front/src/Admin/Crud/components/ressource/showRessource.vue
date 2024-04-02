<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              {{translate('ressource')}}
              <v-spacer />
              <v-btn @click="navigateToAdd" color="primary"> {{translate('ajouter')}}</v-btn>
              <v-spacer/>
              <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  :label="translate('chercher')"
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
              :headers="ressource.headers"
              :items="ressource.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_ressource"
              show-group-by
          >
          </v-data-table>
          <v-btn @click="deleteRow" color="primary">{{translate('supprimer')}}</v-btn>
          <v-btn @click="showUpdateDialog" color="primary">{{translate('modifier')}}</v-btn>
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
    ressource: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr']),
    ...mapGetters('crudStore',['getAllRessource','getAllRessourceColumn']),
    ...mapActions('crudStore',['getAllRessourceStore','getAllRessourceColumnStore']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['deleteRowRessource']),
    async loadData(){
      this.ressource.headers = [];
      this.ressource.stats = [];
      await this.getAllRessourceStore;
      await this.getAllRessourceColumnStore;
      for(var i = 0; i<this.getAllRessourceColumn.length; i++){
        this.ressource.headers.push({text: this.getAllRessourceColumn[i].column_name, value: this.getAllRessourceColumn[i].column_name, groupable: false});
      }
      this.ressource.stats = this.getAllRessource;
    },
    async navigateToAdd() {
      this.$router.push('/admin/crud/ressource/add');
    },
    async deleteRow() {
      try {
        if (this.selected.length === 0) {
          alert(this.translate('selectligne'))
          return
        }
        if (this.selected[0].nom_ressource === "default_RESSOURCE") {
          alert(this.translate('dsntdeltrressource'));
          return;
        }
        const body = {id_ressource: this.selected[0].id_ressource}
        await this.deleteRowRessource(body);
        await this.loadData();
      } catch (e) {
        console.log('error deleteRow', e)
      }
    },
    showUpdateDialog() {
      if (this.selected.length === 0) {
        alert(this.translate('selectligne'));
        return;
      }
      if (this.selected[0].nom_ressource === "default_RESSOURCE") {
        alert(this.translate('dsntdeltrressource'));
        return;
      }
      this.$router.push('/admin/crud/update/ressource/'+this.selected[0].id_ressource);
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>