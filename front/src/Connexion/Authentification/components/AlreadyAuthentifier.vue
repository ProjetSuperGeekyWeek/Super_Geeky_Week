<template>
    <div id="authentifier">
        <h4 id="nom-authentifier">{{translate('bienvenue')}}{{ nom }}</h4><br>
        <h5>{{translate('dejaconnect')}}</h5>
        <div id="btn-box">
            <button id="change-mdp" @click="$router.push('/change_password')">{{translate('changemdp')}}</button>
            <button id="deconnect" @click="deconnect">{{translate('deconection')}}</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
// import { logoutSession } from '@/../../back/axiosFunctions/sessionAxios';
export default {
    name: 'AlreadyAuthentifier',
    data() {
        return {
        }
    },
    methods: {
      translate(prop) {
        return this[this.lang][this.lang][prop];
      },
        ...mapMutations('authentifierStore',['setAuthentifier', 'setAdmin']),
        deconnect() {
                this.setAuthentifier(false);
                this.setAdmin(false);
        },
    },
    computed: {
        ...mapState(['lang', 'en', 'fr']),
        ...mapState('authentifierStore',['admin']),
    },
}
</script>

<style scoped>

button {
    width: 30%;
    height: 3em;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid;
    margin-bottom: 10px;
    background-color: rgb(238, 103, 250);
    cursor: pointer;
    border-color: rgb(238, 103, 250);
    color: rgb(88, 3, 88);
    transition: ease-in-out 0.15s;
}

button:hover {
    background-color: rgb(88, 3, 88);
    color: rgb(238, 103, 250);
}

#authentifier {
    width: 30%;
    height: 100%;
    margin-left: 35%;
    background-color: mediumpurple;
    border-radius: 5px;
    padding: 10px;
    margin-top:6%;
    border: 2px solid palevioletred;
    filter: drop-shadow(0 0 10rem palevioletred);
}

#nom-authentifier {
    text-align: center;
    margin-bottom: 5%;
    font-size: 1.5em;
}

h5 {
    text-align: center;
    margin-bottom: 5%;
    font-size: 1.2em;
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