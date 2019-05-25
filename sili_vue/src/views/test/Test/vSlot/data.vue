<template>
   <div class="page">
     <span>
       <slot v-bind:user="user">
         {{ user.lastName }}
       </slot>
     </span>
   </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      user: {
        firstName: 'chen',
        lastName: 'ting'
      }
    };
  }
};
</script>

<style scoped lang='less'>
</style>
