import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '@/views/IndexView.vue';
import Year2023View from '@/views/Year2023View.vue';
import ContentView from '@/views/ContentView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView,
    },
    {
      path: '/2023',
      name: '2023',
      component: Year2023View,
    },
    {
      path: '/content',
      name: 'content',
      component: ContentView,
    },
  ]
})

export default router
