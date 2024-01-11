<template>
    <div class="section">
      <div class="text_home texte-carte">
      </div>
      <div class="carte">
        <CarteInteractive/>
      </div>
    </div>
</template>

<script>
import CarteInteractive from '@/Client/Carte/components/CarteInteractive.vue'

export default {
    name: 'CarteAdminView',
    components: {
        CarteInteractive
    }
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