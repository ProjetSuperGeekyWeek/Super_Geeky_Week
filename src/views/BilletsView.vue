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
  border: 1px purple solid;
}
</style>