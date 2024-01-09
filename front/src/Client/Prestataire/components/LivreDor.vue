<template>
  <div>
    <h2>Livre d'or</h2>
    <div v-if="temoignages.length > 0">
      <div v-for="temoignage in temoignages" :key="temoignage.id_temoignage">
        <div v-html="formatTemoignage(temoignage)" class="temoignage"></div>
        <br>
      </div>
    </div>
    <div v-else>
      <p>Aucun témoignage disponible.</p>
    </div>
  </div>
</template>

<script>
import { getTemoignage } from '@/../../back/axiosFunctions/livredorAxios';

export default {
  data() {
    return {
      temoignages: [],
    };
  },
  methods: {
    async fetchTemoignages() {
      try {
        const response = await getTemoignage();
        this.temoignages = response.data;
      } catch (error) {
        console.error("Error fetching témoignages:", error);
      }
    },
    formatTemoignage(temoignage) {
    const temoignageText = temoignage.temoignage;
    const pseudoText = temoignage.pseudo;

    const formattedTemoignage = `<span class="temoignage">${temoignageText}</span> - <span class="pseudo">${pseudoText}</span>`;
    return formattedTemoignage;
  },
  },
  mounted() {
    this.fetchTemoignages();
  },
};
</script>

<style>
 h2 {
    color: rgb(255, 0, 0);
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 10px;
  }

.temoignage {
    color: rgb(158, 1, 1);
  }

  .pseudo {
    color: rgb(255, 0, 0);
  }
</style>
