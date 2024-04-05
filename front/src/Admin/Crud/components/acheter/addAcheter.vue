<template>
  <div class="add">
    <select name="selectItem" id="selectItem" v-model="id_item">
      <option :value="item.id_item" v-for="item in listItem" :key="item.id_item">{{item.nom_item}}</option>
    </select>
    <select name="selectQrCode" id="selectQrCode" v-model="id_qr_code">
      <option :value="qrcode.id_qr_code" v-for="qrcode in listQrCode" :key="qrcode.id_qr_code">{{ qrcode.nom_client }} - {{ qrcode.prenom_client }}</option>
    </select>
    {{translate('consommer')}}<input type="checkbox" id="consommer" v-model="consommer">
    <input type="button" :value="translate('ajouter')" @click="addNewAcheter">
    <boutonRetourCrud/>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from "vuex";
import boutonRetourCrud from "@/Admin/Crud/components/boutonRetourCrud.vue";

export default{
  name: 'addAcheterCrud',
  components: {boutonRetourCrud},
  data: () => ({
    id_item: 1,
    id_qr_code: 1,
    consommer: false,
    listItem: [],
    listQrCode: [],
  }),
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapGetters('crudStore',['getAllItem', 'getAllQrCode']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    ...mapActions('crudStore',['addNewAcheterStore']),
    async addNewAcheter() {
      try{
        if(this.id_item === null || this.id_qr_code === null || this.consommer === null ){
          return
        }
        const body = {id_item:this.id_item,id_qr_code:this.id_qr_code,consommer:this.consommer}
        await this.addNewAcheterStore(body);
        this.$router.push('/admin/crud')
      }catch (e) {
        console.log('error addAcheter', e)
      }
    },
    async loadData(){
      this.listItem = this.getAllItem;
      this.listQrCode = this.getAllQrCode;
    }
  },
  async created(){
    await this.loadData();
  }
}
</script>

<style>
.add{
  padding-top: var(--padding-top-navBar);
}
.add input{
  border: 1px black solid;
}
</style>