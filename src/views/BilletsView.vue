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
:root{
  --paragraph: #a7a9be;
  --bg: #0f0e17;
  --title: #fffffe;
  --bg-button: #ff8906;
  --bg-button2: #e53170;
  --secondary: #f25f4c;
  --transition: 0.5s
}
.billet{
  border: 1px var(--bg) solid;
}
</style>