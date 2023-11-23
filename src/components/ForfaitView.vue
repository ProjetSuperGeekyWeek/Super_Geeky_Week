<template>
  <div class="forfait">
    <p class="tres_grand gras titre">Billetterie</p>
    <p class="text_pres">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis felis, vulputate vitae massa ac, efficitur accumsan ex. Phasellus lobortis hendrerit leo. Maecenas pellentesque feugiat tellus, eu pulvinar ex mattis varius. Sed nec nulla a massa maximus posuere. Curabitur diam dui, luctus efficitur mi vel, lacinia dignissim ex. Quisque at.</p>
    <div class="jour" v-for="temps in Forfait" :key="temps.jour">
      <p class="grand gras titre">Jour {{ temps.jour }} / Horaire de {{ temps.horaire }}</p>
      <div class="forfait_jour">
        <div class="forfait_card" v-for="forfaits in temps.forfait" :key="forfaits.id_forfait">
          <p>{{ forfaits.libelle_forfait }}</p>
          <p>Forfait numéro {{ forfaits.id_forfait }}</p>
          <p>Prix : {{ forfaits.prix }}€</p>
          <p>Prioritaire : {{ forfaits.prioriter }}</p>
          <input type="button" value="Acheter" class="bouton grand_moins">
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
        name: 'ForfaitView',
        props: {
          Forfait: {
            type: Array,
            default: () => [
              {jour:'1', horaire:'9H00 a 18H30', forfait:[{id_forfait:'1', prix:'15', prioriter:false, libelle_forfait:'Forfait normal'}, {id_forfait:'2', prix:'25', prioriter:true, libelle_forfait:'Forfait Prioritaire'}, {id_forfait:'3', prix:'15', prioriter:true, libelle_forfait:'Forfait handicapé'}]},
              {jour:'2', horaire:'9H00 a 18H30', forfait:[{id_forfait:'4', prix:'15', prioriter:false, libelle_forfait:'Forfait normal'}, {id_forfait:'5', prix:'25', prioriter:true, libelle_forfait:'Forfait Prioritaire'}, {id_forfait:'6', prix:'15', prioriter:true, libelle_forfait:'Forfait handicapé'}]}]
          }
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
.tres_grand{
  font-size: xxx-large;
}
.grand{
  font-size: xx-large;
}
.grand_moins{
  font-size: large;
}
.gras{
  font-weight: bold;
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