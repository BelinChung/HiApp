import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import StoreCache from '../utils/storeCache'

Vue.use(Vuex)
let cache = new StoreCache('vuex')

const state = {
  user: {},
  lang: cache.get('lang') || 'en',
  contacts: [],
  timeline: [],
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})