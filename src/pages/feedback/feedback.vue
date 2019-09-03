<template>
  <f7-page class="feedback-page">
    <f7-navbar :title="$t('app.feedback')" :back-link="$t('app.back')">
      <f7-nav-right>
        <f7-link :text="$t('app.send')" @click="sendFeedback"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <editor :placeholder="$t('feedback.placeholder')" @text:change="editorTextChange" enableTools="emotion"></editor>
  </f7-page>
</template>

<script>
import Editor from '@/components/editor'

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
    sendFeedback() {
      $$.alert(this.$t('feedback.result'))
    }
  },
  components: {
    Editor
  }
}
</script>
