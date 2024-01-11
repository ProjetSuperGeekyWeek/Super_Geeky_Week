<template>
  <div>
    <div class="component-livre-or">
      <h2>{{translate('livror')}}</h2>
      <div v-if="temoignages.length > 0">
        <div class="box-temoignages" v-for="temoignage in temoignages" :key="temoignage.id_temoignage">
          <div v-html="formatTemoignage(temoignage)" class="temoignage"></div>
          <br>
        </div>
      </div>
      <div v-else>
        <p>{{translate('aucuntemoin')}}</p>
      </div>
    </div>
    <div v-if="!proprio">
      <button class="button-add-temoin" v-if="!addTemoin" @click="addTemoin = true">{{translate('addtemoin')}}</button>
      <div v-if="addTemoin">
        <form @submit.prevent="addTemoignage" class="formulaire-temoignage">
          <label for="pseudo">Pseudo</label>
          <input type="texte" name="pseudo" v-model="addPseudo" required>
          <label for="temoignage">{{translate('temoignage')}}</label>
          <textarea name="temoignage" cols="30" rows="10" v-model="addCommentaire" required></textarea>
          <div class="button-form-livre">
            <button class="button-form-livre-annuler" @click="addTemoin = false">{{translate('annuler')}}</button>
            <button class="button-form-livre-envoyer" type="submit">{{translate('envoyer')}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import { postTemoignage } from "@/axiosFunctions/livredorAxios";

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
    idPresta: Number,
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    updateProps() {
      this.$emit('update:temoignages', true);
    },
    async addTemoignage() {
      try {
        await postTemoignage(this.addCommentaire,this.addPseudo,this.idPresta);
        this.updateProps();
        this.addTemoin = false;
      } catch (error) {
        console.log(error);
      }
    },
    formatTemoignage(temoignage) {
      const temoignageText = temoignage.temoignage;
      const pseudoText = temoignage.pseudo;

      const formattedTemoignage = `<span class="temoignage">${temoignageText}</span> </br> signe : <span class="pseudo">${pseudoText}</span>`;
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

.box-temoignages{
  display: flex;
  flex-direction: column;
}

.temoignage {
    color: rgb(158, 1, 1);
    padding-bottom: 10px;
  }

  .pseudo {
    color: rgb(255, 0, 0);
  }

.button-add-temoin{
  font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid rgb(38, 180, 38);
    border-radius: 10px;
    background-color: lightgreen;
    cursor: pointer;
}

.button-add-temoin:hover{
  background-color: rgb(38, 180, 38);
  color: #fff;
}

.formulaire-temoignage{
  display: flex;
  flex-direction: column;
}

.formulaire-temoignage label{
  font-size: 1.2em;
  font-weight: bold;
}

.formulaire-temoignage input{
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
}

.formulaire-temoignage textarea{
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
}

.button-form-livre{
  display: flex;
  justify-content: space-around;
}

.button-form-livre-annuler{
  font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #f84646;
    border-radius: 10px;
    background-color: lightsalmon;
    cursor: pointer;
}

.button-form-livre-annuler:hover{
  background-color: #f84646;
  color: #fff;
}

.button-form-livre-envoyer{
  font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid rgb(38, 180, 38);
    border-radius: 10px;
    background-color: lightgreen;
    cursor: pointer;
}

.button-form-livre-envoyer:hover{
  background-color: rgb(38, 180, 38);
  color: #fff;
}

.component-livre-or{
  border: 3px dashed darkred;
  border-radius: 60px;
  background-color: rgb(228, 214, 178);
}
</style>
