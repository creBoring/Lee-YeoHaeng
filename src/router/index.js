import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import AppPage from '@/components/AppPage'

Vue.use(Router)

const routes = [
  {
    name: 'LoginPage',
    path: '/',
    component: LoginPage
  },
  {
    name: 'AppPage',
    path: '/app',
    component: AppPage
  }
]

export default new Router({
  mode: 'history',
  routes
})
