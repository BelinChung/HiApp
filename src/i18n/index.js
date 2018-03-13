import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enUS from './lang/en_us'
import zhCN from './lang/zh_cn'
// import zhTW from './lang/zh_tw'
import StoreCache from '@/utils/storeCache'

Vue.use(VueI18n)
const SCache = new StoreCache('hi')

export function getLangConfig() {
  const simplifiedChinese = ['zh', 'zh-cn']
  const traditionalChinese = ['zh-tw', 'zh-hk']
  let browserLang = navigator.userLanguage || window.navigator.language
  browserLang = browserLang.toLowerCase()
  return SCache.get('customLang') || (~simplifiedChinese.indexOf(browserLang) ? 'zhCN' : ~traditionalChinese.indexOf(browserLang) ? 'zhTW' : 'enUS')
}

export function setLangConfig(lang) {
  SCache.set('customLang', lang)
  i18n.locale = lang
}

const messages = {
  enUS,
  zhCN
}

const i18n = new VueI18n({
  locale: getLangConfig(),
  messages,
  fallbackLocale: 'zhCN'
})

export default i18n
