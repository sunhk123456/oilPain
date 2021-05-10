<template>
    <div>
        <div class="header" style="position: relative;">
            <div style="height: 4.8rem;overflow: hidden">
                <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <swipe-item>
                        <img src="@/assets/firstpage/banner1.jpg" alt="" style="width: 100%">
                    </swipe-item>
                    <swipe-item>
                        <img src="@/assets/firstpage/banner2.jpg" alt="" style="width: 100%">
                    </swipe-item>
                </swipe>

            </div>
            <div class="header-biao" style="position: absolute;top: 0.51rem;">
                <img src="../../img/header/header-img3.png" alt="" class="header-img3" @click="$router.back(-1)" >
                <img src="../../img/header/header-img5.png" alt="" class="header-img5">
                <img src="../../img/header/header-img4.png" alt="" class="header-img4">
            </div>
        </div>
        <div class="banner1" v-if="this.stayhome">
            <div class="banner1-container">
                <span class="hidden1" style="display: block;width: 5.5rem;">{{this.stayhome.sname}}</span>
                <h2 v-if="banduanstart(this.stayhome.sid)">start</h2>
                <div class="banner1-ju1">
                    <div class="baner1-ju1-1">
                        <p class="baner1-ju1-1-title">超赞</p>
                    </div>
                    <div class="banner1-ju1-span">
                        <span class="spans">{{this.stayhome.score}}</span>
                    </div>
                    <div class="banner1-ju1-circle" style="margin-top:0.2rem;margin-left: calc(50% - 0.1rem)">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="banner1-tupan">
                    <img src="@/img/banner1/banner1-img.png" alt=""
                         style="float: left;width:1.29rem;margin-top: 0.34rem">
                    <img src="@/img/banner1/banner1-img2.png" alt=""
                         style="float: left;width:0.99rem;margin-top: 0.34rem;margin-left: 0.4rem">
                </div>
                <div class="banner1-xiushi">
                    <img src="@/img/banner1-xiao-1.png" alt="" style="width: 0.21rem">
                    <span class="banner1-xiushi-span" style="">整套酒店式公寓</span>
                    <img src="@/img/banner1-xiao-2.png" alt="" style="width: 0.21rem;margin-left: 0.5rem">
                    <span class="banner1-xiushi-span" style="">一室一厅</span>
                    <img src="@/img/banner1-xiao-3.png" alt="" style="width: 0.21rem;margin-left: 0.5rem">
                    <span class="banner1-xiushi-span" style="">一厨一卫</span>

                    <br>
                    <img src="@/img/banner1-xiao-4.png" alt="" style="width: 0.21rem;margin-top: 0.4rem; ">
                    <span class="banner1-xiushi-span" style="">配备齐全</span>
                    <img src="@/img/banner1-xiao-5.png" alt="" style="width: 0.21rem;margin-left: 1.16rem">
                    <span class="banner1-xiushi-span" style="">配备齐全</span>
                </div>
                <div class="banner1-ju2"
                     style="">
                    <div class="banner1-ju2-box" style="">
                        <span style="font-size: 0.2rem;color: rgba(0,0,0,0.6);float: left;width: 100%;">入住</span>
                        <br>
                        <span style="font-size: 0.36rem; color: rgb(0,0,0);position: absolute;bottom: 0;left: 0">5.17</span>
                        <span style="font-size: 0.24rem; color: rgb(248,96,106);float: left; position: absolute;bottom:0;margin-left: 0.25rem;left: 0.76rem">Sun</span>
                    </div>
                    <div class="banner1-ju2-box" style="width: 33%;height: 100%;position:relative;float: left;">
                        <span style="font-size: 0.26rem;letter-spacing: 0.01rem; color: rgb(0,0,0);float: left;margin-top: 0.36rem;text-align: center;position: relative;left:0;margin-left: 0.15rem">共两晚</span>
                        <img src="@/img/banner1-ruzhu-1.png" alt=""
                             style="width:1.12rem;position: absolute;bottom: 0;left: 0;">
                    </div>
                    <div class="banner1-ju2-box" style="width: 33%;height: 100%;position:relative;float: left">
                        <span style="font-size: 0.2rem;letter-spacing: 0.01rem; color: rgba(0,0,0,0.6);float: left;width: 100%;">离店</span>
                        <br>
                        <span style="font-size: 0.36rem;letter-spacing: 0.01rem; color: rgb(0,0,0);position: absolute;bottom: 0;left: 0;">5.19</span>
                        <span style="font-size: 0.24rem;letter-spacing: 0.01rem; color: rgb(0,0,0);float: left; position: absolute;bottom:0;margin-left: 0.25rem;left: 0.76rem">Thur</span>
                        <img src="@/img/you.png" alt=""
                             style="width: 0.12rem;position: absolute;right: 0;top: 50%;transform: translateY(-50%);right: -5%">
                    </div>
                </div>
            </div>
        </div>
        <div class="banner2"
             style="">
            <div class="banner2-youhui" style="width: 100%;position:relative;">
                <div>
                    <img src="@/img/banner2-img.png" alt="" style="width: 0.39rem;">
                    <span style="margin-left: 0.26rem;font-size: 0.26rem;letter-spacing: 0.01rem;position: relative;top: -0.05rem;">新手立减 · 今日特价  · 连住优惠</span>
                    <img src="@/img/you.png" alt=""
                         style="width: 0.12rem;position: absolute;right: 0;margin-top: 0.05rem">
                </div>
                <div style="margin-top: 0.36rem">
                    <img src="@/img/banner2-img2.png" alt="" style="width: 0.32rem;float: left">
                    <div class="banner2-youhui-img" style=" ">
                        <span style="">九折优惠</span>
                    </div>
                    <div class="banner2-youhui-img" style="margin-left: 0.42rem;">
                        <span style="">满100减5</span>
                    </div>
                    <span style="float: right;margin-right: 0.2rem;font-size: 0.2rem;line-height:0.39rem;color: rgb(235,102,107);">去领取</span>
                    <img src="@/img/you2.png" alt=""
                         style="width: 0.12rem;position: absolute;right: 0;margin-top: 0.05rem;">
                </div>
            </div>
            <div class="banner2-nav" style="">
                <router-link to="#"
                             style="width:25%;float: left;text-align: center;display: block;text-decoration: none;position: relative">
                    <div class="back"
                         style="    border: 0.02rem solid rgb(235,102,107);background-color:rgb(235,102,107);    box-shadow: 0 0.12rem 0.1rem rgba(219,110,111,0.5);">
                        <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);text-align: center;">
                            <div class="circle"
                                 style=" background-color: white;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);margin-left: -0.35rem"></div>
                            <div style="width: 0.7rem;height:0.2rem;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);margin-top: -0.1rem">
                                <span style="font-size: 0.26rem;color: rgb(255,255,255);">详情</span>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="#"
                             style="width:25%;float: left;text-align: center;display: block;text-decoration: none;position: relative">
                    <div class="back">
                        <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);text-align: center;">
                            <div style="width: 0.7rem;height:0.2rem;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);margin-top: -0.1rem">
                                <span style="font-size: 0.26rem;color: rgb(0,0,0);">评价</span>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="#"
                             style="width:25%;float: left;text-align: center;display: block;text-decoration: none;position: relative">
                    <div class="back">
                        <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);text-align: center;">
                            <div style="width: 0.7rem;height:0.2rem;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);margin-top: -0.1rem">
                                <span style="font-size: 0.26rem;color: rgb(0,0,0);">须知</span>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="#"
                             style="width:25%;float: left;text-align: center;display: block;text-decoration: none;position: relative">
                    <div class="back">
                        <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);text-align: center;">
                            <div style="width: 0.7rem;height:0.2rem;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);margin-top: -0.1rem">
                                <span style="font-size: 0.26rem;color: rgb(0,0,0);">推荐</span>
                            </div>
                        </div>
                    </div>
                </router-link>

            </div>
            <div class="banner2-msg" style="" v-if="this.stayhome">
                <span class="hidden1"
                      style="display: block;width: 5.5rem;overflow: hidden"> {{this.stayhome.sdesc}}</span>
                <p style="" class="hidden3">

                    房间特点：高层看海景离海近，看最美日落，一首歌的距离就能抵达三亚湾椰梦长廊，也是三亚看日落的最佳地点， 晚上漫步海边，吹吹海风，昂望星空11111111111111111111111111111111111111111111111111111111111
                </p>
                <a href="#"
                   style="">查看更多</a>


            </div>
        </div>
        <div class="banner3"
             style="">
            <div class="banner3-box" style="">
                <div class="banner3-msg1-title">
                    <span style="color: rgba(0,0,0,0.9)">房屋</span> <span
                        style="color: rgb(220,110,111)">亮点</span>
                </div>
                <div class="banner3-msg">
                    <div class="banner3-msg1-box1"
                         style="">
                        <div>
                            <img src="@/img/banner3-img.png" alt="" style="width: 1.1rem;transform: translateX(-50%)">
                        </div>
                        <p style="display:block;font-size: 0.26rem;transform: translateX(-50%);position: absolute;width: 1.8rem;color: #000">
                            洗漱用品齐全</p>

                        <div>
                    <span style="display:block;font-size: 0.20rem;line-height:0.28rem;position: relative;top: 0.2rem;transform: translateX(-50%);width: 2.5rem;margin-top: 0.2rem;text-align: center;color: rgba(0,0,0,0.4);">
                        提供牙刷、毛巾、卫生纸香皂等
                    </span>
                        </div>
                    </div>
                    <div class="banner3-msg1-box1"
                         style="">
                        <div>
                            <img src="@/img/banner3-img2.png" alt="" style="width: 1.1rem;transform: translateX(-50%)">
                        </div>
                        <p style="display:block;font-size: 0.26rem;transform: translateX(-50%);position: absolute;width: 1.2rem;color: #000">
                            住客好评</p>

                        <div>
                    <span style="display:block;font-size: 0.20rem;line-height:0.28rem;position: relative;top: 0.2rem;transform: translateX(-50%);width: 2.5rem;margin-top: 0.2rem;text-align: center;color: rgba(0,0,0,0.4);">
                        干净整洁
                    </span>
                        </div>
                    </div>
                    <div class="banner3-msg1-box1"
                         style="">
                        <div>
                            <img src="@/img/banner3-img3.png" alt="" style="width: 1.1rem;transform: translateX(-50%)">
                        </div>
                        <p style="display:block;transform: translateX(-50%);position: absolute;width: 1.4rem;color: #000">
                            附近有景点</p>

                        <div>
                    <span style="display:block;font-size: 0.20rem;line-height:0.28rem;position: relative;top: 0.2rem;transform: translateX(-50%);width: 2.5rem;margin-top: 0.2rem;text-align: center;color: rgba(0,0,0,0.4);">
                        近解放路步行街等10个景点
                    </span>
                        </div>
                    </div>
                </div>
            </div>
            <div style=" content:'.';
            display:block;
            height:0;
            clear:both;
            visibility:hidden;"></div>
            <div class="banner3-msg1" style="margin-top: 0.6rem">
                <div class="banner3-msg1-title">
                    <span style="font-size: 0.36rem;color: rgba(0,0,0,0.9)">房东</span><span
                        style="font-size: 0.36rem;color: rgb(220,110,111)">介绍</span>
                </div>

                <div class="banner3-box1"
                     style="">
                    <div class="banner3-box-toux"
                         style="">
                        <img src="@/img/banner3-box1.png" alt="" style="width: 0.87rem;">
                    </div>
                    <div><h1>七色可乐</h1></div>
                    <ul>
                        <li>个人房东</li>
                        <li>超赞房东</li>
                        <li>实名认证</li>
                    </ul>
                    <div class="banner3-box1-detail"><span class="banner3-box1-span">好评率</span><span
                            class="banner3-box1-span2">91%</span><span class="banner3-box1-span"
                                                                       style="margin-left: 0.32rem">好评率</span><span
                            class="banner3-box1-span2" style="border-right:0">91%</span></div>
                    <div class="van-clearfix"></div>
                    <div><p class="banner3-box1-p hidden2">
                        它安静于此，等待与你擦肩。很高兴在这里遇见 未来的每一个租客，本人一直从事互联网服务111111111111111111
                    </p></div>
                    <div class="banner3-box1-box"><a href="javascript:;" class="banner3-box1-a">查看房东主页</a></div>

                </div>
                <div style="clear:both;"></div>
            </div>
        </div>
        <div style="clear:both;"></div>
        <div class="banner4">
            <div class="index-content" v-if="recommend" style="padding-bottom: 2rem">
                <div v-for=" item in recommend" :key="item.sid" class="content-wrapp">
                    <router-link tag="div" :to="{path:'details',query:{sid:item.sid}}">
                        <div class="content-img"><img :src="item.sthumb" alt=""></div>
                        <div class="content-name  hidden1" >
                            <span >{{item.sname}}</span>
                        </div>
                        <div class="content-area" style="font-size:0.12rem;opacity:0.6">
                            <span>{{item.scity}}·{{item.sarea}}</span></div>
                       <div><rate  v-model="item.score"></rate></div>
                        <div class="content-user">
                            <div class="user-head"><span>RMB </span><span style="fontSize:0.32rem;">{{item.sprice}} </span><span style="color: #000;"> 每晚</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
        <goods-action>
            <goods-action-icon icon="chat-o" text="客服"/>

            <goods-action-icon icon="star" :class="{active:iscollection()}" text="收藏" @click="clickcollection"/>
            <goods-action-button
                    type="danger"
                    text="立即预约"
                    @click="handleOrders"
            />
        </goods-action>
    </div>
</template>

<script>
    import {Rate,Toast} from 'vant';
    import "u-reset.css"
    import {Swipe, SwipeItem} from 'vant';
    import "vant/lib/swipe/style"
    import "vant/lib/swipe-item/style"
    import {IMGURL} from "../../lib/base";
    import {apiRead, apiCollection} from "@/http/api"
    import {GoodsAction, GoodsActionIcon, GoodsActionButton} from 'vant';
    import 'vant/lib/goods-action/style'
    import 'vant/lib/goods-action-icon/style'
    import 'vant/lib/goods-action-button/style'


    export default {
        name: "Details",
        data() {
            return {
                sid: 0,
                stayhome: null,
                recommend: null,
            };
        },
        components: {
            Swipe, SwipeItem, Rate, GoodsAction, GoodsActionIcon, GoodsActionButton,
        },
        methods: {
            initstaydetail() {
                apiRead(this.sid).then(res => {
                    // console.log(res);
                    let stayhome = res.data.stayhome;
                    let sbanner = stayhome.sbanner.split(/,/);
                    sbanner = sbanner.map(ele => {
                        ele = IMGURL + ele;
                        return ele;
                    })
                    stayhome.sbanner = sbanner;
                    this.stayhome = stayhome;
                    let recommend = res.data.recommend;
                    recommend.map(ele => {
                        ele.sthumb = IMGURL + ele.sthumb;
                    });
                    this.recommend = recommend;
                }).catch(() => {
                })
            },
            banduanstart(id) {
                if (this.$store.getters.collection(id)) {
                    return true;
                } else
                    return;
            },
            iscollection() {
                let id = this.$route.query.sid;
                return this.$store.getters.collection(id);

            },
            clickcollection() {
                //后台发送请求
               this.$store.commit('changecollection',this.sid);
               let collection =this.$store.state.collection.join(',');
                apiCollection(collection).then(res => {
                    // console.log(res);
                    res
                }).catch(() => {
                })
            },
            handleOrders() {
                let token=this.$store.state.token;
                let sid =this.$route.query.sid;
                console.log(sid);
                let query={
                    redirect:'Details',
                    sid:sid
                };
                if (!token){
                    Toast("请登录");
                    this.$router.push({name:'Login',query:query});
                }else {

                    let {sid,sprice,sthumb,sname,sdesc}=this.stayhome;
                    let query={
                        sid,sprice,sthumb,sname,sdesc
                    }
                    this.$router.push({name:'Orders',query:query});
                }

            }
        },

        mounted() {
            this.sid = this.$route.query.sid;
            this.initstaydetail();
        },
        watch: {
            $route(newL) {
                this.sid = newL.query.sid;
                this.initstaydetail();

            }
        }

    }
</script>
<style scoped>
    @import "../../style/details.css";
</style>


<style>
    .van-swipe__indicators {
        bottom: 2.5rem;

    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
</style>



