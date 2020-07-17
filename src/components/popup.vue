<template>
    <view class="popup" :class="screenHide?'':'act'" v-show="screenHide" >
        <view class="mask" @click="hideModal" @touchmove.stop.prevent="moveHandle"></view>
        <view class="popup-content qw-acquisitionscheme">
            <view class="qw-modal-tit clearfix">
                <view class="qw-close"  @click="hideModal"></view>
                <view class="top">
                    <image src="http://www.qwang.com.cn/img/q.png" mode="widthFix"></image>
                    <view class="top-tit">
                        <view class="_h2">HI！欢迎来到 <text>全网数商</text></view>
                        <view class="_p">扫码后您将获得以下福利</view>
                    </view>
                </view>
            </view>
           <view class="qw-modal-body">
                <view class="qw-data">
                    <view class="qw-data-lt">
                        <view class="tit-left">
                            <view>
                                <text class="_label">1</text>
                                专属客服
                                <text class="_span">一对一</text>
                                指导
                            </view>
                            <view>
                                <text class="_label">2</text>
                                社群大咖运营经验分享PPT
                            </view>
                            <view>
                                <text class="_label">3</text>
                                超多福利免费领取
                            </view>
                        </view>
                    </view>
                    <view class="qw-data-rt">
                        <view class="qw-qrcode"><image @click="preImg" src="http://www.qwang.com.cn/img/qrcode1.png"></image></view>
                        <view class="_p">扫码/长按添加企业微信</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        modalstate:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            screenHide: false
        }
    },
    inject:{
        autopop: { default: '' }
    },
    mounted(){
        let atp = uni.getStorageSync('autopop')
        if(this.autopop && atp) {
            setTimeout(() => {
                this.screenHide = true
            }, 5000)
            setTimeout(() => {
                this.screenHide = false
            }, 10000)
            uni.removeStorageSync('autopop')
        }
    },
    methods: {
        preImg() {
           uni.previewImage({
                current:'http://www.qwang.com.cn/img/qrcode1.png',
                urls:['http://www.qwang.com.cn/img/qrcode1.png']
            }) 
        },
        hideModal() {
            this.screenHide = false
            this.$emit('emitState',false);
            uni.removeStorageSync('autopop')
        },
        moveHandle() {

        }
    },
    watch: {
        modalstate(n) {
            this.screenHide = n
        }
    }
}
</script>
<style scoped>
.qw-acquisitionscheme{
    width: 80%;
    color: #666;
}
.qw-acquisitionscheme .qw-modal-tit {
    padding: 0 60rpx;
    line-height: 140rpx;
    border-bottom: 1px solid #EEEEEE;
    position: relative;
    overflow: hidden;
}
.qw-acquisitionscheme .qw-close {
    cursor: pointer;
    position: absolute;
    top: 40rpx;
    background: url(http://www.qwang.com.cn/img/qw-close.png) no-repeat;
    right: 30rpx;
    width: 28rpx;
    height: 28rpx;
    background-size: 100% auto;
}
.qw-acquisitionscheme .top {
    padding: 32rpx 0;
    float: left;
}
.qw-acquisitionscheme .top image {
    width: 80rpx;
    height: 80rpx;
    float: left;
    margin-top: 20rpx;
}
.qw-acquisitionscheme .top-tit {
    margin-left: 32rpx;
    float: left;
}
.qw-acquisitionscheme .top-tit ._h2 {
    font-size: 28rpx;
    line-height: 44rpx;
    font-weight: normal;
    color: #999999;
}
.qw-acquisitionscheme .top-tit ._h2 text {
    color: #101010;
    margin-left: 4rpx;
}
.qw-acquisitionscheme .top-tit ._p {
    line-height: 44rpx;
    font-size: 28rpx;
}
.qw-acquisitionscheme .qw-modal-body {
    padding: 20rpx 60rpx 40rpx;
}
.qw-acquisitionscheme .tit-left {
    line-height: 76rpx;
    font-size: 28rpx;
}
.qw-acquisitionscheme .tit-left ._label {
    color: #fff;
    display: inline-block;
    width: 40rpx;
    height: 40rpx;
    line-height: 40rpx;
    border-radius: 50%;
    background: #f5a623;
    margin-bottom: 0;
    text-align: center;
    font-weight: 400;
    margin-right: 32rpx;
}
.qw-acquisitionscheme .tit-left ._span {
    color: #f75454;
}
.qw-data-rt .qw-qrcode {
    border: 1px solid #e9e9e9;
    padding: 10rpx;
    margin: 40rpx auto 0px;
    width: 200rpx;
}
.qw-data-rt .qw-qrcode image {
    width: 180rpx;
    height: 180rpx;
}
.qw-acquisitionscheme .qw-data-rt ._p {
    margin-top: 20rpx;
    color: #24B4D6;
    font-size: 24rpx;
    text-align: center
}
</style>
