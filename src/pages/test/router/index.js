import Vue from 'vue';
import Router from 'vue-router';
import vueRouter from './vueRouter';
import render from './render';
import https from './https';
import vueCli from './vueCli';
import CSS from './CSS';
import test from './test';
import javascript from './javascript';

Vue.use(Router);

// 创建 router 实例
export default new Router({
  routes: [
    ...test,
    ...render,
    ...vueRouter,
    ...https,
    ...vueCli,
    ...CSS,
    ...javascript
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log(15);
      return savedPosition;
    } else {
      console.log(16);
      return { x: 0, y: 0 };
    }
  }

});
