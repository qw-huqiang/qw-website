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

                <!-- 业务说明 -->
                <title-h :tit="result.solution.title" :txt="result.solution.des" ></title-h>
				<industry :list="result.solution.list" :txtlay="true"></industry>
                <!-- 业务说明 end-->

                <!-- 营销插件方案 -->
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
                <!-- 营销插件方案 end -->
            </view>
            <recommend></recommend>
        </view>
        <footernav></footernav>
    </view>
</template>
<script>
// 获取首页数据
import result from '@/viewData/activity';
// 产品特点
import iconCard from '@/components/iconCard';
// 业务说明 (图，文字上下结构)
import industry from '@/components/industry'
export default {
    data() {
        return {
            result: {},
            
        }
    },
    onLoad() {
        this.result = result
    },
    components: {
        iconCard,
        industry
    }
}
</script>
<style scoped>
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

