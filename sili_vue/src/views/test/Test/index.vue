<template>
   <div class="page">
       <h3>1.observable API 状态共享</h3>
       <Observable/>
       <h3>2.长列表性能优化(对象冻结)</h3>
       <Freeze/>
       <h3>3.作用域插槽(v-slot)</h3>
       <Template/>
   </div>
</template>

<script>
import Observable from './observableApi/app';
import Freeze from './ObjFreeze/freeze';
import Template from './vSlot/template';
export default {
  name: '',
  components: {
    Observable,
    Freeze,
    Template
  }
};
</script>

<style scoped lang='less'>
</style>
