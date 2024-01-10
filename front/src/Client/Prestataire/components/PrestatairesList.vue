<template>
  <div class="prestataires">
    <div id="filtrePresta">
      <button @click="showDivs = !showDivs" class="filtreBtn">Filtre</button>
      <div v-show="showDivs">
        <button v-for="tag in tags" :key="tag.id_tag" @click="addTag(tag)" class="filtreBtn2">{{ tag.nom_tag }}</button>
      </div>
    </div>

    <div v-show="showDivs" class="search-bar">
      <input id="search" type="text" v-model="keyword" placeholder="Rechercher par mot-clé" @input="filterPresta">
    </div>

    <div class="selected-filters" v-show="filterTagOn">
      <div v-for="selectedTag in selectedTags" :key="selectedTag.id_tag" class="selected-filter">
        {{ selectedTag.nom_tag }}
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
              <div class="prestataires-nom">
                <p>{{ prestataire.nom }} {{ prestataire.prenom }}</p>
              </div>
              <div class="prestataires-tag" v-for="tag in prestataire.tags" :key="tag.id_tag">
                <span>{{ tag.nom_tag }}</span>
              </div>
              <div class="prestataires-info">
                <p>{{ prestataire.description }}</p>
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
import { getAllPrestataires, getPrestataireByTag, getPrestataireByNom, 
  getPrestataireTags } from '@/../../back/axiosFunctions/prestataireAxios';
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'PrestatairesList',
  data() {
    return {
      selectedTags: [],
      tags: [],
      keyword: '',
      prestataires: [],
      filterOn: false,
      filterTagOn: false,
      filterNameOn: false,
      showDivs: false
    };
  },
  computed: {
    ...mapGetters('crudStore',['getAllTag']),
    ...mapActions('crudStore',['getAllTagStore']),
  },
  methods: {
    includesId(array, id){
      for(let i=0; i<array.length; i++){
        if(array[i].idpresta == id)
          return true;
      }
      return false;
    },
    addTag(tag){
      if (!this.selectedTags.includes(tag)) {
        this.selectedTags.push(tag);
      }
      this.filterTagOn = true;
      this.filterPresta();
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
      this.filterPresta();
    },
    async filterByTags(){
      var resultTag;
      var resultTagMany = [];
      var tempPrestaTag = [];
      resultTag = await getPrestataireByTag(this.selectedTags[0].id_tag);
      if(this.selectedTags.length > 1){
        for(let i=1; i<this.selectedTags.length; i++){
          resultTagMany = await getPrestataireByTag(this.selectedTags[i].id_tag);
          for(let j=0; j<resultTag.length; j++){
            if(this.includesId(resultTagMany,resultTag[j].idpresta))
              tempPrestaTag.push(resultTag[j]);
          }
          resultTag = tempPrestaTag;
        }
      }
      return resultTag;
    },
    allCaseOfKeywordRecursive(keyword){
      if(keyword.length == 1){
        return [keyword.toUpperCase(), keyword.toLowerCase()];
      }
      else{
        var result = [];
        var tempResult = this.allCaseOfKeywordRecursive(keyword.substring(1));
        for(let i=0; i<tempResult.length; i++){
          result.push(keyword[0].toUpperCase() + tempResult[i]);
          result.push(keyword[0].toLowerCase() + tempResult[i]);
        }
        return result;
      }
    },
    async filterByNameAllCase(){
      var resultName;
      var tempResultName = [];
      var tempKeyword = this.keyword;
      var listKeyWordsCase = this.allCaseOfKeywordRecursive(tempKeyword);
      resultName = await getPrestataireByNom(listKeyWordsCase[0]);
      for(let i=1; i<listKeyWordsCase.length; i++){
        tempResultName = await getPrestataireByNom(listKeyWordsCase[i]);
        for(let j=0; j<tempResultName.length; j++){
          if(!(this.includesId(resultName,tempResultName[j].idpresta)))
            resultName.push(tempResultName[j]);
        }
      }
      return resultName;
    },
    async filterByName(){
      var resultName;
      resultName = await this.filterByNameAllCase();
      return resultName;
    },
    async associatePrestaTags(){
      for(let i=0; i<this.prestataires.length; i++){
        this.prestataires[i].tags = [];
        var tempTags = await getPrestataireTags(this.prestataires[i].idpresta);
        for(let j=0; j<tempTags.length; j++){
          this.prestataires[i].tags.push(tempTags[j]);
        }
      }
      this.prestataires.push(1);
      this.prestataires.pop();
    },
    async allPresta(){
      var resultAll;
      resultAll = await getAllPrestataires();
      this.prestataires = [];
      for(let i=0; i<resultAll.length; i++){
        this.prestataires.push(resultAll[i]);
      }
      await this.associatePrestaTags();
    },
    async allTags(){
      await this.getAllTagStore;
      this.tags = this.getAllTag;
    },
    async filterPresta(){
      this.verifFiltreOn();
      if(this.filterTagOn || this.filterNameOn){
        var resultTag;
        var resultName;
        if(this.filterTagOn && this.filterNameOn){
          resultTag = await this.filterByTags();
          resultName = await this.filterByName();
          this.prestataires = [];
          var tempPresta = [];
          for(let i=0; i<resultTag.length; i++){
            tempPresta.push(resultTag[i]);
          }
          for (let i = 0; i < resultName.length; i++) {
            if (this.includesId(tempPresta,resultName[i].idpresta))
              this.prestataires.push(resultName[i]);
          }
        }
        else if(this.filterTagOn){
          resultTag = await this.filterByTags();
          this.prestataires = [];
          for(let i=0; i<resultTag.length; i++){
            this.prestataires.push(resultTag[i]);
          }
        }
        else{
          resultName = await this.filterByName();
          this.prestataires = [];
          for(let i=0; i<resultName.length; i++){
            this.prestataires.push(resultName[i]);
          }
        }
        await this.associatePrestaTags();
      }
      else{
        this.allPresta();
      }
    },
    verifFiltreOn(){
      let searchValue = document.getElementById('search').value;
      if(isNaN(searchValue)) 
        this.filterNameOn = true;
      else
        this.filterNameOn = false;
    }
  },
  mounted() {
    this.allPresta();
    this.allTags();
  },
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
  width: 220px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.prestataires-card {
  flex: 0 0 calc(25% - 20px);
  height: auto;
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
