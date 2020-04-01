export default [
  {
    path: '/web-socket',
    meta: ['3'],
    name: 'WebSocket',
    component: () => import('test/Https/WebSocket')
  },
  {
    path: '/axios',
    meta: ['3'],
    name: 'Axios',
    component: () => import('test/Https/Axios')
  }
];
