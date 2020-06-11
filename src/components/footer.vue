<template>
    <view>
        <view class="bottom_content">
            <view class="qw-content">
                <view class="content-text">
                    全网数商拥有15年、百余家大型企业数字化转型经验，可为您量身打造解决方案
                </view>
                <navigator url="navigate/navigate?title=navigate">
                    <view class="get-print">索取量身打造解决方案</view>
                </navigator>
            </view>
        </view>
        <view class="footerbtm">
            <view class="foot-items">
                <view class="foot-item" v-for="(item,index) in list" :key="index">
                    <view class="foot-item-coll" @click="collagePan(index)">
                        <view class="foot-item-tit">{{item.title}}</view>
                        <view class="foot-item-icon" :class="item.active?'active':''"></view>
                    </view>
                    <view v-if="item.list != 0">
                        <view v-show="item.active">
                            <view class="foot-item-li" v-for="(val,i) in item.list" :key="i">{{val.name}}</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="foot-servie">
                <view class="foot-servie-num">服务热线 400-6060-980</view>
                <view class="foot-servie-num">关注微信订阅号</view>
                <image src="/static/index/erwm.png" @click="preimg"></image>
            </view>
            <view class="foot-beian">Copyright © 2010-2017 全网数商 保留公司所有权利   北京市公安局海淀分局备案编号11010802016028 京ICP备11047843号 Copyright2005-2015</view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {title:'产品与支持',active: false,list:[{name: '业务中台',link: ''},{name: '业务中台',link: ''},{name: '业务中台',link: ''}]},
                {title:'产品与支持',active: false,list:[{name: '业务中台',link: ''},{name: '业务中台',link: ''},{name: '业务中台',link: ''}]},
                {title:'产品与支持',active: false,list:[{name: '业务中台',link: ''},{name: '业务中台',link: ''},{name: '业务中台',link: ''}]},
                {title:'产品与支持',active: false,list:[{name: '业务中台',link: ''},{name: '业务中台',link: ''},{name: '业务中台',link: ''}]}
            ]
        }
    },
    methods: {
        collagePan(index){
            this.list[index].active = !this.list[index].active
        },
        preimg () {
            uni.previewImage({
                current:'/static/index/erwm.png',
                urls:['/static/index/erwm.png']
            }) 
        }
    }
}
</script>
<style scoped>
.bottom_content{
	width: 100%;
	height: 360rpx;
	background: url(../static/index/bottom-bg.png) center center no-repeat;
	background-size: 100% 100%;
} 
.bottom_content .qw-content{
	padding: 86rpx 45rpx 66rpx;
	text-align: center;
}
.bottom_content .qw-content .content-text{
	font-size: 32rpx;
	color: #F8F8F8;
	line-height: 44rpx;
}
.bottom_content .qw-content .get-print{
	width: 360rpx;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 28rpx;
	color: #fff;
	border: 2rpx solid #FFFFFF;
	margin: 40rpx auto 0;
}
.footerbtm {
    background-color: #252B39;
}
.foot-items {
    padding: 44rpx 46rpx;
}
.foot-item {
    line-height: 98rpx;
}
.foot-item-coll {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #979797;
}
.foot-item-tit {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
}
.foot-item-icon {
    width: 32rpx;
    height: 34rpx;
    background: url(../static/index/bottomre.png) no-repeat;
    background-size: 100% 100%;
    transition: transform 0.3s;
}
.foot-item-icon.active {
    transform: rotate(45deg)
}
.foot-item-li {
    font-size: 28rpx;
    color: #fff;
    margin-left: 40rpx;
    border-bottom: 1px solid #979797;
    padding-left: 20rpx;
}
.foot-item-li:last-of-type {
    margin-bottom: 30rpx;
}
.foot-servie {
    padding: 36rpx 0 92rpx;
    text-align: center;
    border-bottom: 1px solid #979797;
}
.foot-servie-num {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
    line-height: 44rpx;
    margin-bottom: 10rpx;
}
.foot-servie image {
    width: 164rpx;
    height: 164rpx;
    margin: 10rpx auto 0;
}
.foot-beian {
    padding: 40rpx 46rpx;
    font-size: 24rpx;
   line-height: 34rpx;
    color: #999;
    text-align: center
}
</style>
