<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              QrCode
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
              :headers="qrCode.headers"
              :items="qrCode.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_qr_code"
              show-group-by
          >
          </v-data-table>
          <v-btn @click="deleteRow" color="primary">Supprimé</v-btn>
          <v-btn @click="showUpdateDialog" color="primary">Modifier</v-btn>
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
    ...mapGetters('crudStore',['getAllQrCode','getAllQrCodeColumn']),
    ...mapActions('crudStore',['getAllQrCodeStore','getAllQrCodeColumnStore']),
  },
  methods: {
    ...mapActions('crudStore',['deleteRowQrCode']),
    async loadData(){
      this.qrCode.headers = [];
      this.qrCode.stats = [];
      await this.getAllQrCodeStore;
      await this.getAllQrCodeColumnStore;
      for(var i = 0; i<this.getAllQrCodeColumn.length; i++){
        this.qrCode.headers.push({text: this.getAllQrCodeColumn[i].column_name, value: this.getAllQrCodeColumn[i].column_name, groupable: false});
      }
      this.qrCode.stats = this.getAllQrCode;
    },
    async navigateToAdd() {
      this.$router.push('/admin/crud/qrcode/add');
    },
    async deleteRow() {
      try {
        if (this.selected.length === 0) {
          alert('Veuillez sélectionner une ligne')
          return
        }
        if (this.selected[0].nom_client === "default_QRCODE") {
          alert("Vous ne pouvez pas supprimer ce role");
          return;
        }
        const body = {id_qr_code: this.selected[0].id_qr_code}
        await this.deleteRowQrCode(body);
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
      if (this.selected[0].nom_client === "default_QRCODE") {
        alert("Vous ne pouvez pas supprimer ce role");
        return;
      }
      this.$router.push('/admin/crud/update/qrcode/'+this.selected[0].id_qr_code);
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>

</style>