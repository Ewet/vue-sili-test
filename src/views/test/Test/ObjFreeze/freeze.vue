<template>
   <div class="page">
       另外需要说明的是，这里只是冻结了users的值，引用不会被冻结，当我们需要reactive数据的时候，我们可以重新给users赋值。
   </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data: () => ({
    users: {}
  }),
  async created () {
    // const users = await axios.get('/api/users');
    const users = {};
    this.users = Object.freeze(users);
  },
  methods: {
    // 改变值不会触发视图响应
    // this.users[0] = newValue;
    // 改变引用依然会触发视图响应
    // this.users = newArray
  }
};
</script>

<style scoped lang='less'>
</style>
