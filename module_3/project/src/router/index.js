import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/country',
    name: 'country',
    component: () => import('../views/CountryView')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/by-time',
    name: 'by-time',
    component: () => import('../views/ByTimeView')
  },
  {
    path: '/newsletter',
    name: 'newsletter',
    component: () => import('../views/NewsletterView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
