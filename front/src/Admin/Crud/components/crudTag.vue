<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Tag
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
              :headers="tag.headers"
              :items="tag.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_tag"
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
    tag: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllTag','getAllTagColumn']),
    ...mapActions(['getAllTagStore','getAllTagColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllTagStore;
      await this.getAllTagColumnStore;
      for(var i = 0; i<this.getAllTagColumn.length; i++){
        this.tag.headers.push({text: this.getAllTagColumn[i].column_name, value: this.getAllTagColumn[i].column_name, groupable: false});
      }
      this.tag.stats = this.getAllTag;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>