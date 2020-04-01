import Vue from 'vue';
import bus from './bus';
// 总线通信
Vue.prototype.$Bus = bus;
Vue.prototype.$g_emit = (eventName, payload) => {
  bus.$emit(eventName, payload);
};
Vue.prototype.$g_on = (eventName, func) => {
  bus.$on(eventName, func);
};
Vue.prototype.$g_off = (eventName, func) => {
  bus.$off(eventName, func);
};
