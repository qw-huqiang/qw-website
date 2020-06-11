<template>
    <view class="icon-cards">
        <view class="icon-card box" v-for="(item,index) in list" :key="index">
            <image mode="widthFix" :src="item.pic"></image>
            <view class="icon-tit">{{item.title}}</view>
            <view class="icon-txt">{{item.des}}</view>
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
        }
    }
}
</script>
<style scoped>
    .icon-card {
        margin-bottom: 20rpx;
        padding: 32rpx 32rpx 32rpx 40rpx;
    }
    .icon-card image {
        display: block;
        width: 140rpx;
        margin: 40rpx auto;
    }
    .icon-tit {
        font-size: 32rpx;
        line-height: 42rpx;
        color: #333;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20rpx;
    }
    .icon-txt {
        font-size: 24rpx;
        text-align: center;
        line-height: 48rpx;
        color: #6E6E6E;
        min-height: 156rpx;
    }
</style>
