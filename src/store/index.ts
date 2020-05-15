import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/index'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  getters
})
