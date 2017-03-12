<template>
  <f7-page class="language-page">
    <f7-navbar :title="$t('app.language')" :back-link="$t('app.back')" sliding>
      <f7-nav-right>
        <f7-link :text="$t('app.save')" @click="saveLang"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-list form>
      <f7-list-item radio name="language-radio" value="en" title="English" :checked="lang === 'en'"></f7-list-item>
      <f7-list-item radio name="language-radio" value="zh" title="简体中文" :checked="lang === 'zh'"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      lang: state => state.lang,
    })
  },
  methods: {
    saveLang() {
      let lang = this.$$('input[name="language-radio"]:checked').val()
      Vue.config.lang = lang
      this.$store.dispatch('setLang', lang)
    }
  }
}
</script>