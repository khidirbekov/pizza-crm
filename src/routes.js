import Vue from 'vue'
import Router from 'vue-router'
import cities from '@/modules/cities/routes'
import orders from '@/modules/orders/routes'
import pizzas from '@/modules/pizzas/routes'
import pizzerias from '@/modules/pizzerias/routes'
import users from '@/modules/users/routes'

Vue.use(Router)

const constantRouterMap = [
  // {
  //   path: '/login',
  //   component: ,
  //   hidden: true
  // },
  // {
  //   path: '/',
  //   redirect: '/pizzas'
  // },
  // {
  //   path: '/401',
  //   component: _import('401')
  // }
]


const routes = [
  ...constantRouterMap,
  ...cities,
  ...orders,
  ...pizzas,
  ...pizzerias,
  ...users
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

