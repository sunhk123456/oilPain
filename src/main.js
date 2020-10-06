import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "u-reset.css"
import vConsole from "vconsole"
import store from "./store";
import {Lazyload} from 'vant';
Vue.use(Lazyload);
new vConsole();
Vue.config.productionTip = false

new Vue({
   store,
  router,
  render: h => h(App)
}).$mount('#app')
