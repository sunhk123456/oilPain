import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
import store from '@/store'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
    {
        path: '/province',
        name: 'Province',
        component: () => import('../views/province/Province.vue'),
        meta:{
            title:'选择省份'
        }
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('../views/calendar/Calendar.vue'),
        meta:{
            title:'选择日期'
        }
    },
    {
        path: '/demo',
        name: 'Demo',
        component: () => import('../views/demo/Demo.vue')
    },
    {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index/Index.vue')
    },
    {
        path: '/details',
        name: 'Details',
        component: () => import('@/views/details/Details.vue'),
        meta:{
            title:'民宿详情'
        }
    },
    {
        path: '/',
        name: 'Firstpage',
        component: () => import('@/views/firstpage/Firstpage.vue')
        , meta:{
            title:'民宿首页'
        }
    },
    {
        path: '/lists',
        name: 'Lists',
        component: () => import('@/views/lists/Lists.vue')
        , meta:{
            title:'列表页'
        }
    },
    {
        path: '/resgist2',
        name: 'Resgist2',
        component: () => import('@/views/resgist2/Resgist.vue')
        , meta:{
            title:'注册页'
        }
    },
    {
        path: '/login2',
        name: 'Login2',
        component: () => import('@/views/login2/Login.vue')
        , meta:{
            title:'登录页'
        }
    }
    ,
    {
        path: '/my',
        name: 'My',
        component: () => import('@/views/my/My.vue')
        , meta:{
            title:'个人中心',
            auth:true,
        }
    }  ,
    {
        path: '/collection',
        name: 'Collection',
        component: () => import('@/views/collection/Collection.vue')
        , meta:{
            title:'收藏页',
            auth:true,
        }
    } ,
    {
        path: '/tabbar2',
        name: 'tabbar2',
        component: () => import('@/components/tabbar2.vue')
        , meta:{
            title:'收藏页',
            // auth:true,
        }
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('@/views/orders/Orders.vue')
        , meta:{
            title:'下单页',
            // auth:true,
        }
    },
    {
        path: '/home1',
        name: 'home1',
        component: () => import('@/views/home/Home.vue')
        , meta:{
            title:'下单页',
            // auth:true,
        }
    },
    {
        path: '/orderscalendar',
        name: 'Orderscalendar',
        component: () => import('@/views/orders/Orderscalendar.vue')
        , meta:{
            title:'下单页',
            // auth:true,
        }
    },
    {
        path: '/payment',
        name: 'Payment',
        component: () => import('@/views/payment/Payment.vue')
        , meta:{
            title:'支付页',
            auth:true,
        }
    },
    {
        path: '/vieworder',
        name: 'Vieworder',
        component: () => import('@/views/vieworder/Vieworder.vue')
        , meta:{
            title:'订单查看页',
            auth:true,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue')
        , meta:{
            title:'登录页',
        }
    },
    {
        path: '/resgist',
        name: 'Resgist',
        component: () => import('@/views/login/Resgist.vue')
        , meta:{
            title:'注册页',
        }
    }

]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
    let title =to.meta.title || '一家名宿';
    document.title=title;
    if(to.meta.auth){
        let token =store.state.token;
        token=token.trim();
        console.log(token);
        if(token){
            next();
        }else {
            next({
                name:'Login',
                query:{redirect:to.name}
            })
        }
    }else {
        next();
    }


})
export default router
