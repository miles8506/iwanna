import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//jquery
import $ from 'jquery'
Vue.prototype.$ = $

Vue.config.productionTip = false

// bus
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
