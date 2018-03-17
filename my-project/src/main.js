// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VDog from './components/VDog'
import VCat from './components/VCat'
import VOldCat from './components/VOldCat'
Vue.config.productionTip = false

//注册使用路由
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', //不需要通过hash/#来解析地址
  routes: [
    {
      path: '/recat',
      redirect: 'cat'
    },
    {
      path: '/dog/:age', //path的‘:’参数配置
      component: VDog
    },
    {
      path: '/cat',
      component: VCat,
      children: [
        {
          path: 'oldcat',
          component: VOldCat
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
