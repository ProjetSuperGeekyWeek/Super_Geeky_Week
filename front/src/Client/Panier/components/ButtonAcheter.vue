<template>
  <div class="button_acheter">
    <input type="button" :value="translate('acheter')" class="bouton grand_moins" @click="createQrcode">
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'ButtonAcheter',
  data() {
    return {};
  },
  components: {
  },
  methods: {
    ...mapActions('panierStore', ['createQrCode']),
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    async createQrcode() {
      const result = await this.createQrCode()
      if(result){
        await this.$router.push(/commande/ + result)
      }
    }
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
  }
}
</script>

<style>

</style>