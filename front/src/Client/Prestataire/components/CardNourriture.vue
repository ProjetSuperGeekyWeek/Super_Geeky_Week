<template>
    <div class="card-nourriture">
        <div class="image-nourriture">
            <img src="https://www.lesjardinsdelacomtesse.com/1166-large_default/panier-pique-nique-2-personnes-avec-sac-a-dos-isotherme.jpg" alt="image-nourriture">
        </div>
        <div class="infos-nourriture">
            <h3 v-bind="titre"></h3>
            <p v-bind="description"></p>
            <p>{{ prix }}€</p>
        </div>
        <div class="button-nourriture">
            <input type="number" value="1">
            <button>Ajouter au panier</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardNourriture',
        props: {
            titre: String,
            description: String,
            prix: Number,
            id_proprietaire : Number
        }
    }
</script>

<style scoped>

</style>