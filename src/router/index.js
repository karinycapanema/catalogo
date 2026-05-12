import { createRouter, createWebHistory } from 'vue-router';
import AlimentosViews from '../views/AlimentosViews.vue';
import HomeView from '@/views/HomeView.vue';
import BrinquedosViews from '@/views/BrinquedosViews.vue';

const routes = [
  { path: '/', component: HomeView},
  { path: '/alimentos', component: AlimentosViews },
  { path: '/brinquedos', component: BrinquedosViews}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

