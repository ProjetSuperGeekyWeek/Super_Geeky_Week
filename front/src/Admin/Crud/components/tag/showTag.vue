<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Tag
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
              :headers="tag.headers"
              :items="tag.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_tag"
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
    tag: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr']),
    ...mapGetters('crudStore',['getAllTag','getAllTagColumn']),
    ...mapActions('crudStore',['getAllTagStore','getAllTagColumnStore']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['deleteRowTag']),
    async loadData(){
      this.tag.headers = [];
      this.tag.stats = [];
      await this.getAllTagStore;
      await this.getAllTagColumnStore;
      for(var i = 0; i<this.getAllTagColumn.length; i++){
        this.tag.headers.push({text: this.getAllTagColumn[i].column_name, value: this.getAllTagColumn[i].column_name, groupable: false});
      }
      this.tag.stats = this.getAllTag;
    },
    async navigateToAdd() {
      this.$router.push('/admin/crud/tag/add');
    },
    async deleteRow() {
      try {
        if (this.selected.length === 0) {
          alert(this.translate('selectligne'))
          return
        }
        if (this.selected[0].nom_tag === "default_TAG") {
          alert(this.translate('dsntdelttag'));
          return;
        }
        const body = {id_tag: this.selected[0].id_tag}
        await this.deleteRowTag(body);
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
      if (this.selected[0].nom_tag === "default_TAG") {
        alert(this.translate('dsntdelttag'));
        return;
      }
      this.$router.push('/admin/crud/update/tag/'+this.selected[0].id_tag);
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>