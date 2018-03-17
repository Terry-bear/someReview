<template>
  <div id="app">
    <p>this is my first vue</p>
    <input @keydown="onKeyDown">
    <hello-world @my-event="onCompoMyEvent" :varProp=8080 :hello-world-val='myVal'>
      <!-- slot标签  -->
      <p slot="header">这就是通用头组件</p>
      <p slot="footer">这就是通用底部组件</p>
    </hello-world> 

    <input type="text" name="" v-model="myVal">
    <b>父组件的myVal---</b>   {{myVal}}
    <br>
    <animation></animation>
    
    <router-view></router-view>
    <!-- <router-link :to="{path:'do/35g'>to dog</router-link> <br> -->
    <router-link :to="{path:'dog',param:{age:35}}">to dog</router-link> <br>
    <router-link :to="{path:'../cat'}">to cat</router-link> <br>
    <router-link :to="{path:'../cat'}">to old cat</router-link> <br>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Animation from './components/Animation'
export default {
  components: {
    HelloWorld,
    Animation
  },
  data() {
    return {
      myVal: ''
    }
  },
  methods: {
    onKeyDown() {
      console.log('on key down!~')
    },
    // 事件的监听
    onCompoMyEvent(parmform) {
      console.log('listen my event--->' + parmform)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>