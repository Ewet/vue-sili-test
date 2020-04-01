import actions from './actions';
import mutations from './mutations';
import states from './states';
export default {
  createInstance: ({fetchList, fetchItem, state, mutation, action, modules}) => {
    return {
      namespaced: true,
      state: Object.assign({}, states(), {...state}),
      mutations: Object.assign({}, mutations(), {...mutation}),
      actions: Object.assign({}, actions(), {
        apiList (undefinded, data) {
          return fetchList(data);
        },
        apiItem (undefinded, data) {
          if (fetchItem) {
            return fetchItem(data);
          }
        }
      }, {...action}),
      modules
    };
  }
};
