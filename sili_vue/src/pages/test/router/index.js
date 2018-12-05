import Vue from 'vue'
import Router from 'vue-router'
import Render from '@/views/test/Render'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '渲染函数',
      component: Render
    }
  ]
})
