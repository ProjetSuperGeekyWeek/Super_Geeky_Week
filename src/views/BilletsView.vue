<template>
    <div class="billet">
        <Forfait/>
    </div>
</template>

<script>
import Forfait from '@/components/ForfaitView.vue'
export default {
        name: 'BilletsView',
        components: {
          Forfait
        }
    }
</script>

<style scoped>
.billet{
    padding-top: 50px; /*pour ne pas cacher le titre par la barre de navigation a modif plus tard*/
}
</style>