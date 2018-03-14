<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main color-theme="orange"></f7-view>

    <!-- Comment, publisher Popup -->
    <!-- <comment-popup></comment-popup> -->
    <f7-popup :opened="publisherPopupOpened">
      <publisher-popup></publisher-popup>
    </f7-popup>
  </div>
</template>

<script>
import PublisherPopup from './popup/publisher'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      publisherPopupOpened: state => state.popup.publisherOpened
    }),
  },
  components: {
    PublisherPopup
  }
}
</script>
