<template>
    <div class="bottom">

        <div class="bottom-wrap" style="text-align: center">
            <router-link to="#"  class="bottom-left" style="display:block;color: red" :class="index===1?'active':''"><i
                    class="iconfont icon-shouye" style="font-size: 1rem"></i>
                <div><span style="color: #eb666b">首页</span></div>

            </router-link>
            <router-link to="#"  class="bottom-center" style="display:block;color: red" :class="index===2?'active':''"><i
                    class="iconfont icon-yanjing" style="font-size: 0.9rem"></i>
                <div><span style="color: #eb666b;text-align: center">视界</span></div>

            </router-link>
            <router-link to="#" class="bottom-right" style="display:block;color: red" :class="index===3?'active':''"><i
                    class="iconfont icon-wode" style="font-size: 0.9rem"></i>
                <div><span style="color: #eb666b">我的</span></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import "../style/icon/iconfont.css"
    export default {
        name: "tabbar2",
        props: {
            index: {
                type: Number,
                default: 1,

            }
        },
        methods:{
            changeIndex(){
                let index=2;
                console.log("222");
                this.$emit("changeIndex",index);
            }
        }
    }
</script>

<style>
    /*@import "../style/firstpage.css";*/
    /*@import "http://at.alicdn.com/t/font_2113910_mwxt4s52y0d.css";*/
</style>