import axios from 'axios'
import * as types from './mutation-types'

export function getLoginUser({commit}) {
  axios.get('/user_login.json').then(res => {
    let messages = res.data.user
    commit(types.INIT_USER_INFO, {
      messages
    })
  })
}