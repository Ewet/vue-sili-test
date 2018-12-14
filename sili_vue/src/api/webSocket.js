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

export default {
  ws
};
