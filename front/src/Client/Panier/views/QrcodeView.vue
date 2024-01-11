<template>
  <div id="qrcode">
    <qrcode />
  </div>
</template>

<script>
import Qrcode from '@/Client/Panier/components/Qrcodeg.vue';

export default {
  name: 'QrcodeView',
  components: {
    qrcode: Qrcode,
  },
  data() {
    return {};
  },
}
</script>

<style scoped>

</style>
