// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/index.js'
import './assets/css/element-variables.scss'
import './assets/css/index.css'
import 'echarts/theme/macarons.js'
import store from '@/store'
import contTitle from '@/components/contTitle'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.component('contTitle', contTitle)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
