<template>
  <div id="Qrcodeg">
    <p id="accroched">{{translate('rentrezinfo')}}</p>
    <form v-if="!showQRCode" @submit.prevent="onFormSubmit">
      <label id="clo" for="name">{{translate('prenom')}}</label>
      <input type="text" id="name" v-model="name">
      <br>

      <label id="clo" for="familyName">{{translate('nom')}}</label>
      <input type="text" id="familyName" v-model="familyName">
      <br>

      <label id="clo" for="email">{{translate('email')}}   </label>
      <input
          type="text"
          id="email"
          v-model="email"
          :class="{ error: emailError }"
      >
      <br>
      <button type="button" class="btninfoqr" @click="validateAndGenerateQRCode">{{translate('validerinfo')}}</button>
      <br>
      <p v-if="emailError" class="error-message">{{translate('enteremail')}}</p>
    </form>

    <qrcode-vue v-if="showQRCode" :value="qrCodeValue" :size="300" level="H" />

    <div v-if="showQRCode" class="info-section">
      <h3>{{translate('information')}}</h3>
      <p><strong>{{translate('prenom')}}</strong> {{ name }}</p>
      <p><strong>{{translate('nom')}}</strong> {{ familyName }}</p>
      <p><strong>{{translate('email')}}</strong> {{ email }}</p>

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
      name: '',
      familyName: '',
      email: '',
      showQRCode: false,
      emailError: false,
      dataLoaded: false,
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
    qrCodeValue() {
      return `http://localhost:8080/qrcode/?name=${encodeURIComponent(this.name)}&familyName=${encodeURIComponent(this.familyName)}&email=${encodeURIComponent(this.email)}`;
    },
  },
  mounted() {
    if (!this.dataLoaded) {
      const { name, familyName, email } = this.$route.query;
      if (name && familyName && email) {
        this.name = decodeURIComponent(name);
        this.familyName = decodeURIComponent(familyName);
        this.email = decodeURIComponent(email);

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
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    validateAndGenerateQRCode() {
      const emailRegex = /@/;

      if (!emailRegex.test(this.email)) {
        this.emailError = true;
        return;
      }

      this.emailError = false;
      this.showQRCode = true;

      const routeParams = {
        name: encodeURIComponent(this.name),
        familyName: encodeURIComponent(this.familyName),
        email: encodeURIComponent(this.email),
      };

      this.$router.push({ query: routeParams });
    },
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
}

#accroched {
  font-size: 2rem;
  font-weight: bold;
  color: var(--title);
  padding-top: 15%;
  padding-bottom: 2%;
  filter: drop-shadow(0px 0px 20px var(--title));
}

#email.error {
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
 input {
   border: 1px solid #ccc;
   display: block; /* Pour que la marge automatique fonctionne */
   margin: auto;
 }
.btninfoqr{
   border: 1px solid #ccc;
   padding: 4px;
 }
</style>