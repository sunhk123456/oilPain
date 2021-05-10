<template>
    <div>
        <van-form  @submit="onSubmit"  >
            <van-field
                    v-model="phone"
                    name="phone"
                    left-icon="smile-o"
                    clearable
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ required: true, message: '请填写正确的手机号' }]"
            />
            <van-field
                    v-model="sms"
                    name="code"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
            >
                <template #button>
                    <van-button size="small" type="info" @click.prevent="handleCode" v-show="!time">发送验证码</van-button>
                    <van-button size="small" type="delete"  v-show="time">{{time}}</van-button>
                </template>
            </van-field>
            <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
<!--            <van-checkbox-group v-model="checkboxGroup" direction="horizontal">-->
<!--                <van-checkbox name="1" shape="square">复选框 1</van-checkbox>-->
<!--            </van-checkbox-group>-->

            <div style="margin: 0.16rem;">
                <van-button round block type="info" native-type="submit">
                    注册
                </van-button>
            </div>
        </van-form>
        <router-link :to="{name:'Login'}">    <van-button type="info">登录</van-button></router-link>
    </div>
</template>

<script>
    import {Form,Field,Button} from 'vant';
    import 'vant/lib/field/style'
    import 'vant/lib/form/style'
    import 'vant/lib/button/style'
    import {apiResgist} from "@/http/api"

    export default {
        name: "Resgist",
        components:{
            VanForm:Form,
            VanField:Field,
            VanButton:Button
        },
        data(){
            return {
                phone: '',
                password: '',
                sms:'1314',
                time:0,
            }
        },
        methods:{
            onSubmit(values) {
                console.log('submit', values);
                values['tj']=201;
                apiResgist(values).then(res=>{
                    console.log(res);
                }).catch(()=>{

                })
            },
            handleCode(){
                let that=this;
                if (!that.time){
                    that.time=60;
                   let t = setInterval(function () {
                           that.time=that.time-1;
                           if (that.time<=0){
                               that.time=0;
                               clearInterval(t);
                           }
                   }
                    ,1000)
                }
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>