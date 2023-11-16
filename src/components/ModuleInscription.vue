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
                <select name="seance" id="seance">
                    <option v-for="horaire in horaires" :key="horaire" :value="horaire.jour">
                        {{ horaire.jour }} {{ horaire.heureDebut }}-{{ horaire.heureFin }}
                    </option>
                </select>
                <div id="card-inscription-formulaire-infos">
                    <input type="text" name="nom" id="nom" placeholder="nom">
                    <input type="text" name="prenom" id="prenom" placeholder="prenom">
                </div>
                <div id="card-inscription-formulaire-btn">
                    <button @click="inscription = !inscription">Retour</button>
                    <button>Valider</button>
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

#card-inscription-tarif button, #card-inscription-formulaire-btn button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #000;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
}

#card-inscription-tarif button:hover, #card-inscription-formulaire-btn button:hover {
    background-color: #000;
    color: #fff;
}

#seance{
    border: 1px solid black;
    background-color: aquamarine;
}

</style>