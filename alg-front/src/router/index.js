import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/shopcart',
    name: 'shopcart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/shopcart/shopcart.vue')
  }
  ,
  {
    path: '/loginregist',
    name: 'loginregist',
    redirect:'/loginregist/login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/loginregist/loginregist.vue'),
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
  }
]

let router = new VueRouter({
  routes
})

export default router
