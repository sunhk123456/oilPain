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
                <div>

                </div>
                <template #button>
                    <van-button size="small" type="delete"  @click.prevent="handleCode">{{code}}</van-button>
                </template>
            </van-field>
            <div style="margin: 0.16rem;">
                <van-button round block type="info" native-type="submit" >
                    登录
                </van-button>

            </div>
        </van-form>
        <button>   <router-link :to="{name:'Resgist'}">注册</router-link></button>
    </div>

</template>

<script>
    import {Form,Field,Button} from 'vant';
    import 'vant/lib/field/style'
    import 'vant/lib/form/style'
    import 'vant/lib/button/style'
    export default {
        name: "Login",
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
                code:null,
            }
        },
        methods:{
            onSubmit(values) {
                let redirect=this.$route.query;

               let params= Object.assign({},redirect,{values});

                this.$store.dispatch("headleLogin",params);
            },
            handleCode(){
                this.code=Math.ceil(Math.random()*9000) +999;
            },
            random(){
            }
        },
        mounted(){
            this.code=Math.ceil(Math.random()*9000) +999;
            console.log(this.$store.getters.collection(4));

        }
    }
</script>

<style scoped>

</style>