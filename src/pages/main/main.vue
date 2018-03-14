<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left></f7-nav-left>
      <f7-nav-title>{{navbarTitle}}</f7-nav-title>
      <f7-nav-right>
        <f7-link open-popup="#publisherPopup" icon="iconfont icon-feedback3" icon-size="22" v-show="activedTab === 'home'"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar tabbar labels>
      <f7-link icon="iconfont icon-ios7homeoutline" :text="$t('app.home')" tab-link="#home" tab-link-active></f7-link>
      <f7-link icon="iconfont icon-ios7chatbubbleoutline" :text="$t('app.contacts')" tab-link="#contacts"></f7-link>
      <f7-link icon="iconfont icon-ios7gearoutline" :text="$t('app.settings')" tab-link="#settings"></f7-link>
    </f7-toolbar>
    <f7-tabs>
      <f7-tab id="home" tab-active @tab:show="tabActived('home')">
        aaaaaa
        <!-- <home-view></home-view>   -->
      </f7-tab>
      <f7-tab id="contacts" @tab:show="tabActived('contacts')">
        bbbbb
        <!-- <contacts-view></contacts-view> -->
      </f7-tab>
      <f7-tab id="settings" @tab:show="tabActived('settings')">
        <settings-view></settings-view>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
// import HomeView from './pages/home.vue'
// import ContactsView from './pages/contacts.vue'
import SettingsView from '@/pages/settings'
// import CommentPopup from './pages/comment.vue'
// import PublisherPopup from './pages/publisher.vue'

export default {
  data() {
    return {
      activedTab: 'home'
    }
  },
  computed: {
    navbarTitle() {
      switch (this.activedTab) {
        case 'home':
          return this.$t('app.app_name')
        case 'contacts':
          return this.$t('app.contacts')
        case 'settings':
          return this.$t('app.settings')
      }
    }
  },
  methods: {
    tabActived(tab) {
      this.activedTab = tab
    }
  },
  components: {
    SettingsView
  }
}
</script>
