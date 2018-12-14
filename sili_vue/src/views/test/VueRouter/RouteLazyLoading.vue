<template>
   <div class="routeLazyLoading">
       <p>使用原因：当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。</p>
       <h4>步奏：</h4>
       <p>1.可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：</p>
       <p>const Foo = () => Promise.resolve({ /* 组件定义对象 */ })</p>
       <p>2.在 Webpack 2 中，我们可以使用动态 import语法来定义代码分块点 (split point)：</p>
       <p>import('./Foo.vue') // 返回 Promise(需要添加 syntax-dynamic-import 插件)</p>
       <br>
        <h4>把组件按组分块</h4>
        <p>const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')</p>
        <p>const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')</p>
        <P>const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')</P>
   </div>
</template>

<script>
export default {
  name: 'RouteLazyLoading',
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
