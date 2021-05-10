<template>
    <div>
        <div class="list-box2">
    <div class="nav-box">
            <ul class="nav">
                <li v-for="(item,index) in orderArr"
                    :key="index" class="li-box"
                    @click="handlerOrdertype(item.field)"
                    :class="{active:order.field===item.field}">{{item.text}} <i :class="['iconfont',item.icon] "></i>
                </li>
            </ul>
    </div>
            <div class="list">
                <van-pull-refresh v-model="isPullrefresh" @refresh="handlerPullrefresh">
                    <van-list class=" " v-model="isUpper" :finished="upperFinished" :immediate-check="false"
                              @load="handlerUpper">
                        <div class="mustsee-item " v-for="item in stayhome" :key="item.sid">
                            <router-link tag="div" :to="{path:'details',query:{sid:item.sid}}">
                                <img :src="IMGURL+item.sthumb" :alt="item.sname" class="mustsee-img">
                                <h1 class="hotelName hidden1">{{item.sname}}</h1>
                                <h2 v-if="banduanstart(item.sid)">start</h2>
                              <div> <rate v-model="item.score"  color="#ffd21e"
                                          void-icon="star"
                                          void-color="#eee"/></div>
                                <span style="color: #999999">{{item.sarea}}·{{item.scity}}</span>
                                <span style="color: #f8606a">RMB</span>
                                <span  class="price">{{item.sprice}}</span>
                                <span>每晚</span>
                            </router-link>
                        </div>

                        <div class=" van-clearfix"></div>

                    </van-list>
                </van-pull-refresh>
            </div>
        </div>
        <tabbar2 :index="3"></tabbar2>

    </div>
</template>

<script>
    import {PullRefresh, List} from 'vant';
    import {IMGURL} from "../../lib/base";
    import {apiList} from '@/http/api'
    import 'vant/lib/pull-refresh/style'
    import 'vant/lib/list/style'
    import tabbar2 from "@/components/tabbar2"
    import { Rate } from 'vant';
    export default {
        name: "Lists",
        components: {
            VanPullRefresh: PullRefresh,
            VanList: List,
            tabbar2,
            Rate
        },
        data() {
            return {
                isPullrefresh: false,
                isUpper: false,
                upperFinished: false,
                paginate: {
                    page: 0,
                    limit: 5
                },
                IMGURL,
                // 综合 sid , 分数 score  时间 ctime 价格 sprice
                order: {
                    field: 'sid',
                    type: 'desc'
                }, orderArr: [
                    {text: '综合', icon: 'icon-xiangxia', field: 'sid'},
                    {text: '分数', icon: 'icon-xiangxia', field: 'score'},
                    {text: '时间', icon: 'icon-xiangxia', field: 'ctime'},
                    {text: '价格', icon: 'icon-xiangxia', field: 'sprice'},
                ],
                stayhome: [],
                total: 0
            }
        },
        computed: {
            start(id) {
                return this.$store.getters.collection(id);
            }
        },
        methods: {
            handlerPullrefresh() {
                console.log(" 触发下拉刷新");
                this.paginate.page = 0;
                this.upperFinished = false;
                this.stayhome = [];
                this.handlerUpper();
                this.isPullrefresh = false;

            },
            handlerUpper() {
                console.log(" 触发上拉刷新");
                this.paginate.page++;
                let params = Object.assign({}, this.order, this.paginate)
                apiList(params).then(res => {
                    if (res.data) {
                        (!this.total) && (this.total = res.total);
                       res.data.map(ele=>{
                           console.log(ele.sid);
                       });
                        // console.log(res);
                        this.stayhome = this.stayhome.concat(res.data);
                        this.isUpper = false;
                        if (this.stayhome.length >= this.total) {
                            this.upperFinished = true;
                        }
                    }
                })
            },
            handlerOrdertype(item) {
                console.log(item);
                this.order.field = item;
                this.paginate.page = 0;
                this.upperFinished = false;
                this.stayhome = [];
                this.handlerUpper();

            },
            banduanstart(id) {
                if (this.$store.getters.collection(id)) {
                    return true;
                } else
                    return;
            }

        },
        mounted() {
            this.handlerUpper();
            this.IMGURL = IMGURL;
        }
    }
</script>

<style scoped>
    @import "http://at.alicdn.com/t/font_2114208_uihndlxoxao.css";
    @import url('../../style/list.css');

</style>