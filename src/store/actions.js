import axios from 'axios'
import * as types from './mutation-types'

export function getLoginUser({commit}) {
  axios.get('/user_login.json').then(res => {
    let user = res.data.user
    commit(types.INIT_USER_INFO, {
      user
    })
  })
}

export function setLang({ commit }, lang) {
  commit(types.UPDATE_LANG, lang)
}

export function getContacts({commit}) {
  axios.get('/contacts.json').then(res => {
    let contacts = res.data
    commit(types.INIT_CONTACTS, {
      contacts
    })
  })
}

export function getTimeline({commit}, callback = () => {}) {
  axios.get('/timeline.json').then(res => {
    let timeline = res.data
    commit(types.INIT_TIMETIME, {
      timeline
    })
    callback()
  })
}

export function updateTimeline({commit}, { mid, type }) {
  commit(types.UPDATE_TIMETIME, {
    mid,
    type
  })
}