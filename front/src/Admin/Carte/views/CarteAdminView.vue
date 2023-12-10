<template>
    <div id="view-carte-admin">
        <CarteInteractiveAdmin/>
    </div>
</template>

<script>
import CarteInteractiveAdmin from '@/Admin/Carte/components/CarteInteractiveAdmin.vue'

export default {
    name: 'CarteAdminView',
    components: {
        CarteInteractiveAdmin
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