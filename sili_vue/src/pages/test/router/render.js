export default [
  {
    path: '/',
    meta: ['1'],
    component: () => import('test/Render/Index')
  },
  {
    path: '/render',
    name: 'render',
    meta: ['1'],
    component: () => import('test/Render/Index')
  }
]