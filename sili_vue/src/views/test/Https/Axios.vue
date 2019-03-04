<template>
   <div class="page">
       Axios<br>
       getdata: {{getData}}<br>
       postdata: {{postData}}
   </div>
</template>

<script>
import aipGet from './api/axios-get.js';
import aipPost from './api/axios-post.js';

export default {
  name: 'Axios',
  components: {
  },
  data () {
    return {
      getData: {},
      postData: {}
    };
  },
  mounted () {
    console.log('jsj');
    aipGet().then(res => {
    //   console.log(res);
      this.getData = res.data['dept_emp'][0].auth_department_name;
    });
    aipPost().then(res => {
      console.log(res);
      this.postData = res.data;
    });
  }
};
</script>

<style scoped lang='less'>
</style>
