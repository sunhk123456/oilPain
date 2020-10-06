import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

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
    }

]

const router = new VueRouter({
  routes
})

export default router
