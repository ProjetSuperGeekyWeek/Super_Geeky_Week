<template>
  <div id="app">
    <span id="nav-filler"></span>
    <nav>
        <router-link to="/" class="gauche"><h2>{{ translate('nav_home') }}</h2></router-link>
        <router-link to="/billets" class="gauche"><h2>{{ translate('nav_ticket') }}</h2></router-link>
        <router-link to="/services" class="gauche"><h2>{{ translate('nav_service') }}</h2></router-link>
        <button id="box-langue">
          <img src="../src/assets/images_drapeaux_langues/drapeau_france.png" alt="fr" v-show="francais">
          <img src="../src/assets/images_drapeaux_langues/drapeau_angleterre.png" alt="en" v-show="!francais">
        </button>
        <select name="lang" v-model="langue" @change="langSet">
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
        <div class="authentification-nav droite">
          <router-link to="/authentification"><img src="../src/assets/image_authentification.png" alt="authent"></router-link>
        </div>
    </nav>
    <router-view/>
  </div>
</template>


<script>
import {mapState} from "vuex";

export default {
  name: 'App',
  data () {
    return {
      francais: true,
      langue: 'fr',
    }
  },
  methods: {
    changeImageLangue(){
      this.francais = !this.francais;
    },
    langSet(){
      console.log("1");
      if(this.langue !== this.lang){
        this.changeImageLangue();
      }
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
*{
  margin: 0;
  padding: 0;
}
#app {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav-filler {
  display: block;
  height: 75px;
}
nav {
  background-color: rgb(112, 16, 156);
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
  display: flex;
}

nav a, nav div {
  font-weight: bold;
  color: #50f3f3;
  text-decoration: none;
  height: 50px;
  text-align: center;
}

.gauche{
  border-right: #50f3f3 5px solid;
  width: 20%;
  padding-top: 25px;
}

#box-langue{
  height: 50px;
  background-color: transparent;
  border: none;
  margin-left: 5em;
}

#box-langue img{
  height: 50px;
  width: auto;
  padding-top: 12.5px;
}

.droite{
  margin-left: auto;
  margin-right: 0;
  width: 65px;
  text-align: right;
}

.authentification-nav img{
  width: 75px;
  height: 75px;
  filter: drop-shadow(0px 0px 5px #1e65cf);
}

nav .gauche:hover {
  color: #50f3f3;
  background-color: #2c4c50;
  transition: 0.3s;
}

.authentification-nav:hover {
  filter: drop-shadow(0px 0px 10px #36d3fa);
}

nav a.router-link-exact-active {
  color: #47e2e7;
}

.authentification-nav a.router-link-exact-active {
  filter: drop-shadow(0px 0px 10px #7affed);
}
</style>
