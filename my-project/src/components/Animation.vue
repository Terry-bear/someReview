<template>
     <div>
          <button v-on:click="show =! show">toggle</button>
          <transition name="fade" mode="out-in">
               <!-- 标签名相同的情况下要指定key属性，否则动画失效 -->
               <p v-if="show" key="1">---过渡样式---</p>
               <p v-else key="2">---测试transition的mode属性---</p>
          </transition>
          <transition name="my-trans">
               <p v-show="show">---过渡样式2---</p>
          </transition>
     </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.my-trans-enter-active,
.my-trans-leave-active {
  transition: all 0.5s ease-out;
}
.my-trans-enter {
  transform: translateY(-500px);
  opacity: 0;
}
.my-trans-leave-active {
  transform: translateY(500px);
  opacity: 0;
}
</style>