import Vue from 'vue'
import * as types from './mutation-types'
import StoreCache from '../utils/storeCache'
import find from 'lodash/find'

let cache = new StoreCache('vuex')

export default {
  [types.INIT_USER_INFO] (state, { user }) {
    Vue.set(state, 'user', user)
  },
  [types.UPDATE_LANG] (state, lang) {
    Vue.set(state, 'lang', lang)
    cache.set('lang', lang)
  },
  [types.INIT_CONTACTS] (state, { contacts }) {
    Vue.set(state, 'contacts', contacts)
  },
  [types.INIT_TIMETIME] (state, { timeline }) {
    Vue.set(state, 'timeline', timeline)
  },
  [types.UPDATE_TIMETIME] (state, { mid, type }) {
    let item = find(state.timeline, p => p.id === mid)
    let update = {}
    switch(type) {
    case 'like':
      update.like_count = item.like_count + 1
      update.liked = true
      break
    case 'unlike':
      update.like_count = item.like_count - 1
      update.liked = false
      break
    }
    // Yes, Object.assign can update state and UI component at same time.
    item = Object.assign(item, update)
  }
}