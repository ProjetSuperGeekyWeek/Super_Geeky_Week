<template>
  <div v-if="admin">
    <div class="menu_crud">
      <div class="menu_crud_button">
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('role')" name="menu" id="role" value="role"> <label for="role">{{translate('role')}}</label></div>
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('personne')" name="menu" id="personne" value="personne"> <label for="personne">{{translate('personne')}}</label></div>
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('emplacement')" name="menu" id="emplacement" value="emplacement"> <label for="emplacement">{{translate('emplacement')}}</label></div>
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('ressource')" name="menu" id="ressource" value="ressource"> <label for="ressource">{{translate('ressource')}}</label></div>
        <!--<div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('emplacement_ressource')" name="menu" id="emplacement_ressource" value="emplacement_ressource"> <label for="emplacement_ressource">{{translate('emplressources')}}</label></div>
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('stand')" name="menu" id="stand" value="stand"> <label for="stand">Stand</label></div>-->
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('calendrier')" name="menu" id="calendrier" value="calendrier"> <label for="calendrier">{{translate('calendrier')}}</label></div>
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('panier')" name="menu" id="panier" value="panier"> <label for="panier">{{translate('panier')}}</label></div>
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('item')" name="menu" id="item" value="item"> <label for="item">{{translate('Item')}}</label></div>
        <!--<div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('ligne_panier')" name="menu" id="ligne_panier" value="ligne_panier"> <label for="ligne_panier">{{translate('lignepanier')}}</label></div>-->
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('qr_code')" name="menu" id="qr_code" value="qr_code"> <label for="qr_code">{{translate('QRcode')}}</label></div>
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('acheter')" name="menu" id="acheter" value="acheter"> <label for="acheter">{{translate('acheter')}}</label></div>
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('tag')" name="menu" id="tag" value="tag"> <label for="tag">{{translate('Tag')}}</label></div>
        <!--<div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('personne_tag')" name="menu" id="personne_tag" value="personne_tag"> <label for="personne_tag">{{translate('personnetag')}}</label></div>-->
        <div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('evenement')" name="menu" id="evenement" value="evenement"> <label for="evenement">{{translate('event')}}</label></div>
        <!--<div class="radio_menu_crud grand_moins gras"><input type="radio" @click="selectMenu('creneau')" name="menu" id="creneau" value="creneau"> <label for="creneau">{{translate('creneau')}}</label></div>-->
      </div>
      <div class="menu_crud_emplacement">
        <div v-if="selectedMenu === 'role'" class="crud_role"><crudRole/></div>
        <div v-if="selectedMenu === 'personne'" class="crud_personne"><crudPersonne/></div>
        <div v-if="selectedMenu === 'emplacement'" class="crud_emplacement"><crud-emplacement/></div>
        <div v-if="selectedMenu === 'ressource'" class="crud_ressource"><crud-ressource/></div>
        <!--<div v-if="selectedMenu === 'emplacement_ressource'" class="crud_emplacement_ressource"><crud-emplacement-ressource/></div>
        <div v-if="selectedMenu === 'stand'" class="crud_stand"><crud-stand/></div>-->
        <div v-if="selectedMenu === 'calendrier'" class="crud_calendrier"><crud-calendrier/></div>
        <div v-if="selectedMenu === 'panier'" class="crud_panier"><crud-panier/></div>
        <div v-if="selectedMenu === 'item'" class="crud_item"><crud-item/></div>
        <!--<div v-if="selectedMenu === 'ligne_panier'" class="crud_ligne_panier"><crud-ligne-panier/></div>-->
        <div v-if="selectedMenu === 'qr_code'" class="qr_code"><crud-qr-code/></div>
        <div v-if="selectedMenu === 'acheter'" class="crud_acheter"><crudAcheter/></div>
        <div v-if="selectedMenu === 'tag'" class="crud_tag"><crud-tag/></div>
        <!--<div v-if="selectedMenu === 'personne_tag'" class="crud_personne_tag"><crud-personne-tag/></div>-->
        <div v-if="selectedMenu === 'evenement'" class="crud_evenement"><crud-evenement/></div>
        <!--<div v-if="selectedMenu === 'creneau'" class="crud_creneau"><crudCreneau/></div>-->
      </div>
    </div>
  </div>
  <div v-else>
    <NoAdminRightView/>
  </div>

</template>

<script>
import crudAcheter from "@/Admin/Crud/components/acheter/showAcheter.vue"
import crudCalendrier from "@/Admin/Crud/components/calendrier/showCalendrier.vue"
//import crudCreneau from "@/Admin/Crud/components/creneau/showCreneau.vue"
import crudEmplacement from "@/Admin/Crud/components/emplacement/showEmplacement.vue"
//import crudEmplacementRessource from "@/Admin/Crud/components/emplacementRessource/showEmplacementRessource.vue"
import crudEvenement from "@/Admin/Crud/components/evenement/showEvenement.vue"
//import crudLignePanier from "@/Admin/Crud/components/lignePanier/showLignePanier.vue"
import crudPanier from "@/Admin/Crud/components/panier/showPanier.vue"
import crudPersonne from "@/Admin/Crud/components/personne/showPersonne.vue"
//import crudPersonneTag from "@/Admin/Crud/components/personneTag/showPersonneTag.vue"
import crudQrCode from "@/Admin/Crud/components/qrCode/showQrCode.vue"
import crudRessource from "@/Admin/Crud/components/ressource/showRessource.vue"
import crudRole from "@/Admin/Crud/components/role/showRole.vue"
//import crudStand from "@/Admin/Crud/components/stand/showStand.vue"
import crudTag from "@/Admin/Crud/components/tag/showTag.vue"
import crudItem from "@/Admin/Crud/components/item/showItem.vue"
import NoAdminRightView from '@/Admin/NoAdminRightView/views/NoAdminRightView.vue';
import {mapState} from "vuex";
export default {
  data() {
    return {
      selectedMenu: ''
    };
  },
  computed: {
    ...mapState(['lang', 'en', 'fr', 'ru', 'es', 'gm']),
    ...mapState('authentifierStore', ['admin']),
  },
  methods: {
    translate(prop) {
      return this[this.lang][this.lang][prop];
    },
    selectMenu(menu) {
      if(this.selectedMenu !== menu){
        this.selectedMenu = menu;
        this.$router.push('/admin/crud/' + menu)
      }
    }
  },
  components: {
    NoAdminRightView,
    crudAcheter,crudCalendrier,crudEmplacement,crudEvenement,crudPanier,
    crudQrCode,crudRessource,crudTag,crudItem,crudPersonne,crudRole,
    //crudEmplacementRessource,crudPersonneTag,crudCreneau,crudLignePanier,crudStand
  }
};
</script>

<style>
.menu_crud{
  padding-top: var(--padding-top-navBar);
  display: flex;
}

.menu_crud_button{
  border: 1px red solid;
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 1%;
}

.menu_crud_emplacement{
  border: 1px blue solid;
  width: 80%;
  height: 100vh;
}

.radio_menu_crud{
  display: flex;
  align-content: center;
  gap: 5%;
}

.radio_menu_crud label{
  color: var(--title);
}

.radio_menu_crud input{
  display: none;
}

.radio_menu_crud input:checked{
  display: block;
}
</style>