<template>
  <div>
    <p>count:{{count}}</p>
    <button @click="setCount(count+1)">+1</button>
    <button @click="setCount(count-1)">-1</button>
  </div>
</template>

<script>
import { store, mutations } from './store';
export default {
  name: 'test',
  computed: {
    count () {
      return store.count;
    }
  },
  methods: {
    setCount: mutations.setCount
  }
};
</script>
