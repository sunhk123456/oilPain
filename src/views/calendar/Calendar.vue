<template>
    <div>
        <router-view title="选择单个日期"   :value="date" @click="show = true" />

        <van-calendar v-model="show"  type="range" @confirm="onConfirm" />
    </div>
</template>

<script>
    import { Calendar } from 'vant';
    import 'vant/lib/calendar/style'
    export default {
        name: "Calendar",
        components:{
            'vanCalendar':Calendar,
        },
        methods:{
            onConfirm(date) {
                let [startTime1,endTime1]=date;
                let  startTime=startTime1.getMonth()+1+'.'+startTime1.getDate();
                let endTime=endTime1.getMonth()+1+'.'+endTime1.getDate();
                let startDay=startTime1.getDay();
                let endDay=endTime1.getDay();
                console.log(startDay);
                this.$store.commit('setTime',{
                    startTime,endTime,startDay,endDay
                })
                console.log(date);
                    this.$router.back();
            },

        },
        data(){
            return{
                date: '',
                show: true,
            }
        }
    }
</script>

<style scoped>

</style>