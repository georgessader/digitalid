import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../views/register.vue')
    }
  },
  {
    path: '/continueprofile',
    name: 'continueprofile',
    component: function () {
      return import('../views/continueprofile.vue')
    }
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    component: function () {
      return import('../views/forgetpassword.vue')
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: function () {
      return import('../views/profile.vue')
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: function () {
      return import('../views/logout.vue')
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: function () {
      return import('../views/dashboard.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
