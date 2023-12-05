<template>
  <div class="home">
    <VitrinePrincipale/>
    <h1 id="accroche">
      {{ translate('accroche') }}
    </h1>

    <div class="section">
      <div class="text_home texte-carte">
        <h2>{{ translate('home_titre_1') }}</h2>
        <h3>{{ translate('home_text_1') }}</h3>
      </div>
      <div class="carte">
        <CarteInteractive/>
      </div>
    </div>

    <div class="section">
      <div class="prestataire">
        <PrestatairesList/>
      </div>
      <div class="text_home">
        <h2>{{ translate('home_titre_2') }}</h2>
        <h3>{{ translate('home_text_2') }}</h3>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import VitrinePrincipale from '@/Client/Accueil/components/VitrinePrincipale.vue'
import PrestatairesList from '@/Client/Prestataire/components/PrestatairesList.vue'
import CarteInteractive from '@/Client/Carte/components/CarteInteractive.vue'
import {mapState} from "vuex";

export default {
  name: 'HomeView',
  components: {
    VitrinePrincipale,
    PrestatairesList,
    CarteInteractive,
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.home{
  background-color: var(--bg2);
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#accroche{
  color: var(--title);
  font-size: 3em;
  filter: drop-shadow(0px 0px 20px var(--title));
  margin-top: 1%;
  margin-bottom: 4%;
  width: 50%;
  text-align: center;
}
.section{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
  width: 95%;
  gap: 5%;
  background-color: var(--bg);
  border-radius: 20px;
}

h2{
  font-size: 2em;
  padding: 2%;
  text-align: center;
  color: var(--title);
}

h3{
  font-size: 1.5em;
  padding: 2%;
  text-align: justify;
  color: var(--paragraph);
}

.text_home{
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carte{
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prestataire{
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.texte-carte{
  width: 35%;
}
</style>
