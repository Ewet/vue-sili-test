import { mapState, mapActions, mapMutations } from 'vuex';
import modules from 'store/modules';

const getActions = moduleName => {
  let module = modules[moduleName];
  if (module) {
    return Object.keys(module.actions);
  }
  return [];
};

const getMutations = moduleName => {
  let module = modules[moduleName];
  if (module) {
    return Object.keys(module.mutations);
  }
  return [];
};

const getState = moduleName => {
  let module = modules[moduleName];
  if (module) {
    return Object.keys(module.state);
  }
  return [];
};

export default ({moduleName, state = [], action = [], mutation = []}) => {
  // console.log('modules', modules);
  return {
    // destroyed () {
    // //   this.$store.commit(moduleName + '/reset');
    // },
    methods: {
      ...mapActions(moduleName, getActions(moduleName)),
      ...mapMutations(moduleName, getMutations(moduleName))
    },
    computed: {
      ...mapState(moduleName, getState(moduleName))
    }
  };
};
