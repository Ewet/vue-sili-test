<template>
   <div class="page">
     <Data>
        <!-- <template v-slot="slotProps">
          {{ slotProps.user.firstName }}
        </template> -->
        <template slot-scope="{user}">
          {{ user.firstName }}
        </template>
     </Data>
   </div>
</template>

<script>
import Data from './data';
export default {
  name: '',
  components: {
    Data
  },
  data () {
    return {

    };
  }
};
</script>

<style scoped lang='less'>
</style>
