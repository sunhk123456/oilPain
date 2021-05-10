import Vue from "vue";
// let store=Vue.observable()
// let store={
//     state:Vue.observable({
//         Msg:'hello store'
//     }),
//     setMsg(Msg){
//         this.state.Msg=Msg;
//         console.log(Msg);
//     }
// }
let store=Vue.observable({
    Msg:'hello store',
    startTime:null,endTime:null,startDay:null,endDay:null,days:1
})
export default store;