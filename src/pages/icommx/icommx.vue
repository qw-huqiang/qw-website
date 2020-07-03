<template>
    <view class="home">
        <topnav :srcollchange="srcollpage"></topnav>
        <view v-if="result.banner">
        <banner :banner="result.banner"></banner>
        </view>
        <view>
            <view class="content mt_20">
                <!-- 产品特点 -->
                <view v-if="result.productTrait">
                    <title-h :tit="result.productTrait.title" :txt="result.productTrait.des" ></title-h>
                    <icon-card :list="result.productTrait.list"></icon-card>
                </view>
                <!-- 产品特点 end-->
               
               <!-- 产品结构 -->
               <view v-if="result.productConstruct">
                   <title-h :tit="result.productConstruct.title" :txt="result.productConstruct.des" ></title-h>
                   <view class="box">
                       <view class="pro-items">
                            <view class="pro-item" v-for="(item,index) in result.productConstruct.list" :key="index">
                                <image mode="widthFix" :src="item.pic"></image>
                                <view class="pro-item-tit">{{item.title}}</view>
                                <view class="pro-item-des">{{item.des}}</view>
                            </view>
                       </view>
                   </view>
               </view>
               <!-- 产品结构 end -->

                <!-- 主流程图 -->
                <view v-if="result.mainfllow">
				    <main-fllow :flwobj="result.mainfllow" :txtlay="true"></main-fllow>
                </view>
                <!-- 主流程图 end -->

                <!-- 系统说明 -->
                <view v-if="result.solution">
                    <title-h :tit="result.solution.title" :txt="result.solution.des" ></title-h>
				    <industry :list="result.solution.list" :txtlay="true"></industry>
                </view>
                <!-- 系统说明 end -->

                <!-- 结构示意图 -->
                <view v-if="result.picfllow">
                    <pic-fllow :flwobj="result.picfllow"></pic-fllow>
                </view>
                <!-- 结构示意图 end-->

                <!-- 营销插件方案 -->
                <view v-if="result.actcase">
                    <title-h :tit="result.actcase.title" :txt="result.actcase.des" ></title-h>
                    <view class="box act-cont">
                        <view class="act-cont-item" v-for="(item,index) in result.actcase.list" :key="index">
                            <view class="act-cont-pic">
                                <image mode="widthFix" :src="item.pic"></image>
                            </view>
                            <view class="act-cont-tit">{{item.title}}</view>
                            <view class="act-cont-des">{{item.des}}</view>
                        </view>
                    </view>
                </view>
                <!-- 营销插件方案 end -->

                
            </view>
            <!-- 多端应用 -->
            <view v-if="result.multiport">
                <title-h :tit="result.multiport.title" :txt="result.multiport.des" ></title-h>
                <view class="box multiport_app">
                    <view class="multiport_title">
                        <text>系统访问终端</text>
                    </view>
                    <view class="surface_list">
                        <view class="dl left_con">
                            <view class="dt"></view>
                            <view class="dd" v-for="(item,index) in result.multiport.list" :key="index">{{item.name}}</view>
                        </view>
                        <view class="dl" v-for="(item,index) in palet" :key="index">
                            <view class="dt">{{palet[index]}}</view>
                            <view class="dd" v-for="(val,i) in result.multiport.list" :key="i">
                                <view class="yes_check" v-if="val.obj[index]">
                                    <image src="http://www.qwang.com.cn/img/check.png"></image>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="multiport_title">
                        <text>全渠道覆盖</text>
                    </view>
                    <view class="multiport_list">
                        <view class="multiport_item" v-for="(item,index) in result.multiport.sysName" :key="index">
                            <image class="multiport_ico" :src="item.pic"></image>
                            <text>{{item.name}}</text>
                        </view>
                    </view>
                </view>    
            </view>    
            <!-- 多端应用 end -->
            <recommend></recommend>
        </view>
        <footernav></footernav>
    </view>
</template>
<script>
// 产品特点
import iconCard from '@/components/iconCard';
// 图解
import picFllow from '@/components/picFllow';
// 业务说明 (图，文字上下结构)
import industry from '@/components/industry';
// 主流程
import mainFllow from '@/components/mainFllow';
export default {
    data() {
        return {
            result: {},
            type:'',
            palet:{"pc":'pc端',"h5":'h5端',"app":'App端',"wx":'微信端',"xcx":'小程序'}
        }
    },
    onLoad(option) {
        this.type = option.type;
        switch (option.type) {
            case 'bp':
                this.result = require('@/viewData/icommx-bp')
                console.log(this.result.banner)
                break;
            case 'dp':
                this.result = require('@/viewData/icommx-dp')
                break;
            case 'tp':
                this.result = require('@/viewData/icommx-tp')
                break;
            case 'b2c':
                this.result = require('@/viewData/icommx-b2c')
                break;
            case 'b2b':
                this.result = require('@/viewData/icommx-b2b')
                break; 
            case 'o2o':
                this.result = require('@/viewData/icommx-o2o')
                break;
            case 'b2b2c':
                this.result = require('@/viewData/icommx-b2b2c')
                break; 
            case 'b2p2b':
                this.result = require('@/viewData/icommx-b2p2b')
                break;
            case 'market':
                this.result = require('@/viewData/icommx-market')
                break;
            case 'mem':
                this.result = require('@/viewData/icommx-mem')
                break; 
            case 'scrm':
                this.result = require('@/viewData/icommx-scrm')
                break;                      
            default:
                this.result = require('@/viewData/icommx-bp')
                break;
        }
        
    },
    onReady() {
        
        let barTitle='';
        switch (this.type) {
            case 'bp':
                barTitle = 'iCommX BP业务中台'
                break;
            case 'dp':
                barTitle = 'iCommX DP数据中台'
                break;
            case 'tp':
                barTitle = 'iCommX TP技术中台'
                break;
            case 'b2c':
                barTitle = 'iCommX B2C品牌零售系统'
                break; 
            case 'b2b':
                barTitle = 'iCommX B2B经销系统'
                break;
            case 'o2o':
                barTitle = 'iCommX O2O线上线下平台'
                break;
            case 'b2b2c':
                barTitle = 'iCommX B2B2C多商户零售平台'
                break; 
            case 'b2p2b':
                barTitle = 'iCommX B2P2B采购批发平台'
                break; 
             case 'market':
                barTitle = 'iCommX Marketing营销工具'
                break; 
            case 'mem':
                 barTitle = 'iCommX MemOps会员运营'
                break; 
            case 'scrm':
                barTitle = 'iCommX SCRM社群运营'
                break;                
            default:
                barTitle = ''
                break;
        }
        // #ifndef MP-ALIPAY
        uni.setNavigationBarTitle({
            title: barTitle
        });
        // #endif
    },
    components: {
        iconCard,
        picFllow,
        industry,
        mainFllow
    }
}
</script>
<style scoped>
.pro-items {
    padding: 44rpx 40rpx 24rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.pro-item {
    width: 280rpx;
    height: 476rpx;
    border:1px solid rgba(223,223,223,1);
    margin-bottom: 20rpx;
}
.pro-item image {
    width: 56rpx;
    display: block;
    margin: 30rpx auto 14rpx;
}
.pro-item-tit {
    font-size: 36rpx;
    color: #333;
    line-height: 48rpx;
    font-weight: bold;
    text-align: center;
    padding-bottom: 20rpx;
    margin-bottom: 28rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 4rpx solid #25B4D6;
}
.pro-item-des {
    font-size: 24rpx;
    text-align: center;
    line-height: 48rpx;
    color: #6E6E6E;
    padding: 0 18rpx 0 16rpx;
}
.multiport_app {
    padding: 20rpx 24rpx;
}
.multiport_app .surface_list{
  width: 100%;
  overflow: hidden;
  border-top: 1px solid rgba(151, 151, 151,0.4);
  border-left:1px solid rgba(151, 151, 151,0.4);
  border-right:1px solid rgba(151, 151, 151,0.4);
  box-sizing: border-box;
}

.multiport_app .surface_list .dl{
  width: 15%;
  float: left;
}
.multiport_app .surface_list .left_con {
    width: 25%;
}
.multiport_app .surface_list .dl .dt,
.multiport_app .surface_list .dl .dd{
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  padding: 0 10rpx;
  font-size: 24rpx;
  text-align: center;
  border-bottom: 1px solid rgba(151, 151, 151,0.4);
  box-sizing: border-box;
}
.multiport_app .surface_list .left_con .dt,
.multiport_app .surface_list .left_con .dd{
  text-align:left;
  font-weight: bold;
  color: #666;
}
.multiport_app .surface_list .dl .dd .yes_check{
  width: 40rpx;
  height: 40rpx;
  display: inline-block;
  margin-top: 10rpx;
}
.multiport_app .surface_list .dl .dd .yes_check image{
  width: 100%;
  height: 100%;
}
.multiport_title {
    text-align: center;
    font-size: 28rpx;
    color: #333;
    font-weight: bold;
    line-height: 48rpx;
    margin: 20rpx 0;
}
.multiport_list {
    width: 100%;
    overflow: hidden;
    padding-bottom: 40rpx;
}
.multiport_list .multiport_item {
    float: left;
    width: 33.33%;
    text-align: center;
    padding: 20rpx 0;
}
.multiport_item .multiport_ico {
    display: block;
    width: 100rpx;
    height: 100rpx;
    margin: 0 auto 6rpx;
}
.multiport_item text {
    font-size: 28rpx;
    color: #333;
}

.act-cont {
    padding: 40rpx;
    margin-bottom: 20rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.act-cont-item {
    width: 280rpx;
    height: 280rpx;
    border: 1px solid #DFDFDF;
    padding: 170rpx 14rpx 0;
    position: relative;
    margin-bottom: 20rpx;
    box-sizing: border-box;
}
.act-cont-item .act-cont-pic {
    position: absolute;
    top: 44rpx;
    left: 50%;
    margin-left: -50rpx;
    width: 100rpx;
}
.act-cont-item .act-cont-pic image {
    display: block;
    width: 100%;
}
.act-cont-tit {
    font-size: 28rpx;
    line-height: 38rpx;
    text-align: center;
    color:#333;
    font-weight: bold;
}
.act-cont-des {
    font-size: 24rpx;
    line-height: 38rpx;
    text-align: center;
    color:#333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
