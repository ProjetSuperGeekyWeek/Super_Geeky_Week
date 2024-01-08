<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>


<script>
import {mapState} from "vuex";
import NavBar from "@/NavBar.vue";

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
      this.$store.commit('setLang', this.langue);
    },
    translate(prop){
      return this[this.lang][this.lang][prop];
    },
    // async sessionsConnect(){
    //   await this.cleanSession;
    //   await this.setIdSessionStore;
    //   await this.setAuthentifierStore;
    //   await this.setAdminStore;
    //   // await this.setIdPanierStore;
    // },
  },
  computed: {
    ...mapState(['lang','en','fr']),
    // ...mapActions(['cleanSession','setIdSessionStore','setAuthentifierStore','setAdminStore']),
  },
  async mounted() {
    // await this.sessionsConnect();
  },
}
</script>

<style>
:root{
  --paragraph: #991e2e;/**/
  --bg: #e2e2e2;/*9d1f2d*/
  --title: #f2202f;
  --bg-button: #ff8906;
  --bg-button2: #e53170;
  --secondary: #f25f4c;
  --transition: 0.5s;
  --bg2: #f1f1f2;/*f44d48*/
  --padding-top-navBar: 13%;
}

*{
  font-family: 'Poppins', sans-serif;
}

.gras{
  font-weight: bold;
}
.titre{
  padding-top: 2%;
  padding-bottom: 1%;
}
.tres_grand{
  font-size: xxx-large;
}
.grand{
  font-size: x-large;
}
.grand_moins{
  font-size: large;
}
</style>
