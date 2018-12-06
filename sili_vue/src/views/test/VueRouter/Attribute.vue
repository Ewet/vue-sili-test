<template>
   <div class="page">
       <pre>跳转</pre>
       <router-link to="/attribute/name">name</router-link>
       <router-link to="/attribute/user">user</router-link>
       <router-view name="turn"></router-view>
   </div>
</template>

<script>
   export default {
       name: '',
       components: {
       },
       data() {
           return {

           }
       },
       mounted () {
       }
   }
</script>

<style scoped lang='less'>
</style>
