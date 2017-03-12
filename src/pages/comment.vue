<template>
  <f7-popup id="commentPopup">
    <f7-page navbar-fixed>
      <f7-navbar theme="white">
        <f7-nav-left>
          <f7-link :text="$t('app.close')" close-popup></f7-link>
        </f7-nav-left>
        <f7-nav-center :title="$t('tweet.comment')"></f7-nav-center>
        <f7-nav-right>
          <f7-link :text="$t('app.send')" @click="sendComment"></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <editor :placeholder="$t('comment.placeholder')" @text:change="editorTextChange" enableTools="emotion,at"></editor>
    </f7-page>
  </f7-popup>
</template>

<script>
import Editor from '../components/editor.vue'
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    editorTextChange(text) {
      this.text = text
    },
    sendComment() {
      this.$f7.showPreloader(this.$t('app.submitting'))
      setTimeout(_ => {
        this.$f7.hidePreloader()
        this.$f7.closeModal('#commentPopup')
      }, 1500)
    }
  },
  components: {
    Editor
  }
}
</script>