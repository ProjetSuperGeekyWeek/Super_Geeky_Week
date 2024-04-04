<template>
  <nav>
    <div class="nav_gauche">
      <div class="nav_gauche_haut">
        <router-link to="/"><img src="./assets/image/logo/logo.png" alt="" class="logoGrand"></router-link>
      </div>
      <div class="nav_gauche_bas">
        <a href="#"><img src="./assets/image/logo/facebook.png" alt="facebook" class="logo"></a>
        <a href="#"><img src="./assets/image/logo/instagram.png" alt="insta" class="logo"></a>
        <a href="#" ><img src="./assets/image/logo/twitter.png" alt="X" class="logo"></a>
      </div>
    </div>
    <div class="nav_droite">
      <div class="nav_droite_haut">
        <h1 id="accroche" class="">{{ translate('title') }}</h1>
      </div>
      <hr>
      <div class="nav_droite_bas" v-if="!admin">
        <router-link to="/billets"><p class="nav_titre">{{ translate('nav_ticket') }}</p></router-link>
        <router-link :to="{ name:'page_prestataire', params: { id:prestataireAuthentifier.id_personne } }" v-if="authentifier"><p class="nav_titre">{{ translate('nav_espace_perso') }}</p></router-link>
        <router-link to="/exposants" v-if="!authentifier"><p class="nav_titre">{{ translate('nav_exposants') }}</p></router-link>
        <select name="lang" v-model="langue" @change="langSet" class="test deco_select">
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Espagnol</option>
        </select>
        <div>
          <router-link to="/panier"><img src="./assets/image/logo/panier.png" alt="panier" class="logo"></router-link>
        </div>
        <div class="logo_auth">
          <router-link to="/authentification">
            <img v-if="authentifier" src="./assets/image/logo/main_logo.png" alt="" class="logo2_auth">
            <img v-if="!authentifier" src="./assets/image/fond_ecran/image_authentification.png" alt="authent" class="logo2_auth">
          </router-link>
        </div>
      </div>
      <div class="nav_droite_bas" v-if="admin">
        <router-link to="/admin/crud"><p class="nav_titre">Crud</p></router-link>
        <router-link to="/carte_admin"><p class="nav_titre">Carte</p></router-link>
        <router-link to="/statistiques"><p class="nav_titre">Statistiques</p></router-link>
        <select name="lang" v-model="langue" @change="langSet" class="test deco_select">
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Espagnol</option>
          <option value="gm">Allemand</option>
        </select>
        <div class="logo_auth">
          <router-link to="/authentification">
            <img v-if="authentifier" src="./assets/image/logo/main_logo.png" alt="" class="logo2_auth">
            <img v-if="!authentifier" src="./assets/image/fond_ecran/image_authentification.png" alt="authent" class="logo2_auth">
          </router-link>
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
      console.log(this.langue);
      this.$store.commit('setLang', this.langue);
    },
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
  },
  computed: {
    ...mapState(['lang', 'en', 'fr', 'es', 'gm']),
    ...mapState('authentifierStore', ['authentifier', 'prestataireAuthentifier', 'admin']),
  }
}
window.addEventListener("scroll", function(){
  let header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);// ou 30
});
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
nav{
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.6);
  position: fixed;
  top: 0;
  z-index: 100000;
  width: 100%;
  transition: var(--transition);
  transform: translate(0, 0%);
  height: 25%;

}

hr{
  width: 80%;
  border: 1px solid var(--paragraph);
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
  width: 80%;
}

.logoGrand{
  padding-top: 25%;
  width: 80%;
  margin-left: 10%;
  margin-right: 16%;
}

.nav_droite{
  width: 50%;
  display: flex;
  flex-direction: column;
}

.nav_gauche{
  width: 50%;
  display: flex;
  flex-direction: column;
}

.nav_droite_haut{
  display: flex;
  justify-content: center;
  gap: 5%;
  height: 50%;
  align-items: center;

}

.nav_gauche_haut{
  display: flex;
  justify-content: center;
  height: 50%;
  align-items: center;
  width: 20%;
  margin-left: 10%

}

.nav_droite_bas{
  display: flex;
  justify-content: space-evenly;
  height: 50%;
  align-items: center;
}

.nav_gauche_bas{
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
  color: var(--paragraph);
  text-decoration: none;
  background-color: transparent;
  border-radius: 5px;
  font-size: 1.5em;
  padding: 0.3em;
  filter: drop-shadow(0px 0px 20px var(--paragraph));

}

.nav_titre:hover, .deco_select:hover{
  background-color: var(--title);
  transition: 0.3s;
  border: 2px solid var(--title);
  color: var(--bg);
  cursor: pointer;
  filter: drop-shadow(0px 0px 20px var(--title));
}


/* ------------------------------------------------------------------- */

nav.sticky{
  transition: var(--transition);
  transform: translate(0px, -100%);
}
</style>
