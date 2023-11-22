<template>
    <div id="module-inscriptions">
        <div id="card-inscription">
            <div id="card-inscription-image">
                <img :src="image" alt="Image de l'événement">
            </div>
            <div v-show="!inscription" id="card-inscription-body">
                <h2>{{ titre }}</h2>
                <p>{{ description }}</p>
                <div id="card-inscription-horaires">
                    <h3>Horaires</h3>
                    <ul>
                        <li v-for="horaire in horaires" :key="horaire">
                            <span>{{ horaire.jour }}</span>
                            <span>{{ horaire.heureDebut }} - {{ horaire.heureFin }}</span>
                        </li>
                    </ul>
                </div>
                <div id="card-inscription-tarif" v-if="!alreadyInscrit">
                    <h3>Inscription</h3>
                    <button @click="inscription = !inscription">{{ tarif }}</button>
                </div>
                <div v-if="alreadyInscrit" id="card-inscription-infos">
                    <h4>Vous etes bien inscrit monsieur John Doe à 14h30</h4>
                </div>
            </div>
            <div id="card-inscription-formulaire" v-show="inscription">
                <h2>{{ titre }}</h2>
                <select name="seance" id="seance" v-model="inscritSeance">
                    <option v-for="horaire in horaires" :key="horaire" :value="horaire.jour">
                        {{ horaire.jour }} {{ horaire.heureDebut }}-{{ horaire.heureFin }}
                    </option>
                </select>
                <div id="card-inscription-formulaire-infos">
                    <input type="text" name="nom" id="nom" placeholder="nom" v-model="inscritNom">
                    <input type="text" name="prenom" id="prenom" placeholder="prenom" v-model="inscritPrenom">
                </div>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="description" v-model="inscritDescription"></textarea>
                <div id="card-inscription-formulaire-btn">
                    <button id="btn-retour" @click="inscription = !inscription">Retour</button>
                    <button id="btn-valider">Valider</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModuleInscriptions',
    data() {
        return {
            titre : "Tournoi super smash bros. ultimate",
            description : "Venez vous affronter sur le dernier opus de la série Super Smash Bros. ! Avec finale sur scène et cashPrize à la clef !",
            horaires : [
                {
                    jour : "Vendredi",
                    heureDebut : "17h00",
                    heureFin : "20h00"
                },
                {
                    jour : "Samedi",
                    heureDebut : "14h00",
                    heureFin : "17h00"
                },
                {
                    jour : "Dimanche",
                    heureDebut : "14h00",
                    heureFin : "17h00"
                }
            ],
            tarif : "Gratuite",
            image : "https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg",
            alreadyInscrit : false,
            inscription : false,
            inscritNom : '',
            inscritPrenom : '',
            inscritSeance : '',
            inscritDescription : ''
        }
    },
    methods: {

    },
    mounted() {

    }
}

</script>

<style scoped>

#module-inscriptions {
    width: 40%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#card-inscription {
    width: 50%;
    height: 70%;
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

#card-inscription-image {
    width: 100%;
    height: 40%;
    overflow: hidden;
}

#card-inscription-image img {
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-radius: 7px 7px 0px 0px;
    border-bottom: 4px solid #000;
}

#card-inscription-body, #card-inscription-formulaire{
    max-width: fit-content;
    width: 100%;
    height: 60%;
    padding: 1rem;
}

#card-inscription-body h2,  #card-inscription-formulaire h2{
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

#card-inscription-body p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

#card-inscription-horaires {
    margin-bottom: 1rem;
}

#card-inscription-horaires h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

#card-inscription-horaires ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#card-inscription-horaires ul li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

#card-inscription-horaires ul li span {
    font-size: 1rem;
}

#card-inscription-tarif {
    margin-bottom: 1rem;
}

#card-inscription-tarif h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

#card-inscription-tarif button{
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #000;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
}

#card-inscription-tarif button:hover{
    background-color: #000;
    color: #fff;
}

#card-inscription-infos {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

#card-inscription-infos h4 {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
}

#card-inscription-formulaire-infos {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

#card-inscription-formulaire-infos input {
    width: 45%;
    height: 2rem;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
}

#card-inscription-formulaire-infos input:focus {
    outline: none;
}

#card-inscription-formulaire-infos input:hover {
    border-color: darkblue;
}

#card-inscription-formulaire-infos input:focus {
    border : 3px solid darkblue;
}

#card-inscription-formulaire textarea {
    width: 100%;
    max-width: max-content;
    height: 5rem;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    resize: none;
}

#card-inscription-formulaire textarea:focus {
    outline: none;
    border: 3px solid darkblue;
}

#card-inscription-formulaire textarea:hover {
    border-color: darkblue;
}

#card-inscription-formulaire-btn {
    display: flex;
    justify-content: space-between;
}

#card-inscription-formulaire-btn button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;
}

#btn-retour {
    border: 2px solid #f84646;
    background-color: lightsalmon;
}

#btn-retour:hover {
    background-color: #f84646;
    color: #fff;
}

#btn-valider {
    border: 2px solid rgb(38, 180, 38);
    background-color: lightgreen;
}

#btn-valider:hover {
    background-color: rgb(38, 180, 38);
    color: #fff;
}

#seance{
    width: 100%;
    max-width: min-content;
    height: 3rem;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
}

#seance:focus {
    outline: none;
}

</style>