import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderListHeight: 0,
  },
  mutations: {
    setOrderListHeight(state, payload) {
      state.orderListHeight = payload.height
    }
  },
  actions: {
  },
  modules: {
  }
})
