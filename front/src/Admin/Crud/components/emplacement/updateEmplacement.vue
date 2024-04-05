<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_emplacement">
    <input type="text" v-model="nom_emplacement">
    <button @click="updateRole">{{translate('valider')}}</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updateEmplacement",
  components: {
    boutonRetourCrud
  },
  data: () => {
    return {
      id_emplacement: 0,
      nom_emplacement: '',
      list: [],
      current: {},
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore', ['getAllEmplacement']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['updateRowEmplacement']),
    async loadData() {
      this.id_emplacement = this.$route.params.id;

      this.list = this.getAllEmplacement;
      this.current = this.list.find(role => role.id_emplacement === parseInt(this.id_emplacement)) || {};

      this.nom_emplacement = this.current.nom_emplacement;
    },
    async updateRole() {
      try {
        if (this.id_emplacement === '' || this.nom_emplacement === '') {
          alert(this.translate('remplirtouschamps'))
          return
        }
        const body = {
          id_emplacement: this.id_emplacement,
          nom_emplacement: this.nom_emplacement,
        }
        await this.updateRowEmplacement(body);
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