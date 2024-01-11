<template>
    <div>
        <h1>{{translate('error404')}}</h1>
        <h3>{{translate('pgdstexist')}}</h3>
    </div>
</template>

<script>

import {mapState} from "vuex";

export default {
    name: 'NotFoundError404',
  methods:{
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
  }
}

</script>

<style scoped>
    h1 {
        margin-top: 250px;
        text-align: center;
    }
    h3 {
        text-align: center;
    }
</style>