<template>
  <div id="helloWorld">
    <p>{{message}}</p>
    {{ varProp }}
    <button @click="emitMyEvent">emit</button>
    <b>子组件HelloWorld的myVal---</b> {{helloWorldVal}}
    <br>
    <slot name="header">头部-如果不写就啥都没有。</slot>
    <slot name="footer">尾部-如果不写就啥都没有。</slot>

  </div>
</template>

<script>
// 自定义组件的事件监听的实现
export default {
  //props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值
  // props: ['varProp'],
  props: {
    helloWorldVal: {
      type: Number,
      String,
      default: ''
    }
  },
  // 对象语法，提供校验
  // Vue.component('props-demo-advanced', {
  //   props: {
  //     // 检测类型
  //     height: Number,
  //     // 检测类型 + 其他验证
  //     age: {
  //       type: Number,
  //       default: 0,
  //       required: true,
  //       validator: function (value) {
  //         return value >= 0
  //       }
  //     }
  //   }
  // })
  data() {
    return {
      message: 'this is my first component!'
    }
  },
  methods: {
    emitMyEvent() {
      this.$emit('my-event', this.message)
    }
  }
}
</script>

<style>

</style>