<template>
  <div id="qrcode">
    <Qrcode/>
  </div>
</template>

<script>
import Qrcode from '@/Client/Panier/components/Qrcodeg.vue';

export default{
  name: 'QrcodeView',
  data() {
    return {};
  },
  components: { Qrcode }
}

</script>

<style scoped>

</style>