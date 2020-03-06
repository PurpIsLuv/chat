import Vue from 'vue'
import Vuex from 'vuex'

import '../assets/scss/main.scss'

import Sign from './Sign'
import Message from './Message'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Sign,
    Message,
  },
})
