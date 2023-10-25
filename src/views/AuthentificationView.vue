<template>
    <!-- 
        directe page authentification
        (+ option changer mot de passe)
        quand authentifié, redirection vers page d'accueil
    -->
    <div class="authentification">
        <div class="cadre-authentification">
            <img id="image-authentification" src="" alt="Image authentification">
            <FormulaireAuthentification/>
        </div>
    </div>
</template>

<script>
    import FormulaireAuthentification from '@/components/FormulaireAuthentification.vue';

    export default {
        name: 'AuthentificationView',
        components: {
            FormulaireAuthentification
        },
        methods: {
            authentification() {
                this.email = FormulaireAuthentification.email;
                this.password = FormulaireAuthentification.password;
            }
        },
        computed: {
            function : () => {
                this.authentification();
            }
        }
    }
</script>

<style scoped>

.authentification {
    background-color: rgb(48, 15, 65);
    height: 100vh;
    width: 100vw;
    padding-top: 10vh;
    backdrop-filter: blur(0.5rem);
}

.cadre-authentification {
    background-color: mediumpurple;
    border-radius: 10px;
    height: 50vh;
    width: 50vw;
    margin: auto;
    border: 2px solid palevioletred;
    filter: drop-shadow(0 0 10rem palevioletred);
}

.image-authentification {
    height: 50%;
    width: 50%;
    margin-top: 10vh;
}

</style>
