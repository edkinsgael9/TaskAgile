import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'
import HomePage from '@/views/HomePage'
import BoardPage from '@/views/BoardPage'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: HomePage
}, {
  path: '/login',
  name: 'login',
  component: LoginPage
}, {
  path: '/register',
  name: 'register',
  component: RegisterPage
}, {
  path: '/board/:boardId',
  name: 'board',
  component: BoardPage
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
