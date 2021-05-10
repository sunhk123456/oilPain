<template>
    <div class="nav-title1">
        <div>
            <icon name="arrow-left" color="red" @click="$router.back(-1)" style=""/>
        </div>
        <span>{{title1}}</span>
        <div></div>
    </div>
</template>

<script>
    import {Icon} from 'vant'

    export default {
        name: "title1",
        components: {
            Icon
        },
       props:{
            title1:{
                default:"我的订单"
            }
       },
        mounted(){
        }
    }
</script>

<style scoped>
    .nav-title1 {
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
    }

    .nav-title1 span {
        font-size: 0.32rem;

    }
</style>