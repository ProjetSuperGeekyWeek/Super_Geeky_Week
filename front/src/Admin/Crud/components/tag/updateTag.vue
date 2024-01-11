<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_tag">
    <input type="text" v-model="nom_tag">
    <button @click="updateRole">Valider</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updateTag",
  components: {
    boutonRetourCrud
  },
  data: () => {
    return {
      id_tag: 0,
      nom_tag: '',

      list: [],
      current: {},
    };
  },
  computed: {
    ...mapGetters('crudStore', ['getAllTag']),
  },
  methods: {
    ...mapActions('crudStore', ['updateRowTag']),
    async loadData() {
      this.id_tag = this.$route.params.id;

      this.list = this.getAllTag;
      this.current = this.list.find(role => role.id_tag === parseInt(this.id_tag)) || {};

      this.nom_tag = this.current.nom_tag;
    },
    async updateRole() {
      try {
        if (this.id_tag === '' || this.nom_tag === '') {
          alert('Veuillez remplir tous les champs')
          return
        }
        const body = { id_tag: this.id_tag, nom_tag: this.nom_tag }
        await this.updateRowTag(body);
        this.$router.push('/admin/crud')
      } catch (e) {
        console.log('error updateTag', e)
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