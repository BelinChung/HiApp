<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main color-theme="orange"></f7-view>

    <!-- Comment, publisher Popup -->
    <f7-popup :opened="publisherPopupOpened">
      <publisher-popup></publisher-popup>
    </f7-popup>
    <f7-popup :opened="commentPopupOpened">
      <comment-popup></comment-popup>
    </f7-popup>
  </div>
</template>

<script>
import PublisherPopup from './popup/publisher'
import CommentPopup from './popup/comment'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      publisherPopupOpened: state => state.popup.publisherOpened,
      commentPopupOpened: state => state.popup.commentOpened
    }),
  },
  components: {
    PublisherPopup,
    CommentPopup
  }
}
</script>
