import Vue from 'vue'
import VueRouter from 'vue-router'

import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import MainPage from '../views/MainPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/MainPage/:login',
    name: 'MainPage',
    component: MainPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
