<template>
    <div>
       <div style="padding: 0.2rem 0.2rem;"> <icon name="arrow-left" color="red" @click="$router.back(-1)" style=""/></div>
        <div class="content" v-for="item in data" :key="item.sid">
            <router-link :to="{path:'details',query:{sid:item.sid}}">
        <card
                :price="item.sprice"
                :desc="item.sdesc"
                :title="item.sname"
                :thumb="item.sthumb">
        </card>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {apiCollectionRead} from "../../http/api";
    import { Card,Icon  } from 'vant';
    import {IMGURL} from "../../lib/base";

    export default {
        name: "Collection",
        components:{
            Card,Icon,
        },
        data(){
          return {
          data:null,
          IMGURL:null,
          }

        },
        methods:{
            initCollection(){
                let collects=this.$route.query.collection;

                apiCollectionRead(collects).then(res=>{
                    res.data= res.data.map(ele=>{
                        console.log(ele);
                        ele.sthumb=IMGURL+ele.sthumb;
                        return ele;
                    })
                   this.data= res.data;
                    console.log(this.data);
                }).catch(()=>{
                })
            }
        },
        mounted() {
            this.IMGURL=IMGURL;
           this.initCollection();
        }
    }
</script>

<style scoped>

</style>