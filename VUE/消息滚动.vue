<template>
  <div class="notify">
    <ul ref="noticeRef" :class="{anim:animate==true}">
      <li v-for="item in Notices" :key="item.index" class="notifyList">
        <span v-text="item.company_name"></span>
        招聘&nbsp; 【
        <span v-text="item.job_name"></span>】&nbsp;
        <span v-text="item.staffs"></span>人
      </li>
    </ul>
  </div>
</template>

<script>
import { connect, sendName, disconnect, JData8 } from './api/wsGetData'
export default {
  data() {
    return {
      animate: false,
      setsend: '/find/subscription/data.htm',
      Notices: [{
        company_name: 'renhe',
        job_name: 'java',
        staffs: 12,
        req_id: '123r3gj93en'
      },
      {
        company_name: '严彬荣',
        job_name: 'java',
        staffs: 12,
        req_id: '123r3gj93en'
      },
      {
        company_name: '非常好',
        job_name: 'java',
        staffs: 12,
        req_id: '123r3gj93en'
      },
      {
        company_name: '吃烤鱼',
        job_name: 'java',
        staffs: 12,
        req_id: '123r3gj93en'
      }]
    }
  },
  mounted() {
    setInterval(() => {
      if (this.$store.state.popDetail.websocketStatus) {
        this.getDatas()
      }
    }, 10000)
  },
  created() {
    // 在钩子函数中调用在method 里面写的scroll()方法,不要忘记加this
    setInterval(this.scroll, 3000)
  },
  methods: {
    getDatas() {
      sendName('', this.setsend)
      this.Notices = JData8.data
    },
    scroll() {
      let noticeRef = this.$refs.noticeRef
      noticeRef.style.marginTop = '-60px'
      this.animate = !this.animate
      setTimeout(() => {
        this.Notices.push(this.Notices[0])
        this.Notices.shift()
        noticeRef.style.marginTop = '0px'
        // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
        this.animate = !this.animate
      }, 500)
    }
  }
}
</script>

<style lang='scss'>
.notify {
  background-color: #132248;
  overflow: hidden;
  margin-left: -40px;
  .notifyList {
    color: #4d99e0;
    list-style: none;
    line-height: 140px;
    height: 60px;
  }
}
.anim {
  transition: all 0.5s;
}
</style>

