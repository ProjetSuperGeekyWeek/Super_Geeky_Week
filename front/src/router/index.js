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
    path: '/authentification',
    name: 'authentification',
    component: () => import('@/Connexion/Authentification/views/AuthentificationView.vue')
  },
  {
    path: '/change_password',
    name: 'change_password',
    component: () => import('@/Connexion/Authentification/views/ChangePasswordView.vue')
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
    path: '/qrcode/:uuid_commande',
    name: 'qrcode',
    component: () => import('@/Client/Panier/views/QrcodeView.vue')
  },
  {
    path: '/commande/:uuid_commande',
    name: 'commande',
    component: () => import('@/Client/Panier/views/CommandeView.vue')
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
    path: '/statistiques',
    name: 'statistiques',
    component: () => import('@/Admin/Statistiques/views/StatistiqueView.vue')
  },
  {
    path: '/admin/crud',
    name: 'admin_crud',
    component: () => import('@/Admin/Crud/views/ShowCrudView.vue')
  },
  {
    path: '/admin/crud/:table',
    name: 'admin_crud_table',
    component: () => import('@/Admin/Crud/views/ShowCrudView.vue')
  },
  {
    path: '/admin/crud/update/:table/:id',
    name: 'admin_crud_update',
    component: () => import('@/Admin/Crud/views/updateCrudView.vue')
  },
  {
    path: '/admin/crud/:table/add/',
    name: 'admin_crud_add',
    component: () => import('@/Admin/Crud/views/addCrudView.vue')
  },
  {
    path: '*',
    name: 'not_found',
    component: () => import('@/NotFoundError404.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
