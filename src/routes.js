import mainPage from './pages/main'
import aboutPage from './pages/about'

export default [
  {
    path: '/',
    component: mainPage,
  },
  // {
  //   path: '/profile/',
  //   component: require('./pages/profile.vue')
  // },
  // {
  //   path: '/language/',
  //   component: require('./pages/language.vue')
  // },
  // {
  //   path: '/feedback/',
  //   component: require('./pages/feedback.vue')
  // },
  {
    path: '/about/',
    component: aboutPage
  },
  // {
  //   path: '/message/',
  //   component: require('./pages/message.vue')
  // },
  // {
  //   path: '/post/',
  //   component: require('./pages/post.vue')
  // }
]
