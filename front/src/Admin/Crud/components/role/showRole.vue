<template>
  <div class="tabCrud">
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              Role
              <v-spacer />
              <v-btn @click="navigateToAdd" color="primary">Ajouter</v-btn>
              <v-spacer />
              <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="chercher"
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
              :items-per-page="5"
              class="elevation-4"
              :search="search"
              show-select
              single-select
              item-key="id_role"
              show-group-by
          >
          </v-data-table>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'crudRole',
  data: () => ({
    selected: [],
    search: '',
    role: {
      headers: [],
      stats: []
    }
  }),
  computed: {
    ...mapGetters('crudStore',['getAllRole','getAllRoleColumn']),
    ...mapActions('crudStore',['getAllRoleStore','getAllRoleColumnStore']),
  },
  methods: {
    async loadData() {
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
  },
  watch: {
    selected: function (newVal) {
      console.log("Selected variable modified:", newVal);
      // Do something with the modified selected variable
    }
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>
</style>
