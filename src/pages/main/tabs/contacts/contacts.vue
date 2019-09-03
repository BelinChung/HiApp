<template>
  <f7-page class="contacts-view">
    <f7-searchbar
      search-container="#search-list"
      :disable-link-text="$t('app.cancel')"
      :placeholder="$t('contacts.placeholder')"
      :clear-button="true"
    ></f7-searchbar>

    <f7-list contacts-list id="search-list" class="searchbar-found">
      <f7-list-group v-for="(group, key) in contactGroups" :key="key">
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
    <f7-list class="searchbar-not-found">
      <div class="empty-content">
        <i class="iconfont icon-wujieguoyangshi"></i>
        <div class="text">{{$t('contacts.empty')}}</div>
      </div>
    </f7-list>
  </f7-page>
</template>

<style lang="less">
.contacts-view {
  .searchbar{
    top: 44px;
  }
  .contacts-list {
    margin: 20px 0;
    padding-top: 44px;
    .list-group-title {
      line-height: 25px;
      background: #f7f7f7;
      color: #8e8e93;
      font-weight: normal !important;
      font-size: 14px;
    }
    .item-media {
      > img {
        width: 35px;
        height: 35px;
      }
    }
  }
}
.md {
  .contacts-view {
    .searchbar {
      display: none;
    }
    .contacts-list {
      padding-top: 0;
    }
  }
}
</style>

<script>
import groupBy from 'lodash/groupBy'
import { mapState } from 'vuex'
import { getRemoteAvatar } from '@/utils/appFunc'

export default {
  computed: {
    ...mapState({
      contacts: state => state.contacts
    }),
    contactGroups() {
      return groupBy(this.contacts, 'header')
    }
  },
  mounted() {
    this.$store.dispatch('getContacts')
  },
  methods: {
    getAvatarMedia(id) {
      return getRemoteAvatar(id)
    },
    getLink(name) {
      return `/message/?nickname=${name}`
    }
  }
}
</script>
