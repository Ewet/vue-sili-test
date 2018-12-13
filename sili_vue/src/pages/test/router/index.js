import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import Render from 'test/Render/Index';
import vueRouter from './vueRouter';
import render from './render';

// 创建 router 实例
export default new Router({
  routes: [
    ...render,
    ...vueRouter
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log(15);
      return savedPosition
    } else {
      console.log(16);
      return { x: 0, y: 0 }
    }
  }

})

