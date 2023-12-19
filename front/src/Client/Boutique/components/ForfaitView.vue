<template>
  <div class="forfait">
    <p class="tres_grand gras titre">Billetterie</p>
    <p class="text_pres">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis felis, vulputate vitae massa ac, efficitur accumsan ex. Phasellus lobortis hendrerit leo. Maecenas pellentesque feugiat tellus, eu pulvinar ex mattis varius. Sed nec nulla a massa maximus posuere. Curabitur diam dui, luctus efficitur mi vel, lacinia dignissim ex. Quisque at.</p>
    <div class="jour" v-for="jour in listCalendrier" :key="jour.id_calendrier">
      <p class="grand gras titre">Jour {{ jour.id_calendrier }} / Horaire de {{ jour.horaire_debut }} a {{ jour.horaire_fin }}</p>
      <div class="forfait_jour">
        <div class="forfait_card" v-for="item in filteredItems(jour.id_calendrier)" :key="item.id_calendrier">
          <p>{{ item.nom_item }}</p>
          <p>Description : {{ item.description_item }}</p>
          <p>Prix : {{ item.prix_item }}€</p>
          <p>Stock : {{ item.stock_item }}</p>
          <router-link to="/panier"><input type="button" value="Acheter" class="bouton grand_moins"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAllItems} from '@/../../back/axiosFunctions/boutiqueAxios'
import {getAllCalendrier} from '@/../../back/axiosFunctions/calendrierAxios'
export default {
  name: 'ForfaitView',
  data() {
    return {
      listItems: [],
      listCalendrier: [],
    }
  },
  methods: {
    async fillListeItems(){
      var result = await getAllItems();
      for (var i = 0; i < result.length; i++) {
        this.listItems.push(result[i]);
      }
      //console.log(this.listItems)
    },
    async fillListCalendrier(){
      var result = await getAllCalendrier();
      for (var i = 0; i < result.length; i++) {
        this.listCalendrier.push(result[i]);
      }
      //console.log(this.listCalendrier)
    },
  },
  created() {
    this.fillListeItems();
    this.fillListCalendrier();
  },
  computed: {
    // Propriété calculée pour filtrer les items en fonction de l'id du calendrier
    filteredItems() {
      return (idCalendrier) => {
        return this.listItems.filter(item => item.id_calendrier === idCalendrier);
      };
    },
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.forfait{
  padding-top: 12%;
  background-color: var(--bg2);
}

.forfait_jour{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly ;
}

.forfait_card{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  width: 20%;
  border: 2px var(--title) solid;
  border-radius: 20px;
  padding: 1%;
  background-color: var(--bg);
}

.forfait_card:hover{
  transform: scale(1.05);
}

.forfait_card p{
  padding-bottom: 2%;
  color: var(--paragraph);
  align-items:   center;
}

.titre{
  padding-top: 2%;
  padding-bottom: 1%;
  color: var(--title);
}

.text_pres{
  margin-left: 10%;
  margin-right: 10%;
  font-size: xx-large;
  color: var(--paragraph);
}

hr{
  width: 60%;
  margin-left: 20%;
  border: #490a73 1px solid;
}
</style>