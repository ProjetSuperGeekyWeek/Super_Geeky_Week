<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Item
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
              :headers="item.headers"
              :items="item.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_item"
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
    item: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllItem','getAllItemColumn']),
    ...mapActions(['getAllItemStore','getAllItemColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllItemStore;
      await this.getAllItemColumnStore;
      for(var i = 0; i<this.getAllItemColumn.length; i++){
        this.item.headers.push({text: this.getAllItemColumn[i].column_name, value: this.getAllItemColumn[i].column_name, groupable: false});
      }
      this.item.stats = this.getAllItem;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>