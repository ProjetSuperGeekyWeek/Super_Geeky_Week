<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              {{translate('PersonneTag')}}
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
              :headers="personneTag.headers"
              :items="personneTag.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key=""
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
    personneTag: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore',['getAllPersonneTag','getAllPersonneTagColumn']),
    ...mapActions('crudStore',['getAllPersonneTagStore','getAllPersonneTagColumnStore']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    async loadData(){
      await this.getAllPersonneTagStore;
      await this.getAllPersonneTagColumnStore;
      for(var i = 0; i<this.getAllPersonneTagColumn.length; i++){
        this.personneTag.headers.push({text: this.getAllPersonneTagColumn[i].column_name, value: this.getAllPersonneTagColumn[i].column_name, groupable: false});
      }
      this.personneTag.stats = this.getAllPersonneTag;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>