<template>
    <view class="home">
        <topnav :srcollchange="srcollpage"></topnav>
        <banner :banner="result.banner"></banner>
        <view>
            <view class="content mt_20">
                <!-- 产品特点 -->
                <title-h :tit="result.productTrait.title" :txt="result.productTrait.des" ></title-h>
                <icon-card :list="result.productTrait.list"></icon-card>
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
                <!-- 结构示意图 -->
                <view v-if="result.picfllow">
                    <pic-fllow :flwobj="result.picfllow"></pic-fllow>
                </view>
                <!-- 结构示意图 end-->

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

                
            </view>
            <!-- 多端应用 -->
            <view v-if="result.multiport">
                <title-h :tit="result.multiport.title" :txt="result.multiport.des" ></title-h>
                <view class="box multiport_app">
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
            default:
                barTitle = ''
                break;
        }
        uni.setNavigationBarTitle({
            title: barTitle
        });
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
</style>
