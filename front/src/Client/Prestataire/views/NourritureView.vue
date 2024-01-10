<template>
    <div>
        <h1>{{translate('nourriture')}}</h1>
        <div class="cards-nourriture">
            <CardNourriture v-for="nourriture in listeNourritures" v-bind="nourriture" :key="nourriture.id" /> 
                titre="nourriture.titre" description="nourriture.description" prix="nourriture.prix" 
                id_proprietaire="nourriture.id_proprietaire"/>
        </div>
    </div>
</template>

<script>
    import CardNourriture from '../components/CardNourriture.vue';
    import {mapState} from "vuex";
    export default {
        name: 'NourritureView',
        components: {
            CardNourriture,
        },
        data() {
            return {
                listeNourritures: [
                    {
                        id: 1,
                        titre: 'Panier pique-nique 1',
                        description: 'Panier pique-nique pour 2 personnes',
                        prix: 20,
                        id_proprietaire: 1,
                    },
                    {
                        id: 2,
                        titre: 'Panier pique-nique 2',
                        description: 'Panier pique-nique pour 2 personnes',
                        prix: 20,
                        id_proprietaire: 1,
                    },
                    {
                        id: 3,
                        titre: 'Panier pique-nique 3',
                        description: 'Panier pique-nique pour 2 personnes',
                        prix: 20,
                        id_proprietaire: 1,
                    }
                ],
            }
        },
        methods: {
          translate(prop) {
            return this[this.lang][this.lang][prop];
          },
        },
        computed: {
          ...mapState(['lang', 'en', 'fr']),
        },
    }

</script>

<style scoped>

</style>