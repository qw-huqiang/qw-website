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

</style>

