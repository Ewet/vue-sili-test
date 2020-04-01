export default (router) => {
  router.beforeEach((to, from, next) => {
    console.log('全局守卫');
    console.log(to);
    next();
  });
};
