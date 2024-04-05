<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              {{translate('acheter')}}
              <v-spacer />
              <v-btn @click="navigateToAdd" color="primary">{{translate('ajouter')}}</v-btn>
              <v-spacer />
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
        <v-btn @click="deleteRow" color="primary">{{translate('supprimer')}}</v-btn>
        <v-btn @click="showUpdateDialog" color="primary">{{translate('modifier')}}</v-btn>
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
    acheter: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore',['getAllAcheters','getAllAchetersColumn']),
    ...mapActions('crudStore',['getAllAcheterStore','getAllAcheterColumnStore']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['deleteRowAcheter']),
    async loadData(){
      this.acheter.headers = [];
      this.acheter.stats = [];
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
    async deleteRow() {
      if (this.selected.length === 0) {
        alert(this.translate('selectligne'));
        return;
      }
      const body = {
        id_acheter: this.selected[0].id_acheter
      }
      await this.deleteRowAcheter(body)
      await this.loadData();
    },
    showUpdateDialog() {
      if (this.selected.length === 0) {
        alert(this.translate('selectligne'));
        return;
      }
      this.$router.push('/admin/crud/update/acheter/'+this.selected[0].id_acheter);
    },
  },
  async mounted() {
    await this.loadData();
  },//
};
</script>

<style>

</style>