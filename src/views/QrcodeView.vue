<template>
  <div id="qrcode">
    <Qrcode/>
  </div>
</template>

<script>
import Qrcode from '@/components/Qrcodeg.vue';

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