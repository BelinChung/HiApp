import axios from 'axios'
import * as types from './mutation-types'

export function getLoginUser({commit}) {
  axios.get('/user_login.json').then(res => {
    const user = res.data.user
    commit(types.INIT_USER_INFO, {
      user
    })
  })
}

export function getContacts({commit}) {
  axios.get('/contacts.json').then(res => {
    const contacts = res.data
    commit(types.INIT_CONTACTS, {
      contacts
    })
  })
}

export function initTimeline({commit}, timeline) {
  commit(types.INIT_TIMETIME, {
    timeline
  })
}

export function infiniteTimeline({commit}, timeline) {
  commit(types.APPEND_TIMETIME, {
    timeline
  })
}

export function refreshTimeline({commit}, timeline) {
  commit(types.PREPEND_TIMETIME, {
    timeline
  })
}

export function updateTimeline({commit}, { mid, type }) {
  commit(types.UPDATE_TIMETIME, {
    mid,
    type
  })
}

export function updatePopup({commit}, { key, value }) {
  commit(types.UPDATE_POPUP, {
    key,
    value
  })
}
