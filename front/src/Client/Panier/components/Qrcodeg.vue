<template>
  <div id="Qrcodeg">
    <qrcode-vue v-if="showQRCode" :value="qrCodeValue" :size="300" level="H" />

    <div v-if="showQRCode" class="info-section">

      <h3>{{translate('QRcodeURL')}}</h3>
      <p>{{ qrCodeValue }}</p>
    </div>
    <button @click="printPDF">{{translate('Telecharger')}}</button>
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
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    qrCodeValue() {
      return `http://localhost:8080/commande/${this.uuid_commande}`;
    },
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    printPDF() {
      window.print();
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