<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              {{translate('calendrier')}}
              <v-spacer />
              <v-btn @click="navigateToAdd" color="primary">{{translate('ajouter')}}</v-btn>
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
              :headers="calendrier.headers"
              :items="calendrier.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_calendrier"
              show-group-by
          >
          </v-data-table>
          <!--<v-btn @click="deleteRow" color="primary">{{translate('supprimer')}}</v-btn>-->
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
    calendrier: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr']),
    ...mapGetters('crudStore',['getAllCalendrier','getAllCalendrierColumn']),
    ...mapActions('crudStore',['getAllCalendrierStore','getAllCalendrierColumnStore']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['deleteRowCalendrier']),
    async loadData(){
      this.calendrier.headers = [];
      this.calendrier.stats = [];
      await this.getAllCalendrierStore;
      await this.getAllCalendrierColumnStore;
      for(var i = 0; i<this.getAllCalendrierColumn.length; i++){
        this.calendrier.headers.push({text: this.getAllCalendrierColumn[i].column_name, value: this.getAllCalendrierColumn[i].column_name, groupable: false});
      }
      this.calendrier.stats = this.getAllCalendrier;
    },
    async navigateToAdd() {
      this.$router.push('/admin/crud/calendrier/add');
    },
    /*async deleteRow() {
      if (this.selected.length === 0) {
        alert(this.translate('selectligne'));
        return;
      }
      const body = {
        id_calendrier: this.selected[0].id_calendrier
      }
      await this.deleteRowCalendrier(body)
      await this.loadData();
    },*/
    showUpdateDialog() {
      if (this.selected.length === 0) {
        alert(this.translate('selectligne'));
        return;
      }
      this.$router.push('/admin/crud/update/calendrier/'+this.selected[0].id_calendrier);
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>