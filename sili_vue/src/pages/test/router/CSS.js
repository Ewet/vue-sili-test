export default [
  {
    path: '/vertical-align',
    meta: ['5'],
    name: 'VerticalAlign',
    component: () => import('test/CSS/VerticalAlign')
  },
  {
    path: '/background',
    meta: ['5'],
    name: 'Background',
    component: () => import('test/CSS/Background')
  },
  {
    path: '/position',
    meta: ['5'],
    name: 'Position',
    component: () => import('test/CSS/Position')
  }
];
