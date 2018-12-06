const ParamsTwo = { template: '<div>Params two</div>' }
const Params = { template: '<div>Params one</div>' }
const Query = { template: '<div>Query</div>' }
const Name = { template: '<div>name</div>' }
const User = { template: '<div>user</div>' }
export default [
    {
      path: '/attribute',
      name: 'attribute',
      meta: ['2'],
      component: () => import('test/VueRouter/Attribute'),
      children: [
        {
          path: '/attribute/name',
          name: 'name',
          meta: ['2'],
          components: {
            turn: Name
          }
        },
        {
          path: '/attribute/user',
          name: 'user',
          meta: ['2'],
          components: {
            turn: User
          }
        },
        {
          path: '/attribute/query',
          name: 'query',
          meta: ['2'],
          components: {
            query: Query
          }
        },
        {
          path: '/attribute/params',
          name: 'params',
          meta: ['2'],
          components: {
            query: Params
          }
        },
        {
          path: '/attribute/paramsTwo/:id',
          name: 'paramsTwo',
          meta: ['2'],
          components: {
            query: ParamsTwo
          }
        }
      ]
    }
]