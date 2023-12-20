<template>
  <div class="button_acheter">
    <router-link to="/qrcode"><input type="button" value="Acheter" class="bouton grand_moins"></router-link>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'ButtonAcheter',
  data() {
    return {};
  },
  components: {
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
  }
}
</script>

<style>

</style>