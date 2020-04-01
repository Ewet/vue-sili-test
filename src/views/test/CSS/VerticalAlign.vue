<template>
<transition name="fade">
   <div class="vertical-align">

      <h4>vertical-align '幽灵空白节点'影响栗子：</h4>
      <div class="box">
        <img src="http://img0.bdstatic.com/static/searchresult/img/logo-2X_b99594a.png">
      </div><br>

      <h4>作用在table-cell元素上的栗子：</h4>
      <div class="cell">
        <img src="http://img0.bdstatic.com/static/searchresult/img/logo-2X_b99594a.png">
      </div><br>

      <h4>vertical-align和line-height对内联元素的影响:容器高度不等于行高</h4>
      <div class="box2">
        <span>文字</span>
      </div>
      <p>其中有一个很关键的点，那就是 24px 的 font-size 大小是设置在span元素上的，这就导致了外部div元素的字体大小和span元素有较大出入</p>
      <br>
      <h4>图片底部留有间隙的问题: </h4>
      <div class="box3">
        <img src="http://img0.bdstatic.com/static/searchresult/img/logo-2X_b99594a.png">
      </div><br>

      <h4>inline-block 与 baseline问题: </h4>
      <div class="box4">
        <span class="dib-baseline">x--></span>
        <span class="dib-baseline">x-baseline</span>
      </div>
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
.vertical-align{
  .box {
    height: 128px;
    line-height: 128px; /* 关键 CSS 属性 */
  }
  .box > img {
    height: 96px;
    vertical-align: middle;
  }
  //
  .cell {
    height: 128px;
    display: table-cell;
    vertical-align: middle; /* 关键 CSS 属性 */
  }
  .cell > img {
    height: 96px;
    // vertical-align: middle; /* 关键 CSS 属性 */
  }
  //
  .box2 {
    line-height: 32px;
    font-size: 24px; /* 关键 CSS 属性 */
  }
  .box2 > span { font-size: 24px; }
  //
  .box3 {
    width: 280px;
    outline: 1px solid #aaa;
    text-align: center;
    line-height:0; /* 关键 CSS 属性 */
  }
  .box3 > img {
    height: 96px;
  }
  //
  .box4{
    .dib-baseline {
      line-height: 0.8;/* 关键 CSS 属性 */
      display: inline-block;
      width: 150px; height: 150px;
      border: 1px solid #cad5eb;
      background-color: #f0f3f9;
    }
  }
}
</style>
