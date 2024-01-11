<template>
    <div class="section" v-if="admin">
      <div class="text_home texte-carte">
      </div>
      <div class="carte">
        <CarteInteractive/>
      </div>
    </div>
    <div v-else>
      <NoAdminRightView/>
    </div>
</template>

<script>
import CarteInteractive from '@/Client/Carte/components/CarteInteractive.vue'
import NoAdminRightView from '@/Admin/NoAdminRightView/views/NoAdminRightView.vue';
import {mapState} from "vuex";

export default {
    name: 'CarteAdminView',
    components: {
        CarteInteractive,
        NoAdminRightView,
    },
    computed: {
        ...mapState('authentifierStore', ['admin']),
    },
}

</script>

<style scoped>

.section{
    margin-top: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
  width: 95%;
  gap: 5%;
  background-color: var(--bg);
  border-radius: 20px;
}

.text_home{
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carte{
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>