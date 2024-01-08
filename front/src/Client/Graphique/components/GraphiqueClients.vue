<template>
  <div>
    <canvas id="graphiqueClients"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      graphique: null,
    };
  },
  mounted() {
    this.initialiserGraphique();
  },
  methods: {
    initialiserGraphique() {
      const ctx = document.getElementById('graphiqueClients').getContext('2d');

      const heures = ['9h', '10h', '11h', '12h', '13h', '14h', '15h'];
      const clientsParHeure = [100, 150, 187, 206, 216, 233, 237];

      this.graphique = new Chart(ctx, {
        type: 'line',
        data: {
          labels: heures,
          datasets: [
            {
              label: 'Nombre de clients par heure',
              data: clientsParHeure,
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
                labelString: 'Heure',
              },
            }],
            y: [{
              beginAtZero: true,
              scaleLabel: {
                display: true,
                labelString: 'Nombre de clients',
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
