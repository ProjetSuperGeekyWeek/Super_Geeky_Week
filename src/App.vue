<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>


<script>
import {mapState} from "vuex";
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {NavBar},
  data () {
    return {
      langue: 'fr',
    }
  },
  methods: {
    langSet(){
      console.log("1");
      this.$store.commit('setLang', this.langue);
    },
    translate(prop){
      return this[this.lang][this.lang][prop];
    },
  },
  computed: {
    ...mapState(['lang','en','fr']),
  }
}
</script>

<style>

</style>
