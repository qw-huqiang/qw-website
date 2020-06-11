<template>
    <view class="qw-visible-mobile" :class="srcollchange?'noline':''">
        <view :class="holder?'qw-top-seizeaseat':''"></view>
        <view class="qw-header-mobile">
            <view class="qw-header-bg" :class="srcollchange?'black':''"></view>
            <view url="javascript:;" class="qw-meun" @click="showSlide"></view>
            <navigator url="/" class="qw-logo"></navigator>
            <view class="qw-dropdown" id="qw-navbar-collapse" v-if="tabSlide">
                <view class="ol">
                    <view class="qw-itme" :class="item.active?'active':''" v-for="(item,index) in slideCategort" :key="index" @click="slideItem(index)">
                        <view class="h3">{{item.title}}</view>
                        <view class="qw-h5-nav" v-show="item.active">
                            <view class="ul">
                                <view v-for="(second,idx) in item.secondCategort" :key="idx">
                                    <navigator class="a" url="">
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
                <navigator url="" class="qw-programme butn butn-custom">免费获取方案</navigator>
            </view>
        </view>
    </view>
</template>
<script>
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
				showItem:false,
				slideCategort:[
					{ 
                        title:'企业大中台',
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
                        active:false,
						secondCategort:[
							{
								name:'社群运营',
								detail:'iCommX SCRM',
								url:"/pages/business/community"
							},
							{
								name:'会员运营',
								detail:'iCommX MemOps',
								url:"/pages/business/member"
							},
							{
								name:'营销工具',
								detail:'iCommX Marketing',
								url:"/pages/business/activity"
							},
						]
					},
					{ 
                        title:'解决方案',
                        active:false,
						secondCategort:[
							{
								name:'制造',
								detail:''
							},
							{
								name:'汽车',
								detail:''
							},
							{
								name:'流通',
								detail:''
							},
							{
								name:'快消',
								detail:''
							},
							{
								name:'餐饮',
								detail:''
							},
							{
								name:'保险',
								detail:''
							},
							{
								name:'广电',
								detail:''
							},
						]
					},
					{ 
                        title:'最佳实践',
                        active:false,
						secondCategort:[
							{
								name:'TCL集团',
								detail:'',
								url:"pages/theBest/thebest"
							},
							{
								name:'九牧厨卫',
								detail:'',
								url:"pages/theBest/thebest?type=jomoo"
							},
							{
								name:'宏伟天马',
								detail:'',
								url:"pages/theBest/thebest?type=tima"
							},
							{
								name:'长城汽车',
								detail:'',
								url:"pages/theBest/thebest?type=haval"
							},
							{
								name:'创维安时达',
								detail:'',
								url:"pages/theBest/thebest?type=anyserves"
							},
							{
								name:'海底捞',
								detail:'',
								url:"pages/theBest/thebest?type=haidilao"
							}
						]
					},
				]
			}
		},
		onLoad() {
			this.result = result;
		},
		methods: {
			showSlide(){
				this.tabSlide = !this.tabSlide
			},
			slideItem(index){
				this.slideCategort[index].active = !this.slideCategort[index].active
			}
		},
		onPageScroll(e) {
			console.log(e)
		}
	};
</script>
<style scoped>
.qw-header-mobile{
	width: 100%;
	height: 120rpx;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	border-bottom: 1px solid #666;
 }
 .noline {
	 border-bottom: none;
 }
 .qw-top-seizeaseat{
	height: 120rpx;
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
	position: absolute;
	top: 0;
	background-position: 30rpx;
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
}
.qw-header-mobile .qw-logo{
	position: relative;
	display: block;
	width: 70%;
	height: 120rpx;
	background: url('../static/index/qw-logo.png') 38rpx center no-repeat;
	margin: 0;
	-webkit-background-size: 392rpx auto;
	background-size: 392rpx auto;
	z-index: 3;
}
.qw-dropdown{
	background-color: #fff;
	position: fixed;
	top: 120rpx;
	height: calc(100vh - 120rpx);
  overflow-y: auto;
	bottom: 0;
	left: 0;
	right: 0;
}

.qw-dropdown .ol{
	width: 100%;
	padding: 0 30rpx;
	padding-top: 48rpx;
}
.qw-dropdown .ol>view .h3{
	line-height: 100rpx;
	border-bottom:1rpx solid #e6e6ee;
	color: #333;
	font-weight: normal;
	font-size: 32rpx;
}
.qw-dropdown .ol>view.qw-itme .h3{
	background: url('../static/index/qw-1.png') center right no-repeat;
	background-size:20rpx auto;
}
.qw-dropdown .ol>view .h3 .a{
	display: block;
}

.qw-dropdown .ol>view.qw-itme.active .h3{
	background: url('../static/index/x.png') center right no-repeat;
	background-size:auto 20rpx;
}

.qw-h5-nav{
	padding: 0 30rpx;
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
