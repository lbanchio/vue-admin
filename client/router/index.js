import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: require('../views/Home')
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: require('../views/dashboard/index.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
