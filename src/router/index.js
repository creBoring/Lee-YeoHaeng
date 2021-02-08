import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

const routes = [
  {
    name: 'LoginPage',
    path: '/',
    component: LoginPage
  }
]

export default new Router({ routes })
