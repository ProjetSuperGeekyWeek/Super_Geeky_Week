<template>
    <!-- 
        directe page authentification
        (+ option changer mot de passe)
        quand authentifié, redirection vers page d'accueil
    -->
    <div class="authentification">
        <img id="image-authentification" src="" alt="Image authentification">
        <FormulaireAuthentification/>
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

</style>
