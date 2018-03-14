// Ponyfill
import 'es6-object-assign/auto'
import 'es6-promise/auto'

// Import Vue
import Vue from 'vue'

// Import F7, F7-Vue
import Framework7 from 'framework7/dist/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'

// Import F7 Styles
import 'framework7/dist/css/framework7.css'

// Import App Custom Styles
import './assets/fonts/iconfont.css'
import './assets/styles/app.less'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'

// Import Vuex store
import store from './store'
import { getLoginUser } from './store/actions'

// Init network framework
import './network'

// init i18n support
import i18n from './i18n'

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Init App
new Vue({
  el: '#app',
  store,
  i18n,
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'com.hiliaox.hiapp', // App bundle ID
    name: 'HiApp', // App name
    theme: 'ios', // set 'auto' to enable automatic theme detection
    // App routes
    routes: Routes,
    dialog: {
      title: i18n.t('app.modal.title'),
      buttonOk: i18n.t('app.modal.button_ok'),
      buttonCancel: i18n.t('app.cancel')
    }
  },
  // Register App Component
  components: {
    app: App
  }
})

getLoginUser(store)
