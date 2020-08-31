import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import cookie from "./assets/js/cookie.js";

Vue.prototype.cookie = cookie
//定义全局的axios
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:8001';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

