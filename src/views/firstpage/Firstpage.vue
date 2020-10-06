<template>
    <div>
        <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
            <van-swipe-item><img alt="" src="../../assets/firstpage/banner7.png"></van-swipe-item>
            <van-swipe-item><img alt="" src="../../assets/firstpage/banner1.jpg"></van-swipe-item>
            <van-swipe-item><img alt="" src="../../assets/firstpage/banner2.jpg"></van-swipe-item>
            <van-swipe-item><img alt="" src="../../assets/firstpage/banner4.jpg"></van-swipe-item>
            <van-swipe-item><img alt="" src="../../assets/firstpage/banner5.jpg"></van-swipe-item>
            <van-swipe-item><img alt="" src="../../assets/firstpage/banner6.jpg"></van-swipe-item>
        </van-swipe>
        <div class="city">
            <div class="city-inner">
                <div class="city-choose">
                    <div class="city-choose-left">
                        <p>
                            <router-link to="/province" class="choose-city">{{indexSearch.province}}</router-link>
                        </p>
                        <p>></p>
                    </div>
                    <div>
                        <input type="text" placeholder="景点 地址 关键词">
                    </div>
                    <div class="city-choose-right">
                        <img src="../../assets/firstpage/position.png" alt="">
                        <p>定位</p>
                    </div>
                </div>
                <router-link to="/calendar">
                    <div class="city-time">
                        <div class="city-time-left">
                            <p>4.19</p>
                            <p>sun</p>
                            <img src="../../assets/firstpage/箭头.png" alt="">
                            <p class="p-thirdChild">4.20</p>
                            <p class="p-fourthChild">mon</p>
                        </div>
                        <div class="city-time-right">
                            <p>共一晚</p>
                        </div>

                    </div>
                </router-link>
                <div class="search">
                    <b>立即查找</b>
                </div>
                <div class="city-bottom">
                    <div class="city-bottom-item">
                        <img src="../../assets/firstpage/文件.png" alt="">
                        <span>信用免押金</span>
                    </div>
                    <div class="city-bottom-item">
                        <img src="../../assets/firstpage/耳机.png" alt="">
                        <span>24小时客服</span>
                    </div>
                    <div class="city-bottom-item">
                        <img src="../../assets/firstpage/盾牌.png" alt="">
                        <span>房源房东真实认证</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearPosi"></div>

        <div class="PRO" v-if="info.length">
            <div class="proPNG"><img src="../../assets/firstpage/best-pro.png" alt=""></div>
            <div class="pro-desc"><span>每一套都是性价比优质房源</span></div>
            <van-swipe :autoplay="3000" class="my-swipe pro-banner" indicator-color="red">
                <router-link to="/" v-for="item of info" :key="item.sid">
                    <van-swipe-item style="backgroundColor: transparent;"><img alt="" :src="IMGURL+item.sthumb ">
                    </van-swipe-item>
                    <div class="pro-banner-name ">{{item.sname}}</div>
                    <div class="pro-banner-score">
                        <van-rate :value="item.score" color="#ffd21e"
                                  void-icon="star"
                                  void-color="#eee" size="0.25rem"/>
                    </div>
                    <div class="pro-banner-area">{{item.scity}}~{{item.sarea}} <span>RMB</span>
                        <span>{{item.sprice}}</span></div>

                </router-link>
            </van-swipe>
        </div>

        <div class="index-content" v-if="info" style="padding-bottom: 2rem">
            <div v-for=" item in info" :key="item.sid" class="content-wrapp">
                <router-link :to="{path:'details',query:{sid:item.sid}}">
                <div class="content-img"><img :src="IMGURL+item.sthumb" alt=""></div>
                <div class="content-name  hidden4" style="margin-top:0.2rem;width: 3rem;"><span>{{item.sname}}</span>
                </div>
                <div class="content-area" style="font-size:0.12rem;opacity:0.6">
                    <span>{{item.scity}}~{{item.sarea}}</span></div>
                <div class="content-comment"><span><van-rate :value="item.score" color="#ffd21e"
                                                             void-icon="star"
                                                             void-color="#eee" size="0.25rem"/></span></div>
                <div class="content-user">
                    <div class="user-head"><span style="color:red">RMB </span><span style="fontSize:0.5rem;">{{item.sprice}} </span><span> 每晚</span>
                    </div>


                </div>
                </router-link>
            </div>

        </div>
        <!--  <tabbar :index="1"></tabbar>-->
        <tabbar2 :index="1"></tabbar2>
    </div>
</template>

<script>
    import "u-reset.css";
    import instance from "../../http/http"
    import {Swipe, SwipeItem} from 'vant';
    import {IMGURL} from "@/lib/base.js";
    import {Rate} from 'vant';
    import {stayhomeRead} from "../../http/stayhome"
    // import  tabbar from '@/components/tabbar/tabbar'
    import tabbar2 from '@/components/tabbar2'

    export default {
        name: "Firstpage",
        data() {
            return {
                info: [],
                total: 0,
                IMGURL,
                banner: [],
            }
        },
        methods: {
            init() {
                instance.get("/api/stayhome").then(res => {

                    this.info = res.data;
                    //console.log(this.info)

                }).catch(error => {
                    alert(error);
                })
            },
            initAll() {
                stayhomeRead().then(res => {
                    console.log(res)
                    this.banner = res.data.banner;
                }).catch(error => {
                    console.log(error)
                })
            },
            changeIndex() {
                console.log("@22");
            }
        },

        components: {
            "van-swipe": Swipe,
            "van-swipe-item": SwipeItem,
            "van-rate": Rate,
            // tabbar,
            tabbar2
        },
        computed: {
            indexSearch() {
                return this.$store.state.indexSearch;
            }
        },
        mounted() {
            this.init();
            this.initAll()
        }

    }
</script>

<style scoped>
    @import "../../style/css/rem.css";
    @import "../../style/firstpage.css";
    /*@import "http://at.alicdn.com/t/font_2113910_mwxt4s52y0d.css";*/

    .my-swipe {
        height: 5.79rem;
        position: relative;
    }

    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
        height: 100%;
        /*float: left;*/
        /*  position: relative; */


    }

</style>
