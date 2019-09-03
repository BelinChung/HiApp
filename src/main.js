// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

// Import F7 Styles
import 'framework7/css/framework7.bundle.css'

// Import App Custom Styles
import './assets/fonts/iconfont.css'
import './assets/styles/app.less'

// Import App Component
import App from './app'

// Import Vuex store
import store from './store'
import { getLoginUser } from './store/actions'

// import network framework
import './network'

// import i18n support
import i18n from './i18n'

// Init F7 Vue Plugin
Framework7.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  store,
  i18n,
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  }
})

getLoginUser(store)
