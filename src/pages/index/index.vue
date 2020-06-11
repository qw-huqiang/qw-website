<template>
	<view class="home">
		<!-- 头部导航 -->
		<topnav :srcollchange="srcollpage"></topnav>
		<!-- 轮播图 -->
		<banner :banner="result.banner"></banner>
		<view >
			<view class="company-type">
				<view class="company-item">
					<view class="company-tit">企业大中台</view>
					<view class="company-des">解决企业销售通路问题</view>
				</view>
				<view class="company-item">
					<view class="company-tit">全渠道销售</view>
					<view class="company-des">提升企业采购供应链效率</view>
				</view>
			</view>
			<view class="content">
				<!-- 业务系统 -->
				<card :list="result.systems"></card>
				<!-- 行业解决方案 -->
				<title-h :tit="result.solution.title" :txt="result.solution.des" ></title-h>
				<industry :list="result.solution.list"></industry>
				<!-- 行业解决方案 end-->

				<!-- 全网数商助力多行业客户成功 -->
				<title-h :tit="result.projects.title" :txt="result.projects.des"></title-h>
				<view class="brand">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay">
						<swiper-item v-for="(item, index) in comList" :key="index">
								<view class="swiper-item uni-bg-red">
									<view class="brand-content clearfix">
										<block v-for="(val,i) in item.list" :key="i">
											<view class="qw-img">
												<image :src="val.pic"></image>
											</view>
										</block>	
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<!-- 全网数商助力多行业客户成功 end-->

				<!-- 安全合规的多重保障 -->
				<title-h :tit="result.safety.title" :txt="result.safety.des"></title-h>
				<view class="safeguard clearfix">
					<view class="qw-img" v-for="(item,index) in result.safety.list" :key="index">
						<image :src="item.pic" alt=""></image>
					</view>
				</view>
				<!-- 安全合规的多重保障 end -->

				<!-- 实践案例 -->
				<title-h :tit="result.cases.title" :txt="result.cases.des"></title-h>
				<view class="case">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay">
						<swiper-item v-for="(item,index) in result.cases.list" :key="index">
							<view class="case-item">
								<view class="qw-img">
									<image :src="item.pic" alt=""></image>
								</view>
								<view class="case-info">
									<view class="case-type clearfix">
										<text v-for="(tag,t) in item.tags" :key="t">{{tag}}</text>
									</view>
									<view class="case-band">
										<view class="case-tit">{{item.name}}</view>
										<view class="case-txt">{{item.content}}</view>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<!-- 实践案例 end-->
			</view>
		</view>	
		<footernav></footernav>	
	</view>		
</template>

<script>
	// 获取首页数据
  	import result from '@/viewData/index';
	// 业务卡片组件
	import card from '@/components/card'
	// 解决方案组件 (图，文字上下结构)
	import industry from '@/components/industry'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				result: {},
				
			}
		},
		onLoad() {
			this.result = result
		},
		methods: {
			showSlide(){
				this.tabSlide = !this.tabSlide
			},
			slideItem(){
				if(this.slideCategort&&this.slideCategort.length>0){
					this.slideCategort.forEach((item,index)=>{
						item.active = true
						// [item.active: any]: boolean =true
					})
				}
			}
		},
		computed: {
			comList() {
				if(!this.result.projects) return []
				let list = this.result.projects.list
				if (list.length > 0) {
					var leng = Math.ceil(list.length / 6);
					var comlist = []
					for (var i = 0; i < leng; i++) {
						var arr = list.filter((ele,index) => {
							return index <6*(i+1) && index>=i*6
						});
						comlist.push({
							list: arr
						})
					} 
					return comlist
				}
			}
		},
		components: {
			industry,
			card
		}
	};
</script>

<style>

.qw-img image{
	width: 100%;
	height: 100%;
}

.brand .qw-img{
	width: 320rpx;
	height: 140rpx;
	overflow: hidden;
	float: left;
	margin-right: 20rpx;
	margin-bottom: 20rpx;
	box-shadow:0rpx 0rpx 20rpx 0 rgba(111,111,111,0.1);
}
.brand .brand-content{
	margin-right: -20rpx;
}
.brand /deep/ .swiper{
	height:540rpx;
}
.swiper /deep/.uni-swiper-dot{
	background: rgba(0,0,0,.5);
}
.brand /deep/ .uni-swiper-dot-active{
	background-color: #25B4D6;
}
.safeguard{
	margin-right: -20rpx;
}
.safeguard .qw-img{
	float: left;
	width: 320rpx;
	height:140rpx;
	overflow: hidden;
	margin-right: 20rpx;
	margin-bottom: 20rpx;
	box-shadow:0rpx 0rpx 20rpx 0 rgba(111,111,111,0.1);
}
.case .case-item{
	background-color: #fff;
	box-shadow:0rpx 20rpx 60rpx 0rpx rgba(111,111,111,0.1);
}
.case .case-item .qw-img{
	width: 660rpx;
	height:248rpx;
	overflow: hidden;
}
.case .case-item .case-info{
	padding:40rpx 40rpx 24rpx;
}
.case .case-item .case-type{
	margin-bottom: 44rpx;
}
.case .case-item .case-type text{
	font-size: 28rpx;
	color: #fff;
	float: left;
	margin-right: 20rpx;
	background-color: #25B4D6;
	padding: 10rpx 20rpx 12rpx;
}
.case .case-item .case-type text:last-child{
	margin-right: 0;
}
.case .case-item .case-band .case-tit{
	font-size: 32rpx;
	color: #333333;
	font-weight: bold;
	line-height: 44rpx;
	margin-bottom: 28rpx;
}
.case .case-item .case-band .case-txt{
	font-size: 24rpx;
	color: #6E6E6E;
	line-height: 48rpx;
	height: 262rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 5;
	overflow: hidden;
}
.case{
	margin-bottom: 70rpx;
}
.case /deep/ .swiper{
	height:810rpx;
}
.case /deep/ .uni-swiper-dot-active{
	background-color: #25B4D6;
}
.case /deep/ .swiper .uni-swiper-dots-horizontal{
	bottom: 0rpx;
}
.swiper /deep/ .uni-swiper-dot {
	width: 20rpx;
	height: 20rpx;
}
.swiper /deep/ .uni-swiper-dots-horizontal .uni-swiper-dot{
	margin-right: 20rpx;
}

.company-type {
	height: 200rpx;
	padding: 40rpx 0;
	background-color:#25B4D6;
	display: flex;
	align-items: center;
	box-shadow:0 20rpx 40rpx 0 rgba(111,111,111,0.3);
}
.company-item {
	flex: 1;
	color: #fff;
	text-align: center;
	padding: 0 30rpx;
	border-right: 1px solid rgba(255,255,255,0.3)
}
.company-item:last-of-type {
	border-right: none;
}
.company-tit {
	font-size: 32rpx;
	line-height: 44rpx;
	font-weight: bold;
	margin-bottom: 6rpx;
}
.company-des {
	font-size: 24rpx;
	line-height: 40rpx;
}
</style>
