import Vue from "vue";
import Vuex from "vuex";
import {apiLogin} from "../http/api";
import router from "@/router";
import {Toast} from "vant";

Vue.use(Vuex);
const store = new Vuex.Store({
//唯一的数据来源  ==>data
    state: {
        count: 10,
        city: "beijin",
        indexSearch: {
            province: "山西",
            address: "",
            startTime: "",
            endTime: "",
            startDay: "",
            endDay: "",
        },
        token: '',
        collection: [],
    },
    //getters ==>computed
    getters: {
        doneTodos: state => {
            return state.count + 100;
        },
        cityUpper: (state, getters) => {
            return "count" + getters.doneTodos + state.city.toUpperCase();
        },
        collection: (state) => (id) => {
            let flag = false;
            if (state.collection.length) {
                flag = state.collection.some(ele => ele == id);

            }
            return flag;

        }

    },
    // mutations  写一些方法  修改state的唯一方法(同步的)
    mutations: {
        setTime(state, payload) {
            let {startTime, endTime, startDay, endDay} = payload;
            let date = new Date();
            let arr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
            startTime = startTime ? startTime : date.getMonth() + 1 + '.' + date.getDate();
            endTime = endTime ? endTime : date.getMonth() + 1 + '.' + date.getDate() + 2;
            startDay = startDay === undefined ? date.getDay() : startDay;
            endTime = endTime === undefined ? startDay + 2 : endTime;
            state.indexSearch.startTime = startTime;
            state.indexSearch.endTime = endTime;
            state.indexSearch.startDay = arr[startDay];
            state.indexSearch.endDay = arr[endDay];
            startTime, endTime, startDay, endDay
        },
        increment(state) {
            // 变更状态
            state.count++
        },
        setCity(state, payload) {

            state.indexSearch.province = payload;
        },
        settoken(state, payload) {
            state.token = payload;
        },
        setcollection(state, payload) {
            state.collection = payload.split(',').map(ele => ele * 1);
        },
        changecollection(state, payload) {
            let data=payload*1;
            let index=state.collection.indexOf(data);
            if (index>-1){
                state.collection.splice(index,1);
            }else {
                state.collection.push(data);
            }
        },
    },
    //actions 异步的方法 提交mutations
    actions: {
        add(context) {
            setTimeout(() => {
                context.commit("increment")
            }, 1000)
        },
        settoken(context, payload) {
            context.commit('settoken', payload);
        },
        headleLogin({commit}, paylod) {
            let redirect =paylod['redirect'];
            let sid =paylod['sid'];
            let params={
                sid:sid
            }
            delete paylod.redirect;
            delete paylod.sid;
            apiLogin(paylod['values']).then(res => {
                if (res.code!=200){
                    Toast.fail("登录失败");
                }
                if (res.token) {
                    commit('settoken', res.token);
                    res.collection && commit('setcollection', res.collection);
                    Toast.success("登录成功");
                    if (redirect) {
                        router.replace({name: redirect,query:params})

                    } else {

                        router.push({path: '/'});
                    }
                }
            }).catch(() => {
            })
        }
    },
    //多一些模块
    modules: {}
})
export default store
