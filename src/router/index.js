import { createRouter, createWebHistory } from 'vue-router';
import Tabela from '../views/Tabela.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tabela',
      component: Tabela
    }
  ]
});

export default router;
