import axios from 'axios'
import { Message, Loading } from 'element-ui'
import { message } from './message'
import Vue from 'vue'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// 添加请求拦截器
let loading
service.interceptors.request.use(function (config) {
  loading = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  // 在发送请求之前做些什么

  // if (token) {
  //   config.headers.authorization = 'Bearer ' + token
  // }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  // console.log(response)
  loading.close()
  const success = response.data.success
  const result = response.data.message
  if (success) {
    if (message.includes(result)) {
      Message({
        message: result,
        type: 'success',
        duration: 5 * 1000
      })
    }
    return response.data
  } else {
    return Promise.reject(new Error(Vue.prototype.$message.error(response.data.message)))
  }
}, function (error) {
  // 对响应错误做点什么
  loading.close()
  console.dir(error)
  if (error.response) {
    // if (error.response.data.code === 10002) {
    //   store.commit('user/logout')
    //   router.push({
    //     path: '/login',
    //     query: {
    //       // return_url: store.state.user.userRoute 取出vuex中的值来传参
    //       redirect: location.hash.substring(1) // 采用location.hash获取地址栏全部信息在截取#后面的内容
    //     }
    //   })
    // }
  }
  // console.log(location.hash.substring(1))
  Vue.prototype.$message.error(error.message)
  return Promise.reject(error)
})

export default service
