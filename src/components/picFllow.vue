<template>
    <view>
        <title-h :tit="flwobj.title" :txt="flwobj.des"></title-h>
        <view class="com-flow box">
            <image :src="flwobj.pic" mode="widthFix"></image>
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
.com-flow image {
    width: 100%;
}
</style>
