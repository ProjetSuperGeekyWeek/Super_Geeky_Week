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
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid;
    margin-bottom: 10px;
    background-color: rgb(238, 103, 250);
    cursor: pointer;
    border-color: rgb(238, 103, 250);
    color: rgb(88, 3, 88);
}

#authentifier {
    width: 30%;
    height: 100%;
    margin-left: 35%;
    background-color: mediumpurple;
    border-radius: 5px;
    padding: 10px;
    margin-top:12%;
    border: 2px solid palevioletred;
    filter: drop-shadow(0 0 10rem palevioletred);
}

#nom-authentifier {
    text-align: center;
}

h5 {
    text-align: center;
}

#btn-box{
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
}

@media screen and (orientation: portrait) {
    button{
        display: block;
    }

    #btn-box{
        align-items: center;
        display: flex;
        flex-direction: column;
    }
}



</style>