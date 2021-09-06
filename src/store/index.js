import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderListHeight: 0,
    goodsListHeight: 0,
    paginationNative: 1,
    paginationStatus: false,
  },
  mutations: {
    setOrderListHeight(state, payload) {
      state.orderListHeight = payload.height;
    },
    setGoodsListHeight(state, payload) {
      state.goodsListHeight = payload.height;
    },
    setPaginationNative(state, payload) {
      state.paginationNative = payload.page;
    },
    setPaginationStatus(state, payload) {
      state.paginationStatus = payload.status;
    },
  },
  actions: {
  },
  modules: {
  }
})
