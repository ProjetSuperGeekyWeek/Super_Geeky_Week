<template>
<div>
  <div v-show="table === 'role'" class="divUpdateCrudView"><updateRole :id="id"/></div>
  <div v-show="table === 'acheter'" class="divUpdateCrudView"><updateAcheter :id="id"/></div>
  <div v-show="table === 'calendrier'" class="divUpdateCrudView"><updateCalendrier :id="id"/></div>
  <div v-show="table === 'emplacement'" class="divUpdateCrudView"><updateEmplacement :id="id"/></div>
  <div v-show="table === 'evenement'" class="divUpdateCrudView"><updateEvenement :id="id"/></div>
  <div v-show="table === 'item'" class="divUpdateCrudView"><updateItem :id="id"/></div>
  <div v-show="table === 'panier'" class="divUpdateCrudView"><updatePanier :id="id"/></div>
  <div v-show="table === 'personne'" class="divUpdateCrudView"><updatePersonne :id="id"/></div>
  <div v-show="table === 'qrcode'" class="divUpdateCrudView"><updateQrCode :id="id"/></div>
  <div v-show="table === 'ressource'" class="divUpdateCrudView"><updateRessource :id="id"/></div>
  <div v-show="table === 'tag'" class="divUpdateCrudView"><updateTag :id="id"/></div>
</div>
</template>

<script>
import updateRole from "@/Admin/Crud/components/role/updateRole.vue";
import updateAcheter from "@/Admin/Crud/components/acheter/updateAcheter.vue";
import updateCalendrier from "@/Admin/Crud/components/calendrier/updateCalendrier.vue";
import updateEmplacement from "@/Admin/Crud/components/emplacement/updateEmplacement.vue";
import updateEvenement from "@/Admin/Crud/components/evenement/updateEvenement.vue";
import updateItem from "@/Admin/Crud/components/item/updateItem.vue";
import updatePanier from "@/Admin/Crud/components/panier/updatePanier.vue";
import updatePersonne from "@/Admin/Crud/components/personne/updatePersonne.vue";
import updateQrCode from "@/Admin/Crud/components/qrCode/updateQrCode.vue";
import updateRessource from "@/Admin/Crud/components/ressource/updateRessource.vue";
import updateTag from "@/Admin/Crud/components/tag/updateTag.vue";
export default {
  name: 'updateCrudView',
  components: {
    updateRole,updateAcheter,updateCalendrier,updateEmplacement,updateEvenement,updateItem,
    updatePanier,updatePersonne,updateQrCode,updateRessource,updateTag

  },
  data: () => {
    return {
      id: -1,
      table: ''
    }
  },
  methods:{
    async loadData(){
      this.id = this.$route.params.id
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