<template>
    <div class="services">
        <template v-if="authentifier && proprio">
            <h1 class="intro">{{translate('welcespace')}}{{ prestataire.prenom_personne }} {{ prestataire.nom_personne }}</h1>
            <br>
            <!-- <div class="service-content" v-html="getServicePageText"></div> -->
            <br>
            <h1 class="intro">{{translate('activit')}}</h1>
            <br>
        </template>
        <template v-else>

        </template>
        <div class="service-content">
            <div class="tabactivite">
                <div class="tabactivite-inscriptions">
                    <ModuleInscriptions 
                        v-for="(inscription, index) in inscriptions"
                        :key="index"
                        :position="index"
                        :proprio="proprio"
                        :infos="inscription"
                        :nomJours="nomJours"
                        @update="getInscriptions"
                    />
                </div>
                <div class="tabactivite-livreOr">

                </div>
                <div class="tabactivite-contact">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ModuleInscriptions from '@/Client/Prestataire/components/ModuleInscription.vue';
    import { mapState } from 'vuex';
    import { getPrestataireById } from '@/../../back/axiosFunctions/prestataireAxios';
    import { getAllInscriptionsIdPresta, getAllHorairesIdInscription, getJours } from '@/../../back/axiosFunctions/inscriptionAxios';

    export default {
        name: 'PrestataireView',
        components: { ModuleInscriptions },
        data() {
            return {
                index: 0,
                nomJours: [],
                prestataire: {
                    nom_personne: '',
                    prenom_personne: '',
                    mail_personne: '',
                    description_personne: '',
                    image_personne: '',
                },
                inscriptions: [],
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
          translate(prop) {
            return this[this.lang][this.lang][prop];
          },
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
            async getJours(){
                try {
                    let res = await getJours();
                    this.nomJours = res;
                } catch (error) {
                    console.log(error);
                }
            },
            async loadData() {
                await this.getPrestataire();
                await this.getInscriptions();
                await this.getJours();
            },
        },
        computed: {
            ...mapState(['lang', 'en', 'fr']),
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