import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import { VFileInput } from 'vuetify/lib'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../views/register.vue')
    }
  },
  {
    path: '/forgetpass',
    name: 'forgetpass',
    component: function () {
      return import('../views/forgetpass.vue')
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
  }
]

const router = new VueRouter({
  routes
})

export default router
