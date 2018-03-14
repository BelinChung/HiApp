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

export function getTimeline({commit}, callback = () => {}) {
  axios.get('/timeline.json').then(res => {
    const timeline = res.data
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
