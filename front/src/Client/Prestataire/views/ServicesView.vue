<template>
  <div class="services">
    <template v-if="$store.state.authentifier && $store.state.prestataire">
      <div class="service-content">
        <h1 class="intro">{{translate('welcespace')}}</h1>
        <br>
        <div class="service-content" v-html="getServicePageText"></div>
        <br>
        <h1 class="intro">{{translate('activit')}}</h1>
        <br>
        <div class="tabactivite">
          <ModuleInscriptions />
        </div>
      </div>
    </template>
    <template v-else>
      <h1>Service Page</h1>
    </template>
  </div>
</template>

<script>
import ModuleInscriptions from '@/Client/Prestataire/components/ModuleInscription.vue';
import {mapState} from "vuex";
export default {
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
  },
  name: 'ServicesView',
  components: { ModuleInscriptions },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
    getServicePageText() {
      const prestataire = this.$store.state.prestataire;
      return `
        <img class="imgprofile" src="${prestataire.image}" alt="Image du prestataire"> <br>
        Vous êtes: <p class="infoperso">${prestataire.prenom} ${prestataire.nom}</p> <br>
        Adresse mail:<p class="infoperso"> ${prestataire.email} </p> <br>
        Vos rôles: <p class="infoperso"> ${prestataire.description} </p>
      `;
    },
  },
};
</script>

<style>
.services {
  margin-top: 15%;
}

.service-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  text-align: center;
  font-size: 1.2rem;
}

.intro {
  text-align: center;
  font-size: 1.8rem;
  font-weight: lighter;
}

.imgprofile {
  width: 20%;
  border-radius: 20%;
  margin-top: 10px;
}

.tabactivite {
  margin-top: 10px;
}

.infoperso {
  font-weight: bold;
}
</style>
