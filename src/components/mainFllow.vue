<template>
    <view>
        <title-h :tit="flwobj.title" :txt="flwobj.des"></title-h>
        <view class="box">
            <view class="com-flow">
                <image lazy-load :src="flwobj.pic" mode="widthFix"></image>
            </view>
            <view class="role_description"><text>角色说明</text></view>
            <view class="pro-items">
                <view class="pro-item" v-for="(item,index) in flwobj.list" :key="index" :class="flwobj.list.length == 3 && index == 2 ?'th3-item':''">
                    <image mode="widthFix" :src="item.pic"></image>
                    <view class="pro-item-tit">{{item.title}}</view>
                    <view class="pro-item-des">{{item.des}}</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
// 标题组件
import titleH from '@/components/title'
export default {
    props: {
        flwobj: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
  components: {
      titleH
  }  
}
</script>
<style scoped>
.com-flow {
    padding: 52rpx 26rpx 56rpx;
    margin-bottom: 20rpx;
}
.com-flow > image {
    width: 100%;
}
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
.pro-item.th3-item {
    width: 100%;
    height:  auto;
    padding-bottom: 40rpx;
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
.role_description{
  width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.role_description::before{
  content: '';
  position: absolute;
  top: 60%;
  left: 40rpx;
  width: 32%;
  height: 1px;
  background: #979797;
  filter:alpha(opacity=30);
  -moz-opacity:0.3;
  -khtml-opacity:0.3;
  opacity: 0.3;
}
.role_description::after{
  content: '';
  position: absolute;
  right: 40rpx;
  top: 60%;
  width: 32%;
  height: 1px;
  background: #979797;
  filter:alpha(opacity=30);
  -moz-opacity:0.3;
  -khtml-opacity:0.3;
  opacity: 0.3;
}
.role_description text{
  color: #333;
  font-size: 28rpx;
  font-weight:bold;
  line-height: 42rpx;
}
</style>
