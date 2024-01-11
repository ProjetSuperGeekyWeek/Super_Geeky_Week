<template>
    <div class="section" v-if="admin">
        <GraphiqueClients/>
    </div>
    <div v-else>
        <NoAdminRightView/>
    </div>
</template>

<script>
import GraphiqueClients from '@/Client/Graphique/components/GraphiqueClients.vue'
import NoAdminRightView from '@/Admin/NoAdminRightView/views/NoAdminRightView.vue';
import {mapState} from "vuex";

export default {
    name: 'StatistiqueView',
    components: {
        GraphiqueClients,
        NoAdminRightView,
    },
    computed: {
        ...mapState('authentifierStore', ['admin']),
    },
}

</script>

<style scoped>
    .section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 250px;
    }
</style>