<template>
  <div class="prestataires">
    <div id="filtrePresta">
      <button @click="toggleDivs" class="filtreBtn">Filtre</button>
      <div v-show="showDivs">
        <!-- Utilisez des boutons pour les filtres -->
        <button v-for="(filter, index) in filters" :key="index" @click="addFilter(filter)" class="filtreBtn2">{{ filter }}</button>
      </div>
    </div>

    <!-- Filtres sélectionnés -->
    <div class="selected-filters" v-show="filtersSelected">
      <div v-for="(selectedFilter, index) in selectedFiltersArray" :key="index" class="selected-filter">
        {{ selectedFilter }}
        <button @click="removeFilter(selectedFilter)">X</button>
      </div>
    </div>

    <div class="prestataires-box">
      <div class="prestataires-cards">
        <div v-if="filteredPrestataires.length > 0">
          <div class="prestataires-card" v-for="prestataire in filteredPrestataires" :key="prestataire.id">
            <div class="prestataires-photo">
              <img src="@/assets/image/logo/main_logo.png" alt="">
            </div>
            <div class="prestataires-description">
              <div class="prestataires-tag" v-for="tag in prestataire.tags" :key="tag">
                <span>
                  {{ tag }}
                </span>
              </div>
              <div class="prestataires-info">
                <p>
                  {{ prestataire.info }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Aucun prestataire correspondant.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'PrestatairesList',
  data() {
    return {
      showDivs: false,
      filters: ["Filter 1", "Filter 2", "Filter 3", "Filter 4"],
      selectedFiltersArray: [], // Utilisez un tableau pour les filtres sélectionnés
      filtersSelected: false,
      prestataires: [
        { nom: 'Prestataire 1', id: 1, info: 'Je suis un Prestataire investi et sérieux', tags: ['Filter 1', 'Filter 2'] },
        { nom: 'Prestataire 2', id: 2, info: 'Je suis un Prestataire investi et sérieux', tags: ['Filter 1', 'Filter 3'] },
        { nom: 'Prestataire 3', id: 3, info: 'Je suis un Prestataire investi et sérieux', tags: ['Filter 2', 'Filter 3'] }
      ]
    };
  },

  computed: {
    filteredPrestataires() {
      if (this.selectedFiltersArray.length === 0) {
        return this.prestataires; // Si aucun filtre sélectionné, affichez tous les prestataires
      } else {
        return this.prestataires.filter((prestataire) => {
          return this.selectedFiltersArray.every((filter) => {
            return prestataire.tags.includes(filter);
          });
        });
      }
    }
  },

  methods: {
    toggleDivs() {
      this.showDivs = !this.showDivs;
    },
    addFilter(filter) {
      if (!this.selectedFiltersArray.includes(filter)) {
        this.selectedFiltersArray.push(filter);
      }
      this.filtersSelected = true;
    },

    removeFilter(filter) {
      const index = this.selectedFiltersArray.indexOf(filter);
      if (index !== -1) {
        this.selectedFiltersArray.splice(index, 1);
      }
      if (this.selectedFiltersArray.length === 0) {
        this.filtersSelected = false;
      }
    }
  }
};
</script>

<style scoped>
.prestataires {
  text-align: center;
  background-color: var(--bg);
  padding: 20px;
  border-radius: 20px 0 0 20px;
}

.filtreBtn {
  background-color: #3498db;
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 10px;
  font-size: large;
}

.filtreBtn:hover {
  background-color: #2980b9;
  transition: 0.2s;
}

.filtreBtn2 {
  background-color: #3498db;
  border: none;
  color: white;
  padding: 7px 16px;
  margin: 10px;
  font-size: medium;
  border-radius: 15%;
}

.filtreBtn2:hover {
  background-color: #2980b9;
  transition: 0.2s;
}

.selected-filters {
  margin-top: 20px;
}

.selected-filter {
  display: inline-block;
  background-color: lightgray;
  padding: 5px;
  margin-right: 5px;
  border-radius: 5px;
}

.selected-filter button {
  margin-left: 5px;
  cursor: pointer;
}

.prestataires-box {
  width: 100%;
  display: flex;
  justify-content: center;
}

.prestataires-cards {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.prestataires-card {
  flex: 0 0 calc(25% - 20px);
  height: 250px;
  margin: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: #312bbd;
  background-color: rgb(175, 2, 180);
}


.prestataires-photo img {
  width: 100%;
  height: 150px;
  object-fit:cover;
  border-radius: 8px 8px 0 0
}

.prestataires-description {
  padding: 10px;
}

.prestataires-tags {
  display: flex;
  flex-wrap: wrap;
}

.prestataires-tag {
  background-color: rgba(1, 255, 255, 0.64);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 5px;
}

.prestataires-info p {
  margin-top: 10px;
  color: #555;
}

.prestataires-nom p {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}
</style>
