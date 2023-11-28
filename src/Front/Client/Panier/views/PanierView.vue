<template>
  <div class="panier">
    <p class="tres_grand gras titre">Panier</p>
    <div class="body_panier">
      <div class="retour_boutique">
        <router-link to="/billets">
          <h1 id="accroche">
            Retour boutique
          </h1>
        </router-link>
      </div>
        <TableauPanier/>
        <ButtonAcheter/>
  </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import TableauPanier from "@/Front/Client/Panier/components/TableauPanier.vue";
import ButtonAcheter from "@/Front/Client/Panier/components/ButtonAcheter.vue";

export default {
  name: 'PanierView',
  data() {
    return {};
  },
  components: {
    TableauPanier,
    ButtonAcheter
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
.panier{
  background-color: var(--bg2);
  color: var(--title);
  padding-top: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.retour_boutique{
  border: 1px orange solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.body_panier{
  border: 1px blue solid;
  background-color: var(--bg);
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>