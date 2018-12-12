<template>
   <div class="page">
       <p>参考链接：<a target="_blank" href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html">https://router.vuejs.org/zh/guide/advanced/navigation-guards.html</a></p><br>

       <h4>导航守卫的类型：</h4>
       <p>全局的 beforeEach 守卫：当一个导航触发时，全局前置守卫按照创建顺序调用。</p>
       <p>全局解析守卫 router.beforeResolve：在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。</p>
       <p>全局后置钩子 router.afterEach((to, from)：</p>
       <p>由路由独享的守卫 beforeEnter： </p>
       <p>组件内的守卫 beforeRouteEnter、 beforeRouteUpdate 、beforeRouteLeave</p>
       <br>

       <h4>导航守卫完整的导航解析流程：组件》路由》组件</h4>
       <p>导航被触发</p> 
       <p>在失活的组件里调用离开守卫>beforeRouteLeave</p>
       <p>调用全局的 beforeEach 守卫。</p>
       <p>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。(组件被重用时触发)</p>
       <p>在路由配置里调用 beforeEnter。</p>
       <p>解析异步路由组件。</p>
       <p>在被激活的组件里调用 beforeRouteEnter。</p>
       <p>在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，调用全局的 beforeResolve 守卫 (2.5+)</p>
       <p>导航被确认</p>
       <p>调用全局的 afterEach 钩子。</p>
       <p>触发 DOM 更新。</p>
       <p>用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。</p>
       <br>
       
       <h4>导航守卫的调用位置：</h4>
       <p>全局守卫：在启动页的js中使用，就是在路由被注册时的地方使用</p>
       <p>路由守卫：在路由的配置中使用</p>
       <p>组件守卫：在组件的js中使用,和data同级</p>
       <br>

       <h4>导航守卫的作用：</h4>
       <p>1.判断登录信息：没登录全部跳到登录页。</p>
       <p>2.判断必要操作是否进行没进行的话中断跳转</p>
       
       <p>参考链接：<a target="_blank" href="https://www.jb51.net/article/131399.htm">https://www.jb51.net/article/131399.htm</a></p><br>

   </div>
</template>

<script>
    import vuexMixins from 'mixins/module-map';
    export default {
        mixins: [vuexMixins({moduleName: 'navigationGuard'})],
        name: '',
        components: {
        },
        data() {
            return {

            }
        },
        mounted(){
            console.log(this.name)
        },
        beforeRouteEnter (to, from, next) {
            console.log('组件守卫')
            console.log(to)
            next()
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
        },
   }
</script>

<style scoped lang='less'>
</style>
