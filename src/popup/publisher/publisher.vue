<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link :text="$t('app.close')" @click="closePopup"></f7-link>
      </f7-nav-left>
      <f7-nav-title :title="$t('publisher.publisher')"></f7-nav-title>
      <f7-nav-right>
        <f7-link :text="$t('app.send')" @click="sendTweet"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <editor :placeholder="$t('publisher.placeholder')" @text:change="editorTextChange"></editor>
  </f7-page>
</template>

<script>
import Editor from '@/components/editor'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions([
      'updatePopup'
    ]),
    editorTextChange(text) {
      this.text = text
    },
    sendTweet() {
      this.$f7.preloader.show(this.$t('app.submitting'))
      setTimeout(_ => {
        this.$f7.preloader.hide()
        this.closePopup()
      }, 1500)
    },
    closePopup() {
      this.updatePopup({
        key: 'publisherOpened',
        value: false
      })
    }
  },
  components: {
    Editor
  }
}
</script>
