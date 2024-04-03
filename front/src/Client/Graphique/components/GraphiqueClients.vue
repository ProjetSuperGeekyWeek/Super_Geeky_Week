<template>
  <div>
    <canvas id="graphiqueClients"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { getJours, getAllInscritsIdInscription } from "@/axiosFunctions/inscriptionAxios";

export default {
  data() {
    return {
      graphique: null,
      jours: [],
      inscritsParJour: []
    };
  },
  mounted() {
    this.initialiserGraphique();
  },
  methods: {
    async initialiserGraphique() {
      // Récupérer les jours depuis la base de données
      try {
        this.jours = await getJours();
      } catch (error) {
        console.error("Erreur lors de la récupération des jours:", error);
        return;
      }

      // Récupérer le nombre d'inscrits par jour depuis la base de données
      try {
        const inscritsParJourPromises = this.jours.map(async jour => {
          const inscrits = await getAllInscritsIdInscription(jour.id_jour); // Utilisez l'ID du jour pour récupérer les inscrits
          return inscrits.length;
        });
        this.inscritsParJour = await Promise.all(inscritsParJourPromises);
      } catch (error) {
        console.error("Erreur lors de la récupération du nombre d'inscrits par jour:", error);
        return;
      }

      // Créer le graphique une fois que toutes les données sont récupérées
      this.creerGraphique();
    },
    creerGraphique() {
      const ctx = document.getElementById('graphiqueClients').getContext('2d');

      this.graphique = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.jours.map(jour => jour.jour), // Utilisez les jours comme labels sur l'axe des x
          datasets: [
            {
              label: 'Nombre d\'inscrits par jour',
              data: this.inscritsParJour,
              fill: false,
              borderColor: 'rgba(158, 12, 12, 1)',  // Couleur de ligne
              borderWidth: 2,
              pointBackgroundColor: 'rgba(255, 0, 0, 1)',  // Couleur des points
              pointRadius: 5,
              pointHoverRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: [{
              type: 'category',
              scaleLabel: {
                display: true,
                labelString: 'Jour',
              },
            }],
            y: [{
              beginAtZero: true,
              scaleLabel: {
                display: true,
                labelString: 'Nombre d\'inscrits',
              },
            }],
          },
        },
      });
    },
  },
};
</script>

<style scoped>
/* Ajoutez votre style ici si nécessaire */
</style>
