<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_role">
    <input type="text" :placeholder="translate('namerole')" v-model="nom_role">
    <button @click="updateRole">{{translate('valider')}}</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updateRole",
  components: {
    boutonRetourCrud
  },
  data: () => {
    return {
      id_role: 0,
      nom_role: '',
      list: [],
      role: {},
    };
  },
  computed: {
    ...mapGetters('crudStore', ['getAllRole']),
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['updateRowRole']),
    async loadData() {
      this.id_role = this.$route.params.id;
      this.list = await this.getAllRole;
      this.role = this.list.find(role => role.id_role === parseInt(this.id_role)) || {};
      this.nom_role = this.role.nom_role
    },
    async updateRole() {
      try {
        if (this.nom_role === '') {
          alert(this.translate('remplirtouschamps'))
          return
        }
        const body = { id_role: this.id_role, nom_role: this.nom_role }
        await this.updateRowRole(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updateRole', e)
      }

    }
  },
  async mounted() {
    await this.loadData();
  },

};
</script>

<style>
.updateCrud {
  padding-top: var(--padding-top-navBar);
}

.updateCrud input {
  border: 1px solid black;
}
</style>