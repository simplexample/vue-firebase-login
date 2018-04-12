import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Welcome from '@/components/Welcome'
import AnotherPage from '@/components/AnotherPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: { requiresAuth: true }
    },
    {
      path: '/another-page',
      name: 'another-page',
      component: AnotherPage,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('welcome')
  else next()
})

export default router
