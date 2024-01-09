<template>
    <div class="module-inscriptions">
        <div class="card-inscription">
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
                            <span>{{ horaire.heureDebut }} - {{ horaire.heureFin }}</span>
                        </li>
                    </ul>
                </div>
                <div class="card-inscription-tarif" v-if="!alreadyInscrit">
                    <h3>Inscription</h3>
                    <button @click="formulaireInscrire()">{{ stringTarif }}</button>
                </div>
                <div v-if="alreadyInscrit" class="card-inscription-infos">
                    <h4>Vous etes bien inscrit {{ inscritPrenom }} {{ inscritNom }} à la séance de {{ inscritSeance }}</h4>
                    <button @click="alreadyInscrit = false">Désinscrire</button>
                </div>
            </div>
            <div class="card-inscription-formulaire" v-show="inscription">
                <h2>{{ infos.titre }}</h2>
                <select name="seance" class="seance" v-model="inscritSeance">
                    <option v-for="horaire in infos.horaires" :key="horaire" :value="horaire.jour+' de '+horaire.heureDebut+' à '+horaire.heureFin">
                        {{ horaire.jour }} {{ horaire.heureDebut }}-{{ horaire.heureFin }}
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
    </div>
</template>

<script>
export default {
    name: 'ModuleInscriptions',
    props : {
        position : Number,
        proprio : Boolean,
        infos : Object
    },
    data() {
        return {
            image : "https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg",
            alreadyInscrit : false,
            inscription : false,
            inscritNom : '',
            inscritPrenom : '',
            inscritSeance : '',
            inscritDescription : ''
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
                this.turnValidate(seance);
                return true;
            }
        },
        inscrire() {
            if(this.verifNom() && this.verifPrenom() && this.verifSeance()){
                this.alreadyInscrit = true;
                this.inscription = false;
                document.getElementsByClassName("message-erreur")[this.position].innerHTML = "";
            }
        }
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

.card-inscription-tarif {
    margin-bottom: 1rem;
}

.card-inscription-tarif h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.card-inscription-tarif button{
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #000;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
}

.card-inscription-tarif button:hover{
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

.card-inscription-formulaire textarea {
    width: 100%;
    max-width: max-content;
    height: 5rem;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    resize: none;
}

.card-inscription-formulaire textarea:focus {
    outline: none;
    border: 3px solid darkred;
}

.card-inscription-formulaire textarea:hover {
    border-color: darkred;
}

.card-inscription-formulaire .message-erreur {
    display: block;
    color: red;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.card-inscription-formulaire-btn {
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