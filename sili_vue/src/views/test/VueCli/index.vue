<template>
<transition name="fade">
   <div class="vueCliBase">
       <p>api链接：<a href="https://cli.vuejs.org/zh/guide/prototyping.html" target="_blank">https://cli.vuejs.org/zh/guide/prototyping.html</a></p><br>
       <h4>快速原型开发</h4>
       <h4>创建一个项目</h4>
       <h4>插件和preset</h4>
       <h4>cli服务</h4><br>
       <p>快速原型开发</p>
       <p>栗子：</p>
       <p>注意事项：</p>
       <ul>
         <li>Vue CLI 3 和旧版使用了相同的 vue 命令，所以 Vue CLI 2 (vue-cli) 被覆盖了。如果你仍然需要使用旧版本的 vue init 功能，你可以全局安装一个桥接工具：</li>
         <li>你可以使用 vue serve 和 vue build 命令对单个 *.vue 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展：npm install -g @vue/cli-service-global</li>
         <li>Node 版本要求Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。</li>
         <li>我们推荐在运行 vue add 之前将项目的最新状态提交，因为该命令可能调用插件的文件生成器并很有可能更改你现有的文件。</li>
       </ul>
       <h4>开发：</h4>
       <p>注意事项：</p>
       <ul>
         <li>你会发现有 package.json 文件里的 browserslist 字段 (或一个单独的 .browserslistrc 文件)，指定了项目的目标浏览器的范围。这个值会被 @babel/preset-env 和 Autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。</li>
       </ul>
   </div>
</transition>
</template>

<script>
export default {
  name: 'VueCliBase',
  components: {
  },
  data () {
    return {

    };
  },
  mounted () {

  }
};
</script>

<style scoped lang='less'>
</style>
