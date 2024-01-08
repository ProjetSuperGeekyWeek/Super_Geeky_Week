<template>
    <!-- 
        directe page authentification
        (+ option changer mot de passe)
        quand authentifié, redirection vers page d'accueil
    -->
    <div class="authentification">
        <div class="cadre-authentification" v-if="!authentifier">
            <div class="cadre-image">
                <img id="image-authentification" src="@/assets/image/fond_ecran/image_connexion.jpg" alt="Image authentification">
            </div>
            <FormulaireAuthentification/>
        </div>
        <div v-if="authentifier">
            <AlreadyAuthentifier/>
        </div>
        <button @click="adminOn">Admin on</button>
        <button @click="adminOff">Admin off</button>
        <button @click="authentifierOn">Authentifier on</button>
        <button @click="authentifierOff">Authentifier off</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import FormulaireAuthentification from '@/Connexion/Authentification/components/FormulaireAuthentification.vue';
    import AlreadyAuthentifier from '@/Connexion/Authentification/components/AlreadyAuthentifier.vue';

    export default {
        name: 'AuthentificationView',
        data() {
            return {
            }
        },
        components: {
            FormulaireAuthentification,
            AlreadyAuthentifier
        },
        methods: {
            authentifierOn() {
                this.$store.commit('setAuthentifier', true);
            },
            adminOn() {
                this.$store.commit('setAdmin', true);
            },
            authentifierOff() {
                this.$store.commit('setAuthentifier', false);
            },
            adminOff() {
                this.$store.commit('setAdmin', false);
            }
        },
        computed: {
            ...mapState(['authentifier', 'admin'])
        }
    }
</script>

<style scoped>

.authentification {
    background-color: rgb(48, 15, 65);
    height: 100vh;
    width: 100vw;
    padding-top: 25vh;
    backdrop-filter: blur(0.5rem);
}

.cadre-authentification {
    background-color: mediumpurple;
    border-radius: 10px;
    height: 70vh;
    width: 50vw;
    margin: auto;
    border: 2px solid palevioletred;
    filter: drop-shadow(0 0 10rem palevioletred);
}

.cadre-image {
    border-radius: 10px 10px 0 0;
    height: 70%;
    width: 100%;
    overflow: hidden;
}

#image-authentification {
    border-radius: 10px 10px 0 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

</style>
