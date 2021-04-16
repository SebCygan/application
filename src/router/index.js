import Vue from 'vue'
import Router from 'vue-router'
import auth from '../auth.js'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Support from '../views/Support.vue'
import Resources from '../views/Resources.vue'
import Emergency from '../views/Emergency.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/resources', component: Resources },
    { path: '/emergency', component: Emergency },
    { path: '/support', component: Support, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}