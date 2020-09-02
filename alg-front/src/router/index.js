import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/anency',
      component:() => import('../views/anency.vue')
    },
  {
    path: '/dogpage',
    component: () => import('../components/anency/dogpage.vue')
  },
  {
    path: '/catpage',
    component: () => import('../components/anency/catpage.vue')
  },
  {
    path: '/',
    component: () => import('../views/zhujian1.vue'),
    redirect:'/Nav',
    children:[
      {
        path:'Nav',
        component:() => import('../components/shopping/Navigation bar.vue')
      },
      
      {
        path: 'dog',
        name: 'dog',
        component: () => import('../views/Dog.vue')
      },
      {
        path: 'cat',
        name: 'cat',
        component: () => import( '../views/Cat.vue')
      },
      {
        path: 'mini',
        name: 'mini',
        component: () => import( '../views/Mini.vue')
      },
      {
        path: 'water',
        name: 'water',
        component: () => import('../views/Water.vue')
      }

  ]},
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('../views/shopcart.vue')
  }
  ,
  {
    path: '/loginregist',
    name: 'loginregist',
    redirect:'/loginregist/login',
    component: () => import('../views/loginregist.vue'),
    children:[
      {
        path:"login",
        component: () => import ('../components/loginregist/login.vue')
      },
      {
        path:"regist",
        component: () => import ('../components/loginregist/regist.vue')
      }
    ]
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: () => import('../views/Mypage.vue'),
    children:[
      {
        path: 'zhuye',
        component: () => import( '../components/usercenter/zhuye.vue')
      },
      {
        path: 'shequ',
        component: () => import( '../components/usercenter/shequ.vue')
      },
      {
        path: 'productall',
        name: 'Productall',
        component: () => import( '../components/usercenter/productall.vue')
      }

    ]
  },
  {
    path: '/gerenziliao',
    name: 'Gerenziliao',
    component: () => import( '../components/usercenter/gerenziliao.vue')
  }
  
]

let router = new VueRouter({
  routes
})

export default router
