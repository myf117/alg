import Vue from 'vue'
import Vuex from 'vuex'
//在此处导入store模块
import shoplist from "./shopcart/shoplist";
import user from "./user/user"
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    cartNum:0,
    selected:[],
    sum:0,
    productArr:[],
    searchArr:[],
    productMsg:{}
  },
  mutations:{
    modifyData(state,cartNum){
      // console.log(this)
      if(cartNum !== undefined){
        state.cartNum = cartNum;
      }else {
        state.cartNum = 0;
      }
        // console.log(state.cartNum);
    },
    modifySelect(state,selected){
      state.selected = selected;
      // console.log(state.selected);
    },
    modifySum(state,sum){
      state.sum = sum;
      // console.log(state.sum);
    },
    modifyProductArr(state,arr){
      state.productArr = arr;
      // console.log(state.productArr);
    },
    modifySearchArr(state,arr){
      state.searchArr = arr;
      // console.log(state.searchArr);
    },
    modifyProductMsg(state,id,price,url,dis){
      state.productMsg.product_id = id;
      state.productMsg.price = price;
      state.productMsg.img_url = url;
      state.productMsg.discription = dis;
      console.log(state.productMsg);
    }
  },
  actions: {
  },
  modules: {
    shoplist,
    user
    //在此处加入导入的store模块
  }
})
