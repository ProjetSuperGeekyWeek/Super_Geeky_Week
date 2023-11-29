<template>
  <div class="home">
    <video autoplay loop muted>
      <source src="../../.././assets/vidéo/testvidéo.mp4" type="video/mp4">
      Votre navigateur ne supporte pas la balise vidéo.
    </video>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'VitrinePrincipale',
  methods:{
    translate(prop){
      return this[this.lang][this.lang][prop];
    },
  },
  computed: {
    ...mapState(['lang','en','fr']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    width: 100%;
}
#titre-box {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 25%;
    background-color: rgba(247, 85, 186, 0.89);
    border-radius: 5px;
    border-style: solid;
    border-color: #312bbd;
    opacity: 75%;
}
h1 {
    position: relative;
    padding: 0;
    margin: 0;
    text-shadow: 0px 0px 8px #6a95f1;
    color: #312bbd;
    font-size: 4rem;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
}
.home {
  //margin-top: 100px; /* Ajoutez cette ligne pour déplacer la vidéo vers le bas de 15 pixels */
  width: 100%;
  height: calc(100vh - 15px); /* Ajustez la hauteur pour compenser le déplacement */
  overflow: hidden;
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Assurez-vous que la vidéo couvre tout l'espace disponible */
}
</style>
