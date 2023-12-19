<template>
  <div class="prestataires">
    <div id="filtrePresta">
      <button @click="!showDivs" class="filtreBtn">Filtre</button>
      <div v-show="showDivs">
        <button v-for="tag in tags" :key="tag.idtag" @click="addTag(tag)" class="filtreBtn2">{{ tag.nom }}</button>
      </div>
    </div>

    <div v-show="showDivs" class="search-bar">
      <input id="search" type="text" v-model="keyword" placeholder="Rechercher par mot-clé" @input="filterPresta">
    </div>

    <div class="selected-filters" v-show="filterTagOn">
      <div v-for="(selectedTag, index) in selectedTags" :key="index" class="selected-filter">
        {{ selectedTag }}
        <button @click="removeTag(selectedTag)">X</button>
      </div>
    </div>

    <div class="prestataires-box">
      <div class="prestataires-cards">
        <div v-if="prestataires.length > 0">
          <div class="prestataires-card" v-for="prestataire in prestataires" :key="prestataire.idpresta">
            <div class="prestataires-photo">
              <img src="@/assets/image/logo/main_logo.png" alt="">
            </div>
            <div class="prestataires-description">
              <div class="prestataires-tag" v-for="tag in prestataire.tags" :key="tag">
                <span>{{ tag }}</span>
              </div>
              <div class="prestataires-info">
                <p>{{ prestataire.info }}</p>
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
export default {
  name: 'PrestatairesList',
  data() {
    return {
      selectedTags: [],
      tags: [
        {nom:"Filter 1", idtag: 1}, 
        {nom:"Filter 2", idtag: 2}, 
        {nom:"Filter 3", idtag: 3}, 
        {nom:"Filter 4", idtag: 4}
      ],
      keyword: '',
      prestataires: [
        { nom: 'Prestataire 1', idpresta: 1, info: 'Ji suis un Prestataire investi et sérieux', tags: ['Filter 1', 'Filter 2'], image: '@/assets/image/logo/main_logo.png' },
        { nom: 'Prestataire 2', idpresta: 2, info: 'Je suis un Prestataire investi et sérieux', tags: ['Filter 1', 'Filter 3'], image: '@/assets/image/logo/main_logo.png' },
        { nom: 'Prestataire 3', idpresta: 3, info: 'Ju suis un Prestataire investi et sérieux', tags: ['Filter 2', 'Filter 3'], image: '@/assets/image/logo/main_logo.png' }
      ],
      filterOn: false,
      filterTagOn: false,
      filterNameOn: false,
      showDivs: false,
    };
  },

  computed: {
    // TODO tags = route allTags;
    // TODO prestataires = route allPresta;
  },

  methods: {
    addTag(tag){
      if (!this.selectedTags.includes(tag)) {
        this.selectedTags.push(tag);
      }
      this.filterTagOn = true;
    },
    removeTag(tag){
      for(let i=0; i<this.selectedTags.length; i++){
        if(this.selectedTags[i] == tag){
          this.selectedTags.splice(i,1);
        }
      }
      if (this.selectedTags.length <= 0) {
        this.filterTagOn = false;
      }
    },
    async filterByTags(){
      var resultTag; //TODO route filtreTag;
      return resultTag;
    },
    async filterByName(){
      var resultName; //TODO route filtreName;
      return resultName;
    },
    async allPresta(){
      var resultAll; //TODO route allPresta;
      return resultAll;
    },
    async filterPresta(){
      this.verifFiltreOn();
      if(this.filterTagOn || this.filterNameOn){
        var resultTag;
        var resultName;
        if(this.filterTagOn)
          resultTag = await this.filterByTags();
        if(this.filterNameOn)
          resultName = await this.filterByName();
        this.prestataires = [];
        for(prestataire in resultTag){
          this.prestataires.push(prestataire);
        }
        for(prestataire in resultName){
          if(!(this.prestataires.includes(prestataire)))
            this.prestataires.push(prestataire);
        }
      }
      else{
        var resultPresta = await this.allPresta();
        this.prestataires = [];
        for(prestataire in resultPresta){
          this.prestataires.push(prestataire);
        }
      }
    },
    verifFiltreOn(){
      let searchValue = document.getElementById('search').value;
      if(searchValue != '' || searchValue != null || searchValue != NaN) 
        this.filterNameOn = true;
      else
        this.filterNameOn = false;
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
