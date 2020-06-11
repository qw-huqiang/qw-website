<template>
    <view class="cards">
        <view class="card box" v-for="(item,index) in list" :key="index">
            <view class="card-tit1">{{item.title}}</view>
            <view class="card-tit2">{{item.titleEn}}</view>
            <view class="card-tit3">{{item.des}}</view>
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
.cards {
    margin: 50rpx 0 20rpx;
}
.card {
    padding: 30rpx 20rpx 26rpx 30rpx;
    margin-bottom: 20rpx;
}
.card-tit1 {
    font-size: 32rpx;
    color: #333;
    line-height: 42rpx;
    margin-bottom: 4rpx;
}
.card-tit2 {
    font-size: 22rpx;
    color: #6E6E6E;
    line-height: 34rpx;
}
.card-tit3 {
    font-size: 24rpx;
    color: #6E6E6E;
    line-height: 40rpx;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
