import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/anency',
      component:() => import('../views/anency.vue')
    },
    {
      path:'/searchpage',
      name:"searchpage",
      component:() => import('../components/anency/searchpage.vue')
    },
    {
      path: '/small',
      component: () => import('../components/anency/small.vue')
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
      },
      {
        path:'gouwu',
        name:'gouwu',
        component: () => import( '../views/gouwu.vue')
      },
      {
        path: 'productall',
        name: 'Productall',
        component: () => import( '../components/usercenter/productall.vue')
        // ,
        // beforeEnter: (to, from, next) => {
        //     if(from.path == '/gouwu'){
        //       this.$router.go(-1);
        //     }else {
        //       next()
        //     }
        // }
      }

  ]},
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('../views/shopcart.vue'),
    redirect:'/shopcart/carttable',
    children:[
      {
        path:'order',
        name:'order',
        component:() => import('../components/shopcart/order.vue')
      },
      {
        path:'carttable',
        name:'carttable',
        component:() => import('../components/shopcart/shoptable.vue')
      }
    ]
  },
  
  
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
    redirect:'/mypage/zhuye',
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
      },
      {
        path: 'gerenziliao',
        name: 'Gerenziliao',
        component: () => import( '../components/usercenter/gerenziliao.vue')
      }

    ]
  }
  
  
  
]

let router = new VueRouter({
  routes
})

export default router
