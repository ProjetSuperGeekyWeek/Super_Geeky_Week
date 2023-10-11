<template>
  <div class="home">
    <VitrinePrincipale titre="Super Geeky Week"/>
    <PrestatairesList/>
  </div>
</template>

<script>
// @ is an alias to /src
import VitrinePrincipale from '@/components/VitrinePrincipale.vue'
import PrestatairesList from '@/components/PrestatairesList.vue'

export default {
  name: 'HomeView',
  components: {
    VitrinePrincipale,
    PrestatairesList
  }
}
</script>

<style scoped>
.home{
  background-color: blueviolet;
}

</style>
