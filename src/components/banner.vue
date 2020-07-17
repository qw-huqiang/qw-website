<template>
    <view class="banner">
        <swiper class="swiper" :autoplay="autoplay" @change="swiperChange" v-if="imgRoute">
            <swiper-item v-for="(item, index) in banner" :key="index">
                <view class="qw-img">
                    <image :src="imgRoute + item.url"></image>
                    <view class="banr-des">
                        <view class="banr-des-title">{{item.title1}}</view>
                        <view class="banr-des-title">{{item.title2}}</view>
                        <rich-text class="banr-des-con" :nodes="parsenode[index]"></rich-text>
                        <view v-if="item.linkUrls != 0">
                            <block v-for="(lk,ls) in item.linkUrls" :key="ls">
                                <block v-if="lk.showPop">
                                    <view class="butn butn-custom" @click="showModel">{{lk.name}}</view>
                                </block>
                                <block v-else>
                                    <navigator class="butn butn-custom" :class="lk.clr?'butn0':''" :url="lk.linkurl" open-type="navigate" hover-class="none">{{lk.name}}</navigator>
                                </block>
                            </block>
                        </view>
                    </view>
                </view>
            </swiper-item>
        </swiper>
        <view class="dots"> 
            <block v-for="(item, index) in banner" :key="index"> 
                <view class="dot" :class="index==currentSwiper?'active':''"></view> 
            </block> 
        </view>
        <popu :modalstate="modalstate" v-on:emitState="emitState"></popu> 
    </view>
</template>
<script>
import parseHtml from "@/assets/js/html-parse"
import popu from "@/components/popup"
export default {
    data() {
        return {
            indicatorDots: true,
            autoplay: true,
            reParse: [],
            currentSwiper: 0,
            modalstate: false,
        }
    },
	props: {
        banner: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    created() {
        this.indicatorDots = this.banner.length != 1
    },
    methods:{
        swiperChange: function (e) {
            this.currentSwiper = e.detail.current
        },
        showModel() {
            this.modalstate = true
        },
        emitState() {
            this.modalstate = false
        }
    },
    watch: {
        banner: {
            immediate: true,
            handler(newV) {
                newV.forEach(ele => {
                    this.reParse.push(ele.content)
                });
            }
        }
    },
    computed: {
        parsenode() {
            return this.reParse.map((item) => {
                return parseHtml(item)
            })
             
        }
    },
    components: {
        popu
    }
}
</script>
<style scoped>
.banner {
    position: relative;
}
.swiper {
    width: 100%;
    height: 920rpx;
}
.qw-img, .qw-img image {
     width: 100%;
    height: 920rpx;
    position: relative;
}
.swiper /deep/ .uni-swiper-dots-horizontal {
    bottom: 60rpx;
}
.swiper /deep/ .uni-swiper-dot {
    width: 72rpx;
    height: 8rpx;
    background-color: rgba(255,255,255,0.26);
    border-radius: 0;
}
.swiper /deep/ .uni-swiper-dot-active {
    background-color: #25B4D6;
}
.banr-des {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-43%);
    text-align: center;
    color: #fff;
}
.banr-des-title {
    font-size: 54rpx;
    font-weight: bold;
    line-height: 72rpx;
    padding: 0 50rpx;
}
.banr-des-con {
    padding: 26rpx 80rpx 60rpx;
    font-size: 24rpx;
    line-height: 48rpx;
    min-height: 230rpx;
    display: block;
}
.butn {
    width: 200rpx;
    height: 80rpx;
    line-height: 80rpx;
}
.butn + .butn {
    margin-left: 20rpx;
}
.butn.butn0 {
    background-color: #F5A623;
    border-color: #F5A623;
}
.dots {
    height: 8rpx;
    line-height: 8rpx;
    position: absolute;
    bottom: 60rpx;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
}
.dot {
    width: 72rpx;
    height: 8rpx;
    float: left;
    margin:0rpx 8rpx;
    background-color: rgba(255,255,255,0.26);
}
.dot.active {
    width: 72rpx;
    height: 8rpx;
    background-color: #25B4D6;
}
</style>
