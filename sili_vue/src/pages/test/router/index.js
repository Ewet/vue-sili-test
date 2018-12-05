import Vue from 'vue'
import Router from 'vue-router'

import Render from 'test/Render';
import Query from 'test/VueRouter/Query';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta:{
        rout:'1-1'
      },
      component: Render
    },
    {
      path: '/render',
      name: 'Render',
      meta:{
        rout:'1-1'
      },
      component: Render
    },
    {
      path: '/query/:id',
      name: 'Query',
      meta:{
        rout:'2-1'
      },
      component: Query
    }
  ]
})
