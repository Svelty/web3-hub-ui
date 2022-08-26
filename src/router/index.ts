import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/maker',
      name: 'maker',
      component: () => import('../views/MakerView.vue')
    },
    {
      path: '/aave',
      name: 'aave',
      component: () => import('../views/AaveView.vue')
    },
    {
      path: '/compound',
      name: 'compound',
      component: () => import('../views/CompoundView.vue')
    },
    {
      path: '/uniswap',
      name: 'uniswap',
      component: () => import('../views/UniswapView.vue')
    },
    {
      path: '/lido',
      name: 'lido',
      component: () => import('../views/LidoView.vue')
    },
    {
      path: '/curve',
      name: 'curve',
      component: () => import('../views/CurveView.vue')
    },
    {
      path: '/convex',
      name: 'convex',
      component: () => import('../views/ConvexView.vue')
    },
    {
      path: '/yearn',
      name: 'yearn',
      component: () => import('../views/YearnView.vue')
    }
  ]
})

export default router
