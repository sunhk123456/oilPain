<template>
    <div class="login">
        <div class="banner">
            <img src="../../assets/loginbanner.png" alt="">
        </div>
        <div class="reginbox">
            <van-form @submit="onSubmit">
                <van-field v-model="phone" name="phone" AUTOCOMPLETE="off" left-icon="phone" placeholder="小主，留个电话吧" />
                <van-field v-model="code" name="code" AUTOCOMPLETE="off" left-icon="lock" type="text" placeholder="（暂不用写）">
                    <template #button>
                        <van-button v-show="codeshow" size="small" color="#ED7A7E" @click="handlecode"  native-type="button">发送验证码</van-button>
                        <van-button v-show="!codeshow" size="small" color="#ddd" disabled>（{{time}}）s</van-button>
                    </template>
                </van-field>
                <div style="height:0.7rem;width:100%;margin-top: 0.3rem">
                    <van-button block type="info" native-type="submit" class="">
                        欢迎回家
                    </van-button>
                </div>

            </van-form>
            <div style="height:0.7rem;width:100%;margin-top: 2rem">
                <van-button block type="info" native-type="button" class="" @click="goResgist">
                    立即注册
                </van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { Form,Field, Button } from 'vant';
    import 'vant/lib/form/style';
    import 'vant/lib/field/style';
    import 'vant/lib/button/style';
    import 'vant/lib/icon/style';
    export default {
        name:'Login',
        components:{
            "van-form":Form,
            "van-field":Field,
            "van-button":Button,
        },
        data(){
            return {
                codeshow:true,
                time:60,
                phone:'',
                code:'',
            }
        },
        methods:{
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
                // login(data).then(res=>{
                //     console.log(typeof res.collection);
                //     res.collection = res.collection.split(',');
                //     console.log(res.collection);
                //     this.$store.commit('setToken',res.token);
                //     if(res.collection){
                //         let collection = res.collection.map(ele=>ele*1);
                //         this.$store.commit('setCollection',collection)
                //     }
                //     let redirect = this.$route.query.redirect || 'Index';
                //     this.$router.push({name:redirect});
                // }).catch(error=>{
                //     console.log(error);
                // })
                let redirect=this.$route.query;

                let params= Object.assign({},redirect,{values});

                this.$store.dispatch("headleLogin",params);
            },
            goResgist(){
                this.$router.push({name:'Resgist'})
            }
        }
    }
</script>

<style scoped>
    @import "../../style/login.css"
</style>