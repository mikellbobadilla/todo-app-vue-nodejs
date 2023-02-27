import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    }
  ]
})

// Todo: To implement when server and login were done
// router.beforeEach((to, from, next) => { })

export default router