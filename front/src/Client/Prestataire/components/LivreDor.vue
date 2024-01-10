<template>
  <div v-if="(proprio && !show) || show">
    <h2>{{translate('livror')}}</h2>
    <div v-if="temoignages.length > 0">
      <div v-for="temoignage in temoignages" :key="temoignage.id_temoignage">
        <div v-html="formatTemoignage(temoignage)" class="temoignage"></div>
        <br>
      </div>
    </div>
    <div v-else>
      <p>{{translate('aucuntemoin')}}</p>
    </div>
    <div v-if="!proprio">
      <button v-if="!addTemoin" @click="addTemoignage">ajouter un temoignage</button>
      <div v-if="addTemoin">
        <form @submit.prevent="addTemoignage">
          <label for="pseudo">Pseudo</label>
          <input type="text" name="pseudo" id="pseudo" :value="addPseudo" required>
          <label for="temoignage">Temoignage</label>
          <textarea name="temoignage" id="temoignage" cols="30" rows="10" :value="addCommentaire" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "LivreDor",
  data() {
    return {
      addTemoin: false,
      addPseudo: '',
      addCommentaire: '',
    };
  },
  props: {
    proprio: Boolean,
    temoignages: Object,
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    async addTemoignage() {
      this.addTemoin = !this.addTemoin;
    },
    formatTemoignage(temoignage) {
      const temoignageText = temoignage.temoignage;
      const pseudoText = temoignage.pseudo;

      const formattedTemoignage = `<span class="temoignage">${temoignageText}</span> - <span class="pseudo">${pseudoText}</span>`;
      return formattedTemoignage;
    },
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
  }
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
