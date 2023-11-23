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

<style>
.billet{
  border: 1px var(--bg) solid;
}
</style>