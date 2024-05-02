import { 
    createRouter, 
    createWebHistory } 
    from 'vue-router';
import HomeView 
from '../pages/index.vue';
import ContactView 
from '../pages/about.vue';
import AboutView 
from './views/AboutView.vue';
 
const router = () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView,
      },
    ],
  });
 
export default router;