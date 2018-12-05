<template>
   <div class="page">
       <pre>
        1.Vue router如何传参
        params、query是什么？
        params：/router1/:id ，/router1/123，/router1/789 ,这里的id叫做params
        query：/router1?id=123 ,/router1?id=456 ,这里的id叫做query。

        注意：如果路由上面不写参数，也是可以传过去的，但不会在url上面显示出你的参数，并且当你跳到别的页面或者刷新页面的时候参数会丢失（如下图所示），
            那依赖这个参数的http请求或者其他操作就会失败。
       </pre>
       <p>参考链接：<a href="https://blog.csdn.net/bluefish_flying/article/details/81011230">https://blog.csdn.net/bluefish_flying/article/details/81011230</a></p>
       <p>console.log:{{this.$route.params.id}}</p>
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
           console.log(this.$route.params.id)
       }
   }
</script>

<style scoped lang='less'>
</style>
