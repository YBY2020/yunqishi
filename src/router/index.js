import Vue from 'vue'
import VueRouter from 'vue-router'
import MyTodo from '../views/MyTodo.vue'

Vue.use(VueRouter)

const routes = [
  /* 我的待办 */
  {
    path: '/',
    name: 'Mytodo',
    component: MyTodo
  },
  /* 数据统计 */
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  /* 设置 */
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
