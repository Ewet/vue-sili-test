<template>
   <div class="page">
       <pre>1.跳转方式：
           <p>参考链接：<a target="_blank" href="https://www.cnblogs.com/goloving/p/9211358.html">https://www.cnblogs.com/goloving/p/9211358.html</a></p>
       </pre>
       <p>栗子：</p>
       <router-link to="/attribute/name">/name</router-link>  <br>
       <router-link to="/attribute/user">/user</router-link>  <br>
       <router-link :to="'/attribute/user'">/user</router-link>  <br>
       <router-link :to="{ path: '/attribute/name' }">/name</router-link>   <br>
       <router-link :to="{ name: 'user'}">/user</router-link>  <br>
       <router-view name="turn"></router-view><br>

       <pre>2.跳转传参方式：
           当你使用params方法传参的时候，要在路由后面加参数名，并且传参的时候，参数名要跟路由后面设置的参数名对应。
           如果路由上面不写参数，也是可以传过去的，但不会在url上面显示出你的参数，并且当你跳到别的页面或者刷新页面的时候参数会丢失
           <p>参考链接：<a target="_blank" href="https://blog.csdn.net/bluefish_flying/article/details/81011230">https://blog.csdn.net/bluefish_flying/article/details/81011230</a></p>
        </pre>
        <p>栗子：</p>
       <router-link :to="{ name: 'query', query: {id: 12}}">/query:console.log:{{this.$route.query.id}}</router-link> <br>
       <router-link :to="{ name: 'params', params:{id:15}}">/params:console.log:{{this.$route.params.id}}</router-link>  <br>
       <router-link :to="{ name: 'paramsTwo', params:{id:16}}">/params:console.log:{{this.$route.params.id}}</router-link>  <br>
       <router-view name="query"></router-view>
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
