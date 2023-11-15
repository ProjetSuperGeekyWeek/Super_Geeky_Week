<template>
  <div class="home">
    <VitrinePrincipale titre="Super Geeky Week"/>
    <h1 id="accroche">
      Bienvenue au premier évenement geek Franc-comtois !
    </h1>
    <div id="section-carte">
      <div class="home-gauche">
        <h2>
          Plus besoin de te déplacer jusqu'à Paris pour partager ta passion.
          Avec la Super Geeky Week tu peux maintenant profiter de toutes sortes d'activités geek près de chez toi.
          Localisé dans la nouvelle salle de L'attraxion à Belfort, tu pourras profiter de 3 jours de folie !
        </h2>
      </div>
      <div class="home-droite">
        <CarteInteractive/>
      </div>
    </div>
    <div id="section-prestataires">
      <div class="home-gauche">
        <PrestatairesList/>
      </div>
      <div class="home-droite">
        <h2>
          Au programme de nombreuses activitées diverses et variées tel que des spectacles sur scène,
          des rencontres avec des invités iconiques, des tournois de jeux vidéos et cosplays et bien d'autres !
          Tu pourras également te restaurer directement sur place via des foodtrucks et des stands de nourriture.
          Il y aura même de nombreux stands de goodies pour ramener chez toi un souvenir de ce Week-end inoubliable !
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VitrinePrincipale from '@/components/VitrinePrincipale.vue'
import PrestatairesList from '@/components/PrestatairesList.vue'
import CarteInteractive from '@/components/CarteInteractive.vue'

export default {
  name: 'HomeView',
  components: {
    VitrinePrincipale,
    PrestatairesList,
    CarteInteractive
  }
}
</script>

<style scoped>
.home{
  background-color: rgb(4, 4, 46);
  /* background-color: #312bbd; */
}
#accroche{
  color: white;
  text-align: center;
  font-size: 2em;
  margin: 0;
  padding: 0;
  padding-top: 20px;
  filter: drop-shadow(0px 0px 10px white);
  width: 60%;
  margin-left: 20%;
}
#section-carte{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
}
#section-prestataires{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
}
.home-gauche{
  width: 40%;
  margin-left: 5%;
  margin-right: 5%;
}
.home-droite{
  width: 40%;
  margin-left: 5%;
  margin-right: 5%;
}
h2{
  text-align: justify;
  color: aliceblue;
}


</style>
