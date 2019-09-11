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
      path: '/grayscale',
      name: 'grayscale',
      component: () => import('./views/Grayscale.vue'),
    },
    {
      path: '/blur',
      name: 'blur',
      component: () => import('./views/Blur.vue'),
    },
    {
      path: '/:id',
      name: 'details',
      props: true,
      component: () => import('./views/Details.vue'),
    },
  ],
});
