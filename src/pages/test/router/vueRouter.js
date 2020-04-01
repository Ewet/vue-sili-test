const ParamsTwo = { template: '<div>Params two</div>' };
const Params = { template: '<div>Params one</div>' };
const Query = { template: '<div>Query</div>' };
const Name = { template: '<div>name</div>' };
const User = { template: '<div>user</div>' };
// 配置路由
export default [
  {
    path: '/attribute',
    name: 'Attribute',
    meta: ['2'],
    component: () => import(/* webpackChunkName: "vuerouter" */ 'test/VueRouter/Attribute'),
    // 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。

    children: [
      {
        path: 'name',
        name: 'Name',
        components: {
          turn: Name
        }
      },
      {
        path: 'user',
        name: 'User',
        components: {
          turn: User
        }
      },
      {
        path: 'query',
        name: 'query',
        components: {
          query: Query
        }
      },
      {
        path: 'params',
        name: 'params',
        components: {
          query: Params
        }
      },
      {
        path: 'paramsTwo/:id',
        name: 'paramsTwo',
        components: {
          query: ParamsTwo
        }
      }
    ]
  },
  {
    path: '/navigation-guard',
    name: 'NavigationGuard',
    meta: ['2'],
    component: () => import(/* webpackChunkName: "vuerouter" */ 'test/VueRouter/NavigationGuard'),
    beforeEnter: (to, from, next) => {
      console.log('路由守卫');
      console.log(to);
      next();
    }
  },
  {
    path: '/route-lazy-loading',
    name: 'RouteLazyLoading',
    meta: ['2'],
    component: () => import(/* webpackChunkName: "vuerouter" */ 'test/VueRouter/RouteLazyLoading')
  }
];
