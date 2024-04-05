<template>
  <div class="updateCrud">
    <input type="hidden" v-model="id_acheter">
    <select name="selectItem" id="selectItem" v-model="id_item">
      <option :value="item.id_item" v-for="item in listItem" :key="item.id_item" :selected="item.id_item === id_item">{{ item.nom_item }}</option>
    </select>
    <select name="selectQrCode" id="selectQrCode" v-model="id_qr_code">
      <option :value="qrCode.id_qr_code" v-for="qrCode in listQrCode" :key="qrCode.id_qr_code" :selected="qrCode.id_qr_code === id_qr_code">{{ qrCode.nom_client }} - {{ qrCode.prenom_client }}</option>
    </select>
    <input type="checkbox" v-model="consommer">
    <button @click="updateRole">{{translate('valider')}}</button>
    <boutonRetourCrud/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";
export default {
  name: "updateAcheter",
  components: {
    boutonRetourCrud
  },
  data: () => {
    return {
      id_acheter: 0,
      id_item: 0,
      id_qr_code: 0,
      consommer: false,
      list: [],
      listItem: [],
      listQrCode: [],
      current: {},
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore', ['getAllAcheters', 'getAllItem', 'getAllQrCode']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore', ['updateRowAcheter']),
    async loadData() {
      this.listItem = this.getAllItem;
      this.listQrCode = this.getAllQrCode;

      this.id_acheter = this.$route.params.id;

      this.list = this.getAllAcheters;
      this.current = this.list.find(role => role.id_acheter === parseInt(this.id_acheter)) || {};

      this.id_item = this.current.id_item;
      this.id_qr_code = this.current.id_qr_code;
      this.consommer = this.current.consommer;
    },
    async updateRole() {
      try {
        if (this.id_acheter === '' || this.id_item === '' || this.id_qr_code === '') {
          alert(this.translate('remplirtouschamps'))
          return
        }
        const body = { id_acheter: this.id_acheter, id_item: this.id_item, id_qr_code: this.id_qr_code, consommer: this.consommer }
        await this.updateRowAcheter(body);
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