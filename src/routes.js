import mainPage from './pages/main'
import aboutPage from './pages/about'
import feedbackPage from './pages/feedback'
import languagePage from './pages/language'
import profilePage from './pages/profile'

export default [
  {
    path: '/',
    component: mainPage,
  },
  {
    path: '/profile/',
    component: profilePage
  },
  {
    path: '/language/',
    component: languagePage
  },
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
