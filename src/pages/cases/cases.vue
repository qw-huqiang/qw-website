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
                
            </view>
            <recommend :tit="result.theDemo.title" :txt="result.theDemo.des" :relist="result.theDemo.list"></recommend>
        </view>
        <footernav></footernav>
    </view>
</template>
<script>
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
                this.result = require('@/viewData/caseCart')
                break;
            case 'cons':
                this.result = require('@/viewData/caseCons')
                break;
            case 'flw':
                this.result = require('@/viewData/caseFlw')
                break;
            case 'mfg':
                this.result = require('@/viewData/caseMfg')
                break; 
            case 'food':
                this.result = require('@/viewData/caseFood')
                break; 
            case 'safe':
                this.result = require('@/viewData/caseSafe')
                break;        
            default:
                this.result = require('@/viewData/caseCart')
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
            case 'food':
                barTitle = '餐饮解决方案'
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

