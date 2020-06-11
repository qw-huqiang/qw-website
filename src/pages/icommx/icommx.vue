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
               <view class="" v-if="result.productConstruct">
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
                <pic-fllow :flwobj="result.picfllow"></pic-fllow>
                <!-- 结构示意图 end-->

                <recommend></recommend>
            </view>
        </view>
        <footernav></footernav>
    </view>
</template>
<script>
// 获取首页数据
import result1 from '@/viewData/icommx-bp';
import result2 from '@/viewData/icommx-dp';
import result3 from '@/viewData/icommx-tp';
// 产品特点
import iconCard from '@/components/iconCard';
// 图解
import picFllow from '@/components/picFllow'
export default {
    data() {
        return {
            result: {},
            type:''
        }
    },
    onLoad(option) {
        this.type = option.type;
        switch (option.type) {
            case 'bp':
                this.result = result1
                break;
            case 'dp':
                this.result = result2
                break;
            case 'tp':
                this.result = result3
                break;
            default:
                this.result = result1
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
        picFllow
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
</style>
