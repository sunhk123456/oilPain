<template>
    <div>
        <div v-if="user" style="padding-bottom: 2rem">
        <div class="avatar" >
            <div class="avatar-img" style="overflow: hidden">
                <img alt="" :src="imgurl">
            </div>
            <span class="miss-jia ">{{user.nickname}}</span>
        </div>

        <div class="vip">
            <div class="vip-left">
                <img src="../../assets/person-canter/V.png" alt="">
                <span class="vip-center">会员中心</span>
            </div>
            <span class="xiaozhu">五品小主 ></span>
        </div>

        <div class="my-orders">
            <div class="orders-top">
                <span>我的订单</span>
                <span><router-link :to="{name:'Vieworder'}">查看全部订单></router-link></span>
            </div>
            <div class="orders-bottom">
                <div class="orders-bottom-items">
                    <img src="../../assets/person-canter/组11.png" alt="">
                    <span>已完成</span>
                </div>
                <div class="orders-bottom-items">
                    <img src="../../assets/person-canter/组12.png" alt="">
                    <span>待付款</span>
                </div>
                <div class="orders-bottom-items">
                    <img src="../../assets/person-canter/组13.png" alt="">
                    <span>待入住</span>
                </div>
                <div class="orders-bottom-items">
                    <img src="../../assets/person-canter/组14.png" alt="">
                    <span>退款</span>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div class="bottom-items">
                <div class="bottom-items-left">
                    <div class="bottom-redlight-aside circle-bian">
                        <div class="bottom-redlight-inner"></div>
                    </div>
                    <span>红包</span>
                </div>
                <span class="bottom-items-righttext">></span>
            </div>
            <div class="bottom-items">
                <div class="bottom-items-left">
                    <div class="bottom-redlight-aside">
                        <div class="bottom-redlight-inner"></div>
                    </div>
                    <span>红包</span>
                </div>
                <span class="bottom-items-righttext">></span>
            </div>
            <div class="bottom-items">
                <div class="bottom-items-left">
                    <div class="bottom-redlight-aside">
                        <div class="bottom-redlight-inner"></div>
                    </div>
                    <span>红包</span>
                </div>
                <span class="bottom-items-righttext">></span>
            </div>
            <div class="bottom-items">
                <div class="bottom-items-left">
                    <div class="bottom-redlight-aside">
                        <div class="bottom-redlight-inner"></div>
                    </div>
                    <span>红包</span>
                </div>
                <span class="bottom-items-righttext">></span>
            </div>
            <router-link :to="{name:'Collection',query:{collection:user.collection}}" tag="div" class="bottom-items">
                <div class="bottom-items-left">
                    <div class="bottom-redlight-aside">
                        <div class="bottom-redlight-inner"></div>
                    </div>

                    <span>收藏</span>
                </div>
                <span class="bottom-items-righttext">></span>
            </router-link>
        </div>

        </div>
        <tabbar2 :index="4"></tabbar2>
    </div>

</template>

<script>
    import {apiPerson} from "../../http/api";
    import {IMGURL} from "../../lib/base";
    import {Toast} from 'vant';
    import tabbar2 from "@/components/tabbar2"
    export default {
        name: "My",
        data() {
            return {
                imgurl: null,
                user: null,
            }
        },
        components: {
            tabbar2
        },
        methods: {
            initPerson() {
                apiPerson().then(res => {
                    if (res.data) {
                        this.user = res.data;
                        this.imgurl = IMGURL + res.data.avatar;
                    } else {
                        Toast.fail(res.msg);
                    }

                }).catch(() => {

                })
            }
        },
        mounted() {
            this.initPerson();
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/myz.css";
    @import "~u-reset.css";

</style>