<template>
<div style="padding: 0.2rem">
  <title1 title1="订单详情"></title1>
    <div class="pay-countdown">
        <span style="">订单剩余时间:</span>
    <van-count-down :time="30*60*1000"
                    @finish="finish">
        <template #default="timeData">
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
        </template>
    </van-count-down>
        <span>待支付金额:</span> <span style="color: red"> {{price/100}}</span>
    </div>
    <div class="pay-info" >
      <div class="pay-info-title">
          <span>订单详情</span>
          <div class="pay-info-card">
          <card
                  :price="price/100"
                  :desc="user_msg.sdesc"
                  :title="user_msg.sname"
                  :thumb="sthumb"></card>
          </div>

      </div>
        <submit-bar  button-text="立即付款" @submit="onSubmit" />
    </div>
</div>

</template>

<script>
    import title1 from "@/components/title"
    import { CountDown,Toast,Card,SubmitBar   } from 'vant';
    import {apiPay} from "../../http/api";

    export default {
        name: "Payment",
        data(){
            return {
                price:null,
                user_msg:{},
                sthumb:null,
                oid:null,
            }
        },
        components:{
            title1,VanCountDown:CountDown,Card,SubmitBar
        },
        methods:{

            finish(){
                Toast.fail("订单超时，返回主页！")
                this.$router.push("/");
            },
            initpayment(){
                let query=this.$route.query;
              this.user_msg=query.params;
              this.sthumb=query.sthumb;
              this.price=query.price;
              this.oid=query.oid;
            },
            onSubmit(){
                let id=this.oid;
                apiPay(id).then(res=>{
                    console.log(res);
                    if (res.code==200){
                        Toast.success("下单成功");
                        this.$router.push({name:'My'})
                    }else {
                        Toast.fail("下单失败");
                    }
                }).catch(()=>{

                })
            }
        },
        mounted(){
          this.initpayment();
        }

    }
</script>

<style scoped>


</style>
<style>
    @import url(../../style/payment.css);
</style>