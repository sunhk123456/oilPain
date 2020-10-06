import  Vue from "vue";
import  Vuex from "vuex";
Vue.use(Vuex);
const store =new Vuex.Store({
//唯一的数据来源  ==>data
    state:{
        count:10,
        city:"beijin",
        indexSearch:{
            province:"山西",
            address:"",
            startTime:"",
            endTime:"",
            startDay:"",
            endDay:"",
        }
    },
    //getters ==>computed
    getters:{
        doneTodos:state =>{
            return state.count+100;
        },
        cityUpper:(state, getters) => {
            return "count"+getters.doneTodos + state.city.toUpperCase();
        }
    },
    // mutations  写一些方法  修改state的唯一方法(同步的)
    mutations:{
        setTime(state,payload){
            let {startTime,endTime,startDay,endDay}=payload;
            let date=new Date();
            let arr=['Sun','Mon','Tues','Wed','Thur','Fri','Sat']
            startTime=startTime?startTime:date.getMonth()+1+'.'+date.getDate();
            endTime=endTime?endTime:date.getMonth()+1+'.'+date.getDate()+2;
            startDay=startDay===undefined?date.getDay():startDay;
            endTime=endTime===undefined?startDay+2:endTime;
            state.indexSearch.startTime=startTime;
            state.indexSearch.endTime=endTime;
            state.indexSearch.startDay=arr[startDay];
            state.indexSearch.endDay=arr[endDay];
            startTime,endTime,startDay,endDay
        },
        increment (state) {
            // 变更状态
            state.count++
        },
        setCity(state,payload){

            state.indexSearch.province=payload;
        }
    },
    //actions 异步的方法 提交mutations
    actions:{
        add  (context){
          setTimeout(()=>{ context.commit("increment")},1000)
        }
    },
    //多一些模块
    modules:{

    }
})
export default store
