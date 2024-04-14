import { createRouter, createWebHistory } from 'vue-router'
import User from "@/views/User.vue";
import Order from "@/views/Order.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})

export default router
