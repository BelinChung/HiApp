import mainPage from './pages/main'
import aboutPage from './pages/about'
import feedbackPage from './pages/feedback'

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
  {
    path: '/feedback/',
    component: feedbackPage
  },
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
