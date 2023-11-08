<template>
    <div class="vitrine-principale">
        <img src="../assets/main_banniere.jpg" alt="Image principale">
        <div id="titre-box">
            <h1>{{ translate('title') }}</h1>
        </div>
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
    filter: blur(2px);
}
#titre-box {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 25%;
    background-color: rgba(100, 11, 173);
    border-radius: 10px;
    border-style: solid;
    border-color: darkblue;
}
h1 {
    position: relative;
    padding: 0;
    margin: 0;
    text-shadow: 0px 0px 8px #37e9cb;
    color: #dd31dd;
    font-size: 4rem;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
}
</style>
