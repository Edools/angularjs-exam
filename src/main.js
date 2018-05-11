// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

const TOKEN = '06a8e7ebfe3cb1c6d316edfc87a274ab:c42214a737df45d82aa274247841204d'

axios.defaults.baseURL = 'https://core.myedools.info'
axios.defaults.headers.common['Authorization'] = `Token token=${TOKEN}`

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
