import Vue from 'vue'
import VueRouter from 'vue-router';
import Nav from '../views/Nav.vue';
import offside from '../views/offside.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Nav',
    component: Nav
  },
  {
    path: '/offside',
    name: 'offside',
    component: offside 
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',//配置成hash模式
  base: process.env.BASE_URL,
  routes
})
export default router
