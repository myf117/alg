import Vue from 'vue'
import VueRouter from 'vue-router';
import mainpage from '../views/mainpage';
import homepage from "../components/commodity/homepage";

Vue.use(VueRouter);

const routes = [
  // 根路由
  {
    path: '/',
    name: 'mainpage',
    redirect:"/login",
    component: mainpage,
    children: [
      // 后台主页路由
      {
        path: '/homepage',
        name: 'homepage',
        component: homepage
      },
      {
        // 订单管理路由
        path: 'orderManagement',
        // 设置路由的懒加载
        component: () => import('../components/commodity/orderManagement')
      },
      {
        // 添加商品路由
        path: 'newlyIncreased',
        // 设置路由的懒加载
        component: () => import('../components/commodity/newlyIncreased')
      },
      {
        // 修改商品路由
        path: 'modifyProduct',
        // 设置路由的懒加载 modifyProduct
        component: () => import('../components/commodity/modifyProduct')
      },
      {
        // 修改宠物百科路由 petEncyclopedia
        path: 'petEncyclopedia',
        // 设置路由的懒加载
        component: () => import('../components/commodity/petEncyclopedia')
      },
      {
        // 上传宠物百科路由
        path: 'modifyEncyclopedia',
        // 设置路由的懒加载 modifyEncyclopedia
        component: () => import('../components/commodity/modifyEncyclopedia')
      },  
      {
        // 上传图片路由 uploadImage
        path: 'uploadImage',
        // 设置路由的懒加载
        component: () => import('../components/commodity/uploadImage')
      },
      {
        // 用户信息管理路由 userInfo
        path: 'userInfo',
        // 设置路由的懒加载
        component: () => import('../components/commodity/userInfo')
      }
    ]

  },
{
    path:"/login",
    name:"login",
    component: () => import('../views/login.vue')
  }

]

const router = new VueRouter({
  mode: 'hash',//配置成hash模式
  base: process.env.BASE_URL,
  routes
})
export default router
