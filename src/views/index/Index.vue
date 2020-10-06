<template>
<div>
 “嘿嘿”
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" style="height: 300px" >

        <van-swipe-item v-for="item in this.banner" :key="item.sid"> <img :src="item.sthumb" :alt="item.sname" style="width: 100%;"> </van-swipe-item>
    </van-swipe>

</div>
</template>

<script>
    import axios from "axios";
    import {Swipe,SwipeItem} from "vant";
    import {IMGURL} from "../../lib/base";
    export default {
        name: "Index",
        data(){
          return{
              arr:[],
              banner:[],
              category:[],

          }
        },
        methods:{
            initdata(){
                console.log("aaa");
                axios.get("http://localhost/think/public/index.php/api/index").then(res=>{
                    console.log(res);
                    let banner=res.data.banner;
                      banner= banner.map(ele=>{
                          ele.sthumb=IMGURL+ele.sthumb;
                          return ele;
                      })

                    this.banner=banner;
                    console.log(this.banner);
                    this.category=res.data.category;

                }).catch(()=>{

                })
            }
        },
        mounted(){
            this.initdata();
        },
        components:{
            "vanSwipe":Swipe,
              "vanSwipeItem":SwipeItem,
        }
    }
</script>

<style scoped>

</style>
<style>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
</style>