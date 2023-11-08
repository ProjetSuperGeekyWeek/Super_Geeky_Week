<template>
    <div id="authentifier">
        <h4 id="nom-authentifier">Bienvenue {{ nom }}</h4><br>
        <h5>Vous êtes déjà connecté</h5>
        <div id="btn-box">
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

#authentifier {
    width: 50%;
    height: 100%;
    margin-left: 25%;
    background-color: rgb(103, 250, 213);
    border-radius: 5px;
    border: 1px solid black;
    padding: 10px;
}

@media screen and (orientation: portrait) {
    button{
        display: block;
    }

    #btn-box{
        align-items: center;
    }
}



</style>