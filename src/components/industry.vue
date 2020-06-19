<template>
    <view class="industry" :class="txtlay?'txtlt':''">
        <view class="industry-item box" v-for="(item,index) in list" :key="index">
            <navigator :url="item.router" open-type="navigate" hover-class="none">
                <view class="qw-img">
                    <image lazy-load mode="widthFix" :src="item.pic"></image>
                </view>
                <view class="qw-tit">{{item.title}}</view>
                <view class="qw-txt">
                    {{item.des}}
                </view>
            </navigator>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            default: function () {
                return []
            }
        },
        txtlay: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
.industry .industry-item .qw-img{
	width: 100%;
	overflow: hidden;
}
.industry .industry-item .qw-img image {
    width: 100%;
}
.industry .industry-item{
	text-align: center;
	margin-bottom: 20rpx;
	padding-bottom: 20rpx;
}
.industry .industry-item .qw-tit{
	font-size: 32rpx;
	line-height: 42rpx;
	color:#333333;
	font-weight: bold;
	margin: 28rpx 0 2rpx;
}
.industry .industry-item .qw-txt{
	font-size: 24rpx;
	line-height: 48rpx;
	color:#6E6E6E;
}
.industry.txtlt {
    margin-bottom: 20rpx;
}
.industry.txtlt .industry-item  {
    text-align: left;
    padding-bottom: 50rpx;
    margin-bottom: 0
}
.industry.txtlt .industry-item .qw-tit,
.industry.txtlt .industry-item .qw-txt {
    padding-left: 40rpx;
    padding-right: 40rpx;

}
.industry.txtlt .industry-item .qw-tit {
    margin-bottom: 30rpx;
}
</style>
