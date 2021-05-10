<template>
    <div @click="handleclick">
{{Msg}}
    </div>
</template>

<script>
    import store from "@/store/store"

    export default {
        name: "Home"
        ,data(){
          return {

          }
        },methods:{
            handleclick(){
                // store.setMsg("hxf123456")
                store.Msg="222";
            }
        },
        mounted(){
        },
        computed:{
            Msg(){
                // return store.state.Msg;
                return store.Msg;
            }
        }
    }
</script>

<style scoped>

</style>