<template>
    <div>
      <h1 class="title">Exposants</h1>
      <div v-if="prestataires.length > 0" class="exposants-cards">
        <div v-for="prestataire in prestataires" :key="prestataire.idpresta" class="exposants-card" @click="highlightCard(prestataire)" :class="{ 'highlighted': prestataire.highlighted }">
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
          </div>
        </div>
      </div>
      <div v-else>
        <p>Aucun exposant disponible.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { getAllPrestataires } from '@/../../back/axiosFunctions/prestataireAxios';
  
  export default {
    name: 'ExposantsView',
    data() {
      return {
        prestataires: [],
      };
    },
    methods: {
      async fetchPrestataires() {
        try {
          const response = await getAllPrestataires();
          console.log(response);
  
          // Assurez-vous que response est défini et est un tableau
          if (response && Array.isArray(response)) {
            this.prestataires = response; // Mettez à jour prestataires avec les données de l'API
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
    },
    mounted() {
      this.fetchPrestataires();
    },
  };
  </script>
  
  <style scoped>
  .title {
    margin-top: 15%;
    margin-left: 10px;
  
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
    cursor: pointer; /* Curseur change au survol */
    transition: background-color 0.3s;
  }
  
  .exposants-card:hover {
    background-color: rgba(255, 255, 255, 0.7); /* Changement de couleur au survol */
  }
  
  .exposants-card.highlighted {
    background-color: #ffeb3b; /* Couleur de surbrillance */
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
    color: #555;
  }
  
  .exposants-nom p {
    margin-top: 10px;
    font-weight: bold;
    color: #333;
  }

  .exposants-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centrer les tags horizontalement */
}

.exposants-tag {
  background-color: rgba(1, 255, 255, 0.64);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 5px;
}
</style>
  
