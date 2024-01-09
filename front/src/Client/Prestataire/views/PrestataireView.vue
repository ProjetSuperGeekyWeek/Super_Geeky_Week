<template>
    <div class="services">
        <template v-if="authentifier && proprio">
            <div class="service-content">
                <p>id : {{ id }}</p>
                <h1 class="intro">Bienvenue dans votre espace : {{ prestataire.prenom_personne }} {{ prestataire.nom_personne }}</h1>
                <br>
                <!-- <div class="service-content" v-html="getServicePageText"></div> -->
                <br>
                <h1 class="intro">Vos activités :</h1>
                <br>
                <div class="tabactivite">
                    <div class="tabactivite-inscriptions">
                        <ModuleInscriptions 
                            v-for="(inscription, index) in inscriptions"
                            :key="index"
                            :position="index"
                            :proprio="proprio"
                            :infos="inscription"
                        />
                    </div>
                    <div class="tabactivite-livreOr">

                    </div>
                    <div class="tabactivite-contact">

                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <h1>Prestataire public coming soon...</h1>
            <p>id : {{ id }}</p>
            <p>idpresta : {{ prestataireAuthentifier.id_personne }}</p>
        </template>
    </div>
</template>

<script>
    import ModuleInscriptions from '@/Client/Prestataire/components/ModuleInscription.vue';
    import { mapState } from 'vuex';
    import { getPrestataireById } from '@/../../back/axiosFunctions/prestataireAxios';
    import { getAllInscriptionsIdPresta, getAllHorairesIdInscription } from '@/../../back/axiosFunctions/inscriptionAxios';

    export default {
        name: 'PrestataireView',
        components: { ModuleInscriptions },
        data() {
            return {
                index: 0,
                prestataire: {
                    nom_personne: '',
                    prenom_personne: '',
                    mail_personne: '',
                    description_personne: '',
                    image_personne: '',
                },
                inscriptions: [
                    {
                    id_activite: 84,
                    titre : "Tournoi super smash bros ultimate",
                    description : "Venez vous affronter sur le dernier opus de la série Super Smash Bros ! Avec finale sur scène et cashPrize à la clef !",
                    horaires : [
                        {
                            id_calendrier: 1,
                            jour : "Vendredi",
                            heure_debut : "17h00",
                            heure_fin : "20h00"
                        },
                        {
                            id_calendrier: 2,
                            jour : "Samedi",
                            heure_debut : "14h00",
                            heure_fin : "17h00"
                        },
                        {
                            id_calendrier: 3,
                            jour : "Dimanche",
                            heure_debut : "14h00",
                            heure_fin : "17h00"
                        }
                    ],
                    tarif : 0,
                    },
                    {
                    id_activite: 90,
                    titre : "Tournoi super cookie clicker",
                    description : "Venez vous détruire les doigts sur la souris",
                    horaires : [
                        {
                            id_calendrier: 1,
                            jour : "Vendredieu",
                            heure_debut : "17h00",
                            heure_fin : "20h00"
                        },
                        {
                            id_calendrier: 2,
                            jour : "Samedieh",
                            heure_debut : "14h00",
                            heure_fin : "17h00"
                        },
                        {
                            id_calendrier: 3,
                            jour : "Dimancheuh",
                            heure_debut : "14h00",
                            heure_fin : "17h00"
                        }
                    ],
                    tarif : 0,
                    },
                ],
                livreOr: {
                    id_personne: '',
                    id_activite: '',
                    note: '',
                    commentaire: '',
                },
                contact: {

                }
            };
        },
        methods: {
            async getPrestataire() {
                try{
                    let res = await getPrestataireById(this.id);
                    this.prestataire.nom_personne = res.nom;
                    this.prestataire.prenom_personne = res.prenom;
                    this.prestataire.mail_personne = res.mail;
                    this.prestataire.description_personne = res.description;
                    this.prestataire.image_personne = res.image;
                } catch (error) {
                    console.log(error);
                }
            },
            async getInscriptions() {
                try{
                    let res = await getAllInscriptionsIdPresta(this.id);
                    for (let i = 0; i < res.length; i++) {
                        res[i].tarif = 0;
                        let resHoraire = await getAllHorairesIdInscription(res[i].id_activite);
                        for (let j = 0; j < resHoraire.length; j++) {
                            resHoraire[j].heure_debut = resHoraire[j].heure_debut.substring(0, 5);
                            resHoraire[j].heure_fin = resHoraire[j].heure_fin.substring(0, 5);
                        }
                        res[i].horaires = resHoraire;
                    }
                    this.inscriptions = res;
                } catch (error) {
                    console.log(error);
                }
            },
            async loadData() {
                await this.getPrestataire();
                await this.getInscriptions();
            },
        },
        computed: {
            ...mapState('authentifierStore', ['authentifier', 'prestataireAuthentifier']),
            // getServicePageText() {
            //     const prestataire = this.$store.state.prestataire;
            //     return `
            //     <img class="imgprofile" src="@/assets/image/images_presta/${prestataire.image_personne}" alt="Image du prestataire"> <br>
            //     Vous êtes: <p class="infoperso">${prestataire.prenom_personne} ${prestataire.nom_personne}</p> <br>
            //     Adresse mail:<p class="infoperso"> ${prestataire.mail_personne} </p> <br>
            //     Vos rôles: <p class="infoperso"> ${prestataire.description_personne} </p>
            //     `;
            // },
            id() {
                return this.$route.params.id;
            },
            proprio() {
                return this.id == this.prestataireAuthentifier.id_personne;
            },
        },
        async mounted() {
            this.loadData();
        },
        watch: {
            $route(to, from) {
                from;
                to;
                this.user = 1;// chercher avec axios les infos de user en fonction de $route.params.id
            },
        },
    };
</script>

<style>
.services {
    margin-top: 15%;
}

.service-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    text-align: center;
    font-size: 1.2rem;
}

.intro {
    text-align: center;
    font-size: 1.8rem;
    font-weight: lighter;
}

.imgprofile {
    width: 20%;
    border-radius: 20%;
    margin-top: 10px;
}

.tabactivite {
    margin-top: 10px;
}

.infoperso {
    font-weight: bold;
}
</style>