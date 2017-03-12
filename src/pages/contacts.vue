<template>
    <div class="contacts-view">
      <f7-list contacts>
        <f7-list-group v-for="(group, key) in contacts" :key="key">
          <f7-list-item :title="key" group-title></f7-list-item>
          <f7-list-item v-for="contact in group" 
            :link="getLink(contact.nickname)"
            :key="contact.nickname" 
            :title="contact.nickname" 
            :after="contact.location"
            :media="getAvatarMedia(contact.avatar)"
          ></f7-list-item>
        </f7-list-group>
      </f7-list>
    </div>
</template>

<style lang="less">
.contacts-view{
  .contacts-block{
    margin: 20px 0;
    .list-group-title{
      line-height: 25px;
      height: 25px;
      background: #f7f7f7;
      color: #8e8e93;
      font-weight: normal !important;
      font-size: 14px;
    }
    .item-media{
      > img {
        width: 35px;
        height: 35px;
      }
    }
  }
} 
</style>

<script>
import {mapState} from 'vuex'
import groupBy from 'lodash/groupBy'
import {getRemoteAvatar} from '../utils/appFunc'
export default {
  computed: {
    ...mapState({
      contacts: state => groupBy(state.contacts, 'header'),
    })
  },
  mounted() {
    this.$store.dispatch('getContacts')
  },
  methods: {
    getAvatarMedia(id) {
      return `<img class='avatar' src='${getRemoteAvatar(id)}' />`
    },
    getLink(name) {
      return `/message/?nickname=${name}`
    }
  }
}
</script>