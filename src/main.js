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
Vue.component('topnav',topnav);
Vue.component('footernav',footernav);
Vue.component('banner',banner);
Vue.component('recommend',recommend);
Vue.component('title-h',titleH);

Vue.mixin({
  data() {
    return {
      srcollpage: false,
      imgRoute: '/static/netimages/'
    }
  },
  // created() {
  //   // #ifdef MP-ALIPAY
  //   my.setOptionMenu({
  //     icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAbklEQVRoge3XwQmAMBBFQXsxFmO/mlIMnlOIXoN4EImQ4AxsAQ/28ocBAACoZoz7HNaUp2U7erywpjzGfX4c3HNsGS3YSwMAAJ9qfVxUHw8tx76ah4IvfvfSAADAvdbHQfXx0HNsGS3YSwMAAE+dExHncLHNE+kAAAAASUVORK5CYII=',
  //   });
  //   // #endif
  // },
  onPageScroll(e) {
    this.srcollpage = e.scrollTop > 0
  }
})
App.mpType = 'app'
import '@/assets/css/global.css';
const app = new Vue({
  ...App
})
app.$mount()
