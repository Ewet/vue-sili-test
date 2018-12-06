const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }
const Name = { template: '<div>name</div>' }
const User = { template: '<div>user</div>' }
export default [
    {
      path: '/query',
      name: 'query',
      meta: ['2'],
      component: () => import('test/VueRouter/Query')
    },
    {
      path: '/attribute',
      name: 'attribute',
      meta: ['2'],
      component: () => import('test/VueRouter/Attribute'),
      children: [
        {
          path: '/attribute/name',
          meta: ['2'],
          components: {
            turn: Name
          }
        },
        {
          path: '/attribute/user',
          meta: ['2'],
          components: {
            turn: User
          }
        }
      ]
    }
]