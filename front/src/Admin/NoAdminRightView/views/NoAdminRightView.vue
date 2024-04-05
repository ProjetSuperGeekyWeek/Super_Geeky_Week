<template>
    <div>
        <h1>{{translate('dontaccess')}}</h1>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'NoAdminRightView',
  methods:{
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
  },
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
  }
}
</script>

<style scoped>
    h1 {
        margin-top: 250px;
        text-align: center;
    }
</style>