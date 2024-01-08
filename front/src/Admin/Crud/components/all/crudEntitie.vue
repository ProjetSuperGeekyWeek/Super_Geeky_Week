<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              {{ title }}
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
              :headers="value.headers"
              :items="value.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'crudEntitie',
  props: {
    title: String,
    forData: String,
  },
  data: () => ({
    selected: [],
    search: '',
    value: {
      headers: [],
      stats: []
    },
  }),
  computed: {
    ...mapGetters('crudStore',['getAll','getAllColumn']),
  },
  methods: {
    ...mapActions('crudStore',['getAllStore','getAllColumnStore']),
    async loadData(){
      await this.getAllStore(this.forData);
      await this.getAllColumnStore(this.forData);
      for(var i = 0; i<this.getAllColumn.length; i++){
        this.value.headers.push({text: this.getAllColumn[i].column_name, value: this.getAllColumn[i].column_name, groupable: false});
      }
      this.value.stats = this.getAll;
      console.log(this.value.headers, 90909090, this.title)
      console.log(this.value.stats, 80808080, this.title)
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>