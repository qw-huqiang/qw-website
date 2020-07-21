<template>
    <view>
        <view class="bottom_content">
            <view class="qw-content">
                <view class="content-text">
                    全网数商拥有15年、百余家大型企业数字化转型经验，可为您量身打造解决方案
                </view>
                <view @click="showModel">
                    <view class="get-print">索取量身打造解决方案</view>
                </view>
            </view>
        </view>
        <view class="footerbtm">
            <view class="foot-items">
                <view class="foot-item" v-for="(item,index) in list" :key="index">
                    <view class="foot-item-coll" @click="collagePan(index)">
                        <view class="foot-item-tit">{{item.title}}</view>
                        <view class="foot-item-icon" :class="item.active?'active':''"></view>
                    </view>
                    <view class="collage-warper" v-bind:style="{maxHeight: item.activeHeight}">
                        <view class="collage-items">
                            <block v-for="(val,i) in item.list" :key="i">
                                <navigator open-type="redirect" :url="val.link">
                                    <view class="foot-item-li" >{{val.name}}</view>
                                </navigator>
                            </block>
                        </view>
                    </view>
                </view>
            </view>
            <view class="foot-servie">
                <view class="foot-servie-num">服务热线 400-6060-980</view>
                <view class="foot-servie-num">关注微信订阅号</view>
                <image lazy-load src="/static/index/erwm.png" @click="preimg"></image>
            </view>
            <view class="foot-beian">Copyright © 2010-2017 全网数商 保留公司所有权利   北京市公安局海淀分局备案编号11010802016028 京ICP备11047843号 Copyright2005-2015</view>
        </view>
        <popu :modalstate="modalstate" v-on:emitState="emitState"></popu>
    </view>
</template>
<script>
import popu from "@/components/popup"
export default {
    data() {
        return {
            modalstate: false,
            currentname: true,
            list: [
                {
                    title:'企业大中台',
                    active: false,
                    activeHeight:0,
					contentHeight: 0,
                    list:[
                        {
                            name: '业务中台',
                            link: '/pages/icommx/icommx?type=bp'
                        },
                        {
                            name: '数据中台',
                            link: '/pages/icommx/icommx?type=dp'
                        },
                        {
                            name: '技术中台',
                            link: '/pages/icommx/icommx?type=tp'
                        }
                    ]
                },
                {
                    title:'全渠道销售',
                    active: false,
                    activeHeight:0,
					contentHeight: 0,
                    list:[
                        {
                            name: '品牌零售系统',
                            link: '/pages/icommx/icommx?type=b2c'
                        },
                        {
                            name: '经销系统',
                            link: '/pages/icommx/icommx?type=b2b'
                        },
                        {
                            name: '线上线下平台',
                            link: '/pages/icommx/icommx?type=o2o'
                        },
                        {
                            name: '多商户零售平台',
                            link: '/pages/icommx/icommx?type=b2b2c'
                        },
                        {
                            name: '采购批发平台',
                            link: '/pages/icommx/icommx?type=b2p2b'
                        }
                    ]
                },
                {
                    title:'智能营销',
                    active: false,
                    activeHeight:0,
					contentHeight: 0,
                    list:[
                        {
                            name: '社群运营',
                            link: '/pages/icommx/icommx?type=scrm'
                        },
                        {
                            name: '会员运营',
                            link: '/pages/icommx/icommx?type=mem'
                        },
                        {
                            name: '营销工具',
                            link: '/pages/icommx/icommx?type=market'
                        }
                    ]
                },
                {
                    title:'解决方案',
                    active: false,
                    activeHeight:0,
					contentHeight: 0,
                    list:[
                        {
                            name:'制造',
                            link:"/pages/cases/cases?type=mfg"
                        },
                        {
                            name:'汽车',
                            link:"/pages/cases/cases?type=cart"
                        },
                        {
                            name:'流通',
                            detail:'',
                            link:"/pages/cases/cases?type=flw"
                        },
                        {
                            name:'快消',
                            link:"/pages/cases/cases?type=cons"
                        },
                        {
                            name:'餐饮',
                            link:"/pages/cases/cases?type=food"
                        },
                        {
                            name:'保险',
                            link:"/pages/cases/cases?type=safe"
                        },
                        {
                            name:'广电',
                            link:"/pages/cases/cases?type=tele"
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        showModel() {
            this.modalstate = true
        },
        emitState() {
            this.modalstate = false
        },
        collagePan(index){
            let _this = this;
            if(this.currentname) {
                this.getRect('.collage-items',true).then(function (res) {
                    res.forEach((ele,i) => {
                        _this.list[i].contentHeight = ele.height + 'px';
                    });
                    _this.list[index].activeHeight = _this.list[index].contentHeight
                });
            }
            
            this.currentname = false
            this.list[index].active = !this.list[index].active;
            this.list[index].activeHeight = this.list[index].active? this.list[index].contentHeight : 0;
            // #ifdef MP-ALIPAY
                // this.list[index].activeHeight = this.list[index].active? 'none' : 0
            // #endif
        },
        preimg () {
            uni.previewImage({
                current:'/static/index/erwm.png',
                urls:['/static/index/erwm.png']
            }) 
        },
        getRect(selector, all) {
            var _this2 = this;

            return new Promise(function (resolve) {
                uni.createSelectorQuery().in(_this2)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
                if (all && Array.isArray(rect) && rect.length) {
                    resolve(rect);
                }

                if (!all && rect) {
                    resolve(rect);
                }
                }).exec();
            });
        }
    },
    components: {
        popu
    }
}
</script>
<style scoped>
.bottom_content{
	width: 100%;
	height: 360rpx;
	background: url(../static/index/bottom-bg.png) center center no-repeat;
	background-size: 100% 100%;
} 
.bottom_content .qw-content{
	padding: 86rpx 45rpx 66rpx;
	text-align: center;
}
.bottom_content .qw-content .content-text{
	font-size: 32rpx;
	color: #F8F8F8;
	line-height: 44rpx;
}
.bottom_content .qw-content .get-print{
	width: 360rpx;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 28rpx;
	color: #fff;
	border: 2rpx solid #FFFFFF;
	margin: 40rpx auto 0;
}
.footerbtm {
    background-color: #252B39;
}
.foot-items {
    padding: 44rpx 46rpx;
}
.foot-item {
    line-height: 98rpx;
}
.foot-item-coll {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #979797;
}
.foot-item-tit {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
}
.foot-item-icon {
    width: 32rpx;
    height: 34rpx;
    background: url(../static/index/bottomre.png) no-repeat;
    background-size: 100% 100%;
    transition: transform 0.3s;
}
.foot-item-icon.active {
    transform: rotate(45deg)
}
.foot-item-li {
    font-size: 28rpx;
    color: #fff;
    margin-left: 40rpx;
    border-bottom: 1px solid #979797;
    padding-left: 20rpx;
}
.foot-item-li:last-of-type {
    margin-bottom: 30rpx;
}
.foot-servie {
    padding: 36rpx 0 92rpx;
    text-align: center;
    border-bottom: 1px solid #979797;
}
.foot-servie-num {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
    line-height: 44rpx;
    margin-bottom: 10rpx;
}
.foot-servie image {
    width: 164rpx;
    height: 164rpx;
    margin: 10rpx auto 0;
}
.foot-beian {
    padding: 40rpx 46rpx;
    font-size: 24rpx;
   line-height: 34rpx;
    color: #999;
    text-align: center
}
.collage-warper {
    overflow: hidden;
	will-change:max-height;
	transition:max-height .3s ease-in-out;
}
</style>
