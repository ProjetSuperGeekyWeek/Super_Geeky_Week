<template>
    <div id="carte">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.0877509452343!2d6.859888377049205!3d47.604983371189704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47923cda4225b627%3A0xb64bf9b7e3c72d4b!2sATRAXION%20-%20TNT%20EXPO!5e0!3m2!1sfr!2sfr!4v1700042272658!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script>
export default {
    name: 'CarteInteractive',
    data() {
        return{

        }
    }
}
</script>

<style scoped>
#carte{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>