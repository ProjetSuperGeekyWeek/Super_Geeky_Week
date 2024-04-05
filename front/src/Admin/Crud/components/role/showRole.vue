<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              {{translate('role')}}
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
                  <v-icon @click="search=''">mdi-close</v-icon>
                </template>
              </v-text-field>
            </v-card-title>
          </v-card>

          <v-data-table
              v-model="selected"
              :headers="role.headers"
              :items="role.stats"
              :items-per-page="10"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_role"
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
  name: 'crudRole',
  data: () => ({
    selected: [],
    search: '',
    role: {
      headers: [],
      stats: []
    },
    showUpdate: false,
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore', ['getAllRole', 'getAllRoleColumn']),
    ...mapActions('crudStore', ['getAllRoleStore', 'getAllRoleColumnStore']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['deleteRowRole']),
    async loadData() {
      this.role.headers = [];
      this.role.stats = [];
      await this.getAllRoleStore;
      await this.getAllRoleColumnStore;
      for (var i = 0; i < this.getAllRoleColumn.length; i++) {
        this.role.headers.push({
          text: this.getAllRoleColumn[i].column_name,
          value: this.getAllRoleColumn[i].column_name,
          groupable: false
        });
      }
      this.role.stats = this.getAllRole;
    },
    async navigateToAdd() {
      await this.$router.push('/admin/crud/role/add');
    },
    async deleteRow() {
      if (this.selected.length === 0) {
        alert(this.translate('selectligne'));
        return;
      }
      if (this.selected[0].nom_role === "default_ROLE") {
        alert(this.translate('dsntdeltrole'));
        return;
      }
      const body = {
        id_role: this.selected[0].id_role
      }
      await this.deleteRowRole(body)
      await this.loadData();
    },
    showUpdateDialog() {
      if (this.selected.length === 0) {
        alert(this.translate('selectligne'));
        return;
      }
      if (this.selected[0].nom_role === "default_ROLE") {
        alert(this.translate('dsntdeltrole'));
        return;
      }
      this.$router.push('/admin/crud/update/role/'+this.selected[0].id_role);
    },
  },
  async mounted() {
    await this.loadData();
  },
  watch: {
    selected: function (newVal) {
      console.log("Selected variable modified:", newVal);
    }
  },
};
</script>

<style>
</style>
