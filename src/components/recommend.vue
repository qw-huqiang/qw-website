<template>
    <view class="recd">
        <view class="content">
        <title-h :tit="tit" :txt="txt"></title-h>
        </view>
        <scroll-view class="scroll-view_H" scroll-x="true">
            <view class="no-warp">
                <view class="recommed-main box" v-for="(item,index) in relist" :key="index">
                    <view class="recommed-logo">
                        <image :src="item.pic" ></image>
                    </view>
                    <view class="recommed-txt">
                        {{item.des}}
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>
<script>
export default {
    props: {
        relist: {
            type: Array,
            default: function () {
                return this.list
            }
        },
        tit: {
            type: String,
            default: '实践案例'
        },
        txt: {
            type: String,
            default: '企业数字化转型不仅仅是靠软件产品、靠技术就可以解决的，还需要一个有多年服务经验的技术服务商'
        }
    },
    data() {
        return {
            list: [
                {'pic':'http://www.qwang.com.cn/img/bestpractices/logo/qw_1.png','des':'TCL集团是全球领先的智慧科技集团。全网数商帮助TCL集团打造TCL业务中台、官方商城、B2B平台、O2O平台、海外电商平台、大会员系统等多项业务平台，助力TCL集团实现“双+”转型和全球化的双轮驱动发展战略。'},
                {'pic':'http://www.qwang.com.cn/img/bestpractices/logo/qw_4.png','des':'九牧集团是全球领先的高端卫浴品牌企业。全网数商帮助九牧集团打造九牧官方商城、九牧官网、小牧官网等多个系统，助力九牧厨卫升级中国智能制造，成就全球泛家居引领者。'},
                {'pic':'http://www.qwang.com.cn/img/bestpractices/logo/qw_24.png','des':'张裕集团是亚洲最大的葡萄酒生产经营企业。全网数商帮助张裕集团打造官网商城，聚焦高品质、聚焦中高端、聚焦大单品，助力张裕集团打造更多消费者认可的国际品牌。'},
                {'pic':'http://www.qwang.com.cn/img/bestpractices/logo/qw_7.png','des':'得力集团是中国最大的办公与学习用品产业集团。全网数商帮助得力集团打造集什平台，旨在全方位满足政企用户一站式采购需求，为政企提供平台开发、产品供应、电商运营、物流配送及售后服务整体解决方案。'},
                {'pic':'http://www.qwang.com.cn/img/bestpractices/logo/qw_8.png','des':'浙江宏伟供应链集团服务于核电、新能源和高端装备制造业的供应链综合服务商。全网数商帮助宏伟集团倾力打造宏伟天马-工业品一站式在线采购服务平台，赋能上下游企业，推动企业现代供应链体系转型升级，成就工业互联网生态平台。'},
                {'pic':'http://www.qwang.com.cn/img/bestpractices/logo/qw_13.png','des':'长城汽车是中国规模最大的集体所有制汽车制造企业。全网数商帮助长城汽车打造哈弗官方商城、欧拉官方商城、长城汽车智慧云店系统、长城二手车拍卖平台，助力长城汽车落实“客户满意”和“市场领先”的营销战略。'},
                {'pic':'http://www.qwang.com.cn/img/bestpractices/logo/qw_19.png','des':'海底捞是中国最大的餐饮企业。全网数商帮助海底捞打造海底捞会员商城，同时在海底捞APP、微信小程序、微信公众号、支付宝生活号以及近600余家门店的PAD点餐系统中运营，助力海底捞打造全球年轻人都喜爱能够参与的餐桌社交文化。'},
                {'pic':'http://www.qwang.com.cn/img/bestpractices/logo/qw_31.png','des':'明亚保险是中国领先的保险经纪公司。全网数商帮助明亚保险打造700度保险网网销系统、业务核心系统，助力700度打造成为集合保险购买、理赔指导、线下咨询、金融理财、健康管理集一身的综合服务平台。'},
                {'pic':'http://www.qwang.com.cn/img/bestpractices/logo/qw_25.png','des':'歌华文化发展集团负责北京市有线广电业务。全网数商帮助歌华有线打造有线网厅、电视营业厅、手机营业厅、歌华影院、社区服务等多项业务平台，助力歌华打造大型国有平台型文化产业集团，成为立足首都、面向全国、走向世界的一流文化服务供应商。'}
            ],
        }
    } 
}
</script>
<style scoped>
.recommed-main {
    display: inline-block;
    width: 660rpx;
    padding: 40rpx;
    margin-bottom: 70rpx;
    margin-right: 14rpx;
}
.recommed-logo {
    padding: 0rpx 0 28rpx;
    border-bottom: 1px solid #979797;
}
.recommed-logo image {
    display: block;
    width: 465rpx;
    height: 180rpx;
    margin: 0 auto;
}
.recommed-txt {
    padding: 40rpx 0 0rpx;
    font-size: 24rpx;
    color: #6E6E6E;
    line-height: 48rpx;
    white-space: normal;
    height: 232rpx;
    margin-bottom: 20rpx;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; 
    text-overflow: ellipsis; 
}
.no-warp {
    font-size: 0;
    white-space: nowrap;
    margin-left: 44rpx;
}

.recd /deep/ .uni-scroll-view::-webkit-scrollbar {
    display: none;
}
</style>
