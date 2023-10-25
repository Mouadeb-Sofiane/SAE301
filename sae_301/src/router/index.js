import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Connexion from '@/views/Connexion.vue'
import Lunettes from '@/views/Lunettes.vue'
import Map from '@/views/Map.vue'
import Personnaliser from '@/views/Personnaliser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/lunettes',
      name: 'lunettes',
      component: Lunettes
    }, 
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/personnaliser',
      name: 'personnaliser',
      component: Personnaliser
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
