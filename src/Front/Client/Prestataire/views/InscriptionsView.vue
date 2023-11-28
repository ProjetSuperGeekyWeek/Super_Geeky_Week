<template>
    <div id="inscriptions">
        <ModuleInscriptions />
    </div>
</template>

<script>
import ModuleInscriptions from '@/Front/Client/Prestataire/components/ModuleInscription.vue';

export default {
    name: 'InscriptionsView',
    data() {
        return {};
    },
    components: { ModuleInscriptions }
}

</script>

<style scoped>

</style>