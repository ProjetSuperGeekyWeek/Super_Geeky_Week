<template>
  <div class="forfait">
    <p class="tres_grand gras titre">Billetterie</p>
    <p class="text_pres">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis felis, vulputate vitae massa ac, efficitur accumsan ex. Phasellus lobortis hendrerit leo. Maecenas pellentesque feugiat tellus, eu pulvinar ex mattis varius. Sed nec nulla a massa maximus posuere. Curabitur diam dui, luctus efficitur mi vel, lacinia dignissim ex. Quisque at.</p>
    <div class="jour" v-for="jour in listCalendrier" :key="jour.id_calendrier">
      <p class="grand gras titre">Jour {{ jour.id_calendrier }} / Horaire de {{ jour.horaire_debut }} a {{ jour.horaire_fin }}</p>
      <div class="forfait_jour" v-if="listCalendrier.id_calendrier = listItems.id_calendrier">
        <div class="forfait_card" v-for="item in listCalendrier" :key="item.id_item">
          <p>{{ item.nom_item }}</p>
          <p>Description {{ item.description_item }}</p>
          <p>Prix : {{ item.prix_item }}€</p>
          <p>Stock : {{ item.stock_item }}</p>
          <router-link to="/panier"><input type="button" value="Acheter" class="bouton grand_moins"></router-link>
        </div>
      </div>
      <hr>
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
      console.log(this.listCalendrier)
    }
  },
  created() {
    this.fillListeItems();
    this.fillListCalendrier();
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.forfait{
  padding-top: 12%;
  background-color: #9049bf;
  color: #6cbad9;
}

.forfait_jour{
  margin-left: 6%;
  margin-right: 6%;
  display: flex;
  padding-bottom: 2%;
  justify-content: space-evenly;
}

.forfait_card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  border: #490a73 3px solid;
  background-color: #9249a6;
  font-size: x-large;
  transition: all .2s ease-in-out;
}
.forfait_card:hover{
  transform: scale(1.05);
}

.bouton{
  border: 2px solid #490a73;
  width: auto;
  padding: 4%;
  border-radius: 10px;
  color: #6cbad9;
  background-color: #9249a6;
}

.bouton:hover{
  color: #9249a6;
  background-color: #6cbad9;
  cursor: pointer;
}

.forfait_card p{
  margin-bottom: 10%;
}

.titre{
  padding-top: 2%;
  padding-bottom: 1%;
}

.text_pres{
  margin-left: 10%;
  margin-right: 10%;
  font-size: xx-large;
}

hr{
  width: 60%;
  margin-left: 20%;
  border: #490a73 1px solid;
}
</style>