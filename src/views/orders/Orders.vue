<template>
    <div>
        <div class="orders" v-if="stayhome">
            <div class="header1">
                <icon name="arrow-left" color="red" @click="$router.back(-1)" style=""/>
                <span>订单填写</span>
                <div></div>
            </div>
            <card
                    :price="stayhome.sprice"
                    :desc="stayhome.sdesc"
                    :title="stayhome.sname"
                    :thumb="sthumb"></card>
            <div class="city2">
                <div class="city-title">
                    <span>入离日期</span>
                    <router-link to="/Orderscalendar"><span style="color: gainsboro;">修改日期<icon name="arrow"
                                                                                                style="line-height: 0.26rem"/></span>
                    </router-link>
                </div>
                <div class="city-time">
                    <span>{{startTime}}</span>~ <span>{{endTime}}</span><span>共</span><span
                        style="color: red">{{days}}</span><span>天</span>
                </div>
            </div>
            <div class="number"><span>入住人数</span>
                <stepper v-model="order.user_number" max="3"></stepper>
            </div>
            <div class="user-info">
                <div class="user-info-box">
                    <van-form>
                        <div class="user-info-box-title">住客信息</div>
                        <van-field
                                v-model="order.username"
                                name="order.username"
                                label="姓名"
                                placeholder="姓名"
                                :rules="[{ required: true, message: '请填写姓名' }]"
                        />
                        <van-field
                                v-model="order.id_card"
                                name="order.id_card"
                                label="身份证号"
                                placeholder="身份证号"
                                :rules="[{ required: true, message: '请填写身份证号' }]"
                        />
                    </van-form>
                </div>
            </div>
            <div class="phonenum">
                <van-field
                        v-model="order.phone"
                        name="order.phone"
                        label="联系方式  +86"
                        placeholder="手机号"
                        :rules="[{ required: true, message: '请填写手机号' }]"
                />
            </div>
            <div class="discount">
                <span>平台优惠</span>
                <div><span>立减</span><span>0.00</span></div>
            </div>

            <ul class="notice">

                <li>

                    <div>退订政策</div>

                    <span>入住前1天12:00前退订  可获得100%退款 之后退订不退款</span>

                </li>

                <li>

                    <div>入离时间</div>

                    <span>14:00之后可入住 12:00之前需退房</span>

                </li>

                <li>

                    <div>提供发票</div>

                    <span>不支持开发票 如果需要请与房东协商</span>

                </li>

            </ul>
            <submit-bar :price="this.price" button-text="提交订单" @submit="onSubmit"/>
        </div>
    </div>
</template>

<script>
    import {Icon, Card, Form, Field, SubmitBar, Stepper} from 'vant';
    import {IMGURL} from "../../lib/base";
    import store from "@/store/store"
    import "vant/lib/form/style"
    import "vant/lib/field/style"
    import {apiOrders} from "../../http/api";

    export default {
        name: "Orders",
        components: {
            Icon, Card, VanForm: Form, VanField: Field, SubmitBar, Stepper
        },
        data() {
            return {
                order: {
                    username: null,
                    id_card: null,
                    user_info: null,
                    user_number: 1,
                    phone: null,
                },
                stayhome: {},

                sthumb: null,
                price: 0,
            }
        },
        computed: {
            startDay() {
                return store.startDay;
            },
            endDay() {
                return store.endDay;
            },
            startTime() {
                return store.startTime;
            },
            endTime() {
                return store.endTime;
            },
            days() {
                return store.days;

            }
        },
        methods: {
            initOrders() {
                this.stayhome = this.$route.query;
                this.price = parseInt(this.stayhome.sprice) * 100 * this.days;
                this.sthumb = IMGURL + this.stayhome.sthumb;
                console.log(this.stayhome);
                console.log(this.sthumb);
            },
            formdate() {
                if (!this.startTime) {
                    let now = new Date();
                    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
                    store.startTime = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
                    store.endTime = tomorrow.getFullYear() + '/' + (tomorrow.getMonth() + 1) + '/' + tomorrow.getDate();
                }
            }
            ,
            onSubmit() {
                let params = {};
                this.order.user_info = this.order.username + "," + this.order.id_card;
                let time = {
                    enter_time: this.startTime,
                    leave_time: this.endTime,
                    days: this.days,
                    price: this.price / 100,
                };
                Object.assign(params, this.stayhome, this.order, time);
                apiOrders(params).then(res => {
                    console.log(res);
                    if (res.code == 200) {
                        let data = {
                            'oid': res.oid,
                            'price': this.price,
                            'sthumb':this.sthumb,
                            params,
                        };
                        this.$router.push({name: 'Payment', query: data});
                    } else {
                        // this.$router.back(-1);
                    }
                }).catch(() => {

                })
            }
        },
        mounted() {
            this.initOrders();
            this.formdate();
        }

    }
</script>

<style scoped>
    @import "../../style/orders.css";

</style>