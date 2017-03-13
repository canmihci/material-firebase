
import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Dashboard from '@/components/Dashboard'
import * as firebase from 'firebase'
import firebaseApp from '../firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: SignIn,
      beforeEnter: (to, from, next) => {
        if (firebaseApp.auth().currentUser) {
          next('dashboard')
        } else {
          next()
        }
      }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
      beforeEnter: (to, from, next) => {
        if (firebaseApp.auth().currentUser) {
          next('dashboard')
        } else {
          next()
        }
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    router.replace('dashboard')
  } else {
    router.replace('/')
  }
})

// router.beforeEach((to, from, next) => {
//   console.log(x.auth().currentUser)
//   next()
// })

export default router
