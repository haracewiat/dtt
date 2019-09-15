import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('./views/Random.vue'),
    },
    {
      path: '/square',
      name: 'square',
      component: () => import('./views/SquareSize.vue'),
    },
    {
      path: '/standard',
      name: 'standard',
      component: () => import('./views/StandardSize.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
    {
      path: '/:id',
      name: 'details',
      props: true,
      component: () => import('./views/Details.vue'),
    },
  ],
});
