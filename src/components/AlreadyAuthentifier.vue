<template>
    <div id="authentifier">
        <h4 id="nom-authentifier">Bienvenue {{ nom }}</h4><br>
        <h5>Vous êtes déjà connecté</h5>
        <div>
            <button id="change-mdp">Changer mot de passe</button>
            <button id="deconnect" @click="deconnect">Déconnexion</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'AlreadyAuthentifier',
    data() {
        return {
        }
    },
    methods: {
        deconnect() {
            this.$store.commit('setAuthentifier', false);
            this.$store.commit('setAdmin', false);
        },
    },
    computed: {
        ...mapState(['admin', 'nom']),
    },
}
</script>

<style scoped>

button {
    width: 30%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid;
    margin-bottom: 10px;
    background-color: rgb(238, 103, 250);
    cursor: pointer;
    border-color: rgb(238, 103, 250);
    color: rgb(88, 3, 88);
}

</style>