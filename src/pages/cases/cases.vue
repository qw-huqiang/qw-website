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
               
                <!-- 产品特点 -->
                <title-h :tit="result.productComm.title" :txt="result.productComm.des" ></title-h>
                <icon-card :list="result.productComm.list"></icon-card>
                <!-- 产品特点 end-->
                <recommend></recommend>
            </view>
        </view>
        <footernav></footernav>
    </view>
</template>
<script>
// 获取首页数据
import result1 from '@/viewData/caseCart';
import result2 from '@/viewData/caseCons';
import result3 from '@/viewData/caseFlw';
import result4 from '@/viewData/caseMfg';
// 产品特点
import iconCard from '@/components/iconCard';
// 业务说明 (图，文字上下结构)
import industry from '@/components/industry'
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
            case 'cart':
                this.result = result1
                break;
            case 'cons':
                this.result = result2
                break;
            case 'flw':
                this.result = result3
                break;
            case 'mfg':
                this.result = result4
                break;    
            default:
                this.result = result1
                break;
        }
        
    },
    onReady() {
        let barTitle='';
        switch (this.type) {
            case 'cart':
                barTitle = '汽车行业解决方案'
                break;
            case 'cons':
                barTitle = '快消业解决方案'
                break;
            case 'flw':
                barTitle = '流通行业解决方案'
                break;
            case 'mfg':
                barTitle = '制造业解决方案'
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
        industry
    }
}
</script>

