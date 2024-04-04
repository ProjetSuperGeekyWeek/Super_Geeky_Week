<template>
  <div>
    <h2>Graphique des inscrits</h2>
    <div class="graphique-container">
      <canvas id="graphiqueClients" style="width: 500px; height: 300px;"></canvas>
    </div>
    <br>
    <h2>Graphique des ventes</h2>
    <div class="graphique-container">
      <canvas id="graphiqueVentes" style="width: 500px; height: 300px;"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { getJours, getAllInscritsIdInscription } from "@/axiosFunctions/inscriptionAxios";
import { getAllAcheterWithItemNames } from "@/axiosFunctions/acheterAxios";

export default {
  data() {
    return {
      graphique: null,
      jours: [],
      inscritsParJour: [],
      items: [],
      chart: null
    };
  },
  mounted() {
    this.initialiserGraphique();
    this.initialiserPieChart();
  },
  methods: {
    async initialiserGraphique() {
      try {
        this.jours = await getJours();
        console.log("Jours récupérés depuis l'API :", this.jours);
      } catch (error) {
        console.error("Erreur lors de la récupération des jours:", error);
        return;
      }

      try {
        const inscritsParJourPromises = this.jours.map(async jour => {
          const inscrits = await getAllInscritsIdInscription(jour.id_jour);
          return inscrits.length;
        });
        this.inscritsParJour = await Promise.all(inscritsParJourPromises);
        console.log("Nombre d'inscrits par jour récupérés depuis l'API :", this.inscritsParJour);
      } catch (error) {
        console.error("Erreur lors de la récupération du nombre d'inscrits par jour:", error);
        return;
      }

      this.creerGraphique();
    },

    async initialiserPieChart() {
      try {
        const data = await getAllAcheterWithItemNames();
        this.processData(data);
        this.createChart();
      } catch (error) {
        console.error("Erreur lors de la récupération des données d'achats:", error);
      }
    },

    processData(data) {
      const itemCounts = {};
      data.forEach(item => {
        const itemId = item.id_item;
        const itemName = item.nom_item;
        if (!itemCounts[itemId]) {
          itemCounts[itemId] = {
            name: itemName,
            count: 1
          };
        } else {
          itemCounts[itemId].count++;
        }
      });
      this.items = Object.values(itemCounts).map(item => ({
        name: item.name,
        count: item.count
      }));
    },


    creerGraphique() {
      const ctx = document.getElementById('graphiqueClients').getContext('2d');

      this.graphique = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.jours.map(jour => jour.jour),
          datasets: [
            {
              label: 'Nombre d\'inscrits par jour',
              data: this.inscritsParJour,
              fill: false,
              borderColor: 'rgba(158, 12, 12, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(255, 0, 0, 1)',
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

    createChart() {
      const ctx = document.getElementById('graphiqueVentes').getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.items.map(item => item.name),
          datasets: [{
            label: 'Ventes par item',
            data: this.items.map(item => item.count),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

  }
}
</script>

<style scoped>
.graphique-container {
  margin-bottom: 20px;
}

.graphique-container h2 {
  font-size: 24px;
  margin-bottom: 10px; 
}
</style>
