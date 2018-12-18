
class WebSocketBuilder {
  constructor (data) {
    let { url,
      onOpen,
      onClose,
      onError,
      onMessage} = data;
    let _socket = new WebSocket(url);
    _socket.onopen = onOpen;
    _socket.onmessage = onMessage;
    _socket.onerror = onError;
    _socket.onclose = onClose;
    this.socket = _socket;
  }
}

export default data => new WebSocketBuilder(data);

// 用法
// let a = new Builder({
//   url: 'ws://192.168.1.132:8080/boxserver/webSocketServer/dynamic?box_id=316753593239710148',
//   onOpen: (evt) => {
//     console.log('与服务器连接成功');
//   },
//   onError: (evt) => { console.log('连接出错'); },
//   onMessage: (evt) => { console.log('数据已接收', evt); },
//   onClose: (evt) => { console.log('连接关闭'); }
// });
// console.log(a);

// 实例：
// 首先判断是否 支持 WebSocket
// let ws = {};
// if ('WebSocket' in window) {
//   ws = new WebSocket('ws://192.168.1.132:8080/boxserver/webSocketServer/dynamic?box_id=316753593239710148');
//   /* websocket = new WebSocket("ws://192.168.1.132:8085/springTest/testHandler?userId=zhaoshouyun"); */
//   /* var ws = new WebSocket("ws://192.168.1.132:8080/boxserver/webSocketServer"); */
// } else if ('MozWebSocket' in window) {
//   ws = new MozWebSocket('ws://192.168.1.132:8080/boxserver/webSocketServer/dynamic?box_id=316753593239710148');
// } else {
//   ws = new SockJS('http://192.168.1.132:8080/boxserver/webSocketServer/dynamic?box_id=316753593239710148');
// }
/* readyState属性返回实例对象的当前状态，共有四种。
CONNECTING：值为0，表示正在连接。
OPEN：值为1，表示连接成功，可以通信了。
CLOSING：值为2，表示连接正在关闭。
CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
*/
// var ws = new WebSocket('ws://192.168.1.132:8080/boxserver/webSocketServer/dynamic?box_id=316753593239710148');

// console.log(ws.readyState);

// ws.onopen = function (evt) {
//   ws.send('Hello WebSockets!');
// };
// ws.onmessage = function (evt) {
//   console.log('Received Message: ' + evt.data);
//   ws.close();
// };
// ws.onclose = function (evt) {
//   console.log('Connection closed.');
// };
// ws.onerror = function (event) {
//   console.log(event);
// };

// export default {
//   ws
// };
