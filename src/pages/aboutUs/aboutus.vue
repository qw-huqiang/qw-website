<template>
    <view class="home">
        <topnav :holder="true"></topnav>
        <video id="myVideo" object-fit="cover" poster-size="cover" :src="result.videoUrl" :poster="result.videoPosr"></video>
        <view>
            <view class="content">
                <view class="tcl-cont box">
                    <view class="tcl-cont-txt" v-for="(item,index) in result.contents.documents" :key="index">
                        <view class="tcl-cont-tit">{{item.name}}</view>
                        <view class="tcl-cont-info" v-for="(val,i) in item.content" :key="i">{{val}}</view>
                    </view>
                </view>
                <view class="tcl-cont box">
                    <view class="tcl-cont-txt">
                        <view class="tcl-cont-tit">{{result.hope.name}}</view>
                        <view class="tcl-cont-info">
                            <view class="hop-line">
                                <view class="hop-li" v-for="(item,index) in result.hope.list" :key="index">
                                    <view class="hop-li-tit">{{item.title}}</view>
                                    <view class="hop-li-info">{{item.des}}</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="tcl-cont box">
                    <view class="tcl-cont-txt">
                        <view class="tcl-cont-tit">{{result.values.name}}</view>
                        <view class="tcl-cont-info">
                            <view class="hop-vals">
                                <view class="hop-val" v-for="(item,index) in result.values.list" :key="index">
                                    <image :src="item.pic"></image>
                                    <view class="hop-val-tit">{{item.title}}</view>
                                    <view class="hop-val-info">{{item.des}}</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="tcl-cont box">
                    <view class="tcl-cont-txt">
                        <view class="tcl-cont-tit">{{result.honour.name}}</view>
                        <view class="tcl-cont-info brand">
                            <swiper class="swiper" :indicator-dots="true" :autoplay="false" indicator-active-color="#25B4D6">
                                <swiper-item v-for="(item, index) in honourList" :key="index">
                                        <view class="swiper-item uni-bg-red">
                                            <view class="brand-content clearfix">
                                                <view class="brand-item" v-for="(val,i) in item.list" :key="i">
                                                    <view class="qw-img">
                                                        <image :src="val" @click="preImgs1(val)"></image>
                                                    </view>
                                                </view>	
                                        </view>
                                    </view>
                                </swiper-item>
                            </swiper>
                        </view>
                    </view>
                </view>
                <view class="tcl-cont box">
                    <view class="tcl-cont-txt">
                        <view class="tcl-cont-tit">{{result.clientele.name}}</view>
                        <view class="tcl-cont-info brand">
                            <swiper class="swiper" :indicator-dots="true" :autoplay="false" indicator-active-color="#25B4D6">
                                <swiper-item v-for="(item, index) in clienteleList" :key="index">
                                        <view class="swiper-item uni-bg-red">
                                            <view class="brand-content clearfix">
                                                <view class="brand-item" v-for="(val,i) in item.list" :key="i">
                                                    <view class="qw-img">
                                                        <image :src="val" @click="preImgs2(val)"></image>
                                                    </view>
                                                </view>	
                                        </view>
                                    </view>
                                </swiper-item>
                            </swiper>
                        </view>
                    </view>
                </view>

                <!-- 发展历程 -->
				<title-h :tit="result.progress.name" :txt="result.progress.des"></title-h>
                <view class="progress-warp">
                    <image class="pross-bg" src="../../static/aboutus/pross-bg.png"></image>
                    <view class="swiper-warp">
                        <swiper class="swiper" :indicator-dots="false" :autoplay="false" :current="curt" @change="swiperChange">
                            <swiper-item v-for="(item, index) in result.progress.list" :key="index" >
                                <view class="progress-item">
                                    <view class="prog-year">
                                        <view class="prog-Y">{{item.years}}</view>
                                        <text>YRAR</text>
                                    </view>
                                    <view class="prog-cricle"></view>
                                    <view class="prog-cont-wp">
                                        <scroll-view  scroll-x="true">
                                            <view class="prog-warps">
                                                <view class="prog-li" v-for="(val, i) in item.list" :key="i">
                                                    <image :src="val.pic"></image>
                                                    <view class="prog-li-txt">{{val.des}}</view>
                                                </view>
                                            </view>
                                        </scroll-view>
                                    </view>
                                </view>   
                            </swiper-item>
                        </swiper>
                        <view class="prog-left" @click="pullLeft" v-show="showLeft">
                            <image src="../../static/aboutus/pros-left.png"></image>
                        </view>
                        <view class="prog-right" @click="pullright" v-show="showRight">
                            <image src="../../static/aboutus/pros-right.png"></image>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <footernav></footernav>
    </view>
</template>
<script>
// 获取最佳实践数据
// import result from '@/viewData/aboutUs';
export default {
    data() {
        return {
            result: require('@/viewData/aboutUs'),
            curt: 0,
            showLeft: false,
            showRight: true,
        }
    },
    onLoad() {
        // this.result = result
    },
    methods: {
        preImgs1 (pic) {
            uni.previewImage({
                urls: this.result.honour.list,
                current: pic
            })
        },
        preImgs2 (pic) {
            uni.previewImage({
                urls: this.result.clientele.list,
                current: pic
            })
        },
        pullLeft() {
            this.curt --
        },
        pullright() {
            this.curt ++
        },
        swiperChange(e) {
            let cur = e.detail.current;
            this.curt = cur
            if(cur == 0) {
                this.showLeft = false;
            }else if (cur == this.result.progress.list.length - 1) {
                this.showRight = false;
            }else {
                this.showLeft = true;
                this.showRight = true;
            }
        }
        
    },
    computed: {
        honourList() {
            let list = this.result.honour.list
            if (list.length > 0) {
                var leng = Math.ceil(list.length / 2);
                var comlist = []
                for (var i = 0; i < leng; i++) {
                    var arr = list.filter((ele,index) => {
                        return index <2*(i+1) && index>=i*2
                    });
                    comlist.push({
                        list: arr
                    })
                } 
                return comlist
            }
        },
        clienteleList() {
            let list = this.result.clientele.list
            if (list.length > 0) {
                var leng = Math.ceil(list.length / 2);
                var comlist = []
                for (var i = 0; i < leng; i++) {
                    var arr = list.filter((ele,index) => {
                        return index <2*(i+1) && index>=i*2
                    });
                    comlist.push({
                        list: arr
                    })
                } 
                return comlist
            }
        }
    }      
}
</script>
<style scoped>
.tcl-cont {
    margin: 40rpx 0 30rpx;
}
.tcl-cont-txt {
    margin: 32rpx 40rpx 10rpx;
    padding-bottom: 30rpx;
}
.tcl-cont-tit {
    font-size: 32rpx;
    color: #333;
    line-height: 42rpx;
    padding: 40rpx 0 24rpx;
    font-weight: bold;
}
.tcl-cont-info {
    font-size: 24rpx;
    color: #6E6E6E;
    line-height: 48rpx;
    margin-bottom: 40rpx;
}
video {
    width: 100% !important;
}
.hop-line {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.hop-li {
    width: 280rpx;
    height: 320rpx;
    color: #fff;
    text-align: center;
    background-color: #3CB7D9;
    overflow: hidden;
}
.hop-li-tit {
    font-size: 32rpx;
    line-height: 42rpx;
    font-weight: bold;
    padding: 42rpx 20rpx 32rpx;
    border-bottom: 1px solid #fff;
}
.hop-li-info {
    font-size: 24rpx;
    line-height: 40rpx;
    padding: 30rpx 40rpx 0;
}
.hop-vals {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.hop-val {
    width: 100%;
    border: 1px solid #DFDFDF;
    text-align: center;
    margin-bottom: 20rpx;
}
.hop-val:last-of-type {
    margin-bottom: 0;
}
.hop-val image {
    width: 112rpx;
    height: 112rpx;
    margin: 48rpx auto 34rpx;
}
.hop-val-tit {
    font-size: 32rpx;
    font-weight: bold;
    line-height: 42rpx;
    color:#333;
    margin-bottom: 4rpx;
}
.hop-val-info {
    font-size: 24rpx;
    color: #6E6E6E;
    line-height: 48rpx;
    padding: 0 20rpx 36rpx;
}
.tcl-cont-info.brand {
    margin-bottom: 0;
}
.brand .qw-img{
	width: 240rpx;
	height: 240rpx;
    margin: 38rpx auto;
	overflow: hidden;
}
.brand .qw-img image {
    width: 100%;
    height: 100%;
}
.brand {
margin-top: 30rpx;
}
.brand .brand-content{
	display: flex;
    justify-content: space-between;
    
}
.brand-item {
    width: 270rpx;
    border:1px solid #DFDFDF;
}
.brand /deep/ .swiper{
	height: 408rpx !important;
}
.swiper /deep/.uni-swiper-dot{
	background: rgba(0,0,0,.5);
}
.brand /deep/ .uni-swiper-dot-active{
	background-color: #25B4D6;
}
.brand /deep/ .uni-swiper-dots-horizontal {
    bottom: 0;
    line-height: 40rpx;
}
.progress-warp {
    margin: 0 -44rpx;
    height: 776rpx;
    position: relative;
}
.pross-bg {
    width: 100%;
    height: 100%;
}
.progress-warp /deep/ .swiper {
    height: 776rpx !important;
}
.progress-warp .swiper-warp {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.progress-item {
    padding: 60rpx 94rpx 0;
}
.prog-year {
    width: 228rpx;
    height: 228rpx;
    position: relative;
    text-align: center;
    color: #fff;
    padding-top: 68rpx;
    margin: 0 auto;
    box-sizing: border-box;
}
.prog-Y {
    font-size: 52rpx;
    line-height: 70rpx;
    font-weight: bold;
    margin-bottom: -16rpx;
}
.prog-year text {
    font-size: 32rpx;
    line-height: 40rpx;
}
.prog-year::after {
    content: '';
    position: absolute;
    top: 34rpx;
    left: 34rpx;
    width: 157rpx;
    height: 157rpx;
    border: 1px solid #fff;
    transform: rotate(45deg);
}
.prog-cricle {
    width: 20rpx;
    height: 20rpx;
    border: 1px solid #fff;
    border-radius: 50%;
    margin: 30rpx auto 34rpx;
}
.prog-warps {
    font-size: 0;
    white-space: nowrap
}
.prog-li {
    display: inline-block;
    width: 260rpx;
    margin-right: 24rpx;
}
.prog-li:last-of-type {
    margin-right: 0;
}
.prog-li image {
    width: 260rpx;
    height: 180rpx;
}
.prog-li-txt {
    font-size: 24rpx;
    line-height: 40rpx;
    color: #fff;
    height: 120rpx;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    margin-top: 12rpx;
}
.prog-left,.prog-right {
    position: absolute;
    top: 406rpx;
    padding: 30rpx 28rpx;
    z-index: 9;
}
.prog-left {
    left: 0;
}
.prog-right {
    right: 0;
}
.prog-left image,.prog-right image {
    width: 22rpx;
    height: 42rpx;
}
</style>
