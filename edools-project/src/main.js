import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import Vuetify from 'vuetify'

// Compatibilidade IE11 & Safari 9
import 'babel-polyfill'

// Stylus
import 'vuetify/dist/vuetify.min.css'

// Material Icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

export const AUTH_TOKEN = '06a8e7ebfe3cb1c6d316edfc87a274ab:c42214a737df45d82aa274247841204d'

axios.defaults.baseURL = 'https://core.myedools.info/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
axios.defaults.headers.common['Authorization'] = 'Token token=' + AUTH_TOKEN

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
