<template>
    <div>
        <router-view title="选择单个日期"   :value="date" @click="show = true" />

        <van-calendar v-model="show"  type="range" @confirm="onConfirm" />
    </div>
</template>

<script>
    import { Calendar } from 'vant';
    import 'vant/lib/calendar/style';
    import store from '@/store/store'
    export default {
        name: "Orderscalendar",
        components:{
            'vanCalendar':Calendar,
        },
        methods:{
            onConfirm(date) {
                let [startTime1,endTime1]=date;
                let  startTime=startTime1.getFullYear()+'/'+(startTime1.getMonth()+1)+'/'+startTime1.getDate();
                let endTime=endTime1.getFullYear()+'/'+(endTime1.getMonth()+1)+'/'+endTime1.getDate();
                let startDay=startTime1.getDay();
                let endDay=endTime1.getDay();
                let startall=startTime1.getTime();
                let endall=endTime1.getTime();
                let arr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
                console.log(startDay);
                store.startTime=startTime;
                store.endTime=endTime;
                store.days=Math.floor((endall-startall)/(60*60*24*1000));
                store.startDay=arr[startDay];
                store.endDay=arr[endDay];
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