import Vue from 'Vue'
import Vuex from 'Vuex'
import base from './modules/base'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    base
  },
  getters
})

export default store

