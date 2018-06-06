<template>
  <div class="warpper">
    <div>
      <button :disabled="!dis" @click="connect()">连接</button>
      <button :disabled="dis" @click="disconnect()">断开连接</button>
    </div>
    <p>这是一个websocket通信</p>
    <p>输入地域：</p>
    <input type="text" :class="area">
    <button id="sendName" @click="sendName()">发送</button>
    <p>{{response}}</p>
    <p id="response1"></p>
  </div>
</template>

<script>
import SockJS from 'sockjs-client'
import Stomp from '@stomp/stompjs'
let stompClient = null
export default {
  data() {
    return {
      websock: null,
      args: null,
      area: '',
      response: '---我马上接受到了数据---',
      dis: 'disabled'
    }
  },
  methods: {
    setConnected() {
      return (this.dis = !this.dis)
    },
    connect() {
      // 1.连接SockJS的endpoint是“endpointWisely”，与后台代码中注册的endpoint要一样。
      const socket = new SockJS('/endpointWisely')
      console.log('我创建了sockjs连接')
      this.setConnected()
      // 2.创建STOMP协议的webSocket客户端。旨在WebSockets上运行而不是TCP。
      // 基本上，WebSocket协议需要在浏览器客户端和服务端之间进行握手，确保浏览器的“same-origin”（同源）安全模型仍然有效
      stompClient = Stomp.over(socket)
      // 3.连接webSocket的服务端。
      stompClient.connect({}, function(frame) {
        console.log('开始进行连接Connected: ' + frame)
        // 4.通过stompClient.subscribe（）订阅服务器的目标是'/topic/getResponse'发送过来的地址，与@SendTo中的地址对应。
        stompClient.subscribe(
          '/send/age/structure/data.htm',
          this.responseCallback
        )
        // function(
        //   respnose
        // ) {
        //   console.log('开始进行订阅subscribe：' + respnose)
        //   this.showResponse(JSON.parse(respnose.body).responseMessage)
        // }
        console.log('connect---------连接方法结束')
      })
    },
    responseCallback(frame) {
      console.log('responseCallback msg=>' + frame.body)
      // ---接收消息
      this.showResponse(JSON.parse(frame.body).responseMessage)
    },
    disconnect() {
      if (stompClient != null) {
        stompClient.disconnect()
        this.setConnected()
      }
      this.setConnected(false)
      console.log('Disconnected')
    },
    sendName() {
      // 通过stompClient.send（）向地址为"/welcome"的服务器地址发起请求，与@MessageMapping里的地址对应。因为我们配置了registry.setApplicationDestinationPrefixes(Constant.WEBSOCKETPATHPERFIX);所以需要增加前缀/ws-push/
      stompClient.send(
        '/rh-data/find/age/structure/data.htm',
        {},
        JSON.stringify({
          area: this.area
        })
      )
      console.log('function has been sendName ok!')
    },
    showResponse(message) {
      return this.response === message
    }
  }
}
</script>

