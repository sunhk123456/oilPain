<template>
    <div class="bottom1">
        <div class="bottom1-one">
          <div class="house1"><img src="@/style/imgs/house.jpg" alt="" style="width: 1rem;"><div class="bottom1-text" style="text-align: center;margin-top: 0.1rem">首页</div></div>
            <!--            <div class="house1"><img src="@/style/imgs/house.jpg" alt="" style="width: 1rem;"><div class="bottom1-text">首页</div></div>-->


        </div>
        <div class="bottom1-one">
            <div class="eye1"><img src="@/style/imgs/eye.jpg" alt="" style="width: 1rem;margin-top: 0.2rem;margin-bottom: 0.3rem"><div class="bottom1-text1" style="text-align: center">视界</div></div>


        </div>
        <div class="bottom1-one">
            <div class="people1" ><img src="@/style/imgs/people.jpg" alt="" style="width: 1rem;"><div class="bottom1-text2" style="text-align: center">我的</div></div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
    .bottom1{
        position:fixed; /* 必要 */
        display: flex;
        justify-content: space-between;
        padding: 0 0.5rem  ;
        bottom:0; /* 必要 */
        width: calc(100% - 1rem) ;
        z-index: 9999;
        background-color: pink;

    }
.bottom1-one{
    position: relative;
    bottom: 0rem;


    z-index: 999;
}

</style>