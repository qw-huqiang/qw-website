<template>
    <view class="home">
        <topnav :srcollchange="srcollpage"></topnav>
        <banner :banner="result.banner"></banner>
        <view>
            <view class="content">
                <view class="tcl-cont">
                    <view class="tcl-cont-pic" v-if="result.contents.publicityPic">
                        <image :src="result.contents.publicityPic"></image>
                    </view>
                    <view class="tcl-cont-txt" v-for="(item,index) in result.contents.documents" :key="index">
                        <view class="tcl-cont-tit">{{item.name}}</view>
                        <view class="tcl-cont-info" v-for="(val,i) in item.content" :key="i">
                            <view class="sec-title" v-if="val.tit">{{val.tit}}</view>
                            <view v-else>{{val}}</view>
                        </view>
                    </view>
                    <view class="tcl-cont-demo" v-if="result.contents.sysShow">
                        <view class="tcl-cont-tit">{{result.contents.sysShow.name}}</view>
                        <image src="http://www.qwang.com.cn/img/bestpractices/qw-present1.png"></image>
                        <view class="tcl-cont-showpic">
                            <image :src="result.contents.sysShow.pic"></image>
                        </view>
                    </view>
                </view>
            </view>
            <recommend></recommend>
        </view>
        <footernav></footernav>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                result: {}
            }
        },
        onLoad(option) {
            switch (option.type) {
                case 'tcl':
                    this.result = require('@/viewData/thebest-tcl')
                    break;
                case 'jomoo':
                    this.result = require('@/viewData/thebest-jomoo')
                    break;
                case 'tima':
                    this.result = require('@/viewData/thebest-tima')
                    break;
                case 'haval':
                    this.result = require('@/viewData/thebest-haval')
                    break;
                case 'anyserves':
                    this.result = require('@/viewData/thebest-anyserves')
                    break;
                case 'haidilao':
                    this.result = require('@/viewData/thebest-haidilao')
                    break;        
                default:
                    this.result = require('@/viewData/thebest-tcl')
                    break;
            }
            
        }      
    }
</script>
<style scoped>
.tcl-cont {
    margin: 50rpx 0 30rpx;
    background-color: #fff;
    box-shadow: 0px 20rpx 60rpx 0px rgba(111,111,111,0.1);
}
.tcl-cont-pic image{
    width: 100%;
    height: 402rpx;
}
.tcl-cont-showpic {
    width: 508rpx;
    height: 320rpx;
    margin: -132rpx auto 0;
} 
.tcl-cont-showpic image {
    width: 100%;
    height: 100%;
}
.tcl-cont-txt {
    margin: 32rpx 40rpx 10rpx;
    padding-bottom: 30rpx;
    border-bottom: 1px solid #979797
}
.tcl-cont-tit {
    font-size: 32rpx;
    color: #333;
    line-height: 42rpx;
    padding: 24rpx 0;
    font-weight: bold;
}
.tcl-cont-info {
    font-size: 24rpx;
    color: #6E6E6E;
    line-height: 48rpx;
    margin-bottom: 40rpx;
}
.tcl-cont-demo {
    padding-bottom: 40rpx;
}
.tcl-cont-demo .tcl-cont-tit {
    padding-left: 40rpx;
    margin-top: 20rpx;
}
.tcl-cont-demo > image {
    width: 100%;
    height: 214rpx;
    margin-top: 20rpx;
}
.sec-title {
    font-size: 26rpx;
    font-weight: bold;
    color: #333;
    line-height: 40rpx;
    margin-bottom: -30rpx;
}
</style>
