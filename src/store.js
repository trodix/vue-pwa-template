import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    app
  }
})
