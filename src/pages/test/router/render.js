export default [
  {
    path: '/',
    meta: ['1'],
    component: () => import('test/Render/Index')
  },
  {
    path: '/render',
    name: 'Render',
    meta: ['1'],
    component: () => import('test/Render/Index')
  }
];
