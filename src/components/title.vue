<template>
    <view class="index-title">
        <view class="qw-tit">{{tit}}</view>
        <view class="qw-txt">{{txt}}</view>
    </view>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        tit: {
            type: String,
            default:''
        },
        txt: {
            type: String,
            default:'' 
        }
    }
}
</script>
<style scoped>
.index-title{
	padding-top: 56rpx;
}
.index-title .qw-tit{
	font-size: 32rpx;
	line-height: 42rpx;
	color:#333333;
	text-align: center;
	font-weight: bold;
}
.index-title .qw-txt{
	font-size: 24rpx;
	line-height: 40rpx;
	color:#6E6E6E;
	text-align: center;
	margin: 12rpx 0 48rpx;
}
</style>
