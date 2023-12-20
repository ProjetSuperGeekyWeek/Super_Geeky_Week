<template>
  <div id="Qrcodeg">
    <p id="accroched">{{ infoPrompt }}</p>
    <form v-if="!showQRCode" @submit.prevent="onFormSubmit">
      <label id="clo" for="name">  Prénom : </label>
      <input type="text" id="name" v-model="name">

      <label id="clo" for="familyName">  Nom de famille : </label>
      <input type="text" id="familyName" v-model="familyName">

      <label id="clo" for="phoneNumber">  Numéro de téléphone : </label>
      <input
          type="text"
          id="phoneNumber"
          v-model="phoneNumber"
          :class="{ error: phoneNumberError }"
      >
      <button type="button" @click="validateAndGenerateQRCode">Valider les informations</button>

      <p v-if="phoneNumberError" class="error-message">Entrer un numéro de téléphone</p>
    </form>

    <qrcode-vue v-if="showQRCode" :value="qrCodeValue" :size="300" level="H" />

    <div v-if="showQRCode" class="info-section">
      <h3>Informations : </h3>
      <p><strong>Prénom : </strong> {{ name }}</p>
      <p><strong>Nom de famille : </strong> {{ familyName }}</p>
      <p><strong>Numéro de téléphone : </strong> {{ phoneNumber }}</p>

      <h3>QR Code URL:</h3>
      <p>{{ qrCodeValue }}</p>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  name: 'QrcodeView',
  data() {
    return {
      name: '',
      familyName: '',
      phoneNumber: '',
      showQRCode: false,
      phoneNumberError: false,
      dataLoaded: false,
      infoPrompt: 'Rentrez vos informations',
    };
  },
  computed: {
    qrCodeValue() {
      return `http://localhost:8080/qrcode/?name=${encodeURIComponent(this.name)}&familyName=${encodeURIComponent(this.familyName)}&phoneNumber=${encodeURIComponent(this.phoneNumber)}`;
    },
  },
  mounted() {
    if (!this.dataLoaded) {
      const { name, familyName, phoneNumber } = this.$route.query;
      if (name && familyName && phoneNumber) {
        this.name = decodeURIComponent(name);
        this.familyName = decodeURIComponent(familyName);
        this.phoneNumber = decodeURIComponent(phoneNumber);

        this.validateAndGenerateQRCode();
      }
      this.dataLoaded = true;
    } else {
      if (!this.showQRCode) {
        this.$router.replace({ path: '/' });
      }
    }
  },
  methods: {
    validateAndGenerateQRCode() {
      const phoneNumberRegex = /^\d{10}$/;

      if (!phoneNumberRegex.test(this.phoneNumber)) {
        this.phoneNumberError = true;
        return;
      }

      this.phoneNumberError = false;
      this.showQRCode = true;

      const routeParams = {
        name: encodeURIComponent(this.name),
        familyName: encodeURIComponent(this.familyName),
        phoneNumber: encodeURIComponent(this.phoneNumber),
      };

      this.$router.push({ query: routeParams });
      this.infoPrompt = 'Qrcode';
    },
    onFormSubmit() {
      // Prevent the default form submission behavior
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
}

#accroched {
  font-size: 2rem;
  font-weight: bold;
  color: var(--title);
  padding-top: 15%;
  padding-bottom: 2%;
  filter: drop-shadow(0px 0px 20px var(--title));
}

#phoneNumber.error {
  border-color: red;
}

.error-message {
  color: red;
}

#clo {
  color: var(--paragraph);
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