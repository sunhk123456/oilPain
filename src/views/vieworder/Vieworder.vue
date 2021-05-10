<template>
    <div>
        <div class="list-box1" style="">

            <div class="nav-box1">
                <div class="nav-title">
                    <div>
                        <icon name="arrow-left" color="red" @click="$router.back(-1)" style=""/>
                    </div>
                    <span>我的订单</span>
                    <div></div>
                </div>
                <div class="nav-search">
                    <button type="submit" style="border:none;background-color: #fafafa">
                        <i class="icon-denglutijiao iconfont " style="font-size: 0.50rem;"></i>
                    </button>
                    <input class="search-box" type="text" placeholder="关键词 名称 地点" style="float: left">
                </div>
                <ul class="nav">
                    <li v-for="(item,index) in orderArr"
                        :key="index" class="li-box"
                        @click="handlerOrdertype(item.field)"
                        :class="{active:order.field===item.field}">{{item.text}} <i
                            :class="['iconfont',item.icon] "></i>
                    </li>
                </ul>
            </div>
            <ul class="big-order">
                <li>
                    <div class="info">
                        <img src="../../assets/vieworder/订单民宿1.jpg" alt="">
                        <div style="position: relative;top: -0.7rem;color: white;padding: 0 0.2rem;height: 0.7rem;line-height: 0.7rem">
                            <div style="display: flex;justify-content: space-between">
                                <div>
                                    <span class="fromdate">4.19</span>
                                    <span class="fromday"> SUN</span>
                                    <i class="iconfont icon-tuxing"></i>
                                    <span class="todate">4.29</span>
                                    <span class="today"> MON</span>
                                </div>


                                <span class="status">待付款</span>
                            </div>
                        </div>
                    </div>

                    <div class="name">
                        <span>森岚名宿</span>
                        <div>
                            <span style="font-size: 0.1rem;color: #eb666b">RMB</span>
                            <span>1588.00</span>
                        </div>
                    </div>
                    <div class="buttons">
                        <button><span>立即付款</span></button>
                        <button style="margin-right: 0.2rem">取消订单</button>
                    </div>
                </li>

            </ul>
            <ul class="big-order" >
                <li v-for="item in user_data" :key="item.oid">
                    <div class="info">
                        <img :src="item.sthumb" alt="">
                        <div style="position: relative;top: -0.7rem;color: white;padding: 0 0.2rem;height: 0.7rem;line-height: 0.7rem">
                            <div style="display: flex;justify-content: space-between">
                                <div>
                                    <span class="fromdate">{{item.enter_time}}</span>
                                    <span class="fromday"> SUN</span>
                                   <i class="info-line"></i>
                                    <span class="todate">{{item.leave_time}}</span>
                                    <span class="today"> MON</span>
                                </div>


                                <span class="status" >待付款</span>
                            </div>
                        </div>
                    </div>

                    <div class="name">
                        <span>{{item.sname}}</span>
                        <div>
                            <span style="font-size: 0.1rem;color: #eb666b">RMB</span>
                            <span>{{item.price}}</span>
                        </div>
                    </div>
                    <div class="buttons">
                        <button><span>立即付款</span></button>
                        <button style="margin-right: 0.2rem">取消订单</button>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import {Icon} from 'vant'
    import {apiOrderlists} from "../../http/api";
    import {IMGURL} from "../../lib/base";

    export default {
        name: "Vieworder",
        data() {
            return {
                orderArr: [
                    {field: 'all', icon: 'icon-xiangxia', text: '全部'},
                    {field: 'finish', icon: 'icon-xiangxia', text: '完成'},
                    {field: 'nopay', icon: 'icon-xiangxia', text: '代付'},
                    {field: 'refund', icon: 'icon-xiangxia', text: '退款'},
                ],
                order: {
                    field: 'all',
                },
                user_data:null,
            }
        },
        components: {
            Icon
        },
        methods: {
            handlerOrdertype(item) {
                this.order.field = item;
            },
            initOrder() {
                apiOrderlists().then(res => {

                    if (res.code==200){
                       if ( res.data){
                           res.data=res.data.map(ele=>{
                               ele.sthumb=IMGURL+ ele.sthumb;
                               return ele;
                           });
                           this.user_data=res.data;
                       }

                    }

                }).catch(() => {

                })
            }
        },
        mounted() {
            this.initOrder();

        }
    }
</script>

<style scoped>
    @import "http://at.alicdn.com/t/font_2114208_uihndlxoxao.css";
    @import "http://at.alicdn.com/t/font_2114208_6o3cjoi3ru6.css";
    @import "../../style/vieworder.css";

</style>