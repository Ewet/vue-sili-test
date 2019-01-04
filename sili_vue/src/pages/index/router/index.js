import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      meta: ['2'],
      component: import('index/Work/Blog')
    },
    {
      path: '/blog',
      meta: ['2'],
      name: 'Blog',
      component: () => import('index/Work/Blog')
    }
  ]
});
