<template>
    <table class="tab grand">
      <tbody class="tab_body">
        <tr>
          <th class="th_grand">{{translate('produit')}}</th><th class="th_petit">{{translate('quantite')}}</th><th class="th_petit">{{translate('prix2')}}</th>
        </tr>
          <tr v-for="article in Panier" :key="article.id_item">
            <td>{{ article.nom_item }}</td><td>{{ article.quantite }}</td><td>{{ calc_prix(article.quantite, article.prix_item)}}</td>
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
      Panier: null
    };
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
        total += this.Panier[i].quantite * this.Panier[i].prix_item;
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
    ...mapState('panierStore', ['contentPanier'])
  },
  async mounted() {
    this.Panier = this.contentPanier
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