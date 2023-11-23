<template>
    <div class="vitrine-principale">
        <img src="../assets/image/fond_ecran/bg_home.png" alt="Image principale">
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
</style>
