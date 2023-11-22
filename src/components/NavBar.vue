<template>
  <nav>
    <div class="nav_gauche">
      <div class="nav_gauche_haut">
        <router-link to="/"><img src="../assets/image/logo/logo.png" alt="" class="logoGrand"></router-link>
      </div>
      <div class="nav_gauche_bas">
        <a href="#"><img src="../assets/image/logo/facebook.png" alt="" class="logo"></a>
        <a href="#"><img src="../assets/image/logo/instagram.png" alt="" class="logo"></a>
        <a href="#" ><img src="../assets/image/logo/twitter.png" alt="" class="logo"></a>
      </div>
    </div>
    <div class="nav_droite">
      <div class="nav_droite_haut">
        <h1 id="accroche">{{ translate('accroche') }}</h1>
      </div>
      <hr>
      <div class="nav_droite_bas">
        <router-link to="/billets"><p class="nav_titre">{{ translate('nav_ticket') }}</p></router-link>
        <router-link to="/services"><p class="nav_titre">{{ translate('nav_service') }}</p></router-link>
        <select name="lang" v-model="langue" @change="langSet" class="test deco_select">
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
        <div class="logo_auth">
          <router-link to="/authentification"><img src="../assets/image/image_authentification.png" alt="authent" class="logo2_auth"></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'NavBar',
  data() {
    return {
      francais: true,
      langue: 'fr',
    }
  },
  methods: {
    langSet() {
      console.log("1");
      this.$store.commit('setLang', this.langue);
    },
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
  }
}
window.addEventListener("scroll", function(){
  let header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
</script>

<style>
:root{
  --paragraph: #a7a9be;
  --bg: #0f0e17;
  --title: #fffffe;
  --bg-button: #ff8906;
  --bg-button2: #e53170;
  --secondary: #f25f4c;
  --transition: 0.5s
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
nav{
//border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  background-color: rgb(5.9,5.5,9,0.80);
  position: fixed;
  z-index: 100000;
  width: 100%;
  transition: var(--transition);
  transform: translate(0, 0%);

}

hr{
  width: 80%;
  border: 1px solid var(--secondary);
  margin-left: 10%
}

.logo{
  width: 2em;
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 5%;
}

.logo_auth{
  width: 10%;

}

.logo2_auth{
  width: 100%;
}

.logoGrand{
  padding-top: 25%;
  width: 80%;
  margin-left: 10%;
  margin-right: 16%;
}

.nav_droite{
  width: 50%;
//border: 1px solid red;
  display: flex;
  flex-direction: column;
}

.nav_gauche{
  width: 50%;
//border: 1px solid yellow;
  display: flex;
  flex-direction: column;
}

.nav_droite_haut{
//border: 1px solid blue;
  display: flex;
  justify-content: center;
  gap: 5%;
  height: 50%;
  align-items: center;

}

.nav_gauche_haut{
//border: 1px solid pink;
  display: flex;
  justify-content: center;
  height: 50%;
  align-items: center;
  width: 20%;
  margin-left: 10%

}

.nav_droite_bas{
//border: 1px solid wheat;
  display: flex;
  justify-content: space-evenly;
  height: 50%;
  align-items: center;
}

.nav_gauche_bas{
//border: 1px solid orange;
  display: flex;
  justify-content: center;
  gap: 5%;
  height: 50%;
  align-items: center;
  width: 20%;
  margin-left: 10%
}

#accroche{
  color: var(--title);
  text-align: center;
  font-size: 2em;
  filter: drop-shadow(0px 0px 10px var(--title));
  width: 100%;
}

#accroche:hover{
  color: var(--secondary);
  filter: drop-shadow(0px 0px 10px var(--secondary));
}

.test{
  border: 1px solid red;
}

.deco_select{
  font-size: 18px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.nav_titre, .deco_select{
  color: var(--title);
  text-decoration: none;
  background-color: transparent;
  border-radius: 5px;
  font-size: 1.5em;
  padding: 0.3em;
  filter: drop-shadow(0px 0px 20px var(--title));

}

.nav_titre:hover, .deco_select:hover{
  background-color: var(--secondary);
  transition: 0.3s;
  border: 2px solid var(--secondary);
  color: var(--bg);
  cursor: pointer;
  filter: drop-shadow(0px 0px 20px var(--secondary));
}


/* ------------------------------------------------------------------- */

nav.sticky{
  transition: var(--transition);
  transform: translate(0px, -100%);
}
</style>