<template>
  <div class="forfait">
    <h1>Titre</h1>
    <p class="text_pres">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis felis, vulputate vitae massa ac, efficitur accumsan ex. Phasellus lobortis hendrerit leo. Maecenas pellentesque feugiat tellus, eu pulvinar ex mattis varius. Sed nec nulla a massa maximus posuere. Curabitur diam dui, luctus efficitur mi vel, lacinia dignissim ex. Quisque at.</p>
    <div class="jour" v-for="temps in Forfait" :key="temps.jour">
      <h4>Jour {{ temps.jour }} / Horaire de {{ temps.horaire }}</h4>
      <div class="forfait_jour" v-for="forfaits in temps.forfait" :key="forfaits.id_forfait">
        <div class="forfait_card">
          <p>{{ forfaits.libelle_forfait }}</p>
          <p>Forfait numéro {{ forfaits.id_forfait }}</p>
          <p>Prix : {{ forfaits.prix }}</p>
          <p>Prioritaire : {{ forfaits.prioriter }}</p>
        </div>
      </div>
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
:root{

}

.forfait_jour{
  margin-left: 6%;
  margin-right: 6%;
  display: inline-block;
  margin-bottom: 4%;
}

.forfait_card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4%;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  border: black 1px solid;
}
</style>