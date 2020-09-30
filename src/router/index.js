import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import echarts from '@/views/echarts'
// import cound from '@/views/echarts/cound.vue'
import models from './models/index.js'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  // base: 'view',
  routes: [
    {
      path: '/',
      redirect: {name: 'home'},
      component: () => import('@/views/layout/index'),
      children: models
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({name: '404'})
  } else {
    next()
  }
})

export default router
