import axios from 'axios'

const DEV_BASE_URL = 'http://127.0.0.1:4000'
const PROD_BASE_URL = 'https://raw.githubusercontent.com/BelinChung/HiApp/master/mock_api'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? PROD_BASE_URL : DEV_BASE_URL

// Add a request interceptor
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(response => {
  let data = response.data
  return !data.err_code ? data : Promise.reject(data)
}, error => {
  return Promise.reject(error)
})
