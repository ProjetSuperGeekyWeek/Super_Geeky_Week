<template>
    <div class="vitrine-principale">
        <img src="../assets/logo.png" alt="Image principale">
        <h1>{{ titre }}</h1>
    </div>
</template>

<script>
export default {
    name: 'VitrinePrincipale',
    props: {
        titre: {
            type: String,
            default: 'Super Geeky Week'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    width: 100%;
}
h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 2px 2px 2px #000;
    color: #fff;
    font-size: 4rem;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
}
</style>
