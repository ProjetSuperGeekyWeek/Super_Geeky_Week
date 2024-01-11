<template>
  <div v-if="admin">
    <div>
      <div v-show="table === 'role'" class="divAddCrudView"><addRole/></div>
      <div v-show="table === 'acheter'" class="divAddCrudView"><addAcheter/></div>
      <div v-show="table === 'calendrier'" class="divAddCrudView"><addCalendrier/></div>
      <div v-show="table === 'emplacement'" class="divAddCrudView"><addEmplacement/></div>
      <div v-show="table === 'evenement'" class="divAddCrudView"><addEvenement/></div>
      <div v-show="table === 'item'" class="divAddCrudView"><addItem/></div>
      <div v-show="table === 'panier'" class="divAddCrudView"><addPanier/></div>
      <div v-show="table === 'personne'" class="divAddCrudView"><addPersonne/></div>
      <div v-show="table === 'qrcode'" class="divAddCrudView"><addQrCode/></div>
      <div v-show="table === 'ressource'" class="divAddCrudView"><addRessource/></div>
      <div v-show="table === 'tag'" class="divAddCrudView"><addTag/></div>
    </div>
  </div>
  <div v-else>
    <NoAdminRightView/>
  </div>
</template>

<script>
import addRole from "@/Admin/Crud/components/role/addRole.vue";
import addAcheter from "@/Admin/Crud/components/acheter/addAcheter.vue";
import addCalendrier from "@/Admin/Crud/components/calendrier/addCalendrier.vue";
import addEmplacement from "@/Admin/Crud/components/emplacement/addEmplacement.vue";
import addEvenement from "@/Admin/Crud/components/evenement/addEvenement.vue";
import addItem from "@/Admin/Crud/components/item/addItem.vue";
import addPanier from "@/Admin/Crud/components/panier/addPanier.vue";
import addPersonne from "@/Admin/Crud/components/personne/addPersonne.vue";
import addQrCode from "@/Admin/Crud/components/qrCode/addQrCode.vue";
import addRessource from "@/Admin/Crud/components/ressource/addRessource.vue";
import addTag from "@/Admin/Crud/components/tag/addTag.vue";
import NoAdminRightView from '@/Admin/NoAdminRightView/views/NoAdminRightView.vue';
import {mapState} from "vuex";
export default {
  name: 'addCrudView',
  components: {
    addRole,addAcheter,addCalendrier,addEmplacement,addEvenement,addItem,addPanier,addPersonne,addQrCode,addTag,addRessource,NoAdminRightView

  },
  computed: {
    ...mapState('authentifierStore', ['admin']),
  },
  data: () => {
    return {
      id: -1,
      table: ''
    }
  },
  methods:{
    async loadData(){
      this.table = this.$route.params.table
    }
  },
  async mounted() {
    await this.loadData();
  }
}
</script>

<style scoped>

</style>