<template>
  <div id="carte-interactive" @mouseover="addMapListener()">
    <!-- alt + w -->
    <!-- manque correctif bug hover grande scene -->
    <div id="bandeau-container">
      <div id="bandeau-selected">
        <div v-if="!admin" id="haut-selected">
          <router-link id="image-selected" :to="{ name:'page_prestataire', params: { id:idPresta } }">
            <img src="https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg" alt="Image du tournoi">
          </router-link>
          <h4 id="titre-selected">
            {{ nom_prestataire }}
          </h4>
          <div id="tags-selected">
            <h6 v-for="tag in listeTags" :key="tag">
              {{ tag }}
            </h6>
          </div>
          <h6 id="description-selected">
            {{ description }}
          </h6>
        </div>
        <div v-if="admin">
          <div id="carte-config-prestataire">
            <router-link id="carte-config-image"  :to="{ name:'page_prestataire', params: { id:idPresta } }">
              <img src="https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg" alt="Image du tournoi">
            </router-link>
            <div id="carte-config-nom">
              <h4 id="titre-selected">
                {{ nom_prestataire }} {{ prenom_prestataire }}
              </h4>
              <h6 id="description-selected">
                {{ description }}
              </h6>
            </div>
          </div>
          <div v-show="neutre">
            <button v-show="!verifyTaken(idStand)" @click="ajout = true; neutre = false; modif = false">
              Ajouter
            </button>
            <button v-show="verifyTaken(idStand)" @click="modif = true; neutre = false; ajout = false">
              Modifier
            </button>
            <button v-show="verifyTaken(idStand)" @click="deleteStand()">
              Supprimer
            </button>
          </div>
          <div v-show="ajout">
            <select v-model="idNouveauPresta" name="prestataire-ajout" id="select-prestataire-ajout">
              <option v-for="prestataire in listePrestataires" :value="prestataire.idpresta" :key="prestataire.idpresta">
                {{ prestataire.nom }} {{ prestataire.prenom }}
              </option>
            </select>
            <button @click="ajout = false; neutre = true">
              Retour
            </button>
            <button @click="addStand()">
              Ajouter
            </button>
          </div>
          <div v-show="modif">
            <select v-model="idNouveauPresta" name="prestataire-modif" id="select-prestataire-modif">
              <option v-for="prestataire in listePrestataires" :value="prestataire.idpresta" :key="prestataire.idpresta">
                {{ prestataire.nom }} {{ prestataire.prenom }}
              </option>
            </select>
            <button @click="modif = false; neutre = true">
              Retour
            </button>
            <button @click="modifStand()">
              Modifier
            </button>
          </div>
        </div>
        <div id="bas-selected">
          <h5 id="stand-selected">
            {{ nom_stand }}
          </h5>
        </div>
      </div>
    </div>
    <svg id="carte" data-name="carte" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756.73 757.44">
      <rect id="exterieur" class="exterieur" fill="#ccc" x="631.71" y="248.09" width="125.02" height="349.62" />
      <polygon id="fond-principal" class="fond" fill="#b3b3b3"
        points="0 0 0 597.71 215.5 597.71 631.71 597.71 631.71 248.09 631.71 .07 0 0" />
      <rect id="fond-entree" class="fond" fill="#b3b3b3" y="597.71" width="215.5" height="159.73" />
      <rect id="fond-auxiliaires" class="fond" fill="#b3b3b3" x="631.71" y="0" width="125.02" height="248.02" />
      <polygon id="16" class="no-stand" fill="#666"
        points="439.34 257.83 489.1 257.83 489.1 307.62 439.33 307.62 439.34 257.83" /> <!-- stand 16 -->
      <polygon id="22" class="no-stand" fill="#666"
        points="439.34 315.32 489.1 315.32 489.1 365.1 439.33 365.1 439.34 315.32" /> <!-- stand 22 -->
      <polygon id="21" class="no-stand" fill="#666"
        points="381.58 315.32 431.33 315.32 431.33 365.1 381.56 365.1 381.58 315.32" /> <!-- stand 21 -->
      <polygon id="15" class="no-stand" fill="#666"
        points="381.57 257.83 431.32 257.83 431.32 307.62 381.55 307.62 381.57 257.83" /> <!-- stand 15 -->
      <polygon id="14" class="no-stand" fill="#666"
        points="283.78 257.83 333.54 257.83 333.54 307.62 283.77 307.62 283.78 257.83" /> <!-- stand 14 -->
      <polygon id="20" class="no-stand" fill="#666"
        points="283.78 315.32 333.54 315.32 333.54 365.1 283.77 365.1 283.78 315.32" /> <!-- stand 20 -->
      <polygon id="19" class="no-stand" fill="#666"
        points="226.01 315.32 275.77 315.32 275.77 365.1 226 365.1 226.01 315.32" /> <!-- stand 19 -->
      <polygon id="13" class="no-stand" fill="#666"
        points="226.01 257.83 275.76 257.83 275.76 307.62 225.99 307.62 226.01 257.83" /> <!-- stand 13 -->
      <polygon id="26" class="no-stand" fill="#666"
        points="283.8 409.04 333.55 409.04 333.55 458.82 283.78 458.82 283.8 409.04" /> <!-- stand 26 -->
      <polygon id="32" class="no-stand" fill="#666"
        points="283.8 466.52 333.55 466.52 333.55 516.31 283.78 516.31 283.8 466.52" /> <!-- stand 32 -->
      <polygon id="31" class="no-stand" fill="#666"
        points="226.03 466.52 275.78 466.52 275.78 516.31 226.01 516.31 226.03 466.52" /> <!-- stand 31 -->
      <polygon id="25" class="no-stand" fill="#666"
        points="226.02 409.04 275.78 409.04 275.78 458.82 226.01 458.82 226.02 409.04" /> <!-- stand 25 -->
      <polygon id="28" class="no-stand" fill="#666"
        points="439.35 409.04 489.11 409.04 489.11 458.82 439.34 458.82 439.35 409.04" /> <!-- stand 28 -->
      <polygon id="33" class="no-stand" fill="#666"
        points="381.59 466.52 431.34 466.52 431.34 516.31 381.57 516.31 381.59 466.52" /> <!-- stand 33 -->
      <polygon id="27" class="no-stand" fill="#666"
        points="381.58 409.04 431.33 409.04 431.33 458.82 381.56 458.82 381.58 409.04" /> <!-- stand 27 -->
      <polygon id="5" class="no-stand" fill="#666"
        points="439.33 110.73 489.08 110.73 489.08 160.51 439.31 160.51 439.33 110.73" /> <!-- stand 5 -->
      <polygon id="9" class="no-stand" fill="#666"
        points="439.33 168.21 489.08 168.21 489.08 218 439.31 218 439.33 168.21" /> <!-- stand 9 -->
      <polygon id="8" class="no-stand" fill="#666"
        points="381.56 168.21 431.31 168.21 431.31 218 381.54 218 381.56 168.21" /> <!-- stand 8 -->
      <polygon id="4" class="no-stand" fill="#666"
        points="381.55 110.73 431.31 110.73 431.31 160.51 381.54 160.51 381.55 110.73" /> <!-- stand 4 -->
      <polygon id="3" class="no-stand" fill="#666"
        points="283.78 110.72 333.54 110.72 333.54 160.5 283.77 160.5 283.78 110.72" /> <!-- stand 3 -->
      <polygon id="7" class="no-stand" fill="#666"
        points="283.78 168.2 333.54 168.2 333.54 217.99 283.77 217.99 283.78 168.2" /> <!-- stand 7 -->
      <polygon id="6" class="no-stand" fill="#666"
        points="520.98 110.72 570.74 110.72 570.74 160.5 520.97 160.5 520.98 110.72" /> <!-- stand 6 -->
      <polygon id="10" class="no-stand" fill="#666"
        points="520.98 168.2 570.74 168.2 570.74 217.99 520.97 217.99 520.98 168.2" /> <!-- stand 10 -->
      <polygon id="2" class="no-stand" fill="#666" points="570.74 .02 570.74 49.78 520.96 49.78 520.96 0 570.74 .02" />
      <!-- stand 2 -->
      <polygon id="1" class="no-stand" fill="#666" points="513.26 .02 513.26 49.78 463.47 49.78 463.47 0 513.26 .02" />
      <!-- stand 1 -->
      <polygon id="12" class="no-stand" fill="#666"
        points="117.46 257.83 167.21 257.83 167.21 307.62 117.44 307.62 117.46 257.83" /> <!-- stand 12 -->
      <polygon id="18" class="no-stand" fill="#666"
        points="117.46 315.32 167.21 315.32 167.21 365.1 117.44 365.1 117.46 315.32" /> <!-- stand 18 -->
      <polygon id="24" class="no-stand" fill="#666"
        points="117.46 408.36 167.21 408.36 167.21 458.15 117.44 458.15 117.46 408.36" /> <!-- stand 24 -->
      <polygon id="30" class="no-stand" fill="#666"
        points="117.46 465.85 167.21 465.85 167.21 515.63 117.44 515.63 117.46 465.85" /> <!-- stand 30 -->
      <polygon id="23" class="no-stand" fill="#666" points=".01 409.05 49.77 409.05 49.77 458.83 0 458.83 .01 409.05" />
      <!-- stand 23 -->
      <polygon id="29" class="no-stand" fill="#666" points=".01 466.53 49.77 466.53 49.77 516.32 0 516.32 .01 466.53" />
      <!-- stand 29 -->
      <polygon id="11" class="no-stand" fill="#666" points=".01 257.83 49.77 257.83 49.77 307.62 0 307.62 .01 257.83" />
      <!-- stand 11 -->
      <polygon id="17" class="no-stand" fill="#666" points=".01 315.32 49.77 315.32 49.77 365.1 0 365.1 .01 315.32" />
      <!-- stand 17 -->
      <polygon id="35" class="no-stand" fill="#666"
        points="226.02 597.69 226.02 547.93 275.8 547.93 275.8 597.7 226.02 597.69" /> <!-- dédicace 1 -->
      <polygon id="36" class="no-stand" fill="#666"
        points="283.5 597.69 283.5 547.93 333.29 547.93 333.29 597.7 283.5 597.69" /> <!-- dédicace 2 -->
      <polygon id="37" class="no-stand" fill="#666"
        points="341.01 547.92 390.77 547.92 390.77 597.71 341 597.71 341.01 547.92" /> <!-- dédicace 3 -->
      <polygon id="38" class="no-stand" fill="#666" points="283.52 49.76 283.52 0 417.37 0 417.37 49.77 283.52 49.76" />
      <!-- bar -->
      <polygon id="39" class="no-stand" fill="#666"
        points="618.48 11.83 745.87 11.83 745.87 105.9 618.44 105.9 618.48 11.83" /> <!-- salle 1 -->
      <polygon id="40" class="no-stand" fill="#666"
        points="618.48 135.6 745.87 135.6 745.87 229.67 618.44 229.67 618.48 135.6" /> <!-- salle 2 -->
      <polygon id="42" class="no-stand" fill="#666"
        points="22.77 190.6 22.77 21.03 125.95 21.03 125.95 190.65 22.77 190.6" /> <!-- scene grande -->
      <polygon id="41" class="no-stand" fill="#666"
        points="523.72 433.62 523.72 306.23 617.79 306.23 617.79 433.66 523.72 433.62" /> <!-- espace gaming -->
      <polygon id="44" class="no-stand" fill="#666"
        points="756.71 349.04 717.34 349.04 717.34 266.26 756.73 266.26 756.71 349.04" /> <!-- foodtruck 1 -->
      <polygon id="45" class="no-stand" fill="#666"
        points="756.71 456.11 717.34 456.11 717.34 373.33 756.73 373.33 756.71 456.11" /> <!-- foodtruck 2 -->
      <polygon id="46" class="no-stand" fill="#666"
        points="756.72 563.17 717.35 563.17 717.35 480.39 756.73 480.39 756.72 563.17" /> <!-- foodtruck 3 -->
      <polygon id="43" class="no-stand" fill="#666"
        points="549.9 589.26 549.9 483.43 626.54 483.43 626.54 589.29 549.9 589.26" /> <!-- scene petite -->
      <rect id="34" class="no-stand" fill="#666" x="103.66" y="547.93" width="85.26" height="50.22" /> <!-- stand 34 -->
      <rect id="47" class="no-stand" fill="#666" x="103.66" y="598.15" width="111.84" height="48.55" /> <!-- accueil -->
    </svg>
    <InfobulleCarte nom_prestataire="nom" nom_stand="stand" id="infobulle" class="infobulle-hidden" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import InfobulleCarte from '@/Client/Carte/components/InfobulleCarte.vue'
import {
  getInfoBulle, getInfoPanel, getAllStandsTaken, getInfoPanelNoTake, saveStand,
  updateStand, deleteStand
} from '@/../../back/axiosFunctions/carteAxios.js'
import { getAllPrestataires, getPrestataireTags } from '@/../../back/axiosFunctions/prestataireAxios.js'

export default {
  name: 'CarteInteractive',
  components: {
    InfobulleCarte,
  },
  data() {
    return {
      alreadyEvent: false,
      idAllStandsTaken: [],
      listePrestataires: [],
      listeTags: [],
      standHoverId: null,
      neutre: true,
      ajout: false,
      modif: false,
      idPresta: null,
      idStand: null,
      idNouveauPresta: null,
      description: null,
    }
  },
  methods: {
    async getAllPrestataires() {
      var result = await getAllPrestataires();
      for (var i = 0; i < result.length; i++) {
        this.listePrestataires.push(result[i]);
      }
    },
    async deleteStand() {
      await deleteStand(this.idStand);
      await this.updateCarte();
      var stand = document.getElementById(this.idStand);
      stand.setAttribute('class', 'no-stand stand-selected');
    },
    async addStand() {
      await saveStand(this.idStand, this.idNouveauPresta);
      await this.updateCarte();
      var stand = document.getElementById(this.idStand);
      stand.setAttribute('class', 'no-stand stand-selected');
      this.idPresta = this.idNouveauPresta;
      this.idNouveauPresta = null;
      this.neutre = true;
      this.ajout = false;
    },
    async modifStand() {
      await updateStand(this.idStand, this.idNouveauPresta);
      await this.updateCarte();
      var stand = document.getElementById(this.idStand);
      stand.setAttribute('class', 'no-stand stand-selected');
      this.idPresta = this.idNouveauPresta;
      this.idNouveauPresta = null;
      this.neutre = true;
      this.modif = false;
    },
    async updateCarte() {
      var bandeau = document.getElementById("bandeau-selected");
      bandeau.style.maxWidth = "0%";
      bandeau.style.border = "none";
      var result = null;
      try {
        this.idAllStandsTaken = [];
        result = await getAllStandsTaken();
        for (var i = 0; i < result.length; i++) {
          this.idAllStandsTaken.push(result[i].id_emplacement);
        }
      } catch (error) {
        console.log("Cas anormal dans getAllStandsTaken");
      }
      this.changeColorNoTaken();
      await this.bandeauSelected(document.getElementById(this.idStand));
    },
    async infoBulle(stand) {
      var infoBulle = document.getElementById("infobulle");
      infoBulle.setAttribute('class', 'infobulle');
      var result = null;
      try {
        result = await getInfoBulle(stand.id);
        this.$store.commit('setNomPrestataire', result.nom);
        this.$store.commit('setPrenomPrestataire', result.prenom);
        this.$store.commit('setNomStand', result.nomstand);
        //position
        var widthBulle = infoBulle.getBoundingClientRect().width;
        var heightBulle = infoBulle.getBoundingClientRect().height;
        var widthStand = stand.getBoundingClientRect().width;
        var ajustementX = (widthStand - widthBulle) / 2;
        var ajustementY = -(heightBulle + 10);
        infoBulle.style.top = ((stand.getBoundingClientRect().top + window.pageYOffset) + ajustementY) + "px";
        infoBulle.style.left = ((stand.getBoundingClientRect().left + window.pageXOffset) + ajustementX) + "px";
      } catch (error) {
        console.log("Cas Anormal dans GetInfoBulle");
      }
    },
    async bandeauSelected(stand) {
      var result = null;
      this.listeTags = [];
      if (!this.verifyTaken(stand.id)) {
        this.$store.commit('setNomPrestataire', "Aucun");
        this.$store.commit('setPrenomPrestataire', "prestataire");
        this.description = "Aucune description";
        try {
          result = await getInfoPanelNoTake(stand.id);
        } catch (error) {
          console.log("Cas anormal dans GetInfoPanelNoTake");
        }
      } else {
        try {
          result = await getInfoPanel(stand.id);
          this.$store.commit('setNomPrestataire', result.nom);
          this.$store.commit('setPrenomPrestataire', result.prenom);
          this.description = result.description;
          this.idPresta = result.idpresta;
          var resultTags = await getPrestataireTags(result.idpresta);
          for (var i = 0; i < resultTags.length; i++) {
            this.listeTags.push(resultTags[i].nom_tag);
          }
        } catch (error) {
          console.log("Cas anormal dans GetInfoPanel");
        }
      }
      this.idStand = stand.id;
      this.$store.commit('setNomStand', result.nomstand);
      var bandeau = document.getElementById("bandeau-selected");
      bandeau.style.maxWidth = "100%";
      bandeau.style.border = "3px solid #000";
    },
    resetAllClicked() {
      var map = document.getElementById('carte');
      var polygones = map.getElementsByTagName('polygon');
      var rects = map.getElementsByTagName('rect');
      var paths = [...polygones, ...rects];
      for (var i = 0; i < paths.length; i++) {
        if (paths[i].classList.contains('stand-selected')) {
          if (this.verifyTaken(paths[i].id)) {
            paths[i].setAttribute('class', 'stand');
          } else {
            paths[i].setAttribute('class', 'no-stand');
          }
        }
      }
    },
    verifyNoClicked() {
      var map = document.getElementById('carte');
      var polygones = map.getElementsByTagName('polygon');
      var rects = map.getElementsByTagName('rect');
      var paths = [...polygones, ...rects];
      var noClicked = true;
      for (var i = 0; i < paths.length; i++) {
        if (paths[i].classList.contains('stand-selected')) {
          noClicked = false;
        }
      }
      return noClicked;
    },
    verifyTaken(idStand) {
      for (var i = 0; i < this.idAllStandsTaken.length; i++) {
        if (idStand == this.idAllStandsTaken[i]) {
          return true;
        }
      }
      return false;
    },
    changeColorNoTaken() {
      for (var i = 0; i < this.idAllStandsTaken.length; i++) {
        var stand = document.getElementById(this.idAllStandsTaken[i]);
        stand.setAttribute('class', 'stand');
      }
    },
    async addMapListener() {
      if (this.alreadyEvent === false) {
        var result = null;
        try {
          result = await getAllStandsTaken();
          for (var i = 0; i < result.length; i++) {
            this.idAllStandsTaken.push(result[i].id_emplacement);
          }
        } catch (error) {
          console.log("Cas anormal dans getAllStandsTaken");
        }
        this.changeColorNoTaken();
        if (this.admin) {
          this.getAllPrestataires();
        }
        var map = document.getElementById("carte");
        var polygones = map.getElementsByTagName("polygon");
        var rects = map.getElementsByTagName("rect");
        var paths = [...polygones, ...rects];
        var vue = this;

        paths.forEach(stand => {
          stand.addEventListener('mouseenter', function () {
            if (stand.classList.contains('stand') && vue.verifyNoClicked() && stand.id !== vue.standHoverId) {
              stand.setAttribute('class', 'stand stand-hover');
              vue.infoBulle(stand);
              vue.standHoverId = stand.id;
            }
          });
          stand.addEventListener('mouseleave', function () {
            if (stand.classList.contains('stand-hover')) {
              stand.setAttribute('class', 'stand');
              var infoBulle = document.getElementById("infobulle");
              infoBulle.setAttribute('class', 'infobulle-hidden');
              vue.standHoverId = null;
            }
          });
          stand.addEventListener('click', function () {
            if (stand.classList.contains('stand-selected')) {
              setTimeout(function () {
                if (vue.verifyTaken(stand.id)) {
                  stand.setAttribute('class', 'stand stand-hover');
                } else {
                  stand.setAttribute('class', 'no-stand');
                }
              }, 100);
              if (vue.verifyTaken(stand.id)) {
                vue.infoBulle(stand);
              }
              var bandeau = document.getElementById("bandeau-selected");
              bandeau.style.maxWidth = "0%";
              bandeau.style.border = "none";
            }
            else if (stand.classList.contains('stand') || (vue.admin && stand.classList.contains('no-stand'))) {
              vue.resetAllClicked();
              vue.bandeauSelected(stand);
              setTimeout(function () {
                if (vue.verifyTaken(stand.id)) {
                  stand.setAttribute('class', 'stand stand-selected');
                } else {
                  stand.setAttribute('class', 'no-stand stand-selected');
                }
              }, 100);
              var infoBulle = document.getElementById("infobulle");
              infoBulle.setAttribute('class', 'infobulle-hidden');
            }
          });
        });
        this.alreadyEvent = true;
      }
    },
  },
  computed: {
    ...mapState(['nom_prestataire', 'prenom_prestataire', 'nom_stand']),
    ...mapState('authentifierStore',['admin']),
  },
}
</script>

<style scoped>
#carte-interactive {
  width: 100%;
  height: 100%;
  display: flex;
}

#carte {
  width: 100%;
  height: 100%;
}

svg rect {
  stroke: black;
  transition: fill 0.3s ease;
}

svg polygon {
  stroke: black;
  transition: fill 0.3s ease;
}

.stand {
  fill: #f1975b;
  stroke: black;
}

.stand-hover {
  fill: #fc3816;
  filter: drop-shadow(0px 0px 30px #fc8873);
  stroke: none;
}

.stand-selected {
  fill: #be2105;
  filter: drop-shadow(0px 0px 30px #ee6149);
  stroke: none;
}

.infobulle {
  display: block;
}

.infobulle-hidden {
  display: none;
}

#bandeau-container {
  width: 20%;
  max-height: fit-content;
  display: flex;
  justify-content: flex-end;
  position: relative;
}

#bandeau-selected {
  max-width: 0%;
  max-height: 100%;
  background-color: #fff;
  border-radius: 10px 0px 0px 10px;
  transition: all 0.3s ease;
  overflow: hidden;
}

#bandeau-selected #haut-selected {
  width: 100%;
  height: 90%;
  border-radius: 7px 0px 0px 0px;
  border-bottom: 4px solid #000;
  overflow-y: scroll;
}

#haut-selected #image-selected {
  width: 100%;
  height: 30%;
  overflow: hidden;
}

#image-selected img {
  width: 100%;
  height: 30%;
  border-bottom: 1px solid black;
  border-radius: 7px 0px 0px 0px;
  object-fit: cover;
}

#haut-selected #titre-selected {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: red;
  margin-top: 1%;
  margin-bottom: 1%;
}

#haut-selected #tags-selected {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#tags-selected h6 {
  font-size: 1rem;
  margin-left: 1%;
  margin-right: 1%;
}

#haut-selected #description-selected {
  font-size: 0.8rem;
  margin-top: 1%;
  margin-bottom: 1%;
  overflow-y: scroll;
}

#bandeau-selected #bas-selected {
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: rgb(158, 12, 12);
  background-color: lightcoral;
}</style>