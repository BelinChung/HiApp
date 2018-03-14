import Vue from 'vue'
import * as types from './mutation-types'
import find from 'lodash/find'

export default {
  [types.INIT_USER_INFO] (state, { user }) {
    Vue.set(state, 'user', user)
  },
  [types.INIT_CONTACTS] (state, { contacts }) {
    Vue.set(state, 'contacts', contacts)
  },
  [types.INIT_TIMETIME](state, { timeline }) {
    Vue.set(state, 'timeline', timeline)
  },
  [types.APPEND_TIMETIME](state, { timeline }) {
    Vue.set(state, 'timeline', [...state.timeline, ...timeline])
  },
  [types.PREPEND_TIMETIME](state, { timeline }) {
    Vue.set(state, 'timeline', [...timeline, ...state.timeline])
  },
  [types.UPDATE_TIMETIME] (state, { mid, type }) {
    let item = find(state.timeline, p => p.id === mid)
    const update = {}
    switch (type) {
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
  },
  [types.UPDATE_POPUP] (state, { key, value }) {
    Vue.set(state.popup, key, value)
  }
}
