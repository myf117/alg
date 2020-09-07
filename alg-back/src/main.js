import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

import cookie from "./assets/js/cookie.js";
import Base64 from "./assets/js/base64.js";
// import pagenation from "./components/common/pagenation.vue";

// Vue.component('pagenation',pagenation);
Vue.prototype.cookie = cookie;
Vue.prototype.Base64 = Base64;
//定义全局的axios
Vue.prototype.$http = axios;
// axios.defaults.baseURL = 'http://192.168.6.11:8001';
// axios.defaults.baseURL = 'http://192.168.6.24:8001';
axios.defaults.baseURL = 'http://localhost:8001';
Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
