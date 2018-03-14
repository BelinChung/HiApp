<template>
  <f7-page class="language-page">
    <f7-navbar :title="$t('app.language')" :back-link="$t('app.back')">
      <f7-nav-right>
        <f7-link :text="$t('app.save')" @click="saveLang"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block-title>{{$t('app.language')}}</f7-block-title>
    <f7-list>
      <f7-list-item radio name="language-radio" value="enUS" title="English" :checked="lang === 'enUS'"></f7-list-item>
      <f7-list-item radio name="language-radio" value="zhCN" title="简体中文" :checked="lang === 'zhCN'"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import { getLangConfig, setLangConfig } from '@/i18n'

export default {
  data() {
    return {
      lang: 'enUS'
    }
  },
  created() {
    this.lang = getLangConfig()
  },
  methods: {
    saveLang() {
      const lang = this.$$('input[name="language-radio"]:checked').val()
      setLangConfig(lang)
    }
  }
}
</script>
