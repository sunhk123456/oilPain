<template>
    <div class="boxabc">

        <div class="bottom-wrap" style="text-align: center">
            <router-link :to="{path:'/'}"  class="bottom-box" style="" :class="{active:index==1?true:''}"><i
                    class="iconfont icon-shouye" style="font-size: 0.65rem"></i>
                <div><span style="color: #eb666b;font-size: 0.28rem">首页</span></div>

            </router-link>
            <router-link to="#"  class="bottom-box" style="" :class="{active:index==2?true:''}"><i
                    class="iconfont icon-yanjing" style="font-size: 0.65rem"></i>
                <div><span style="color: #eb666b;font-size: 0.28rem">视界</span></div>

            </router-link>
            <router-link :to="{path:'/lists'}" class="bottom-box" style="" :class="{active:index==3?true:''}"><i
                    class="iconfont icon-yanjing" style="font-size: 0.65rem"></i>
                <div><span style="color: #eb666b;font-size: 0.28rem">列表</span></div>

            </router-link>
            <router-link :to="{path:'/my'}"  class="bottom-box" style="" :class="{active:index==4?true:''}"><i
                    class="iconfont icon-wode" style="font-size: 0.65rem"></i>
                <div><span style="color: #eb666b;font-size: 0.28rem">我的</span></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import "../style/icon/iconfont.css"
    export default {
        name: "tabbar2",
        data(){
            return {
            }
        },
        props: {
            index: {
                type: Number,
                default: 1,

            }
        },
        computed:{

        },
        methods:{
            changeIndex(){
                console.log(this.index);
            }
        },
        mounted() {
          this.changeIndex();
            // console.log(this.index);
        }
    }
</script>

<style scoped>

@import url(../style/tabbar2.css);
    /*@import "http://at.alicdn.com/t/font_2113910_mwxt4s52y0d.css";*/
</style>