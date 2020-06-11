import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 头部导航
import topnav from '@/components/topnav'
// 底部导航
import footernav from '@/components/footer'
// 轮播图组件
import banner from '@/components/banner'
// 底部最佳推荐
import recommend from '@/components/recommend'
// 标题组件
import titleH from '@/components/title'
export default {
    data() {
        return {
            result: {}
        }
    },
    onLoad() {
        this.result = result
    }
}
Vue.mixin({
  data() {
    return {
      srcollpage: false
    }
  },
  onPageScroll(e) {
    this.srcollpage = e.scrollTop > 0
  },
  components: {
      topnav,
      footernav,
      banner,
      recommend,
      titleH
  }
})
App.mpType = 'app'
import '@/assets/css/global.css';
const app = new Vue({
  ...App
})
app.$mount()
