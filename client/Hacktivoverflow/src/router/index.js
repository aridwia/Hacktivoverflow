import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import register from '@/components/register'
import Detailquestion from '@/components/Detailquestion'
import listquestion from '@/components/listquestion'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/index',
      component: Home,
      children: [
        {
          path: '',
          component: listquestion
        },
        {
          path: ':id',
          component: Detailquestion,
          props: true
        }
      ]
    }
  ]
})
