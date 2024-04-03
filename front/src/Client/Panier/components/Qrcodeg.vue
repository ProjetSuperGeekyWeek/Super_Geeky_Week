<template>
  <div id="Qrcodeg">
    <qrcode-vue v-if="showQRCode" :value="qrCodeValue" :size="300" level="H" />

    <div v-if="showQRCode" class="info-section">

      <h3>QR Code URL:</h3>
      <p>{{ qrCodeValue }}</p>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import {mapState} from "vuex";

export default {
  name: 'QrcodeView',
  data() {
    return {
      uuid_commande: this.$route.params.uuid_commande,
      showQRCode: true,
      emailError: false,
      dataLoaded: false,
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
    qrCodeValue() {
      return `http://localhost:8080/commande/${this.uuid_commande}`;
    },
  },
  methods: {
    onFormSubmit() {
    },
  },
  components: {
    QrcodeVue,
  },
};
</script>

<style>
#Qrcodeg {
  background-color: var(--bg2);
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 300px;
}

.info-section {
  margin-top: 20px;
  text-align: center;
}

.info-section h3 {
  margin-bottom: 10px;
  color: var(--paragraph);
}

.info-section p {
  margin: 5px 0;
  color: var(--paragraph);
}
</style>