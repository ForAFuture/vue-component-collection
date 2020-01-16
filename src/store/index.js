import Vue from 'vue'
import Vuex from 'vuex'
import moduleApp from './module/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: moduleApp
  }
})
export default store
