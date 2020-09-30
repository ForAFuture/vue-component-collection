// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/index.js'
import './assets/css/element-variables.scss'
import './assets/css/index.css'
import store from '@/store'
import contTitle from '@/components/contTitle'
import VuePreview from 'vue-preview'
import echarts from 'echarts'
import vChart from 'vue-echarts'

// defalut install
Vue.use(VuePreview)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)

Vue.component('contTitle', contTitle)
Vue.component('vChart', vChart)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
