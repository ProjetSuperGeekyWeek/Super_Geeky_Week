<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              QrCode
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
              :headers="qrCode.headers"
              :items="qrCode.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              item-key="id_qrCode"
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
    qrCode: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters(['getAllQrCode','getAllQrCodeColumn']),
    ...mapActions(['getAllQrCodeStore','getAllQrCodeColumnStore']),
  },
  methods: {
    async loadData(){
      await this.getAllQrCodeStore;
      await this.getAllQrCodeColumnStore;
      for(var i = 0; i<this.getAllQrCodeColumn.length; i++){
        this.qrCode.headers.push({text: this.getAllQrCodeColumn[i].column_name, value: this.getAllQrCodeColumn[i].column_name, groupable: false});
      }
      this.qrCode.stats = this.getAllQrCode;
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>