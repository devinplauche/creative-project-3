import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Vue.config.productionTip =false
import mock from './mock-data.js'

let data = {
  cards: mock,
  deck: [],
  quantity: 0,

}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
