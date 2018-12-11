<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import Index from 'components/TestIndex';
export default {
  name: 'App',
  components:{
    Index
  },
  mounted () {
    console.log(this.$route.meta)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h2{
  color: #333;
  font-size: 20px;
}
h3{
  color: #333;
  font-size: 18px;
}
h4{
  color: #333;
  font-size: 16px;
}
</style>
