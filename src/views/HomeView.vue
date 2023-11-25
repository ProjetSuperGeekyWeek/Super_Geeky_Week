<template>
  <div class="home">
    <!--<VitrinePrincipale/>

    <h1 id="accroche">
      {{ translate('accroche') }}
    </h1>

    <div id="section-carte">
      <div class="home-gauche">
        <h2>{{ translate('home_text_1') }}</h2>
      </div>
      <div class="home-droite">
        <CarteInteractive/>
      </div>
    </div>

    <div id="section-prestataires">
      <div class="home-gauche2">
        <PrestatairesList/>
      </div>
      <div class="home-droite">
        <h2>{{ translate('home_text_2') }}</h2>
      </div>
    </div>-->
    <VitrinePrincipale/>
    <h1 id="accroche">
      {{ translate('accroche') }}
    </h1>

    <div class="section">
      <div class="text_home texte-carte">
        <h2>{{ translate('home_text_1') }}</h2>
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
        <h2>{{ translate('home_text_2') }}</h2>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import VitrinePrincipale from '@/components/VitrinePrincipale.vue'
import PrestatairesList from '@/components/PrestatairesList.vue'
import CarteInteractive from '@/components/CarteInteractive.vue'
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
  //border: 1px solid red;
  background-color: var(--bg2);
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#accroche{
//border: 1px solid red;
  color: var(--title);
  font-size: 2em;
  filter: drop-shadow(0px 0px 20px var(--title));
  margin-top: 2%;
  margin-bottom: 2%;
}
.section{
  //border: 1px solid green;
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
  text-align: center;
  color: var(--paragraph);
}

.text_home{
  //border: 1px solid red;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carte{
  //border: 1px solid blue;
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prestataire{
  //border: 1px solid green;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.texte-carte{
  width: 35%;
}
</style>
