import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/home',
    name: 'home',
    component: function () {
      return import('../views/home.vue')
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
