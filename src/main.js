// Ponyfill
import 'es6-object-assign/auto'
import 'es6-promise/auto'

// Import Vue
import Vue from 'vue'

// Import F7, F7-Vue
import 'framework7'
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import 'framework7/dist/css/framework7.ios.min.css'
import 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

// Import App Custom Styles
import './assets/fonts/iconfont.css'
import './assets/styles/app.less'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'

// Import Vuex store
import store from './store'
import {getLoginUser} from './store/actions'

// Init network framework
import './network'

// Init Vue Plugin
Vue.use(Framework7Vue)

// Import language file
import VueI18n from 'vue-i18n'
import StoreCache from './utils/storeCache'
import enUS from './lang/en_us'
import zhCN from './lang/zh_cn'

let cache = new StoreCache('vuex')
Vue.use(VueI18n)
Vue.config.lang = cache.get('lang') || 'en'
Vue.locale('en', enUS)
Vue.locale('zh', zhCN)

// Init App
new Vue({
  el: '#app',
  store,
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    modalTitle: Vue.t('app.modal.title'),
    modalButtonOk: Vue.t('app.modal.button_ok'),
    modalButtonCancel: Vue.t('app.cancel'),
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
})

getLoginUser(store)
