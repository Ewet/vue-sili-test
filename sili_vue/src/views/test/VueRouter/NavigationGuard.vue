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
       <h4>导航守卫的调用位置：</h4>
       <p>全局守卫：在启动页的js中使用，就是在路由被注册时的地方使用</p>
       <p>路由守卫：在路由的配置中使用</p>
       <p>组件守卫：在组件的方法中使用</p>
       <br>
       <h4>导航守卫完整的导航解析流程：</h4>
       <p>导航被触发。</p>
       <p>在失活的组件里调用离开守卫。</p>
       <p>调用全局的 beforeEach 守卫。</p>
       <p>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</p>
       <p>在路由配置里调用 beforeEnter。</p>
       <p>解析异步路由组件。</p>
       <p>在被激活的组件里调用 beforeRouteEnter。</p>
       <p>调用全局的 beforeResolve 守卫 (2.5+)</p>
       <p>导航被确认</p>
       <p>调用全局的 afterEach 钩子。</p>
       <p>触发 DOM 更新。</p>
       <p>用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。</p>
       <br>
       <h4>导航守卫的作用：</h4>
       <p>全局守卫:</p>
       <p>全局守卫:</p>
       
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
       mounted(){
           console.log(this.openNames)
           console.log(this.name)
       },
       methods:{
            beforeRouteUpdate (to, from, next) {
                console.log(to)
                // 在当前路由改变，但是该组件被复用时调用
                // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
                // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
                // 可以访问组件实例 `this`
            },
       }
   }
</script>

<style scoped lang='less'>
</style>
