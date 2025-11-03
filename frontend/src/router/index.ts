import { createRouter, createWebHistory, type RouteLocation } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: () => import('../views/Pokemon.vue'),
    props: (route: RouteLocation) => ({
      id: decodeURIComponent(route.params.id as string)
    })
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
