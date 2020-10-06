<template>
    <div>
        <!--        ”我是demo“-->
        <!--        <van-swipe  :autoplay="3000"  :loop="true" :height="200">-->
        <!--            <van-swipe-item v-for="(image, index) in images" :key="index">-->
        <!--                <img v-lazy="image" />-->
        <!--            </van-swipe-item>-->
        <!--        </van-swipe>-->
        <!-- banner -->
        <div class="swiper-container">

            <div class="swiper-wrapper" style="width: 100%;height: 5rem;" >
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" style="width:100%;height: 5rem">
                    <van-swipe-item v-for="item in banner" :key="item.sid">
                        <img :src="item.sthumb" alt="" style="width: 100%;">
                    </van-swipe-item>

                </van-swipe>
            </div>
            <div class="search">
                <img src="@/style/imgs/搜索.png" alt="">
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>


            <div class="area">
                <div class="search-area">
                    <div class="search-area-left" style="height: 1.4rem;"><span style="color: #ed7a7e;line-height: 1.4rem">北京市^_^</span></div>
                    <div class="search-area-middle" style="height: 1.4rem;">
                        <input type="text" name="" id="" style="line-height: 1.4rem" placeholder="景点 地址 关键字">
                    </div>
                    <div class="search-area-right"><img src="@/style/imgs/position.png" alt=""></div>
                </div>

                <div class="time-area">
                    <div class="time-area time">
                        <div class="time-day"><span>4.19</span></div>
                        <div class="week-day"><span>SUN</span></div>
                        <div class="toright"><img src="@/style/imgs/箭头_切换向上.png" alt=""></div>
                        <div class="time-tomorrow"><span>4.20</span></div>
                        <div class="week-tomorrow"><span>MON</span></div>
                    </div>
                    <div class="time-area-day"><span>共一晚</span></div>
                </div>

                <div class="now-search"><button><span style="font-size: 0.2rem; letter-spacing: 0.02rem;">立即查找</span></button></div>

                <div class="trust" style="position: relative;top: 4.5rem">
                    <div class="moneybag"><img src="@/style/imgs/moneybag.jpg" alt=""><span>信用免押金</span></div>
                    <div class="music"><img src="@/style/imgs/music.jpg" alt=""><span>24小时客服</span></div>
                    <div class="protect"><img src="@/style/imgs/protect.jpg" alt=""><span>房源房东真实认证</span></div>
                </div>
            </div>
        </div>

        <!-- 优选PRO开始 -->
        <div class="introduce">
<!--            <div style=" margin-left: 40px;" v-for="item in category" :key="item.cid">-->
<!--                <span>{{item.cname.substring(0,2)}}</span>-->
<!--                <span style="color: red;">{{item.cname.substring(2,3)}}</span>-->
<!--                <span>{{item.cname.substring(3)}}</span>-->
<!--            </div>-->
            <div  style=" margin-left: 40px;" v-if="category">
                <span>{{category[0].cname.substring(0,2)}}</span>
                <span style="color: red;">{{category[0].cname.substring(2,3)}}</span>
                <span>{{category[0].cname.substring(3)}}</span>
                <div class="introduce-text">{{category[0].cdesc}}</div>
            </div>
            <div class="introduce-imgs" style="position: relative;"  v-if="category">
                <van-swipe  :autoplay="3000" indicator-color="white" style="width:100%;height: 5rem">
                    <van-swipe-item v-for="(item,index) in category[0].children[0].sbanner.split(/,/)" :key="index">
                        <img :src="IMGURL+item" alt="" >
                    </van-swipe-item>
                </van-swipe>
                <span style="position: absolute; left: 1rem;top: 0.4rem;">{{category[0].children[0].sname}}</span>
<!--                <span style="position: absolute; left: 1rem;top: 0.8rem;">{{category[0].children[0].sbanner}}</span>-->
                <span style="position: absolute; left: 1rem;top: 1.2rem;">{{category[0].children[0].stag.split(/,|，/)}}</span>
                <span style="position: absolute; left: 1rem;top: 1.6rem;">{{category[0].children[0].sprice}}</span>
            </div>

            <div class="introduce-imgs-button">
                ***
            </div>
        </div>
        <!-- 优选PRO结束-->
        <!-- 不得不睡开始 -->
        <div class="sleep">
            <div class="sleep-title"><img src="@/style/imgs/have-to-sleep.png" alt=""></div>
            <div class="introduce-text">每一套都是精品特色房源</div>
            <div class="swiper-container" style="height: 3.1rem;background-color: #42b983">
<!--                <div class="swiper-wrapper">-->
<!--                    <div class="swiper-slide">-->
<!--                        <img src="imgs/sleep-sun1.png" alt="" style="width: 80%; position: absolute; left: 0.2rem;" >-->
<!--                    </div>-->
<!--                    <div class="swiper-slide">-->
<!--                        <img src="imgs/sleep-sun2.png" alt="" style="width: 80%;-->
<!--            position: absolute; left: 0.2rem;"-->
<!--                        >-->
<!--                    </div>-->
<!--                    <div class="swiper-slide">-->
<!--                        <img src="imgs/sleep-sun3.png" alt=""  style="width: 80%;-->
<!--            position: relative ;left: 0.2rem;"-->
<!--                        >-->
<!--                    </div>-->
<!--                </div>-->
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 不得不睡结束 -->
        <!-- 不得不说开始 -->
        <div class="say">
            <div class="say-title">
                <img src="@/style/imgs/have-to-say.png" alt="">
                <div class="introduce-text" style="margin-top: -0.15rem;">每一段都是我与它的爱恨情仇</div>
                <div style="float: left; margin-top: 0.05rem;">
                    <img src="@/style/imgs/chair.png" alt="" style="width: 38%; height: 100%;">
                    <img src="@/style/imgs/chair2.png" alt="" style="width: 38%; height: 100%;
        margin-left: 0;" >
                </div>
            </div>
        </div>
        <!-- 不得不说结束 -->
        <!-- 不得不看开始 -->
        <div class="look" style="padding-bottom: 2rem">
            <div class="look-title">
                <span class="must-look" style="float: left ;margin-right:0.25rem;">不得不</span>
                <span class="looklook" style="float: left ;margin-right:0.25rem;">看</span>
                <span style="font-weight:bolder;">-</span>
                <span>-</span>
                <span>-</span>
            </div>
            <br>
            <div class="look-text">每一套都是我们的精心推荐</div>

            <div class="swiper-container1" style="overflow: hidden; margin-top: 0.25rem;">
                <div class="swiper-wrapper" style="margin-left: 0.4rem; margin-right: 0px;">
                    <div class="swiper-slide"><img src="@/style/imgs/bed3.jpg" alt="" style="width: 80%;">
                        <div class="heart"><img src="@/style/imgs/heart.png" alt="" style="width: 0.2rem; height: 0.2rem;" class="heartz"></div>
                        <div class="swiper-text">3W house</div>
                        <div class="swiper-text-area">北京·顺义区</div>
                        <ul class="cleanfloat" style="margin: 0px;">
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                        </ul>
                        <div>
                            <div class="RMB">RMB</div>
                            <div class="maths">199.00</div>
                            <div class="everynight">每晚</div>
                        </div>

                    </div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed4.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.40rem;">
                        <div class="swiper-text" style="margin-left: -0.4rem;">走进摩洛哥</div>
                        <div class="swiper-text-area" style="margin-left: -0.4rem;">北京·朝阳区</div>
                        <ul class="cleanfloat" style="margin: 0px; margin-left: -0.4rem;">
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                        </ul>
                        <div>
                            <div class="RMB" style="margin-left: -0.4rem;">RMB</div>
                            <div class="maths" style="margin-left: -0.02rem;">228.00</div>
                            <div class="everynight">每晚</div>
                        </div>
                    </div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed3.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed4.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed4.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed3.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed2.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed1.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed2.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed3.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed4.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed1.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                </div>

                <div class="swiper-wrapper" style="margin-left: 0.4rem; margin-right: 0px;">
                    <div class="swiper-slide"><img src="@/style/imgs/bed2.jpg" alt="" style="width: 80%;">
                        <div class="swiper-text">Miami</div>
                        <div class="swiper-text-area">北京·顺义区</div>
                        <ul class="cleanfloat" style="margin: 0px;">
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                        </ul>
                        <div>
                            <div class="RMB">RMB</div>
                            <div class="maths">246.00</div>
                            <div class="everynight">每晚</div>
                        </div>

                    </div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed1.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;">
                        <div class="swiper-text" style="margin-left: -0.4rem;">Jefferson Inn</div>
                        <div class="swiper-text-area" style="margin-left: -0.4rem;">北京·朝阳区</div>
                        <ul class="cleanfloat" style="margin: 0px; margin-left: -0.4rem;">
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                            <li>&#9733;</li>
                        </ul>
                        <div>
                            <div class="RMB" style="margin-left: -0.4rem;">RMB</div>
                            <div class="maths" style="margin-left: -0.02rem;">158.00</div>
                            <div class="everynight">每晚</div>
                        </div>
                    </div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed3.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed4.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed4.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed3.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed2.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed1.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed2.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed3.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed4.jpg" alt=""
                                                   style="width: 80%;"></div>
                    <div class="swiper-slide"><img src="@/style/imgs/bed1.jpg" alt=""
                                                   style="width: 80%; margin-left: -0.4rem;"></div>
                </div>
                <!-- Add Pagination -->
                <!-- <div class="swiper-pagination" style="margin-top: 2007px;"></div> -->
            </div>
        </div>
<tabbar></tabbar>
    </div>

</template>

<script>
    import { Swipe, SwipeItem } from 'vant';
    import "vant/lib/lazyload/style";
    import axios from "axios";
    import {IMGURL} from "../../lib/base";
    import tabbar from "@/components/tabbar/tabbar"
    export default {
        name: "Demo",

        data(){
            return{
                arr:[],
                banner:[],
                category:null,
                IMGURL:[],
            }
        },
        methods:{
            initdata(){
                console.log("aaa");
                axios.get("http://localhost/think/public/index.php/api/index").then(res=>{
                    console.log(res);
                    let banner=res.data.banner;
                    banner= banner.map(ele=>{
                        ele.sthumb=IMGURL+ele.sthumb;
                        return ele;
                    })

                    this.banner=banner;
                    this.category=res.data.category;
                    console.log(this.category);

                }).catch(()=>{

                })
            }
        },
        components:{
          "VanSwipe":Swipe,
            "VanSwipeItem":SwipeItem,
            tabbar
        },

        mounted(){
           this.initdata();
           this.IMGURL=IMGURL;
        },

    }
</script>

<style scoped>
    @import "../../style/css/Horizon.css";
    @import "../../style/css/index.css";
    @import "../../style/css/rem.css";
    @import "../../style/css/swiper-bundle.css";


</style>
<style>
    .my-swipe .van-swipe-item {
        color: #fff;
        text-align: center;
    }
    .van-swipe__indicators{
        bottom: 1.4rem;

    }
</style>