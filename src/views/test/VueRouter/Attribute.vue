<template>
<transition name="slide">
   <div class="page">
        <h4>跳转方式：</h4>
        <p>参考链接：<a target="_blank" href="https://www.cnblogs.com/goloving/p/9211358.html">https://www.cnblogs.com/goloving/p/9211358.html</a></p><br>
        <p>栗子：</p>
        <p>to,不加/时，是直接在原有的路径中加上to的路径，假如有相同的字符时，有时忽略，有时叠加；加的时候是在根路径中加to的路径：</p>
        <p>加/的时候是在根路径中加to的路径：</p>
        <router-link to="/attribute/name">/name</router-link>  <br>
        <router-link to="attribute/user">/user</router-link>  <br>
        <p>to 是以path的query方式进行跳转的</p>
        <router-link to="Name">/user</router-link>  <br>
        <p>to 以对象的形式通过path和name跳转</p>
        <router-link :to="{ path: '/attribute/name' }">/name</router-link><br>
        <router-link :to="{ name: 'User'}">/user</router-link>  <br>
        <p>路径以name形式是区分大小写的,以path形式是不区分大小写的：</p>
        <router-link :to="{ name: 'user'}">/user</router-link>  <br>
        <router-link :to="{ path: '/attribute/Name' }">/name</router-link><br>

        <router-view name="turn"></router-view><br>

        <h4>跳转带参方式：</h4>
        <p>参考链接：<a target="_blank" href="https://blog.csdn.net/bluefish_flying/article/details/81011230">https://blog.csdn.net/bluefish_flying/article/details/81011230</a></p><br>
        <p>栗子：</p>
        <p>query和params传参的区别：</p>
        <router-link :to="{ name: 'query', query: {id: 12}}">/query:console.log:{{this.$route.query.id}}</router-link> <br>
        <router-link :to="{ name: 'params', params:{id:15}}">/params:console.log:{{this.$route.params.id}}</router-link>  <br>
        <p>当你使用params方法传参的时候，要在路由后面加参数名，并且传参的时候，参数名要跟路由后面设置的参数名对应。</p>
        <p> 如果路由上面不写参数，也是可以传过去的，但不会在url上面显示出你的参数，并且当你跳到别的页面或者刷新页面的时候参数会丢失</p>
        <router-link :to="{ name: 'paramsTwo', params:{id: 15}}">/params:console.log:{{ this.$route.params.id}}</router-link>  <br>
        <router-link :to="{ name: 'params', params:{id: 15}}">/params:console.log:{{ this.$route.params.id}}</router-link>  <br>
        <p>当你的路由上面写了参数，而跳转时不传参数，路径会匹配不到；</p>
        <router-link :to="{ name: 'paramsTwo'}">/params:console.log:{{this.$route.params.id}}</router-link>  <br>
        <router-link :to="{ path: '/paramsTwo'}">/params:console.log:{{this.$route.params.id}}</router-link>  <br>
        <p>参数传过去的typeof问题：</p>
        <p>通过params传参时，在通过路由跳转时参数的类型为传过去的类型，</p>
        <p>而在跳转后的页面进行刷新是参数的类型都为字符串类型；</p>
        <router-link :to="{ name: 'paramsTwo', params:{id: 15}}">/params:console.log:{{ this.$route.params.id}}</router-link>  <br>
        <router-link :to="{ name: 'paramsTwo', params:{id: 15}}">/params:console.log:{{ this.$route.params.id}}</router-link>  <br>

        <router-view name="query"></router-view><br>
   </div>
</transition>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {

    };
  }
};
</script>

<style scoped lang='less'>
</style>
