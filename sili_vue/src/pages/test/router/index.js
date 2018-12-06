import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import Render from 'test/Render/Index';
import vueRouter from './vueRouter';
import render from './render';


export default new Router({
  routes: [
    ...render,
    ...vueRouter
  ]
})
