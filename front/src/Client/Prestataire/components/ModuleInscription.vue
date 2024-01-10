<template>
    <div class="module-inscriptions">
        <div class="card-inscription" v-if="!proprio">
            <div class="card-inscription-image">
                <img :src="image" alt="Image de l'événement">
            </div>
            <div v-show="!inscription" class="card-inscription-body">
                <h2>{{ infos.titre }}</h2>
                <!-- warning -->
                <p>{{ infos.description }}</p>
                <div class="card-inscription-horaires">
                    <h3>Horaires</h3>
                    <ul>
                        <li v-for="horaire in infos.horaires" :key="horaire">
                            <span>{{ horaire.jour }}</span>
                            <span>{{ horaire.heure_debut }} - {{ horaire.heure_fin }}</span>
                        </li>
                    </ul>
                </div>
                <div class="card-inscription-tarif" v-if="!alreadyInscrit">
                    <h3>Inscription</h3>
                    <button @click="formulaireInscrire()">{{ stringTarif }}</button>
                </div>
                <div v-if="alreadyInscrit" class="card-inscription-infos">
                    <h4>Vous etes bien inscrit {{ inscritPrenom }} {{ inscritNom }} à la séance de {{ inscritSeance }}</h4>
                    <button @click="desinscrire">Désinscrire</button>
                </div>
            </div>
            <div class="card-inscription-formulaire" v-show="inscription">
                <h2>{{ infos.titre }}</h2>
                <select name="seance" class="seance" v-model="inscritIndexSeance">
                    <option v-for="(horaire, index) in infos.horaires" :key="index" :value="index">
                        {{ horaire.jour }} {{ horaire.heure_debut }}-{{ horaire.heure_fin }}
                    </option>
                </select>
                <div class="card-inscription-formulaire-infos">
                    <input type="text" name="nom" class="nom" placeholder="nom" v-model="inscritNom" @change="verifNom()">
                    <input type="text" name="prenom" class="prenom" placeholder="prenom" v-model="inscritPrenom" @change="verifPrenom()">
                </div>
                <textarea name="description" class="description" cols="30" rows="10" placeholder="description" v-model="inscritDescription"></textarea>
                <p class="message-erreur"></p>
                <div class="card-inscription-formulaire-btn">
                    <button class="btn-retour" @click="inscription = !inscription">Retour</button>
                    <button class="btn-valider" @click="inscrire()">Valider</button>
                </div>
            </div>
        </div>
        <div class="card-inscription" v-else>
            <div class="card-inscription-image">
                <img :src="image" alt="Image de l'événement">
            </div>
            <div v-show="!modif" class="card-inscription-body">
                <h2>{{ infos.titre }}</h2>
                <!-- warning -->
                <p>{{ infos.description }}</p>
                <div class="card-inscription-horaires">
                    <h3>Horaires</h3>
                    <ul>
                        <li v-for="horaire in infos.horaires" :key="horaire">
                            <span>{{ horaire.jour }}</span>
                            <span>{{ horaire.heure_debut }} - {{ horaire.heure_fin }}</span>
                        </li>
                    </ul>
                </div>
                <div class="card-inscription-tarif">
                    <h3>Inscription</h3>
                    <h4>{{ stringTarif }}</h4>
                </div>
                <div class="card-inscription-admin-btn">
                    <button @click="modif = true">Modifier</button>
                    <button v-show="!listeInscrit" @click="afficherInscrits">Afficher inscrits</button>
                    <button v-show="listeInscrit" @click="listeInscrit = false">Cacher inscrits</button>
                </div>
            </div>
            <div class="card-inscription-formulaire" v-show="modif">
                <textarea name="description-modif" class="card-inscription-modif-titre" cols="30" rows="10" :placeholder="infos.titre" v-model="titreProvisoire"></textarea>
                <textarea name="description-modif" class="description-modif" cols="30" rows="10" :placeholder="infos.description" v-model="descriptionProvisoire"></textarea>
                <!-- <textarea name="description-modif" class="card-inscription-modif-place" cols="30" rows="10" :placeholder="infos.nb_place" v-model="nbPlacesProvisoire"></textarea> -->
                <div class="liste-inscription-horaires" v-for="(horaire, index) in infos.horaires" :key="index">
                    <span>{{ horaire.jour }}</span>
                    <span>{{ horaire.heure_debut }}</span>
                    <span>{{ horaire.heure_fin }}</span>
                    <button @click="removeHoraire(index)">Supprimer</button>
                </div>
                <button class="ajouter-horaire-bouton" @click="addHoraire = true">Ajouter un horaire</button>
                <div v-show="addHoraire">
                    <select name="jour-add" class="jour-add" v-model="idJourAdd">
                        <option v-for="jour in nomJours" :key="jour.id_jour" :value="jour.id_jour">
                            {{ jour.jour }}
                        </option>
                    </select>
                    <div class="jour-add-texte">
                        <span>
                            <input type="number" v-model="newHeureDebut">h
                            <input type="number" v-model="newMinuteDebut">
                        </span>
                        <span>
                            <input type="number" v-model="newHeureFin">h
                            <input type="number" v-model="newMinuteFin">
                        </span>
                    </div>
                    <div class="jour-add-button">
                        <button @click="addHoraire = false">Annuler</button>
                        <button @click="addNewHoraire">Ajouter</button>
                    </div>
                </div>
                <div class="card-inscription-formulaire-btn" v-show="!addHoraire">
                    <button class="btn-retour" @click="modif = false">Annuler</button>
                    <button class="btn-valider" @click="validModif">Valider</button>
                </div>
            </div>
        </div>
        <div class="liste-inscrits" v-if="listeInscrit">
            <div class="liste-inscrits-titre">
                <h2>Liste des inscrits</h2>
            </div>
            <div class="liste-inscrits-body">
                <div class="liste-inscrits-body-titre">
                    <span>Nom</span>
                    <span>Prenom</span>
                    <span>Seance</span>
                    <span>Description</span>
                </div>
                <div class="liste-inscrits-body-inscrit" v-for="(inscrit, index) in listeInscrits" :key="index">
                    <span>{{ inscrit.nom }}</span>
                    <span>{{ inscrit.prenom }}</span>
                    <span>{{ inscrit.jour }} {{ inscrit.heure_debut }}-{{ inscrit.heure_fin }}</span>
                    <span>{{ inscrit.description }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { postInscrit, postHoraire, putInscription, deleteInscrit, deleteHoraire,
        getAllInscritsIdInscription } 
    from '@/../../back/axiosFunctions/inscriptionAxios';

export default {
    name: 'ModuleInscriptions',
    props : {
        position : Number,
        proprio : Boolean,
        infos : Object,
        nomJours: Object,
    },
    data() {
        return {
            image : "https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg",

            alreadyInscrit : false,
            inscription : false,
            inscritNom : '',
            inscritPrenom : '',
            inscritIndexSeance : null,
            inscritSeance : '',
            inscritDescription : '',

            modif: false,
            idJourAdd: null,
            titreProvisoire: '',
            descriptionProvisoire: '',
            // nbPlacesProvisoire: '',
            addHoraire: false,
            jours: [],
            newHeureDebut: '',
            newHeureFin: '',
            newMinuteDebut: '',
            newMinuteFin: '',
            listeInscrit: false,
            listeInscrits: [],
        }
    },
    computed: {
        stringTarif(){
            if (this.infos.tarif == 0) {
                return "Gratuit";
            }
            return this.infos.tarif + "€";
        }
    },
    methods: {
        updateProps(){
            this.$emit('update', true);
        },
        transformMinuteHeureToTimeFormat(heure,minute){
            if(heure < 10){
                heure = "0"+heure;
            }
            if(minute < 10){
                minute = "0"+minute;
            }
            return heure+":"+minute;
        },
        verifNewHoraires(){
            if(
                (isNaN(this.newHeureDebut) || this.newHeureDebut == "")
                || (isNaN(this.newHeureFin) || this.newHeureFin == "")
                || (isNaN(this.newMinuteDebut) || this.newMinuteDebut == "")
                || (isNaN(this.newMinuteFin) || this.newMinuteFin == "")
                || (this.idJourAdd == null)
            ){
                return false;
            }
            if (
                (this.newHeureDebut > 22 || this.newHeureDebut < 8)
                || (this.newHeureFin > 22 || this.newHeureFin < 8)
                || (this.newMinuteDebut > 59 || this.newMinuteDebut < 0)
                || (this.newMinuteFin > 59 || this.newMinuteFin < 0)
            ) {
                return false;
            }
            return true;
        },
        async addNewHoraire(){
            if(this.verifNewHoraires()){
                let id_jour = this.idJourAdd;
                let heure_debut = this.transformMinuteHeureToTimeFormat(this.newHeureDebut,this.newMinuteDebut);
                let heure_fin = this.transformMinuteHeureToTimeFormat(this.newHeureFin,this.newMinuteFin);
                try {
                    await postHoraire(this.infos.id_activite, id_jour, heure_debut, heure_fin);
                    this.addHoraire = false;
                    this.updateProps();
                } catch (error) {
                    console.log(error);
                }
            }else{
                alert("veuillez remplir correctement tout les champs horaires (les heures allant de 8h à 22h et les minutes de 0 à 59) et choisir un jour")
            }
        },
        async removeHoraire(index){
            let id_calendrier = this.infos.horaires[index].id_calendrier;
            try {
                await deleteHoraire(this.infos.id_activite, id_calendrier);
                this.updateProps();
            } catch (error) {
                console.log(error);
            }
        },
        async afficherInscrits(){
            this.listeInscrit = true;
            try {
                let res = await getAllInscritsIdInscription(this.infos.id_activite);
                for (let i = 0; i < res.length; i++) {
                    res[i].heure_debut = res[i].heure_debut.substring(0, 5);
                    res[i].heure_fin = res[i].heure_fin.substring(0, 5);
                }
                this.listeInscrits = res;
            } catch (error) {
                console.log(error);
            }
        },
        async validModif(){
            this.modif = false;
            let titre = this.titreProvisoire;
            if (titre == null || titre == "") {
                titre = this.infos.titre;
            }
            let description = this.descriptionProvisoire;
            if (description == null || description == "") {
                description = this.infos.description;
            }
            // let nb_place = this.nbPlacesProvisoire;
            // if (nb_place == null || nb_place == "") {
            //     nb_place = this.infos.nb_place;
            // }
            let id_activite = this.infos.id_activite;
            try {
                await putInscription(id_activite, titre, description, 1);
                this.updateProps();
            } catch (error) {
                console.log(error);
            }
        },
        turnErreur(element,message){
            if(element != null){
                element.style.filter = "drop-shadow(0px 0px 5px red)";
                element.style.borderColor = "red";
            }
            document.getElementsByClassName("message-erreur")[this.position].innerHTML = message;
        },
        turnValidate(element){
            element.style.filter = "drop-shadow(0px 0px 5px green)";
            element.style.borderColor = "green";
        },
        allNeutral(){
            let nom = document.getElementsByClassName("nom")[this.position];
            let prenom = document.getElementsByClassName("prenom")[this.position];
            let seance = document.getElementsByClassName("seance")[this.position];
            nom.style.filter = "none";
            nom.style.borderColor = "#000";
            prenom.style.filter = "none";
            prenom.style.borderColor = "#000";
            seance.style.filter = "none";
            seance.style.borderColor = "#000";
        },
        formulaireInscrire(){
            this.allNeutral();
            this.inscription = true;
        },
        verifNom(){
            let nom = document.getElementsByClassName("nom")[this.position];
            let regexNom = new RegExp("^[a-zA-Z]{3,}$");
            if(!regexNom.test(nom.value)){
                this.turnErreur(nom, "Le nom doit contenir au moins 3 caractères et ne doit contenir aucun de chiffres");
                return false;
            }else{
                this.turnValidate(nom);
                return true;
            }
        },
        verifPrenom(){
            let prenom = document.getElementsByClassName("prenom")[this.position];
            let regexPrenom = new RegExp("^[a-zA-Z]{3,}$");
            if(!regexPrenom.test(prenom.value)){
                this.turnErreur(prenom, "Le prenom doit contenir au moins 3 caractères et ne doit contenir aucun de chiffres");
                return false;
            }else{
                this.turnValidate(prenom);
                return true;
            }
        },
        verifSeance(){
            let seance = document.getElementsByClassName("seance")[this.position];
            if(seance.value == null || seance.value == ""){
                this.turnErreur(seance, "Veuillez choisir une séance");
                return false;
            }else{
                this.inscritSeance = ""+this.infos.horaires[seance.value].jour+" de "+this.infos.horaires[seance.value].heure_debut+" à "+this.infos.horaires[seance.value].heure_fin;
                this.turnValidate(seance);
                return true;
            }
        },
        async inscrire() {
            if(this.verifNom() && this.verifPrenom() && this.verifSeance()){
                try{
                    if(this.inscritDescription == null || this.inscritDescription == ""){
                        this.inscritDescription = "Aucune description";
                    }
                    await postInscrit( this.infos.id_activite, this.inscritNom, this.inscritPrenom, 
                        this.inscritDescription, this.infos.horaires[this.inscritIndexSeance].id_calendrier);
                    this.alreadyInscrit = true;
                    this.inscription = false;
                    document.getElementsByClassName("message-erreur")[this.position].innerHTML = "";
                }catch(error){
                    console.log(error);
                }
            }
        },
        async desinscrire(){
            try {
                await deleteInscrit(this.infos.id_activite, this.inscritNom, this.inscritPrenom, 
                    this.infos.horaires[this.inscritIndexSeance].id_calendrier);
                this.alreadyInscrit = false;
            } catch (error) {
                console.log(error);
            }
        },
    },
}

</script>

<style scoped>

.module-inscriptions {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
}

.card-inscription {
    width: 50%;
    height: 70%;
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

.card-inscription-image {
    width: 100%;
    height: 40%;
    overflow: hidden;
}

.card-inscription-image img {
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-radius: 7px 7px 0px 0px;
    border-bottom: 4px solid #000;
}

.card-inscription-body, .card-inscription-formulaire{
    width: 100%;
    height: 60%;
    padding: 1rem;
}

.card-inscription-body h2,  .card-inscription-formulaire h2{
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.card-inscription-body p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

.card-inscription-horaires {
    margin-bottom: 1rem;
}

.card-inscription-horaires h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.card-inscription-horaires ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.card-inscription-horaires ul li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.card-inscription-horaires ul li span {
    font-size: 1rem;
}

.card-inscription-tarif, .card-inscription-admin-btn{
    margin-bottom: 1rem;
}

.card-inscription-tarif h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.card-inscription-tarif button, .card-inscription-admin-btn button{
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #000;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
}

.card-inscription-tarif button:hover, .card-inscription-admin-btn button:hover{
    background-color: #000;
    color: #fff;
}

.card-inscription-infos {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.card-inscription-infos h4 {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
}

.card-inscription-formulaire-infos {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.card-inscription-formulaire-infos input {
    width: 45%;
    height: 2rem;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
}

.card-inscription-formulaire-infos input:hover {
    border-color: darkred;
}

.card-inscription-formulaire-infos input:focus {
    outline: none;
    border : 3px solid darkred;
}

.card-inscription-formulaire textarea, .card-inscription-modif-titre {
    width: 100%;
    max-width: max-content;
    height: 5rem;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    resize: none;
}

.card-inscription-formulaire textarea:focus, .card-inscription-modif-titre:focus {
    outline: none;
    border: 3px solid darkred;
}

.card-inscription-formulaire textarea:hover, .card-inscription-modif-titre:hover {
    border-color: darkred;
}

.card-inscription-formulaire .message-erreur {
    display: block;
    color: red;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.card-inscription-formulaire-btn{
    display: flex;
    justify-content: space-between;
}

.card-inscription-formulaire-btn button, .card-inscription-infos button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;
}

.btn-retour, .card-inscription-infos button {
    border: 2px solid #f84646;
    background-color: lightsalmon;
}

.btn-retour:hover, .card-inscription-infos button:hover {
    background-color: #f84646;
    color: #fff;
}

.btn-valider {
    border: 2px solid rgb(38, 180, 38);
    background-color: lightgreen;
}

.btn-valider:hover {
    background-color: rgb(38, 180, 38);
    color: #fff;
}

.seance{
    width: 100%;
    max-width: min-content;
    height: 3rem;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.seance:focus {
    outline: none;
}

</style>