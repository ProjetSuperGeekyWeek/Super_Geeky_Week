<template>
  <div>
    <h1 class="title">{{translate('exposants')}}</h1>
    <div v-if="prestataires.length > 0" class="exposants-cards">
      <div v-for="prestataire in prestataires" :key="prestataire.idpresta" class="exposants-card"
        :class="{ 'highlighted': prestataire.highlighted }">
        <!-- Carte d'exposant -->
        <div class="exposants-photo">
          <img src="@/assets/image/logo/main_logo.png" alt="">
        </div>
        <div class="exposants-description">
          <div class="exposants-nom">
            <p>{{ prestataire.nom }} {{ prestataire.prenom }}</p>
          </div>
          <div class="exposants-tags">
            <span v-for="tag in prestataire.tags" :key="tag.id_tag" class="exposants-tag">{{ tag.nom_tag }}</span>
          </div>
          <div class="exposants-info">
            <p>{{ prestataire.description }}</p>
          </div>
          <div class="exposants-buttons">
            <button @click="navigateToPrestataire(prestataire)" class="contact-button">{{translate('voirprof')}}</button>
            <button @click="contactPrestataire(prestataire)" class="contact-button">Contact</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>{{translate('aucunexpos')}}</p>
    </div>

    <!-- Boîte de dialogue modal -->
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal">
        <h2>{{translate('contactpresta')}}</h2>
        <textarea v-model="messageContent" placeholder="Votre message"></textarea>
        <div>
          <button @click="sendMessage" class="contact-button">{{translate('envoyer')}}</button>
          <button @click="closeModal" class="contact-button">{{translate('annuler')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllPrestataires } from '@/../../back/axiosFunctions/prestataireAxios';
import {mapState} from "vuex";

export default {
  name: 'ExposantsView',
  data() {
    return {
      prestataires: [],
      isModalOpen: false,
      messageContent: '',
      selectedPrestataire: null,
    };
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    async fetchPrestataires() {
      try {
        const response = await getAllPrestataires();

        if (response && Array.isArray(response)) {
          this.prestataires = response;
        } else {
          console.error('Erreur: Les données de l\'API sont incorrectes ou non définies.');
          this.prestataires = [];
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des exposants', error);
        this.prestataires = [];
      }
    },
    highlightCard(prestataire) {
      prestataire.highlighted = !prestataire.highlighted;
    },
    navigateToPrestataire(prestataire) {
      this.$router.push({ name: 'page_prestataire', params: { id: prestataire.idpresta } });
    },
    contactPrestataire(prestataire) {
      this.selectedPrestataire = prestataire;
      this.openModal();
    },
    sendMessage() {
      // Logique d'envoi du message (à implémenter)
      console.log("Message envoyé :", this.messageContent, "à", this.selectedPrestataire.nom);

      // Fermer le modal après l'envoi
      this.closeModal();
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.messageContent = ''; // Réinitialiser le contenu du message
      this.selectedPrestataire = null; // Réinitialiser le prestataire sélectionné
    },
  },
  mounted() {
    this.fetchPrestataires();
  },
  computed: {
    ...mapState(['lang', 'en', 'fr']),
  }
};
</script>
  
<style scoped>
.title {
  margin-top: 15%;
  margin-left: 50px;
  font-size: 40px;
  font-weight: bold;
  padding: 10px;

  /* Ajoutez des règles de médias query pour ajuster la marge en fonction de la taille de l'écran */
  @media screen and (max-width: 768px) {
    margin-top: 12%;
  }

  @media screen and (max-width: 576px) {
    margin-top: 8%;
  }
}

.exposants {
  text-align: center;
  background-color: var(--bg);
  padding: 20px;
  border-radius: 20px 0 0 20px;
}

.exposants-cards {
  width: 60%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.exposants-card {
  flex: 0 0 calc(25% - 20px);
  height: auto;
  margin: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: #312bbd;
  background-color: rgb(175, 2, 180);
  cursor: pointer;
  /* Curseur change au survol */
  transition: background-color 0.3s;
}

.exposants-card.highlighted {
  background-color: #ffeb3b;
  /* Couleur de surbrillance */
}

.exposants-photo img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.exposants-description {
  padding: 10px;
}

.exposants-tags {
  display: flex;
  flex-wrap: wrap;
}

.exposants-tag {
  background-color: rgba(1, 255, 255, 0.64);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 5px;
}

.exposants-info p {
  margin-top: 10px;
  color: #312bbd;
}

.exposants-nom p {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}

.exposants-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* Centrer les tags horizontalement */
}

.exposants-tag {
  background-color: #312bbd;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
}

.exposants-buttons {
  display: flex;
  bottom: 10px;
  justify-content: space-around;
  margin-top: 10px;
}

.contact-button {
  background-color: rgba(1, 255, 255, 0.64);
  border: none;
  color: white;
  padding: 7px 16px;
  font-size: medium;
  border-radius: 15%;
  margin: 5px;
}

.contact-button:hover {
  background-color: #90bfdf;
  transition: 0.2s;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}</style>
  
