// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// iview
import iView from 'iview';
import store from '@/store';
import 'iview/dist/styles/iview.css';
// 导航守卫
import routerFormat from 'utils/routerFormat';

// 总线通信
import 'utils/bus';
routerFormat(router);

Vue.use(iView);
Vue.config.productionTip = false;

/* eslint-disable no-new */
// 创建和挂载根实例
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
