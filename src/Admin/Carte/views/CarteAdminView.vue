<template>
    <div id="view-carte-admin">
        <CarteInteractive/>
    </div>
</template>

<script>
import CarteInteractive from '@/Client/Carte/components/CarteInteractive.vue'

export default {
    name: 'CarteAdminView',
    components: {
        CarteInteractive
    }
}

</script>

<style scoped>

#view-carte-admin {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 300px;
}

</style>