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
    path: '/inscriptions',
    name: 'inscriptions',
    component: () => import('@/Client/Prestataire/views/InscriptionsView.vue')
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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
