import Vue from 'vue'
import Vuex from 'vuex'
//在此处导入store模块
import shoplist from "./shopcart/shoplist";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    shoplist
    //在此处加入导入的store模块
  }
})
