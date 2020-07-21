<template>
    <view class="qw-visible-mobile" :class="srcollchange?'noline':''">
        <view :class="holder?'qw-top-seizeaseat':''" v-if="holder" :style="{paddingTop:  statusBarHeight+ 'px'}"></view>
				<view :class="holder?'qw-top-seizeaseat':''" v-else></view>
        <view class="qw-header-mobile" :style="{paddingTop:  statusBarHeight+ 'px'}">
            <view class="qw-header-bg" :class="srcollchange?'black':''"></view>
			<!-- #ifdef MP -->
            <view class="qw-meun" :class="{'lower-nav':lowernav}" :style="{top: statusBarHeight+ 'px'}" @click="showSlide"></view>
			<!-- #endif -->
			<!-- #ifndef MP -->
			<view class="qw-meun" @click="showSlide"></view>
			<!-- #endif -->
            <navigator open-type="reLaunch" url="/pages/index/index" class="qw-logo" :class="{'logo-offset':logoOffset}"></navigator>
            <view class="qw-dropdown" id="qw-navbar-collapse" v-show="tabSlide" :style="{marginTop: statusBarHeight+ 'px'}">
                <view class="ol">
                    <view class="qw-itme" :class="item.active?'active':''" v-for="(item,index) in slideCategort" :key="index" >
                        <view class="h3" @click="slideItem(index)">{{item.title}}</view>
                        <view class="qw-h5-nav" v-bind:style="{maxHeight: item.activeHeight}">
                            <view class="ul">
                                <view v-for="(second,idx) in item.secondCategort" :key="idx">
                                    <navigator class="a" open-type="redirect" :url="second.url">
                                        <view class="h4">{{second.name}}</view>
                                        <view class="titl-p">{{second.detail}}</view>
                                    </navigator>
                                </view>
                            </view>
                        </view>
                    </view>
                    
                    <view>
                        <view class="h3"><navigator class="a" url="/pages/aboutUs/aboutus">关于我们</navigator></view>
                    </view>
                </view>
                <view @click="showModel" class="qw-programme butn butn-custom">免费获取方案</view>
            </view>
        </view>
		<popu :modalstate="modalstate" v-on:emitState="emitState"></popu>
    </view>
</template>
<script>
import popu from "@/components/popup"
    export default {
		props: {
			holder: {
				type: Boolean,
				default: false
			},
			srcollchange: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				tabSlide:false,
				modalstate: false,
				statusBarHeight: 0,
				currentname: true,
				logoOffset: false,
				// #ifdef MP-ALIPAY
				lowernav: false,
				// #endif
				// #ifndef MP-ALIPAY
				lowernav: false,
				// #endif
				slideCategort:[
					{ 
                        title:'企业大中台',
						activeHeight:0,
						contentHeight: 0,
						active:false,
						secondCategort:[
							{
								name:'业务中台',
								detail:'iCommX Business Platform',
								url:"/pages/icommx/icommx?type=bp"
							},
							{
								name:'数据中台',
								detail:'iCommX Data Platform',
								url:"/pages/icommx/icommx?type=dp"
							},
							{
								name:'技术中台',
								detail:'iCommX Technology Platform',
								url:"/pages/icommx/icommx?type=tp"
							}
						]
					},
					{ 
                        title:'全渠道销售',
                        activeHeight:0,
						contentHeight: 0,
						active:false,
						secondCategort:[
							{
								name:'品牌零售系统',
								detail:'iCommX B2C',
								url:"/pages/icommx/icommx?type=b2c"
							},
							{
								name:'经销系统',
								detail:'iCommX B2B',
								url:"/pages/icommx/icommx?type=b2b"
							},
							{
								name:'线上线下平台',
								detail:'iCommX O2O',
								url:"/pages/icommx/icommx?type=o2o"
							},
							{
								name:'多商户零售平台',
								detail:'iCommX B2B2C',
								url:"/pages/icommx/icommx?type=b2b2c"
							},
							{
								name:'采购批发平台',
								detail:'iCommX B2P2B',
								url:"/pages/icommx/icommx?type=b2p2b"
							}
						]
					},
					{ 
                        title:'智能营销',
                        activeHeight:0,
						contentHeight: 0,
						active:false,
						secondCategort:[
							{
								name:'社群运营',
								detail:'iCommX SCRM',
								url:"/pages/icommx/icommx?type=scrm"
							},
							{
								name:'会员运营',
								detail:'iCommX MemOps',
								url:"/pages/icommx/icommx?type=mem"
							},
							{
								name:'营销工具',
								detail:'iCommX Marketing',
								url:"/pages/icommx/icommx?type=market"
							},
							{
								name:'分销系统',
								detail:'iCommX MDS',
								url:""
							}
						]
					},
					{ 
                        title:'解决方案',
                        activeHeight:0,
						contentHeight: 0,
						active:false,
						secondCategort:[
							{
								name:'制造',
								detail:'',
								url:"/pages/cases/cases?type=mfg"
							},
							{
								name:'汽车',
								detail:'',
								url:"/pages/cases/cases?type=cart"
							},
							{
								name:'流通',
								detail:'',
								url:"/pages/cases/cases?type=flw"
							},
							{
								name:'快消',
								detail:'',
								url:"/pages/cases/cases?type=cons"
							},
							{
								name:'餐饮',
								detail:'',
								url:"/pages/cases/cases?type=food"
							},
							{
								name:'保险',
								detail:'',
								url:"/pages/cases/cases?type=safe"
							},
							{
								name:'广电',
								detail:'',
								url:"/pages/cases/cases?type=tele"
							}
						]
					},
					{ 
                        title:'最佳实践',
                        activeHeight:0,
						contentHeight: 0,
						active:false,
						secondCategort:[
							{
								name:'TCL集团',
								detail:'',
								url:"/pages/theBest/thebest"
							},
							{
								name:'九牧厨卫',
								detail:'',
								url:"/pages/theBest/thebest?type=jomoo"
							},
							{
								name:'宏伟天马',
								detail:'',
								url:"/pages/theBest/thebest?type=tima"
							},
							{
								name:'长城汽车',
								detail:'',
								url:"/pages/theBest/thebest?type=haval"
							},
							{
								name:'创维安时达',
								detail:'',
								url:"/pages/theBest/thebest?type=anyserves"
							},
							{
								name:'海底捞',
								detail:'',
								url:"/pages/theBest/thebest?type=haidilao"
							}
						]
					},
				]
			}
		},
		created() {
			// #ifdef MP-ALIPAY
			// 带返回键页面 logo留位置
			if(getCurrentPages().length > 1) {
				this.logoOffset = true
			}
			// #endif
		},
		mounted() {
			let _this = this;
			// #ifdef MP
			uni.getSystemInfo({
				success: function (res) {
					_this.statusBarHeight = res.statusBarHeight + 4;
					if(res.platform.toLowerCase() == 'android'){
						_this.statusBarHeight += 4;
					}
					
				}
			})
			// #endif
		},
		methods: {
			showModel() {
				this.modalstate = true
			},
			emitState() {
				this.modalstate = false
			},
			showSlide(){
				this.tabSlide = !this.tabSlide
			},
			slideItem(index){
				let _this = this;
				if(this.currentname) {
					this.getRect('.ul',true).then(function (res) {
						res.forEach((ele,i) => {
							_this.slideCategort[i].contentHeight = ele.height + 'px';
						});
						_this.slideCategort[index].activeHeight = _this.slideCategort[index].contentHeight
					});
				}
				
				this.currentname = false
				this.slideCategort[index].active = !this.slideCategort[index].active;
				this.slideCategort[index].activeHeight = this.slideCategort[index].active? this.slideCategort[index].contentHeight : 0;
				// #ifdef MP-ALIPAY
					// this.slideCategort[index].activeHeight = this.slideCategort[index].active? 'none' : 0
				// #endif
			},
			getRect(selector, all) {
				var _this2 = this;

				return new Promise(function (resolve) {
					uni.createSelectorQuery().in(_this2)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
					if (all && Array.isArray(rect) && rect.length) {
						resolve(rect);
					}

					if (!all && rect) {
						resolve(rect);
					}
					}).exec();
				});
			}
		},
		components: {
			popu
		}
	};
</script>
<style scoped>
.qw-header-mobile{
	width: 100%;
	height: 120rpx;
	/* #ifdef MP */
	height: 90rpx;
	/* #endif */
	position: fixed;
	top: 0;
	left: 0;
	z-index: 79;
	border-bottom: 1px solid #666;
 }
 .noline {
	 border-bottom: none;
 }
 .qw-top-seizeaseat{
	height: 120rpx;
	/* #ifdef MP */
	height: 90rpx;
	/* #endif */
 }
.qw-header-bg {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: transparent;
}
.qw-header-bg.black {
	background-color: #000;
}

.qw-meun, .qw-header-mobile .qw-meun{
	width: 15%;
	height: 120rpx;
	/* #ifdef MP */
	height: 90rpx;
	/* #endif */
	position: absolute;
	top: 0;
	background-repeat: no-repeat;
	-webkit-background-size: 40rpx 40rpx;
	background-size: 40rpx 40rpx;
	z-index: 3;
}

.qw-header-mobile .qw-meun {
	right: 0;
	background: url('../static/index/menu.png') center no-repeat;
	-webkit-background-size: 50rpx 36rpx;
	background-size: 50rpx 36rpx;
	/* #ifdef MP */
	right: 194rpx;
	background-position-y: 8px;
	/* #endif */
}
.qw-header-mobile .qw-meun.lower-nav {
	width: 112rpx;
	height: 60rpx;
	border: 1px solid #e6e6ee;
	border-right: 0;
	border-radius: 30rpx 0 0 30rpx;
	background-position-y: center;
	background-color: rgba(255,255,255,0.8);
	top: calc(100vh - 240rpx) !important;
	right: 0 !important;
}
.qw-header-mobile .qw-logo{
	position: relative;
	display: block;
	width: 60%;
	height: 120rpx;
	background: url('../static/index/qw-logo.png') no-repeat;
	background-position: 38rpx center;
	margin: 0;
	-webkit-background-size: 392rpx auto;
	background-size: 392rpx auto;
	z-index: 3;
	/* #ifdef MP */
	height: 90rpx;
	background-position-y: top;
	margin-top: -4px;
	/* #endif */
}
/* #ifdef MP-ALIPAY */
.qw-header-mobile .qw-meun {
	right: 170rpx;
}
.qw-header-mobile .qw-logo.logo-offset {
	width: 62%;
	background-position-x: 58rpx;
}
/* #endif */
.qw-dropdown{
	background-color: #fff;
	position: fixed;
	top: 120rpx;
	height: calc(100vh - 120rpx);
	/* #ifdef MP */
	top: 90rpx;
	height: calc(100vh - 90rpx);
	/* #endif */
  overflow-y: auto;
	bottom: 0;
	left: 0;
	right: 0;
}

.qw-dropdown .ol{
	width: 100%;
	padding: 0 30rpx;
	padding-top: 48rpx;
	box-sizing: border-box
}
.qw-dropdown .ol>view .h3{
	line-height: 100rpx;
	border-bottom:1rpx solid #e6e6ee;
	color: #333;
	font-weight: normal;
	font-size: 32rpx;
}
.qw-dropdown .ol>view.qw-itme .h3{
	background: url('http://www.qwang.com.cn/img/qw-1.png') center right no-repeat;
	background-size:20rpx auto;
}
.qw-dropdown .ol>view .h3 .a{
	display: block;
}

.qw-dropdown .ol>view.qw-itme.active .h3{
	background: url('http://www.qwang.com.cn/img/x.png') center right no-repeat;
	background-size:auto 20rpx;
}

.qw-h5-nav{
	padding: 0 30rpx;
	overflow: hidden;
	will-change:max-height;
	transition:max-height .3s ease-in-out;
}
.qw-h5-imglogo{
	overflow: hidden;
	zoom: 1;
}
.qw-h5-imglogo .qw-img{
	float: left;
	width: 210rpx;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
}
.qw-h5-imglogo .qw-img img{
	vertical-align: middle;
	width: 100%;
}
.qw-h5-nav .ul>view{
	border-bottom:1rpx solid #e6e6ee;
}
.qw-h5-nav .ul>view .a{
	padding: 20rpx 0;
	display: block;
}
.qw-h5-nav .ul>view .h4{
	margin-bottom:10rpx;
	font-size: 28rpx;
}
.qw-dropdown .qw-programme{
	width: 244rpx;
	height: 80rpx;
	display: block;
	margin:40rpx auto;
	padding: 0rpx;
	line-height: 80rpx;
}
.titl-p {
    font-size: 24rpx;
    color: #999;
}
.qw-top-seizeaseat ~ .qw-header-mobile .qw-header-bg {
	background-color: #000;
}
</style>
