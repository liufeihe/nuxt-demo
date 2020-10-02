import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8082',
//   withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // req
})

service.interceptors.request.use(
  config => {
    // do something before request is sent
    let token
    if (process.client) {
      token = localStorage.getItem('lb-user-token')
      if (token) {
        config.headers['Authorization'] = token
      }
    }
    
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    
    if (error.response) {
      const { status: code, data: res } = error.response
      console.log(code, res)

      if (code !== 200) {
        let message = res.msg || '错误'
        if (code === 404) {
          message = '功能尚未实现！'
        } else if (code === 403) {
          message = '无权操作！'
        }

        if (code === 401) {
          message = '您已退出！您可以直接离开该页面，或者重新登录。'
        }
        if (message) {
          console.log(message)
        }
        return Promise.reject(new Error(message))
      } else {
        return res
      }
    }
    let message = error.message || '请求失败！'
    if (message.match(/timeout/)) {
      message = '请求超时（10秒）！'
    }
    if (message) {
        console.log(message)
    }
    return Promise.reject(new Error(message))
  }
)


export default service