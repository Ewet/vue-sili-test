<template>
   <div class="page">
       <h3>websocket</h3>
       <p>参考链接：<a target="_blank" href="http://www.ruanyifeng.com/blog/2017/05/websocket.html">http://www.ruanyifeng.com/blog/2017/05/websocket.html</a></p><br>
       <h4>特点：</h4><br>
       <p>（1）建立在 TCP 协议之上，服务器端的实现比较容易。</p>
       <p>（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。</p>
       <p>（3）数据格式比较轻量，性能开销小，通信高效。</p>
       <p>（4）可以发送文本，也可以发送二进制数据。</p>
       <p>（5）没有同源限制，客户端可以与任意服务器通信。</p>
       <p>（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。</p>
   </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {

    };
  },
  mounted () {
    this.loadData();
  },
  methods: {
    loadData () {
      // 实例：
      var ws = new WebSocket('ws://192.168.1.132:8080/boxserver/webSocketServer/dynamic?box_id=316753593239710148');
      /* readyState属性返回实例对象的当前状态，共有四种。
  CONNECTING：值为0，表示正在连接。
  OPEN：值为1，表示连接成功，可以通信了。
  CLOSING：值为2，表示连接正在关闭。
  CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
*/
      console.log(ws.readyState);
      const status = ws.readyState;
      switch (status) {
        case 0 :
          console.log('正在链接中');
          break;
        case 1 :
          console.log('链接成功');
//   case 2 :
      }
      ws.onopen = function (evt) {
        ws.send('Hello WebSockets!');
      };
      ws.onmessage = function (evt) {
        console.log('Received Message: ' + evt.data);
        ws.close();
      };
      ws.onclose = function (evt) {
        console.log('Connection closed.');
      };
      ws.onerror = function (event) {
        console.log(event);
      };
    }
  }
};
</script>

<style scoped lang='less'>
</style>
