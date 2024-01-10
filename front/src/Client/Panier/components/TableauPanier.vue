<template>
    <table class="tab grand">
      <tbody class="tab_body">
        <tr>
          <th class="th_grand">{{translate('produit')}}</th><th class="th_petit">{{translate('quantite')}}</th><th class="th_petit">{{translate('prix2')}}</th>
        </tr>
          <tr v-for="article in Panier" :key="article.id_article">
            <td>{{ article.nom_article }}</td><td>{{ article.quantite }}</td><td>{{ calc_prix(article.quantite, article.prix_article_seul)}}</td>
          </tr>
        <tr>
          <td class="gras">{{translate('total')}}</td><td>{{ total_quantite() }}</td><td>{{ total_prix() }}$</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'TableauPanier',
  data() {
    return {
      Panier: [{id_article: 1, nom_article: "article 1", quantite: 2, prix_article_seul: 10},{id_article: 2, nom_article: "article 2", quantite: 4, prix_article_seul: 10},{id_article: 3, nom_article: "article 3", quantite: 8, prix_article_seul: 9}]
    };
  },
  components: {
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    calc_prix(quantite, prix){
      return quantite * prix;
    },
    total_prix(){
      let total = 0;
      for(let i = 0; i < this.Panier.length; i++){
        total += this.Panier[i].quantite * this.Panier[i].prix_article_seul;
      }
      return total;
    },
    total_quantite(){
      let total = 0;
      for(let i = 0; i < this.Panier.length; i++){
        total += this.Panier[i].quantite;
      }
      return total;
    }
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
  }
}
</script>

<style>
.tab {
  width: 80%;
  margin-top: 5%;
  border: 1px black solid;
  margin-bottom: 2%;
}

.tab_body{
  background-color: var(--bg2);
  color: var(--paragraph);
  border: 1px blue solid;
}

td{
  text-align: center;
}
.th_grand{
  width: 60%;
}
.th_petit{
  width: 20%;
}
</style>