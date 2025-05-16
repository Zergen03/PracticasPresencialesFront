import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/ShopView.vue'
import InventoryView from '../views/InventoryView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView, 
    },
    {
     path: '/inventory',
     name: 'inventory',
     component: InventoryView,
     }
  ],
})

export default router
