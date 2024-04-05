<template>
  <input type="button" :value="translate('retour')" @click="returnCrud" class="button_crud_retour">
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'bouttonRetourCrud',
  methods: {
    async returnCrud() {
      this.$router.push('/admin/crud')
    },
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
  },
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
  }
}
</script>

<style>
.button_crud_retour{
  border: 1px black solid;
}
</style>
