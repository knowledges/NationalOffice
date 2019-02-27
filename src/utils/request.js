import axios from 'axios'
import { getUser } from '@/config/info'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 25000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  /* TODO 这里要取具体的CODE 和 token */
  if (getUser()) {
    config.headers['userCode'] = getUser().userCode // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['authToken'] = getUser().authToken // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // console.log(response)
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (Number(res.code) !== 200) {
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (Number(res.code) === 401) {
        console.log('登出了')
        /* TODO 重新登录或者退到登录页 */
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
