import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

// Stylus
import 'vuetify/dist/vuetify.min.css'

// COMPONENTS
import Feature from './components/feature/Feature'
import Welcome from './components/welcome/Welcome'

// Compatibility IE11 & Safari 9
import 'babel-polyfill'

// Material Icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('v-feature', Feature)
Vue.component('v-welcome', Welcome)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
