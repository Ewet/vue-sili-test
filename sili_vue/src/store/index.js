import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import modules from './modules';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    openNames: ['1']
  },
  setOpenNames (state, val) {
    state.openNames = val;
  },
  actions,
  mutations,
  getters,
  modules
});
