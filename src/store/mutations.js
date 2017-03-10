import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.INIT_USER_INFO] (state, { messages }) {
    Vue.set(state, 'user', messages)
  }
}