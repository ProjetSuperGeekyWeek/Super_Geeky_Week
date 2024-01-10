import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/Client/Accueil/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/billets',
    name: 'billets',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/Client/Boutique/views/BilletsView.vue')
  },
  {
    path: '/exposants',
    name: 'exposants',
    component: () => import('@/Client/Prestataire/views/ExposantsView.vue')
  },
  {
    path: '/page_prestataire/:id',
    name: 'page_prestataire',
    component: () => import('@/Client/Prestataire/views/PrestataireView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/Client/Prestataire/views/ServicesView.vue')
  },
  {
    path: '/authentification',
    name: 'authentification',
    component: () => import('@/Connexion/Authentification/views/AuthentificationView.vue')
  },
  {
    path: '/paiement',
    name: 'paiement',
    component: () => import('@/Client/Panier/views/PaiementView.vue')
  },
  {
    path: '/panier',
    name: 'panier',
    component: () => import('@/Client/Panier/views/PanierView.vue')
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: () => import('@/Client/Panier/views/QrcodeView.vue')
  },
  {
    path: '/market_nourriture',
    name: 'market_nourriture',
    component: () => import('@/Client/Prestataire/views/NourritureView.vue')
  },
  {
    path: '/carte_admin',
    name: 'carte_admin',
    component: () => import('@/Admin/Carte/views/CarteAdminView.vue')
  },
  {
    path: '/admin/crud',
    name: 'admin_crud',
    component: () => import('@/Admin/Crud/views/ShowCrudView.vue')
  },
  {
    path: '/admin/crud/role/add',
    name: 'admin_crud_role_add',
    component: () => import('@/Admin/Crud/components/role/addRole.vue')
  },
  {
    path: '/admin/crud/acheter/add',
    name: 'admin_crud_acheter_add',
    component: () => import('@/Admin/Crud/components/acheter/addAcheter.vue')
  },
  {
    path: '/admin/crud/item/add',
    name: 'admin_crud_item_add',
    component: () => import('@/Admin/Crud/components/item/addItem.vue')
  },
  {
    path: '/admin/crud/panier/add',
    name: 'admin_crud_panier_add',
    component: () => import('@/Admin/Crud/components/panier/addPanier.vue')
  },
  {
    path: '/admin/crud/personne/add',
    name: 'admin_crud_personne_add',
    component: () => import('@/Admin/Crud/components/personne/addPersonne.vue')
  },
  {
    path: '/admin/crud/qrcode/add',
    name: 'admin_crud_qrcode_add',
    component: () => import('@/Admin/Crud/components/qrCode/addQrCode.vue')
  },
  {
    path: '/admin/crud/ressource/add',
    name: 'admin_crud_ressource_add',
    component: () => import('@/Admin/Crud/components/ressource/addRessource.vue')
  },
  {
    path: '/admin/crud/tag/add',
    name: 'admin_crud_tag_add',
    component: () => import('@/Admin/Crud/components/tag/addTag.vue')
  },
  {
    path: '/admin/crud/emplacement/add',
    name: 'admin_crud_emplacement_add',
    component: () => import('@/Admin/Crud/components/emplacement/addEmplacement.vue')
  },
  {
    path: '/admin/crud/calendrier/add',
    name: 'admin_crud_calendrier_add',
    component: () => import('@/Admin/Crud/components/calendrier/addCalendrier.vue')
  },
  {
    path: '/admin/crud/evenement/add/',
    name: 'admin_crud_evenement_add',
    component: () => import('@/Admin/Crud/components/evenement/addEvenement.vue')
  },
  {
    path: '/admin/crud/update/:table/:id',
    name: 'admin_crud_update',
    component: () => import('@/Admin/Crud/views/updateCrudView.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
