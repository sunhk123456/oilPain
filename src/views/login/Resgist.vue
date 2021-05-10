<template>
    <div class="regin">
        <div class="banner">
            <img src="../../assets/loginbanner.png" alt="">
        </div>
        <div class="reginbox">
            <van-form @submit="onSubmit">
                <icon name="" />

                <van-field v-model="phone" name="phone" AUTOCOMPLETE="off" left-icon="friends-o" placeholder="小主，留个电话吧" />
                <van-field v-model="code" name="code" AUTOCOMPLETE="off" left-icon="phone" type="text" placeholder="我们的秘密">
                    <template #button>
                        <van-button v-show="codeshow" size="small" color="#ED7A7E" @click="handlecode"  native-type="button">发送验证码</van-button>
                        <van-button v-show="!codeshow" size="small" color="#ddd" disabled>（{{time}}）s</van-button>
                    </template>
                </van-field>
                <van-field v-model="password" name="password" AUTOCOMPLETE="off" :type="pass" left-icon="lock" right-icon="closed-eye" color="#ED7A7E" placeholder="我们来交换秘密"
                           :rules="[{ required: true, message: '请填写密码' }]" @click-right-icon="handleshow" />
                <div>
                    <van-checkbox v-model="checked" icon-size="0.3rem" checked-color="#ED7A7E" @click="handlecheck">
                        已同意并阅读《软件许可及服务协议》
                    </van-checkbox>
                </div>
                <div style="height:0.7rem;width:100%">
                    <van-button block type="info" native-type="submit" :disabled="disabled" class="reginbutton">
                        立即注册
                    </van-button>
                </div>
                <div style="height:0.7rem;width:100%">
                    <van-button block type="info" native-type="button" class="loginbutton" @click="gologin">
                        立即登录
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>

    import { Form,Field ,Button, Checkbox,Icon,Toast } from 'vant';
    import 'vant/lib/form/style';
    import 'vant/lib/field/style';
    import 'vant/lib/button/style';
    import 'vant/lib/icon/style';
    import 'vant/lib/checkbox/style';
    import {apiResgist} from "../../http/api";


    export default {
        name:'Resgist1',
        components:{
            "van-form":Form,
            "van-field":Field,
            "van-button":Button,
            "van-checkbox":Checkbox,
            Icon
        },
        data(){
            return{
                pass:'password',
                phone:'',
                password:'',
                code:'',
                checked:false,
                disabled:true,
                codeshow:true,
                time:60
            }
        },
        methods:{
            handleshow(){
                this.pass="text"
            },
            handlecheck(){
                this.disabled=!this.disabled;
            },
            handlecode(){
                this.codeshow=false;
                let t = setInterval(()=>{
                    this.time--;
                    if(this.time<=0){
                        clearInterval(t);
                        this.codeshow=true;
                    }
                },1000)
            },
            onSubmit(values) {
                // console.log('submit', data);
                // resgist(data).then(res=>{
                //     console.log(res.msg);
                //     this.$router.push({name:'Login1'});
                // }).catch(error=>{
                //     console.log(error);
                // })
                console.log('submit', values);
                values['tj']=201;
                apiResgist(values).then(res=>{
                    console.log(res);
                  if (res.code==200){
                      this.$router.push({name:'Login'})
                      Toast.success("注册成功请登录")
                  }
                }).catch(()=>{

                })
            },
            gologin(){
                //push有历史记录，replace没有历史记录
                this.$router.replace({name:'Login'})
            }

        }
    }
</script>

<style scoped>
    @import "../../style/resgist.css"
</style>