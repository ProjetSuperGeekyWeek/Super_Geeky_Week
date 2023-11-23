<template>
  <div class="home">
    <VitrinePrincipale/>

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
    CarteInteractive
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
  /* background-color: #312bbd; */
  padding-bottom: 5%;
}
#accroche{
//border: 1px solid red;
  color: var(--title);
  font-size: 2em;
  filter: drop-shadow(0px 0px 20px var(--title));
  margin-top: 2%;
  margin-bottom: 2%;
}
#section-carte{
//border: 1px solid yellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
}
#section-prestataires{
//border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
}

.home-gauche2, .home-gauche{
//border: 1px solid blue;
  width: 40%;
  border-radius: 20px 0 0 20px;
}

.home-gauche{
  display: flex;
  align-items: center;
  background-color: var(--bg);
}

.home-droite{
//border: 1px solid purple;
  width: 50%;
  display: flex;
  align-items: center;
  background-color: var(--bg);
  padding-left: 10%;
  border-radius: 0 20px 20px 0;
}
h2{
  text-align: center;
  color: var(--paragraph);
  width: 90%;
}

.home-gauche  h2{
  margin-left:5%;
}
</style>
